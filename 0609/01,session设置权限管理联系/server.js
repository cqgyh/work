//引入第三方express模块 用于创建一个application
const express=require('express');

//新建一个application
const app=express();
//连接数据库
require('./db');
//引入child_process用自动打开浏览器
const {exec}=require('child_process');
//引入第三方模版引擎ejs
const ejs=require('ejs');

//通知express使用ejs模版引擎
app.set('view engine','ejs');
app.set('views','views');

//释放public资源
app.use(express.static('./public'));
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
}));


//引入路由管理模块
const isEmptyRouter=require('./router/isEmptyRouter');
const registerRouter=require('./router/registerRouter');
const loginRouter=require('./router/loginRouter');
const centerRouter=require('./router/centerRouter');
app.use(isEmptyRouter);
app.use(registerRouter);
app.use(loginRouter);
app.use(centerRouter);














//监听app是否创建成功
app.listen('3000',() => {
    console.log(`服务器启动成功,地址：http://127.0.0.1:3000`);
    exec('start http://127.0.0.1:3000')
})
