const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const extractCSS  = new ExtractTextPlugin({
  filename: 'css-extracted.[hash].css'
});
const extractSCSS = new ExtractTextPlugin({
  filename: 'scss-extracted.[hash].css'
});


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
     * Angualar Application main entry point
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
    * An array of extensions that should be automaticly used to resolve modules.
    *
    * @see: https://webpack.js.org/configuration/resolve/#resolve-extensions
    */
    extensions: ['.js', '.ts'],
  },
  target: 'web',
  module: {
    loaders: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        query: {
          transpileOnly: false,
          sourceMap: true,
        }
      },
      {
        test: /\.component.scss$/,
        use: [
          {loader: 'raw-loader'},
          {loader: 'sass-loader'}
        ]
      },
      {
        test: /\.scss$/,
        exclude: /\.component.scss$/,
        use: extractSCSS.extract({
          use: [
            {loader: "css-loader"},
            {loader: "sass-loader"}
          ],
          fallback: "style-loader"
        })
      },
      {
        test: /\.css$/,
        use: extractCSS.extract({
          use: [
            {loader: "css-loader"}
          ],
          fallback: "style-loader",
        })
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
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
    ],
  },
  plugins: [
    /**
     * Plugin: ExtractTextPlugin
     *
     * @see
     */
    extractCSS, extractSCSS,
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
     * HtmlWebpackPlugin configuration
     *
     * @see https://webpack.js.org/plugins/html-webpack-plugin/
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
     * @see: https://webpack.js.org/plugins/commons-chunk-plugin/
    */
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: 2,
      filename: 'common.[hash].js',
    }),
  ],
};
