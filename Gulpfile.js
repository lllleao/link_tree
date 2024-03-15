const gulp = require('gulp')
const less = require('gulp-less')
const sourceMaps = require('gulp-sourcemaps')

function styles() {
    return gulp.src('./source/styles/main.less')
    .pipe(sourceMaps.init())
    .pipe(less())
    .pipe(sourceMaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'))
}

exports.watch = function() {
    gulp.watch('./source/styles/*.less', gulp.series(styles))
}

