const express = require('express');
const path = require("path");
const app = express();
//post请求不能用res.query接收到，需要用第三方包
// body-parser中间件是处理post请求数据的
const bodyParser=require('body-parser');
// parse application/json  接收json字符串配置这个
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded  接收form表单样式配置这个
app.use(bodyParser.urlencoded({ extended: false }))



app.get("/", (req, res) => {
    const filePath = path.resolve(__dirname, "./index.html");
    res.sendFile(filePath)
})


app.post('/login', (req, res) => {

    //拿到前端发送的数据
    const {user,pass}=req.body;
    console.log(req.body);
    console.log('query:'+req.query);

    //判断前端发送过来的user，pass是否正确  假设数据库中user=123，pass=123
    if (user==='123'&&pass==='123'){
        const data={
            mes:'ok',
            code:1
        }
        return res.json(data);
    }
    const err={
        mes:'no ok',
        code:0
    }
    return res.json(err);



});

app.get('/login', (req, res) => {

    //拿到前端发送的数据
    const {user,pass}=req.query;
    console.log(req.query);

    //判断前端发送过来的user，pass是否正确  假设数据库中user=123，pass=123
    if (user==='123'&&pass==='123'){
        const data={
            mes:'ok',
            code:1
        }
        return res.json(data);
    }
    const err={
        mes:'no ok',
        code:0
    }
    return res.json(err);



});

app.listen('3000', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('服务器启动成功，地址：http://127.0.0.1:3000');

})