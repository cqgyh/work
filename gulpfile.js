const gulp = require('gulp');
const babel = require('gulp-babel');
//使用task定义一个任务 规定任务名
gulp.task('babel', () =>
    gulp.src('./0616 工程化/gulp/src/js/*js')//把某个文件夹的文件读取出来作为一个可读流
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./0616 工程化/gulp/src/dist'))//把处理的流写入到某个文件夹
);
