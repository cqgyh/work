const path = require("path");
module.exports={
    //入口路径配置
    entry:'./src/js/index.js',
    //出口路径配置
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'./js/build.js'

    },
    //打包环境  开发环境编译成浏览器识别的语法 不压缩，生产环境编译成浏览器识别的语法 压缩
    mode:'development',


}
