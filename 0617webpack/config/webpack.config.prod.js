const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
module.exports = {
    //入口路径配置 todo
    entry: './src/js/index.js',
    //出口路径配置 todo
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: './js/build.js',
        publicPath: "/"

    },
    //打包环境   开发环境编译成浏览器识别的语法 不压缩，生产环境编译成浏览器识别的语法 对JS压缩 todo
    mode: 'production',
    //webpack只内置了js和json的loader
    //其他的loader的配置
    module: {

        rules: [
            //less的配置
            //在外部需要，将所有的less文件引入到入口文件，让webpack进行统一编译,webpack会将他们写入的js中然后 以js的方式重新写入style标签中重新插入的页面
            {
                test: /\.less$/i,
                use: [
                    MiniCssExtractPlugin.loader,//单独提取css文件
                    'css-loader', //将css文件以commonjs模块方案整合到到js中
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                        {
                                            // 其他选项
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    {
                        loader: 'less-loader',

                    },
                ],
            },
            //图片loader的配置
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // limit: 8192,//小于8192字节的图片转换成base64格式引入
                            limit:3*1024,
                            name:'imgs/[hash:5].[ext]'//重新定义路径和名字，路径是相对于上面出口的path

                        },
                    },
                ],
            },

            //配置html-loader 处理img标签出来引入的图
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.js$/,
                //排除node_modules不处理
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }




        ],
    },

    //插件配置 todo
    plugins: [new HtmlWebpackPlugin({
        template:'./src/index.html',//模版的路径 ,不加这个设置，只会生成再build下生成一个index.html，并且引入JS，但是body里没内容
        minify: {
            //去除空格
            collapseWhitespace: true,
            //去除注释
            removeComments: true,
            //移除默认属性
            removeRedundantAttributes: true,
            //移除script的type属性
            removeScriptTypeAttributes: true,
            //移除link的type属性
            removeStyleLinkTypeAttributes: true,
            //使用doctype
            useShortDoctype: true
        }
    }),new MiniCssExtractPlugin({
        filename: "css/[name].css"
    })],

    //配置服务器 todo
    //自动化
    //需要安装 webpack-dev-server
    //webpack指令不能启动devServer指令
    //npx webpack-dev-server指令启动,需要使用webpack-cli 3.XX版本
    devServer: {
        //开发环境是内存中打包的，所以可以不写根目录，不会输出到dist
        contentBase: path.resolve(__dirname, "./build"), //部署项目的根目录 如果有 以来这个目录打开，如果没有加载到内存打开
        port: 8888,
        host: "127.0.0.1",//不写默认是本地主机
        // open: true,//自动打开
        open: 'Chrome', //在谷歌浏览器中自动打开

        compress: true, //启动gzip压缩
        quiet: true, //启动静默模式
    },

    optimization: {
        minimizer: [
            // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
            // `...`,
            new CssMinimizerPlugin(),
        ],
    },


}

