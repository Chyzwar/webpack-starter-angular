const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

export default webpackMerge(commonConfig, {});
