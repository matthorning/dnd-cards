var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var gulp = require('gulp');
var pump = require('pump');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');


// --------------------- Styling
gulp.task('styles', function (cb) {
    pump([
        gulp.src('./src/sass/**/*.scss'),
        sourcemaps.init(),
        sass().on('error', sass.logError),
        autoprefixer([ 'last 2 versions' ]),
        sourcemaps.write(),
        gulp.dest('./dist')
      ],
      cb
    );
});

gulp.task('styles:watch', function () {
  return gulp.watch('./src/sass/**/*.scss', gulp.series('styles'));
});


// --------------------- Script Compression
gulp.task('compress', function (cb) {
  pump([
      gulp.src('./src/scripts/*.js'),
      babel({ presets: ['es2015'] }),
      uglify(),
      gulp.dest('./dist')
    ],
    cb
  );
});

gulp.task('compress:watch', function () {
  return gulp.watch('./src/scripts/*.js', gulp.series('compress'));
});


// --------------------- Watch parent
gulp.task('watch', gulp.parallel('styles:watch', 'compress:watch'));

// --------------------- Build without watch
gulp.task('build', gulp.series('styles', 'compress'));

// --------------------- Default task
gulp.task('default', gulp.series('styles', 'compress', 'watch'));
