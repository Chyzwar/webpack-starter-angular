const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./common.js');
const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin')

/**
 * Merge common config with prod specific configuration
 */
 module.exports = (env) => {
  const NODE_ENV = env.prod ? "production": "development"

  return webpackMerge(commonConfig(env), {
    /**
     * Disable in-memmory budles/files
     */
    cache: false,
    /**
     * Developer tool to enhance debugging.
     *
     * The 'source-map' settings is meant to be used in production only. It
     * splits the source map in a separate file and it is slow to compute.
     *
     * @see https://webpack.js.org/configuration/devtool/
     */
    devtool: 'source-map',
    /**
     * DevServer for production build only serve
     *
     * @see https://webpack.js.org/configuration/dev-server/
     */
    devServer: {
      contentBase: path.resolve('build'),
      compress: true,
      port: 3000,
      hot: false,
      inline: false
    },
    /**
     * Add additional plugins to the compiler.
     *
     * @see https://webpack.js.org/configuration/plugins/#plugins
     */
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
       * @see https://webpack.js.org/plugins/define-plugin/
       */
       new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify("production"),
      })
    ]
  });
};
