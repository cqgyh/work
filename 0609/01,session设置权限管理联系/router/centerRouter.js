//引入express包
const express = require('express');
const path = require("path");
//创建Router
const router = new express.Router();

//权限管理
router.use('/center.html', (req, res, next) => {
    //判断session
    if (req.session.username) {
        const filePath = path.resolve(__dirname, '../views/err.ejs')
        return res.render(filePath, {
            errData: '权限不足'
        })
    }

    next();

});

//将请求挂载到路由上
router.get('/center.html', (req, res, next) => {
    //拿到账号密码
    const {username} = req.query;
    //跳转到个人中心
    const filePath = path.resolve(__dirname, '../views/center.ejs');
    res.render(filePath, {
        user: username
    });
    next();


});

//直接请求center
//暴露路由
module.exports = router;