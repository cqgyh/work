//引入express模块
const express = require('express');
//创建一个application对象
const app = express();
//引入path
const path = require('path');
//引入第三方模版引擎ejs
const ejs=require('ejs');
//通知express使用ejs模版引擎
app.set('view engine','ejs');
app.set('views','views');

//设置接口
app.get('/', (req,res) => {
//获取模版的路径
    const  filePath=path.resolve(__dirname,'index.ejs');
    const  data='哈哈哈';
    res.render(filePath,{
        data
    })
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