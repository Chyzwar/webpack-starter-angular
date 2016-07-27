const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

/**
 * Merge common config wit development specific
 * @type {object}
 */
module.exports = webpackMerge(commonConfig, {
  plugins: [
    /**
     * Plugin: DefinePlugin
     * Define variables, strigify in source code
     * @type {String}
     */
    new webpack.DefinePlugin({
      NODE_ENV: "'development'",
    }),
  ],
});
