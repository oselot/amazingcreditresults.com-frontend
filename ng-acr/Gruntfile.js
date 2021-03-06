module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('bower.json'),
        less: {
            development: {
                options: {
                    dumpLineNumbers: 'all',
                    // rootPath: 'css',
                    paths: ['css/less']
                },
                files: {
                    "app/css/app.css": "app/css/less/app.less"
                }
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                maxparams: 6,
                unused: true,
                immed: true,
                latedef: true,
                noempty: true,
                nonew: true,
                quotmark: 'single',
                undef: true,
                globals: {
                    window: true,
                    moment: true,
                    document: true,
                    require: true,
                    define: true
                },
                // suppress warnings about mixed spaces and tabs
                '-W099': true,
                // supress warnings about Constructors not starting with Capitals
                '-W055': true,
                // supress warning about use strict
                '-W097': true
            },
            files: ['app/js/**/*.js']
        },
        haml: {
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'app/partials/login.html':              'app/partials/haml/login.haml',
                    'app/partials/logout.html':             'app/partials/haml/logout.haml',
                    'app/partials/password1.html':          'app/partials/haml/password1.haml',
                    'app/partials/passwordSet.html':        'app/partials/haml/passwordSet.haml',
                    'app/partials/welcome.html':            'app/partials/haml/welcome.haml',
                    'app/partials/orders.html':             'app/partials/haml/orders.haml',
                    'app/partials/sellers.html':            'app/partials/haml/sellers.haml',
                    'app/partials/buyers.html':             'app/partials/haml/buyers.haml',
                    'app/partials/owners.html':             'app/partials/haml/owners.haml',
                    'app/partials/products.html':           'app/partials/haml/products.haml',
                    'app/partials/tradelines.html':         'app/partials/haml/tradelines.haml',
                    'app/partials/userForm.html':           'app/partials/haml/userForm.haml',
                    'app/partials/userTable.html':          'app/partials/haml/userTable.haml',
                    'app/partials/account.html':            'app/partials/haml/account.haml',
                    'app/partials/cart.html':               'app/partials/haml/cart.haml',
                    'app/partials/checkout.html':           'app/partials/haml/checkout.haml',
                    'app/partials/buyer-tradeline.html':    'app/partials/haml/buyer-tradeline.haml'
                }
            }
        },
        watch: {
            scripts: {
                files: 'app/js/**/*.js',
                tasks: 'jshint:files',
                options: {
                    atBegin: true,
                    livereload: true
                }
            },
            haml: {
                files: 'app/partials/**/*.haml',
                tasks: 'haml',
                options: {
                    atBegin: true
                }
            },
            less: {
                files: 'app/css/less/app.less',
                tasks: 'less',
                options: {
                    atBegin: true
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-haml2html');

    grunt.registerTask('default', ['haml', 'jshint']);
};
