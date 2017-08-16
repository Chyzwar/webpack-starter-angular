const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./common');
const devConfig = require('./dev');
const prodConfig = require('./prod');

/**
 * Merge common config with development specific
 *
 * @see
 */
module.exports = (env = {}) => {
  const jitConfig = {
    /**
     * Jit Application entry
     */
    entry: {
      /**
       * Angualar application
       */
      main: './src/main.jit.ts'
    },
    module: {
      loaders: [
        {
          test: /\.ts?$/,
          use: [
            {
              loader: 'awesome-typescript-loader',
              query: {
                configFileName: 'tsconfig.jit.json',
              }
            },
            {
              loader: 'angular2-template-loader'
            }
          ]
        },
      ]
    },
  };

  if(env.dev){
    return webpackMerge(commonConfig(env), jitConfig, devConfig(env));
  }
  if(env.prod){
    return webpackMerge(commonConfig(env), jitConfig, prodConfig(env));
  }

  return webpackMerge(commonConfig(env), jitConfig);
};
