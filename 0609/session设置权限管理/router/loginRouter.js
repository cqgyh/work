//引入express模块
const express=require('express');
//
const userModel = require("../model/user");
const path = require("path");

//创建router
const router=new express.Router();

//登陆接口
router.get('/login', async (req,res) => {
    //拿到用户名和密码
    const {username,password}=req.query;
    //查看用户名和密码是否为空
    // if(!username||!password){
    //     //拼接err.ejs的路径
    //     const filePath=path.resolve(__dirname,'./public/err.ejs');
    //     //返回页面
    //     return res.render(filePath,{
    //         errData:"用户名和密码不能为空"
    //     });
    //     // return res.send('用户名和密码不能为空');
    // }
    //根据用户名查询是否存在用户
    const isHasUser=await userModel.findOne({username});

    if (!isHasUser){
        //拼接err.ejs的路径
        const filePath=path.resolve(__dirname,'../views/err.ejs');
        //返回页面
        return res.render(filePath,{
            errData:"用户不存在"
        });
        // return res.send('用户不存在');
    }
    //判断密码是否正确
    if(isHasUser.password!=password){
        //拼接err.ejs的路径
        const filePath=path.resolve(__dirname,'../views/err.ejs');
        //返回页面
        return res.render(filePath,{
            errData:"密码输入错误"
        });
        // return res.send('密码输入错误');
    }

    //登陆成功,设置请求session存储到服务端
    req.session.username=username;
    //登陆成功，跳转到center页面
    const filePath=path.resolve(__dirname,'../views/center.html');
    res.sendFile(filePath);




})











module.exports = router;