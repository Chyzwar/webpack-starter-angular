const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

/**
 * Merge common config with development specific
 *
 * @see
 */
module.exports = (env) => {
  return {
    devtool: 'source-map',
    /**
     * Build folder not in memmory
     */
    cache: false,
    plugins: [
    /**
      * Plugin: CleanWebpackPlugin
      * A webpack plugin to remove/clean your build folder(s) before building
      *
      * @see https://github.com/johnagan/clean-webpack-plugin
      */
      new CleanWebpackPlugin(['build'],
        { root: path.resolve() }
      ),
      /**
       * Plugin: UglifyJsPlugin
       * Description: Minimize all JavaScript output of chunks.
       *
       * @see https://github.com/webpack-contrib/uglifyjs-webpack-plugin
       */
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        output: {
          comments: false
        },
        mangle: {
          screw_ie8: true
        },
        compress: {
          screw_ie8: true,
          warnings: false,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
          negate_iife: false
        }
      }),
      /**
       * Plugin: DefinePlugin strigify in source code
       *
       * NOTE: when adding more properties make sure you include them in src/typings.d.ts
       * @see https://webpack.js.org/plugins/define-plugin/
       */
       new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify("production"),
      })
    ],
  };
}
