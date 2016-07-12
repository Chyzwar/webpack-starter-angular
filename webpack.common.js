const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


export default const client = {
  entry: {
    client: './src/app.js'
  },
  output: {
    path: './build/',
    filename: 'client.js'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['', '.js']
  },
  target: 'web',
  module: {
    loaders: [
    {
      test: /\.css$/,
      loaders: [
        { loader: "style-loader" },
        { loader: "css-loader", query: { modules: true } },
        { loader: "sass-loader" }
      ]
    },
    {
      test: /\.html$/,
      loader: 'raw'
    },
    {
      test: /\.jade$/,
      loader: 'jade-loader'
    }
    ]
  },
  cache: true,
  devtool: 'eval-source-map'
};


// module.exports = {
//   entry: './src/app.js',
//   output: {
//     path: path.join(__dirname, '..', 'dist'),
//     filename: 'bundle.js'
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: 'Webpack Starter Angular - kitconcept',
//       template: 'src/index.html',
//       minify: {
//         collapseWhitespace: true,
//         removeComments: true,
//         removeRedundantAttributes: true,
//         removeScriptTypeAttributes: true,
//         removeStyleLinkTypeAttributes: true
//       }
//     })
//   ],
//   module: {
//     loaders: [
//       { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
//       { test: /\.css$/, loader: 'style-loader!css-loader' },
//       { test: /\.scss$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap']},
//       { test: /\.html$/, loader: 'raw' },
//       { test: /\.jade$/, loader: 'jade-loader' },
//       // inline base64 URLs for <=8k images, direct URLs for the rest
//       { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
//       // helps to load bootstrap's css.
//       { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
//         loader: 'url?limit=10000&minetype=application/font-woff' },
//       { test: /\.woff2$/,
//         loader: 'url?limit=10000&minetype=application/font-woff' },
//       { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
//         loader: 'url?limit=10000&minetype=application/octet-stream' },
//       { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
//         loader: 'file' },
//       { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
//         loader: 'url?limit=10000&minetype=image/svg+xml' }
//     ]
//   },
//   devtool: 'eval-source-map'
// };
