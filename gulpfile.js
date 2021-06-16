const gulp = require('gulp');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
//合并文件到一个文件中用的 将所有less编译成一个all.js
const concat = require('gulp-concat');
//引入exec
const {exec} = require('child_process');

//使用task定义一个任务 规定任务名
gulp.task('babel', () =>
    gulp.src('./0616 工程化/gulp/src/js/*.js')//把某个文件夹的文件读取出来作为一个可读流
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./0616 工程化/gulp/dist/js'))//把处理的流写入到某个文件夹
);


const browserify = require('gulp-browserify');
// Basic usage
gulp.task('browserify', function () {
    // Single entry point to browserify
    return gulp.src('./0616 工程化/gulp/dist/js/index.js')
        .pipe(browserify({
            insertGlobals: true,
        }))
        .pipe(rename('build.js'))
        .pipe(gulp.dest('./0616 工程化/gulp/dist/js'))
        .pipe(connect.reload())

});


//配置less
const less = require('gulp-less');
gulp.task('less', function () {
    return gulp.src('./0616 工程化/gulp/src/less/*.less')
        .pipe(less())
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./0616 工程化/gulp/dist/css'))
        .pipe(connect.reload());
});


//配置 html，将html从开发环境复制到dist中
gulp.task('html', function () {
    return gulp.src('./0616 工程化/gulp/src/index.html')
        .pipe(gulp.dest('./0616 工程化/gulp/dist'))
        .pipe(connect.reload());
})


//配置服务器 自动打开 自动刷新
const connect = require('gulp-connect');
gulp.task('connect', function () {
    connect.server({
        port: 3006,
        root: ['./0616 工程化/gulp/dist'],//暴露的目录，只有暴露生产环境才会自动找寻到index打开
        livereload: true //打开自动刷新
    });
    //自动打开页面
    exec('start chrome http://localhost:3006/')

    //配置监听
    gulp.watch('./0616 工程化/gulp/src/js/*.js', gulp.series(['js']));
    gulp.watch('./0616 工程化/gulp/src/less/*.less', gulp.series(['less']));
    gulp.watch('./0616 工程化/gulp/src/index.html', gulp.series(['html']));
});


//生产环境的配置 压缩
//css压缩
const cssmin = require('gulp-cssmin');
gulp.task('cssmin', function () {
    return gulp.src('./0616 工程化/gulp/dist/css/all.css')
        .pipe(cssmin())
        .pipe(rename('all.min.css'))
        .pipe(gulp.dest('./0616 工程化/gulp/dist/css'));
});

//js压缩
const uglify = require('gulp-uglify');
gulp.task('jsmin', function () {
    return gulp.src('./0616 工程化/gulp/dist/js/build.js')
        .pipe(uglify())
        .pipe(rename('build.min.js'))
        .pipe(gulp.dest('./0616 工程化/gulp/dist/js'));

})

//html
const htmlmin = require('gulp-htmlmin');
gulp.task('htmlmin', () => {
    return gulp.src('./0616 工程化/gulp/src/index.html')
        .pipe(htmlmin({
            collapseWhitespace: true, // 去除空格换行符
            removeComments: true, // 去除注释
        }))
        .pipe(gulp.dest('./0616 工程化/gulp/dist'))
})


//整合命令 同步执行
const {series, parallel} = require('gulp');
gulp.task('js', series(['babel', 'browserify']));

//整合命令 同步执行
gulp.task('dev', parallel(['js', 'html', 'less']));
//开发环境的同意配置
gulp.task('wacth', series(['dev', 'connect']));
//生产环境的统一配置
gulp.task("js-prod", gulp.series(["js", "jsmin"]));
gulp.task("css-prod", gulp.series(["less", "cssmin"]));
gulp.task('build', parallel(['js-prod', 'css-prod','htmlmin']));




