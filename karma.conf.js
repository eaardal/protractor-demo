module.exports = function (config) {
    config.set({

        frameworks: ['jasmine'],

        plugins: [
        'karma-jasmine',
        'karma-ng-html2js-preprocessor',
            //'karma-coverage',
            'karma-phantomjs-launcher',
            'karma-ie-launcher'
            ],

            preprocessors: {
                'app/src/**/*.html': 'ng-html2js',
                'app/src/**/*.js': ['coverage'],
            },
/*
            coverageReporter: {
                reporters: [
                { 
                    type: 'html', 
                    dir: 'app/test/coverage/', 
                    subdir: '.' 
                },
                {
                  type: 'html', 
                  dir: 'app/test/coverage/browsers/', 
                  subdir: function (browser) {
                      return browser.toLowerCase().split(/[ /-]/)[0];
                  }
              }
              ],
          },
*/
          files: [
            // Application dependencies
            'app/libs/angular/angular.min.js',
            'app/libs/angular-route/angular-route.min.js',
            'app/libs/angular-mocks/angular-mocks.js',
            // Application files
            'app/src/*.js',
            // Test files
            'app/test/unit/*.js',
            ],

            ngHtml2JsPreprocessor: {
                moduleName: 'htmltemplates',
                stripPrefix: '/'
            },

            exclude: [
            ],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],

        // web server port
        port: 9876,

        colors: true,

        // possible values: config.LOG_DISABLE 
                            //|| config.LOG_ERROR 
                            //|| config.LOG_WARN 
                            //|| config.LOG_INFO 
                            //|| config.LOG_DEBUG
                            logLevel: config.LOG_INFO,

                            autoWatch: true,

                            browsers: ['IE11'/*'IE11', 'Firefox', 'PhantomJS', 'Chrome'*/],

                            customLaunchers: {
                                IE11: {
                                    base: 'IE',
                                    'x-ua-compatible': 'IE=EmulateIE11'
                                }
                            },

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
