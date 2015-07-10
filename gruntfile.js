'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    
    grunt.loadNpmTasks('grunt-protractor-runner');
    
    grunt.initConfig({
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },
        protractor: {
            options: {
                // Location of your protractor config file
                configFile: 'protractor.conf.js',

                // Do you want the output to use fun colors?
                noColor: false,

                // Set to true if you would like to use the Protractor command line debugging tool
                //debug: true,

                // Additional arguments that are passed to the webdriver command
                args: {
                    includeStackTrace: true,
                    verbose :true
                }
            },
            e2e: {
                    options: {
                        keepAlive: true
                        //args: { baseUrl: 'http://localhost:8080/' }
                    }
            }
        }
    });
   
    grunt.registerTask('default', [
        'karma:unit',
        'protractor:e2e'
    ]);

    grunt.registerTask('unit', [
        'karma:unit'
    ]);

    grunt.registerTask('e2e', [
        'protractor:e2e'
    ]);
    
};