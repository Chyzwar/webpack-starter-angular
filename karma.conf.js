const webpackConfig = require('./webpack/test');


module.exports = (config) => {
  /**
   * Karma coniguration
   *
   * @see http://karma-runner.github.io/1.0/config/configuration-file.html
   * @type {Object}
   */
  config.set({
    /**
     * Enable or disable watching files and executing the tests whenever one of these files changes.
     *
     * CLI: --auto-watch, --no-auto-watch
     * @default true
     */
    autoWatch: false,
    /**
     * Karma how long to wait (in milliseconds) after any changes have occurred
     * @default 250
     */
    autoWatchBatchDelay: 250,
    /**
     * Base path used to resolve all patterns
     * @default ''
     */
    basePath: '',
    /**
     * Available frameworks.
     *
     * @see https://npmjs.org/browse/keyword/karma-adapter
     */
    frameworks: ['jasmine'],
    /**
     * Avalilable reporters
     *
     * @see https://npmjs.org/browse/keyword/karma-reporter
     */
    reporters: ['dots'],
    /**
     * List of patterns to be loaded into browser
     * src/assets will serve static assets
     * spec.bundle will load all tests '*.spec'
     *
     * @see: http://karma-runner.github.io/1.0/config/files.html
     */
    files: [
      {
        pattern: './src/assets/**/*',
        watched: false,
        included: false,
        served: true,
        nocache: false,
      },
      {
        pattern: './src/polyfills.ts',
        watched: false,
        included: false,
        served: true,
        nocache: false,
      },
      {
        pattern: './src/**/*.spec.ts',
        watched: false,
        included: true,
        served: true,
        nocache: false,
      },
    ],
    /**
     * Files to be excluded
     */
    exclude: [],
    /**
     * Preprocessing test files
     *
     * @see: https://npmjs.org/browse/keyword/karma-preprocessor
     */
    preprocessors: {
      '*.spec.ts': ['coverage', 'webpack', 'sourcemap']
    },
    /**
     * Webpack preprocessor confguration
     *
     * @see https://github.com/webpack-contrib/karma-webpack
     */
    webpack: webpackConfig,
    /**
     * Webpack Dev middleware
     *
     * @see https://github.com/webpack/webpack-dev-middleware
     */
    webpackMiddleware: {
      /**
       * Turn off webpack info (only warnings and errors)
       */
      noInfo: true,
    },

    /**
     * Port for karma webserver
     * @default 9876
     */
    port: 9876,
    /**
     * Enable colorize output
     *
     * CLI: --colors, --no-colors
     * @default true
     */
    colors: true,
    /**
     * Log level configuration
     *
     * @default LOG_INFO
     * CLI: --log-level debug
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
     * Start selected browsers using lunchers
     *
     * @see: https://npmjs.org/browse/keyword/karma-launcher
     */
    browsers: [
      'Chrome',
      'Firefox',
    ],
    /**
     * Run tests and Exit
     *
     * @default false
     * CLI: --single-run, --no-single-run
     */
    singleRun: false,
  });
};
