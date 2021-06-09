//引入express包
const express = require('express');
const path = require("path");
const userModel = require("../model/userModel");
//创建Router
const router = new express.Router();


//将请求挂载到路由上
router.get('/register', async (req, res) => {
    //拿到账号密码
    const {username, password} = req.query;
    //判断用户是否存在
    const isHasUser = await userModel.findOne({
        username
    });
    //如果isHasUser已经存在,返回已存在信息
    if (isHasUser) {
        //拼接err.ejs路径
        const filePath = path.resolve(__dirname, '../views/err.ejs')
        //响应返回数据
        return res.render(filePath, {
            errData: '账号已存在'
        })
    }
    //用户不存在，创建账号
    await userModel.create({
        username,
        password
    })
    //跳转登录页面
    res.redirect('/login.html');


});

//暴露路由
module.exports = router;