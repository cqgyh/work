//引入第三方模块
const express=require('express');
//创建一个新的express对象
const app=new express();
const path=require('path');
//设置接口 '/'表示服务器根路径
app.get('/', (req,res) => {
    console.log('服务器被连接了');
    //重定向到主页
    // res.redirect("https://www.baidu.com");

    //发送资源，若能解析则打开，不能解析则下载
    const indexPath=path.resolve(__dirname,'index.html')
    res.sendFile(indexPath);
})

//post请求
app.post('/login', (req,res) => {
    res.send('登陆成功');
})
//监听服务器是否被开启
app.listen(3001, (err) => {
    if (err){
        console.log(err);
        return;
    }
    console.log('服务器成功开启，地址：http://127.0.0.1:3001');
})