'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass'); // компилирует в css
// const concat = require('gulp-concat'); // объеденяет все в один файл
const sourcemaps = require('gulp-sourcemaps');
const debug = require('gulp-debug'); // 
const del = require('del'); // очищает папку
// const gulpIf = require('gulp-if'); //
const autoprefixer = require('gulp-autoprefixer'); // добавляет в css префиксы
// const remember = require('gulp-remember'); //
// const gulpPath = require('path');
// const newer = require('gulp-newer');
// const cached = require('gulp-cached');
const browserSync = require('browser-sync').create(); // запускает локальный браузер Синк
const notify = require('gulp-notify'); // отлов ошибок
const plumber = require('gulp-plumber');
const multipipe = require('multipipe'); // отлов ошибок
// const rigger = require('gulp-rigger'); // сборка html файлов

gulp.task('sass', function () {
  return multipipe(
    gulp.src('frontend/sass/main.scss'),
    plumber({
      errorHandler: notify.onError(function (err) {
        return {
          title: 'scss',
          message: err.message
        };
      })
    }),
    autoprefixer({
      browsers: ['last 16 versions'],
      cascade: false
    }),
    sourcemaps.init(),
    sass(),
    sourcemaps.write('.'),
    gulp.dest('public/css')
  ).on('error', notify.onError());
});

gulp.task('clean', function () {
  return del('public');
});

gulp.task('assets', function () {
  return gulp.src('frontend/**', {since: gulp.lastRun('assets')}) // обновляет последние измененные файлы
    // .pipe(newer('public')) // не повторяет файлы, компилит новые
    .pipe(debug({title: 'assets'}))
    .pipe(gulp.dest('public'));
});

gulp.task('build', gulp.series('clean', gulp.parallel('sass', 'assets')));

gulp.task('watch', function () {
  gulp.watch('frontend/sass/**/*.*', gulp.series('sass'));
  gulp.watch('frontend/**/*.*', gulp.series('assets'));
});


gulp.task('serve', function () {
  browserSync.init({
    server: 'public'
  });

  browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('start', gulp.series('build', gulp.parallel('watch', 'serve')));










