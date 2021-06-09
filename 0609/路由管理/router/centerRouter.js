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
    //当用户访问/center.html时，判断是否携带服务端发送的cookie
    console.log(req.cookies);//引入过cookie-parser包的方法
    // console.log(req.header.cookie);//原生方法，拿到后没有解析 直接拿的

    //判断是否携带cookie
    if(req.cookies.userID){


        //这里用try catch的原因是因为如果再数据中查询的时候 cookie被修改了会直接报错导致无法继续运行
        //数据库查ID会校验位数之类的数据，一旦对比不上，不进行查询，直接报错
        try {
            //如果有，判断cookie值是否存在数据库中
            const re=await userModel.findOne({
                _id:req.cookies.userID
            });
            if (re){
                next()
            }else{
                //拼接err.ejs的路径
                const filePath=path.resolve(__dirname,'../public/err.ejs');
                //返回页面
                return res.render(filePath,{
                    errData:"权限不足，请重新登录"
                });

            }
        }catch (e) {
            //拼接err.ejs的路径
            const filePath=path.resolve(__dirname,'../views/err.ejs');
            //返回页面
            return res.render(filePath,{
                errData:"权限不足，请重新登录"
            });
        }



    }else{
        //拼接err.ejs的路径
        const filePath=path.resolve(__dirname,'../views/err.ejs');
        //返回页面
        return res.render(filePath,{
            errData:"权限不足，请重新登录"
        });

    }




})


//当接受到登陆请求的时候
router.get('/center.html', (req, res) => {

    const filePath = path.resolve(__dirname, '../views/center.html');
    res.sendFile(filePath);
})


module.exports = router;