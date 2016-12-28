var gulp = require('gulp'),    connect = require('gulp-connect'), livereload = require('gulp-livereload');
gulp.task('liveloadsrc', function() {
    livereload.listen();
    gulp.watch('test/*.*', function(event){
        livereload.changed(event.path);
    });
});

gulp.task('webserversrc', function() {
    connect.server({
        root: '',
        port: 8001,
        livereload: true
    });
});

gulp.task('src', ['liveloadsrc','webserversrc']);