const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const extractApp = new ExtractTextPlugin({ filename: 'app.[hash].css' });
const extractVendor = new ExtractTextPlugin({ filename: 'vendor.[hash].css' });

module.exports = {
  /**
   * The point or points to enter the application.
   *
   * @see https://webpack.js.org/configuration/entry-context/#entry
   */
  entry: {
    /**
     * Polyfills for browser and angular
     */
    polyfills: './src/polyfills.ts',
    /**
     * Angualar Application entry point
     */
    main: './src/main.jit.ts'
  },
  output: {
    /**
     * The output directory as absolute path (required).
     *
     * @see: https://webpack.js.org/configuration/output/#output-path
     */
    path: path.resolve('build'),
    /**
     * Specifies the name of each output file on disk.
     *
     * @see: https://webpack.js.org/configuration/output/#output-filename
     */
    filename: '[name].[hash].js',
    /**
     * Configure how source maps are named
     *
     * @see: https://webpack.js.org/configuration/output/#output-sourcemapfilename
     */
    sourceMapFilename: '[name].[hash].map',
  },
  resolve: {
    /**
     * Roots for module resolution
     *
     * @see: https://webpack.js.org/configuration/resolve/#resolve-modules
     */
    modules: [
      path.resolve('node_modules'),
      path.resolve('src'),
    ],

    /**
    * An array of extensions that should be used to resolve modules.
    *
    * @see: https://webpack.js.org/configuration/resolve/#resolve-extensions
    */
    extensions: ['.js', '.ts', '.json'],
  },
  target: 'web',
  module: {
    loaders: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        query: {
          transpileOnly: true,
        }
      },
      {
        test: /\.scss$/,
        loader: extractApp.extract([
          { loader: 'css-loader', query: { sourceMap: true } },
          { loader: 'sass-loader', query: { sourceMap: true } },
        ]),
      },
      {
        test: /\.css$/,
        loader: extractVendor.extract([
          { loader: 'css-loader',
            query: {
              sourceMap: true,
              minimize: true,
            },
          },
        ]),
      },
      {
        test: /\.eot$/,
        loader: 'url-loader',
        query: {
          limit: 65000,
          name: '[name].[hash].[ext]',
          minetype: 'application/vnd.ms-fontobject',
        },
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader',
        query: {
          limit: 65000,
          name: '[name].[hash].[ext]',
          mimetype: 'application/font-woff',
        },
      },
      {
        test: /\.ttf$/,
        loader: 'url-loader',
        query: {
          limit: 65000,
          name: '[name].[hash].[ext]',
          minetype: 'application/x-font-ttf',
        },
      },
      {
        test: /\.svg$/,
        loader: 'url-loader',
        query: { limit: 10000, minetype: 'image/svg+xml' },
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
      },
    ],
  },
  plugins: [
    /**
     * Angular workaround using ContextReplacementPlugin
     *
     * @issue: https://github.com/angular/angular/issues/11580
     */
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve('src')
    ),
    /**
    * Plugin: CopyWebpackPlugin
    * Description: Copy files and directories in webpack.
    *
    * Copies project static assets.
    *
    * See: https://www.npmjs.com/package/copy-webpack-plugin
    */
    new CopyWebpackPlugin([
      { from: 'src/assets', to: 'assets' },
    ]),
    /**
     * Register extract CSS and SCSS plugins,
     * Assume that application style will be written on sass
     * Vandor CSS like ui-grid will be linked as CSS
     */
    extractApp,
    extractVendor,

    /**
     * HtmlWebpackPlugin configuration
     */
    new HtmlWebpackPlugin({
      title: 'Webpack Starter Angular',
      template: 'src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: false,
        removeScriptTypeAttributes: false,
        removeStyleLinkTypeAttributes: false,
      },
    }),
    /*
     * All modules from common entry will be extracted, also
     * If module is shared by 2 childrens it will get extracted to commons.
     *
     * See: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
    */
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: 2,
      filename: 'common.[hash].js',
    }),
  ],
};
