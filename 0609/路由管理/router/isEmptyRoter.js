//引入express模块
const express=require('express');
//引入path模块
const path = require("path");


//创建router
const router=new express.Router();

//自定义帐号密码不为空中间件
//不写路径代表所有请求都要从这里过一遍
router.use((req,res,next) => {
    //拿到用户名和密码
    const {username,password}=req.query;

    //查看用户名和密码是否为空
    if(!username||!password){
        //拼接err.ejs的路径
        const filePath=path.resolve(__dirname,'../views/err.ejs');
        //返回页面
        return res.render(filePath,{
            errData:"账号密码不能为空"
        });
    }
    next();

});


module.exports = router;