'use strict';

// Required packages
const gulp = require('./node_modules/gulp');
const concat = require('./node_modules/gulp-concat');
const uglify = require('./node_modules/gulp-uglify');
const rename = require('./node_modules/gulp-rename');

gulp.task('mergeScripts', async function() {
    gulp.src([
        'js/jquerylib.js',
        'js/widget$.js',
        'js/flickr.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('js'))
});

gulp.task('minifyScripts', async function() {
    gulp.src([
        'js/app.js'])
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('js'))
});

// list does not work anymore in newer versions | .series/.parallel.
// gulp.task('default', gulp.series('mergeScripts', 'uglifyScripts'));