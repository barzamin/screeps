const gulp = require('gulp');
const babel = require('gulp-babel');
const flow = require('gulp-flowtype');
const screeps = require('gulp-screeps');
const del = require('del');
const credentials = require('./credentials.js');

gulp.task('clean', () => del(['build']))

gulp.task('babel', ['clean'], () =>
    gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['@babel/env', '@babel/preset-flow'],
        }))
        .pipe(gulp.dest('dist/')));

gulp.task('screeps', ['babel'], () =>
    gulp.src('dist/**/*.js')
        .pipe(screeps(credentials)));

gulp.task('default', ['babel', 'screeps']);
