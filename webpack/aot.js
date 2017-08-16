const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./common.js');
const path = require('path');
const devConfig = require('./dev');
const prodConfig = require('./prod');

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
                genDir: 'compiled',
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
        tsConfig: path.resolve('./tsconfig.aot.json')
      }),
    ]
  });
};
