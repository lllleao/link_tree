const gulp = require('gulp')
const less = require('gulp-less')
const sourceMaps = require('gulp-sourcemaps')
const imagemin = require('gulp-imagemin')

function styles() {
    return gulp.src('./source/styles/main.less')
    .pipe(sourceMaps.init())
    .pipe(less())
    .pipe(sourceMaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'))
}

function images() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

exports.default = gulp.series(styles, images)

exports.watch = function() {
    gulp.watch('./source/styles/*.less', gulp.series(styles, images))
}
