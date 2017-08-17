const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./common.js');
const path = require('path');
const devConfig = require('./dev');
const prodConfig = require('./prod');
const ngcWebpack = require('ngc-webpack');
/**
 * Merge common config with prod specific configuration
 */
 module.exports = (env = {}) => {
  const aotConfig = {
    /**
     * Entry point
     */
    entry: {
      /**
       * Angualar application AOT
       */
      main: './src/main.aot.ts'
    },
    module: {
      loaders: [
        {
          test: /\.ts?$/,
          use: [
            {
              loader: 'awesome-typescript-loader',
              query: {
                configFileName: 'tsconfig.aot.json',
              }
            },
            {
              loader: 'ngc-webpack',
              options: {
                disable: false,
              }
            },
            {
              loader: 'angular2-template-loader'
            }
          ]
        },
      ]
    },
    /**
     * Add additional plugins to the compiler.
     *
     * @see https://webpack.js.org/configuration/plugins/#plugins
     */
    plugins: [
      /**
       * Plugin: NgcWebpackPlugin
       *
       * @see https://github.com/shlomiassaf/ngc-webpack
       */
      new ngcWebpack.NgcWebpackPlugin({
        disable: false,
        tsConfig: path.resolve('./tsconfig.aot.json')
      }),
    ]
  };

  if(env.dev){
    return webpackMerge(commonConfig(env), aotConfig, devConfig(env));
  }
  if(env.prod){
    return webpackMerge(commonConfig(env), aotConfig, prodConfig(env));
  }

  return webpackMerge(commonConfig(env), aotConfig);
};
