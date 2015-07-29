// Karma configuration
// Generated on Wed Oct 22 2014 08:28:52 GMT+0800 (PHT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'app/assets/vendor/angular/angular.js',
      'app/assets/vendor/angular-mocks/angular-mocks.js',
      'app/assets/vendor/angular-animate/angular-animate.js',
      'app/assets/vendor/angular-cookies/angular-cookies.js',
      'app/assets/vendor/angular-resource/angular-resource.js',
      'app/assets/vendor/angular-ui-router/release/angular-ui-router.js',
      'app/assets/vendor/angular-bootstrap/ui-bootstrap.js',
      'app/scripts/*.js',
      'test/spec/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      // 'Opera',
      // 'Chrome',
      // 'Safari',
      // 'Firefox',
      'PhantomJS'
    ],

    plugins: [
      // 'karma-opera-launcher',    // do: npm install karma-opera-launcher --save-dev
      // 'karma-safari-launcher',   // do: npm install safari-opera-launcher --save-dev
      // 'karma-chrome-launcher',   // do: npm install karma-chrome-launcher --save-dev
      // 'karma-firefox-launcher',  // do: npm install karma-firefox-launcher --save-dev
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
