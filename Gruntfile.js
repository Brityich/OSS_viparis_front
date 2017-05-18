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
                files: 'scss/styles.scss',
                tasks: ['sass']
            }
        }

});
     grunt.loadNpmTasks('grunt-contrib-sass');
     grunt.loadNpmTasks('grunt-contrib-watch');
     grunt.loadNpmTasks('grunt-browser-sync');
     grunt.registerTask('default',['browserSync', 'watch']);
}