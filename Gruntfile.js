module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        buildDir: 'dist',
        outputFile: '<%= buildDir %>/csh-material-bootstrap.min.css',
        banner: '/*!\n' +
        ' * <%= pkg.name %> v<%= pkg.version %>\n' +
        ' * Homepage: <%= pkg.homepage %>\n' +
        ' * Copyright 2012-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
        ' * Licensed under <%= pkg.license %>\n' +
        ' * Based on Bootstrap\n' +
        '*/\n',
        clean: {
            all: {
                src: ['sass/build.scss', '<%= outputFile %>*']
            },
            build: {
                src: ['sass/build.scss']
            }
        },
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: false
            },
            dist: {
                src: 'sass/csh-material-bootstrap.scss',
                dest: 'sass/build.scss'
            }
        },
        sass: {
            dist: {
                files: {
                    '<%= outputFile %>': ['sass/build.scss']
                },
                options: {
                    style: 'expanded',
                    precision: 8,
                    'unix-newlines': true
                }
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('pixrem')(),
                    require('autoprefixer')({
                        browsers: [
                            "Android 2.3",
                            "Android >= 4",
                            "Chrome >= 20",
                            "Firefox >= 24",
                            "Explorer >= 8",
                            "iOS >= 6",
                            "Opera >= 12",
                            "Safari >= 6"
                        ]
                    }),
                    require('css-mqpacker')(),
                    require('cssnano')({
                        autoprefixer: false,
                        safe: true,
                        sourcemap: false
                    })
                ]
            },
            dist: {
                src: '<%= outputFile %>'
            }
        },
        watch: {
            files: ['sass/csh-material-bootstrap.scss', 'sass/variables.scss', 'index.html'],
            tasks: 'build',
            options: {
                livereload: true,
                nospawn: true
            }
        },
        connect: {
            base: {
                options: {
                    port: 3000,
                    livereload: true,
                    open: true
                }
            },
            keepalive: {
                options: {
                    port: 3000,
                    livereload: true,
                    keepalive: true,
                    open: true
                }
            }
        }
    });

    grunt.registerTask('build', ['clean:all', 'concat', 'sass:dist', 'postcss', 'clean:build']);

    grunt.event.on('watch', function (action) {
        var path = require('path');
    });

    grunt.registerTask('server', 'connect:keepalive');

    grunt.registerTask('default', ['connect:base', 'watch']);
};