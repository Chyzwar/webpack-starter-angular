const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./common.js');

/**
 * Merge common config with prod specific configuration
 * @type {object}
 */
 module.exports = webpackMerge(commonConfig, {
  /**
   * In memmory budles/files
   */
   cache: false,
  /**
   * Developer tool to enhance debugging.
   *
   * The 'source-map' settings is meant to be used in production only. It
   * splits the source map in a separate file and it is slow to compute.
   *
   * see:
   */
   devtool: 'source-map',

  /**
   * Add additional plugins to the compiler.
   *
   * @see:
   */
   plugins: [
    /**
     * Plugin: UglifyJsPlugin
     * Description: Minimize all JavaScript output of chunks.
     *
     * @see: https://github.com/webpack-contrib/uglifyjs-webpack-plugin
     */
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    }),
    /**
     * Plugin: DefinePlugin
     *
     * Define variables, strigify in source code
     * @type {String}
     */
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify("production"),
    }),
  ],
});
