const webpackConfig = require('./webpack.test');


module.exports = (config) => {
  config.set({
    /**
     * Base path used to resolve all patterns
     * @type {String}
     */
    basePath: '',

    /**
     * Available frameworks, we use mocha
     * @type {Array}
     *
     * See: https://npmjs.org/browse/keyword/karma-adapter
     */
    frameworks: ['mocha', 'chai'],

    /**
     * Avalilable reporters
     * @type {Array}
     *
     * See: https://npmjs.org/browse/keyword/karma-reporter
     */
    reporters: ['mocha'],


    /**
     * List of patterns to be loaded into browser
     * Spec bundle will load all tests '.spec'
     * @type {Array}
     */
    files: [
      { pattern: 'spec.bundle.js', watched: false },
    ],

    /**
     * Files to be excluded
     * @type {Array}
     */
    exclude: [],

    /**
     * Preprocessing test files
     * @type {Object}
     *
     * See: https://npmjs.org/browse/keyword/karma-preprocessor
     */
    preprocessors: { 'spec.bundle.js': ['webpack', 'sourcemap'] },

    /**
     * Webpack preprocessor confguration
     * @type {Object}
     */
    webpack: webpackConfig,

    webpackServer: {
      /**
       * Turn off webpack info
       * @type {Boolean}
       */
      noInfo: true,
    },

    /**
     * Port for karma webserver
     * @type {Number}
     */
    port: 9876,

    /**
     * Enable colorize output
     * @type {Boolean}
     */
    colors: true,

    /**
     * Log level configuration
     *
     * Possible:
     *  LOG_DISABLE
     *  LOG_ERROR
     *  LOG_WARN
     *  LOG_INFO
     *  LOG_DEBUG
     */
    logLevel: config.LOG_INFO,

    /**
     * Watch on changes
     * @type {Boolean}
     */
    autoWatch: true,

    /**
     * Start selected browsers using lunchers
     * @type {Array}
     *
     * See: https://npmjs.org/browse/keyword/karma-launcher
     */
    browsers: [
      'Chrome',
      'Firefox',
    ],

    /**
     * Run tests and Exit
     * @type {Boolean}
     */
    singleRun: false,
  });
};
