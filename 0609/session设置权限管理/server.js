//引入express模块
const express = require('express');
//引入数据库
require('./db')
//创建一个application对象
const app = express();
//引入express-session处理权限
const expressSession = require('express-session');
//设置express-session
app.use(expressSession({
    secret: 'atguigu',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge:1000*60*60*24*7,
        httpOnly:true,
    }
}))


//引入路由
const isEmptyRouter = require('./router/isEmptyRoter');
const loginRouter = require('./router/loginRouter');
const registerRouter = require('./router/registerRouter');
const centerRouter = require('./router/centerRouter');

//引入第三方模版引擎ejs
const ejs = require('ejs');

//通知express使用ejs模版引擎
app.set('view engine', 'ejs');
app.set('views', 'views');

//加载官方静态资源中间件  资源释放出来相当于里面的东西直接到了根目录下
//将public资源释放出来
app.use(express.static('./public'));
// 将static资源释放出来
app.use(express.static("./static"));
// app.use(express.static('./static'));
//处理req请求携带的数据的中间件，把req的数据放在了req.body的属性上了
// app.use(express.urlencoded({
//     extended: true
// }))


//将所有路由挂载到app上
app.use(isEmptyRouter);
app.use(loginRouter);
app.use(registerRouter);
app.use(centerRouter);


//监听端口号和服务器状态，确认服务器是否启动成功
let post = '3002';
app.listen(post, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('创建服务器成功，地址：' + `http://127.0.0.1:${post}`);
})