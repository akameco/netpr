'use strict';
const gulp       = require('gulp');
const browserify = require('browserify');
const babelify   = require('babelify');
const source     = require('vinyl-source-stream');
const buffer     = require('vinyl-buffer');
const nodemon    = require('gulp-nodemon');

gulp.task('browserify', () => {
  browserify('./client/index.js', { degug: true })
    .transform(babelify)
    .bundle()
    .on("error", err => { console.log("Error : " + err.message); })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./public/'))
});

gulp.task('nodemon', () => {
  nodemon({
    script: 'index.js',
    ext: 'js ejs'
  });
});

gulp.task('watch', () => {
  gulp.watch(['./client/js/**/*'], ['browserify'])
});

gulp.task('default', ['browserify', 'watch', 'nodemon']);

