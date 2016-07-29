const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const NgAnnotatePlugin = require('ng-annotate-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin({ filename: 'styles/vendor.[hash].css' });
const extractSCSS = new ExtractTextPlugin({ filename: 'styles/app.[hash].css' });

module.exports = {
  entry: {
    client: './src/app.js',
    common: ['angular', 'angular-ui-router', 'angular-animate', 'angular-aria', 'angular-material'],
  },
  output: {
    /**
     * The output directory as absolute path (required).
     *
     * See: http://webpack.github.io/docs/configuration.html#output-path
     */
    path: './build/',
    /**
     * Specifies the name of each output file on disk.
     *
     * See: http://webpack.github.io/docs/configuration.html#output-filename
     */
    filename: 'js/[name].[hash].js',
    /**
     * The filename of the SourceMaps for the JavaScript files.
     * They are inside the output.path directory.
     *
     * See: http://webpack.github.io/docs/configuration.html#output-sourcemapfilename
     */
    sourceMapFilename: 'js/[name].[hash].map',
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['', '.js'],
  },
  target: 'web',
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: extractSCSS.extract([
          { loader: 'css-loader', query: { sourceMap: true } },
          { loader: 'sass-loader', query: { sourceMap: true } },
        ]),
      },
      {
        test: /\.css$/,
        loader: extractCSS.extract([
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
        loader: 'url',
        query: {
          limit: 65000,
          name: 'fonts/[name].[hash].[ext]',
          minetype: 'application/vnd.ms-fontobject',
        },
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url',
        query: {
          limit: 65000,
          name: 'fonts/[name].[hash].[ext]',
          mimetype: 'application/font-woff',
        },
      },
      {
        test: /\.ttf$/,
        loader: 'url',
        query: {
          limit: 65000,
          name: 'fonts/[name].[hash].[ext]',
          minetype: 'application/x-font-ttf',
        },
      },
      {
        test: /\.svg$/,
        loader: 'url',
        query: { limit: 10000, minetype: 'image/svg+xml' },
      },
      {
        test: /\.html$/,
        loader: 'raw',
      },
    ],
  },
  plugins: [
    /**
     * Register extract CSS and SCSS plugins,
     * Assume that application style will be written on sass
     * Vandor CSS like ui-grid will be linked as CSS
     */
    extractCSS,
    extractSCSS,
    /**
     * Angular annotate for dependancy injection.
     * ngAnnotate automaticly add annonations in $inject
     */
    new NgAnnotatePlugin({
      add: true,
    }),
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
    /**
     * All modules from common entry will be extracted, also
     * If module is shared by 2 childrens it will get extracted to commons.
     *
     * See: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
     */
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: 2,
      filename: 'js/common.[hash].js',
    }),
  ],
  cache: true,
  devtool: 'inline-source-map',
};
