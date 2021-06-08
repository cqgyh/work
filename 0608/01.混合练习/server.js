//准备建立一个服务器
//引入第三方express模块
const expres = require('express');
//新建一个application
const app = expres();
//与数据库建立连接
require('./db');
//引入用户信息模块
const userModel = require('./model/userModel');
//引入路径模块
const path = require('path');

//引入第三方模版引擎
const ejs = require('ejs');
app.set("view engine", "ejs");
app.set("views", "views");


//使用官方自定义静态资源管理中间件
//释放public资源 交给第三方管理 这里需要写相对路径
app.use(expres.static('./public'));

//自定义判断帐号密码不为空中间件
app.use((req, res, next) => {
    //拿到请求的账号密码
    const {username, password} = req.query;
    // console.log(req);

    //判断帐号密码不为空
    if (!username || !password) {
        //拼接err.ejs路径
        const filePath = path.resolve(__dirname, 'public/err.ejs');
        return res.render(filePath, {
            errData: '输入帐号或密码不能为空'
        })
    }
    next();

})

//注册接口
app.get('/register', async (req, res) => {
    //拿到帐号密码
    const {username, password} = req.query;

    //查询当前用户是否存在
    const isHasUser = await userModel.findOne({username});
    if (isHasUser) {
        //拼接err.ejs路径
        const filePath = path.resolve(__dirname, 'public/err.ejs');
        return res.render(filePath, {
            errData: '用户名已存在'
        })

    }


    //将拿到的账号密码存储到数据库中
    await userModel.create({
        username,
        password
    });
    //跳转到登陆页面
    const filePath = path.resolve(__dirname, 'public/login.html');
    res.sendFile(filePath);

});

//登陆接口
app.get('/login', async (req, res) => {
    //拿到帐号密码
    const {username, password} = req.query;
    //查询当前用户是否存在
    const isHasUser = await userModel.findOne({username});
    if (!isHasUser) {
        //拼接err.ejs路径
        const filePath = path.resolve(__dirname, 'public/err.ejs');
        return res.render(filePath, {
            errData: '用户不存在'
        })

    }
    //查询密码是否正确
    if (isHasUser.password != password) {
        //拼接err.ejs路径
        const filePath = path.resolve(__dirname, 'public/err.ejs');
        return res.render(filePath, {
            errData: '密码输入不正确'
        })
    }

    //跳转页面到个人中心
    const filePath=path.resolve(__dirname,'public/center.html');
    res.sendFile(filePath);
})


//监听app是否启动
let port = '3003';
app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`服务器启动成功，地址：http://127.0.0.1:${port}`);
})