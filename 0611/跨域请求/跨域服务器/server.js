const express = require('express');
const path = require("path");
const app = express();


app.get("/", (req, res) => {
    const filePath = path.resolve(__dirname, "./index.html");
    res.sendFile(filePath)
})



app.get('/login', (req, res) => {

    //拿到前端发送的数据
    const {user,pass,callback}=req.query;
    console.log(req.query);

    //判断前端发送过来的user，pass是否正确  假设数据库中user=123，pass=123
    //设置响应头
    res.setHeader('content-type','application/javascript;charset=utf-8');
    if (user==='123'&&pass==='123'){
        const data={
            mes:'ok',
            code:1
        }
        return res.send(`${cb}(${JSON.stringify(data)})`);
    }
    const err={
        mes:'no ok',
        code:0
    }
    return res.send(`${callback}(${JSON.stringify(err)})`);



});

app.listen('3000', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('服务器启动成功，地址：http://127.0.0.1:3000');

})