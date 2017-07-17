const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./common');

/**
 * Merge common config wit development specific
 * @type {object}
 */
module.exports = webpackMerge(commonConfig, {
  devtool: 'inline-source-map',
  cache: true,
  plugins: [
    /**
     * Plugin: DefinePlugin
     * Define variables, strigify in source code
     *
     * NOTE: when adding more properties make sure you include them in src/typings.d.ts
     * @type {String}
     */
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify("development"),
    }),
  ],
  devServer:{

  }
});
