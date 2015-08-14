var gulp = require('gulp');
var ts = require('gulp-typescript');

var tsSource = [
    "app/client/**/*.ts",
    "!app/client/jspm_packages"
];

var tsProject = ts.createProject('tsconfig.json', {
    typescript: require('typescript')
});

gulp.task('compile-ts', function() {
    var tsResult = gulp.src(tsSource)
        .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest('app/client/'));
});