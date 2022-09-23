'use strict';

// Required packages
import gulp from './node_modules/gulp/index.js';
import concat from './node_modules/gulp-concat/index.js';
import uglify from './node_modules/gulp-uglify/index.js';
import rename from './node_modules/gulp-rename/index.js';
import maps from './node_modules/gulp-sourcemaps/index.js';
import { deleteAsync, deleteSync } from './node_modules/del/index.js';

gulp.task('mergeScripts', mergeScripts);
function mergeScripts() {
    return gulp.src([
        'js/jquerylib.js',
        'js/widget$.js',
        'js/flickr.js'])
        .pipe(maps.init())
        .pipe(concat('app.js'))
        .pipe(maps.write('./'))
        .pipe(gulp.dest('js'))
}

gulp.task('minifyScripts', gulp.series('mergeScripts', minifyScripts));
function minifyScripts() {
    return gulp.src(
        'js/app.js')
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('js'))
}

gulp.task('build', gulp.series('minifyScripts', build));
function build() {
    return gulp.src(['html/*',
                    'js/app.min.js',      
                    'json/*', 
                    'style.css'], 
                    { base: './' })
                    .pipe(gulp.dest('dist'));
}

// NODE_ENV=development
gulp.task('watch', watch);
async function watch() {
    gulp.watch(['js/widget$.js', 'js/flickr.js'], gulp.series('mergeScripts'))
}

gulp.task('clean', function(cb) {
    deleteAsync(['dist', 'js/app*.js']);
    cb();
});

// list [] does not work anymore in newer versions | .series(concurrently)/.parallel(simultaneously).
gulp.task('default', gulp.series('clean', 'build'));