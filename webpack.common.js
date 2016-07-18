const HtmlWebpackPlugin = require('html-webpack-plugin');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin({ filename: 'styles/vendor.css' });
const extractSCSS = new ExtractTextPlugin({ filename: 'styles/app.css' });

module.exports = {
  entry: {
    client: './src/app.js',
  },
  output: {
    path: './build',
    filename: 'client.js',
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
     * Register extract CSS and SCSS plugins
     */
    extractCSS,
    extractSCSS,
    /**
     * Angular annotate dependancy injection.
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
  ],
  cache: true,
  devtool: 'eval-source-map',
};
