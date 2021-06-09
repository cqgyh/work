//引入express包
const express = require('express');
const path = require("path");
//创建Router
const router = new express.Router();

const isEmpty = (req, res, next) => {
    //拿到账户名和密码
    const {username, password} = req.query;
    //判断是否有为空的
    if(!username||!password){
        //拼接err.ejs路径
        const filePath=path.resolve(__dirname,'../views/err.ejs')
        //响应返回数据
       return  res.render(filePath,{
            errData:'账号或者密码不能为空'
        })
    }
    next();
}

//将请求挂载到路由上
router.use('/register', isEmpty);
router.use('/login', isEmpty);

//暴露路由
module.exports = router;