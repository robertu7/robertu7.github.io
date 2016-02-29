"use strict";
const gulp       = require('gulp');
const path       = require('path');
const rename     = require('gulp-rename');


// SVG: Minify & Combine
const svgmin   = require('gulp-svgmin');
const svgstore = require('gulp-svgstore');

gulp.task('svgstore', () => {
    return gulp.src('src/images/svg/*.svg')
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
    .pipe(gulp.dest('src/images'))
})

// Thumbnail
const imageResize = require('gulp-image-resize');
const imagemin = require('gulp-imagemin');

gulp.task('thumbnail', () => {
  gulp.src('src/images/screenshots/large/*.{jpg,png}')
    .pipe(imageResize({ height: 384 }))
    .pipe(imagemin({ progressive: true }))
    .pipe(gulp.dest('src/images/screenshots/thumb'));
})


// Run
gulp.task('default', ['svgstore', 'thumbnail']);