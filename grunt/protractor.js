module.exports = function(grunt) {
    'use strict';
    grunt.config('protractor', {
        options: {
            keepAlive: true,
            noColor: false
        },
        cuke: {
            options:{
                keepAlive: false,
                configFile: 'test/conf/cuke.protractor.conf.js'
            }
        }
    });
};

