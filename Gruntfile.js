module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        dirs: {
            app: 'public/app',
            css: 'public/css',
            vendor: 'public/vendor'
        }
    });
    grunt.loadTasks('grunt');
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('unit', [
        'karma:once'
    ]);

    grunt.registerTask('cucumber', [
        'protractor:cuke'
    ]);

    grunt.registerTask('serve', [
        'express:dev'
    ]);

};