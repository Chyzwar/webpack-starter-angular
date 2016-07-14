
const commonConfig = {
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
        test: /\.css$/,
        loaders: [
          { loader: 'style-loader' },
          { loader: 'css-loader', query: { modules: true } },
          { loader: 'sass-loader' },
        ],
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
  cache: true,
  devtool: 'eval-source-map',
};


export default commonConfig;
