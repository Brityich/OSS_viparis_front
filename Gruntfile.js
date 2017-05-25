module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    sourcemap: false,
                    compress: false,
                    yuicompress: false,
                    style: 'expanded',
                    lineNumbers: true
                    // browsers: ['last 2 versions', 'ie 9']
                },
                files: {
                    'styles.css' : 'scss/styles.scss'
                }
            },
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'styles.css',
                        'index.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        },
        watch: {
            css: {
                files: [
                    'scss/styles.scss',
                    'scss/core/*.scss',
                    'scss/content/*.scss',
                    'html/*.html',
                    'html/htmls/*.html',
                    'html/htmls/views/*.html'
                ],
                tasks: ['sass', 'htmlbuild']
            }
        },
        htmlbuild: {
            dist: {
                src: 'html/index.html',
                dest: 'index.html',
                options: {
                    beautify: true,
                    prefix: '//some-cdn',
                    relative: true,
                    basePath: false,
                    styles: {
                        bundle: [
                            'styles.css',
                        ],
                    },
                    sections: {
                        views: 'html/htmls/views/*.html',
                        header: 'html/htmls/header.html',
                        footer: 'html/htmls/footer.html',
                        layout: {
                            header: 'html/htmls/header.html',
                            footer: 'html/htmls/footer.html'
                        }
                    },
                    styles: {
                        bundle: [
                            'styles.css'
                        ],
                        test: 'styles.css'
                    },
                    data: {
                        // Data to pass to templates
                        version: "0.1.0",
                        title: "test",
                    },
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-html-build');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.registerTask('default',['browserSync', 'watch' ]);
}