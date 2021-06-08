//引入express模块
const express = require('express');
//引入数据库
require('./db')
//创建一个application对象
const app = express();
//引入path
const path = require('path');
//引入use对象模块
const userModel=require("./model/user");

//设置接口
//注册接口
app.get("/register",async (req,res) => {
    //拿到用户名和密码
    const {username,password}=req.query;

    //查看用户名和密码是否为空
    if(!username||!password){
        //拼接err.ejs的路径
        const filePath=path.resolve(__dirname,'./public/err.ejs');
        //返回页面
        return res.render(filePath,{
            errData:"账号密码不能为空"
        });
        // res.send("账号密码不能为空");
        // return;
    }

    //向数据库写入当前用户信息
    await userModel.create({
        username,
        password
    });
//注册成功，跳转到登陆页面
//     res.send("注册成功");
    res.redirect('/login.html');


})
//登陆接口
app.get('/login', async (req,res) => {
    //拿到用户名和密码
    const {username,password}=req.query;
    //查看用户名和密码是否为空
    if(!username||!password){
        //拼接err.ejs的路径
        const filePath=path.resolve(__dirname,'./public/err.ejs');
        //返回页面
        return res.render(filePath,{
            errData:"用户名和密码不能为空"
        });
        // return res.send('用户名和密码不能为空');
    }
    //根据用户名查询是否存在用户
    const isHasUser=await userModel.findOne({username});

    if (!isHasUser){
        //拼接err.ejs的路径
        const filePath=path.resolve(__dirname,'./public/err.ejs');
        //返回页面
        return res.render(filePath,{
            errData:"用户不存在"
        });
        // return res.send('用户不存在');
    }
    //判断密码是否正确
    if(isHasUser.password!=password){
        //拼接err.ejs的路径
        const filePath=path.resolve(__dirname,'./public/err.ejs');
        //返回页面
        return res.render(filePath,{
            errData:"密码输入错误"
        });
        // return res.send('密码输入错误');
    }
    //登陆成功，跳转到center页面
    const filePath=path.resolve(__dirname,'./public/center.html');
    res.sendFile(filePath);


})

//静态资源请求
app.get('/static/:src', (req,res) => {
    const {src}=req.params;
    console.log(req.params);
    const  filePath=path.resolve(__dirname,'static',src);
    res.sendFile(filePath)
})













//访问服务器重定向到主页
app.get('/', (req, res) => {
    res.redirect("/index.html")
})
//设置主页接路径
app.get('/index.html', (req, res) => {
    const filePath = path.resolve(__dirname, './public/index.html')
    res.sendFile(filePath);
})
//设置登陆路径
app.get('/login.html', (req, res) => {
    const filePath = path.resolve(__dirname, './public/login.html')
    res.sendFile(filePath);
})
//设置register路径
app.get('/register.html', (req, res) => {
    const filePath = path.resolve(__dirname, './public/register.html')
    res.sendFile(filePath);
})


//监听端口号和服务器状态，确认服务器是否启动成功
let post = '3002';
app.listen(post, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('创建服务器成功，地址：' + `http://127.0.0.1:${post}`);
})