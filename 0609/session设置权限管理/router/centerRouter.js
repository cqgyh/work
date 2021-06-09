//引入express模块
const express = require('express');
//引入path模块
const path = require("path");
//引入userModel模块
const userModel=require('../model/user');
//创建router
const router = new express.Router();
//引入cookie-parser 用于把cookie解析成对象格式
const cookieParser=require('cookie-parser');
router.use(cookieParser());

//权限控制
router.use('/center.html',async (req,res,next) => {
   //判断session
    if(!req.session.username){
        //拼接err.ejs的路径
        const filePath=path.resolve(__dirname,'../views/err.ejs');
        //返回页面
        return res.render(filePath,{
            errData:"权限不足"
        });
    }
    next();

})


//当接受到登陆请求的时候
router.get('/center.html', (req, res) => {

    const filePath = path.resolve(__dirname, '../views/center.html');
    res.sendFile(filePath);
})


module.exports = router;