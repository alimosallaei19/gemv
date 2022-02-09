'use strict';
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-obfuscator');
    grunt.initConfig({
        obfuscator: {
            options: {
                banner: '// This project was made possible by theorize.world.\n',
                debugProtection: true,
                debugProtectionInterval: true
            },
            task3: {
                files: {
                    'public/': 'scripts/*.js'
                }
            }
        }
    });
    grunt.registerTask('default', ['obfuscator']);
};