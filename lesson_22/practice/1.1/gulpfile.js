import { task, src, dest, series, watch } from 'gulp';
import babel from 'gulp-babel';
import minify from 'gulp-babel-minify';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

task('js', () => {
  return src(['./*.js', '!./gulpfile.js'])
  .pipe(babel({presets: ['@babel/env']}))
  .pipe(minify())
  .pipe(dest('dist'))
});

task('scss', () => {
  return src('./*.scss')
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(dest('dist'));
});

task('default', series('js', 'scss'));

task('watch', () => {
  watch('./*.scss', series('scss'));
  watch('./*.js', series('js'));
});