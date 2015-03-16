'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

gulp.task('watch', ['inject'], function () {
  gulp.watch([
    paths.src + '/*.html',
    paths.src + '/{js,partials}/**/*.css',
    paths.src + '/{js,partials}/**/*.js',
    'bower.json'
  ], ['inject']);
});
