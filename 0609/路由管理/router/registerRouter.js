//引入express模块
const express=require('express');
//引入用户管理模块
const userModel = require("../model/user");
//引入path模块
const path = require("path");

//创建router
const router=new express.Router();

//注册接口
router.get("/register",async (req,res) => {
    //拿到用户名和密码
    const {username,password}=req.query;

    // //查看用户名和密码是否为空
    // if(!username||!password){
    //     //拼接err.ejs的路径
    //     const filePath=path.resolve(__dirname,'./public/err.ejs');
    //     //返回页面
    //     return res.render(filePath,{
    //         errData:"账号密码不能为空"
    //     });
    //     // res.send("账号密码不能为空");
    //     // return;
    // }
    //判断当前的用户名是否被注册
    //去数据库查询当前的用户名
    const isHasUser = await userModel.findOne({
        username
    })

    if (isHasUser) {
        //拼接err.ejs的路径
        const filePath = path.resolve(__dirname, "../views/err.ejs");
        return res.render(filePath, {
            errData: "用户名已经被注册"
        })
    };

    //向数据库写入当前用户信息
    await userModel.create({
        username,
        password
    });
//注册成功，跳转到登陆页面
//     res.send("注册成功");
    res.redirect('/login.html');


})


module.exports = router;