module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        cssmin: {
          target: {
            files: [{
              expand: true,
              cwd: 'dev',           // catalog source
              src: ['styles.css'],    // filename
              dest: 'css',          // catalog destination
              ext: '.min.css'       //extension add 
            }]
          }
        } 
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', [
        'cssmin'
    ]);
}