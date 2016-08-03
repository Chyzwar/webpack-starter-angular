const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

/**
 * Remove Html and CommonChunks plugin.
 * @type {Array}
 */
commonConfig.plugins = commonConfig.plugins.slice(0, 2);

/**
 * Merge common config with test specific
 * @type {object}
 */
module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',
  /**
   * Webpack is only used as preprocessor,
   * There is no need to compile application files
   * @type {Object}
   */
  entry: {}, output: {},
  plugins: [
    /**
     * Plugin: DefinePlugin
     * Define variables, strigify in source code
     * @type {String}
     */
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
      },
    }),
  ],
});
