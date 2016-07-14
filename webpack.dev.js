const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

/**
 * Merge common config wit development specific
 * @type {object}
 */
module.exports = webpackMerge(commonConfig, {});
