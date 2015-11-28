"use strict";
const gulp       = require('gulp');
const path       = require('path');
const rename     = require('gulp-rename');


// SVG: Minify & Combine
let svgmin   = require('gulp-svgmin');
let svgstore = require('gulp-svgstore');

gulp.task('svgstore', () => {
    return gulp.src('src/img/svg/*.svg')
    .pipe(svgmin(file => {
        let prefix = path.basename(file.relative, path.extname(file.relative));
        return {
            plugins: [{
                cleanupIDs: {
                    prefix: prefix + '-',
                    minify: true
                }
            }]
        }
    }))
    .pipe(svgstore())
    .pipe(rename('icon-sprites.svg'))
    .pipe(gulp.dest('src/img'))
})

// Run
gulp.task('default', ['svgstore']);