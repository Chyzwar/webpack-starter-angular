const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.common.js');

/**
 * Merge common config with prod specific configuration
 * @type {object}
 */
module.exports = webpackMerge(commonConfig, {

  /**
   * Disable debug mode for production.
   *
   * See: http://webpack.github.io/docs/configuration.html#debug
   */
  debug: false,

  /**
   * Developer tool to enhance debugging.
   *
   * The 'source-map' settings is meant to be used in production only. It
   * splits the source map in a separate file and it is slow to compute.
   *
   * See: http://webpack.github.io/docs/configuration.html#devtool
   * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
   */
  devtool: 'source-map',


  /**
   * Options affecting the output of the compilation.
   *
   * See: http://webpack.github.io/docs/configuration.html#output
   */
  output: {

    /**
     * The output directory as absolute path (required).
     *
     * See: http://webpack.github.io/docs/configuration.html#output-path
     */
    path: './build/',

    /**
     * Specifies the name of each output file on disk.
     * IMPORTANT: You must not specify an absolute path here!
     *
     * See: http://webpack.github.io/docs/configuration.html#output-filename
     */
    filename: 'js/[name].[hash].js',

    /**
     * The filename of the SourceMaps for the JavaScript files.
     * They are inside the output.path directory.
     *
     * See: http://webpack.github.io/docs/configuration.html#output-sourcemapfilename
     */
    sourceMapFilename: 'js/[name].[hash].map',

    /**
     * The filename of non-entry chunks as relative path
     * inside the output.path directory.
     *
     * See: http://webpack.github.io/docs/configuration.html#output-chunkfilename
     */
    chunkFilename: '[id].[hash].chunk.js',
  },

  /**
   * Add additional plugins to the compiler.
   *
   * See: http://webpack.github.io/docs/configuration.html#plugins
   */
  plugins: [

    /**
     * Plugin: DedupePlugin
     * Description: Prevents the inclusion of duplicate code into your bundle
     * and instead applies a copy of the function at runtime.
     *
     * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
     * See: https://github.com/webpack/docs/wiki/optimization#deduplication
     */
    new webpack.optimize.DedupePlugin(),

    /**
     * Plugin: UglifyJsPlugin
     * Description: Minimize all JavaScript output of chunks.
     *
     * UglifyJs is broken for es6: https://github.com/mishoo/UglifyJS2/issues/448
     * See: https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
     */
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      unused: false,
      deadCode: false,
      compress: {
        screw_ie8: true,
        keep_fnames: true,
        drop_debugger: false,
        dead_code: false,
        unused: false,
      },
      mangle: {
        screw_ie8: true,
      },
    }),
    /**
     * Plugin: DefinePlugin
     * Define variables, strigify in source code
     * @type {String}
     */
    new webpack.DefinePlugin({
      NODE_ENV: 'production',
    }),
  ],
});
