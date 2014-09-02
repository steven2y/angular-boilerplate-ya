module.exports = function(grunt) {
    grunt.config('karma', {
        options: {
            configFile: 'test/conf/karma.conf.js'
        },
        unit: {
            autoWatch: true
        },
        once: {
            singleRun: true
        }
    });
};