// Karma configuration
// Generated on Wed Mar 12 2014 11:08:26 GMT+0000 (GMT)
module.exports = function (config) {
    'use strict';
    config.set({
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine', 'requirejs'],
        basePath:'../..',
        // list of files / patterns to load in the browser
        files: [
            {pattern:'public/vendor/**/*.js', included:false},
            {pattern:'public/app/**/*.js', included:false},
            {pattern:'public/app/**/*.html', included:false},
            {pattern:'test/unit/**/*.spec.js', included:false},
            'test/unit/test.js'
        ],
        // list of files to exclude
        exclude: [
            'public/main.js'
        ],
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
//        preprocessors: {
//            'public/app/**/*.js': 'coverage'
//        },

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
        browsers: ['PhantomJS'],
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};