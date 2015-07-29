/*! =========================================================================
 * ngBarebone Grunt Tasks 0.2.0
 * Copyright 2014 (c) Pongstr Ordillo. MIT License.
 * ========================================================================= */

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Project Configuration
  grunt.initConfig({
    site: {
      app:    'app',
      src:    'src',
      dist:   '_build',
      test:   'test',
      bower:  'application/assets/lib',
    },
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> v<%= pkg.version %> <%= pkg.description %> '+
            ' * <%= pkg.license %> \n' +
            ' */',

    jshint: {
      init: {
        src: [
          'Gruntfile.js',
          'karma.conf.js'
        ]
      },
      app: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: [
          '<%= site.app %>/scripts/*.js',
          '<%= site.app %>/components/**/*.js'
        ]
      }
    },

    karma: {
      app: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },

    concat: {
      app: {
        options: {
          sourceMap: true,
          sourceMapName: '<%= site.dist %>/app/<%= pkg.name %>.min.js.map',
          separator: ';'
        },
        src: ['<%= site.app %>/app/**/*.js'],
        dest: '<%= site.dist %>/app/<%= pkg.name %>.js'
      },
      module: {
        options: {
          sourceMap: true,
          sourceMapName: '<%= site.dist %>/module/modules.min.js.map',
          separator: ';'
        },
        src: ['<%= site.app %>/module/**/**/*.js'],
        dest: '<%= site.dist %>/module/modules.js'
      }
    },

    uglify: {
      options: {
        mangle: false,
        preserveComments: false
      },
      app: {
        files: {
          '<%= site.dist %>/app/<%= pkg.name %>.min.js': [
            '<%= site.dist %>/app/<%= pkg.name %>.js'
          ],
          '<%= site.dist %>/module/modules.min.js': [
            '<%= site.dist %>/module/modules.js'
          ]
        }
      }
    },

    processhtml: {
      app: {
        options: {
          process: true,
          data: {
            appjs: '/app/<%= pkg.name %>.min.js',
            modulejs: '/module/modules.min.js'
          }
        },
        files: [
          {
            expand: true,
            cwd: '<%= site.app %>',
            src: ['*.html'],
            dest: '<%= site.dist %>',
            ext: '.html'
          }
        ]
      }
    },

    htmlmin: {
      app: {
        options: {
          // lint: true,                // breaks entire production build process if enabled, must set exemptions for angular markup
          useShortDoctype: true,
          removeComments:   true,
          collapseWhitespace: true,
          preserveLineBreaks: false,
          processScripts: ['text/ng-template'],
          minifyJS: true
        },
        files: [
          {
            expand: true,
            cwd: '<%= site.dist %>',
            src: '*.html',
            dest: '<%= site.dist %>'
          },
          {
            expand: true,
            cwd: '<%= site.app %>',
            src: 'components/**/**/*.html',
            dest: '<%= site.dist %>'
          }
        ]
      }
    }
  });

  grunt.registerTask('default', []);

  grunt.registerTask('updatepkg', [
    'copy:less'
  ]);

  grunt.registerTask('test', [
    'jshint:app',
    'karma:app'
  ]);

  grunt.registerTask('build', [
    'jshint:app',
    'karma:app'
  ]);

};
