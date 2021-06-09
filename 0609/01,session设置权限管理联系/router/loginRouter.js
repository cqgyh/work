//引入express包
const express = require('express');
const path = require("path");
const userModel = require("../model/userModel");
//创建Router
const router = new express.Router();


//将请求挂载到路由上
router.get('/login', async (req, res) => {
    //拿到账号密码
    const {username, password} = req.query;
    //判断用户是否存在
    const isHasUser = await userModel.findOne({
        username
    });
    //如果isHasUser不存在,返回错误
    if (!isHasUser) {
        //拼接err.ejs路径
        const filePath = path.resolve(__dirname, '../views/err.ejs')
        //响应返回数据
        return res.render(filePath, {
            errData: '账号不存在'
        })
    }
    //用户存在，判断密码是否相等
    if (isHasUser.password !== password) {
        //拼接err.ejs路径
        const filePath = path.resolve(__dirname, '../views/err.ejs')
        //响应返回数据
        return res.render(filePath, {
            errData: '密码错误'
        })
    }
    //登录成功跳转到个人中心
    const filePath = path.resolve(__dirname, '../views/center.ejs')
    res.render(filePath,{
        user:username
    })
    //登录成功设置session
    req.session.username=username;
    console.log(req.session.username);



});

//直接请求center
//暴露路由
module.exports = router;