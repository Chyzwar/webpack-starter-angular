const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin({ filename: 'styles/vendor.[hash].css' });
const extractSCSS = new ExtractTextPlugin({ filename: 'styles/app.[hash].css' });

module.exports = {
  entry: {
    client: './src/app.js',
    vendor: ['angular', 'angular-animate', 'angular-aria', 'angular-material', 'moment'],
  },
  output: {
    path: './build',
    filename: 'js/[name].[hash].js',
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
          { loader: 'css-loader', query: { sourceMap: true } },
        ]),
      },
      {
        test: /\.eot$/,
        loader: 'file',
      },
      {
        test: /\.woff2$/,
        loader: 'url',
        query: { limit: 10000, mimetype: 'application/font-woff' },
      },
      {
        test: /\.woff$/,
        loader: 'url',
        query: { limit: 10000, mimetype: 'application/font-woff' },
      },
      {
        test: /\.ttf$/,
        loader: 'url',
        query: { limit: 10000, minetype: 'application/octet-stream' },
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
    new ngAnnotatePlugin({
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
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
      },
    }),
    /**
     * Create common chunk for vendor src.
     */
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/vendor.[hash].js'
    }),
  ],
  cache: true,
  devtool: 'eval-source-map',
};
