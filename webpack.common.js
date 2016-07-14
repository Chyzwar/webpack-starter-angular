const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    client: './src/app.js',
  },
  output: {
    path: './build/',
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
        loaders: [
          { loader: 'style-loader' },
          { loader: 'css-loader', query: { modules: true } },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.css$/,
        loaders: [
          { loader: 'style-loader' },
          { loader: 'css-loader', query: { modules: true } },
        ],
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
      {
        test: /\.jade$/,
        loader: 'jade-loader',
      },
    ],
  },
  plugins: [
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
