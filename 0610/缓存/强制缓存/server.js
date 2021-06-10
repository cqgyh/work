const express=require('express');
const path = require("path");
const app=express();
const fs=require('fs');

app.get('/', (req,res) => {
    const filePath=path.resolve(__dirname,'./index.html');
    const rs=fs.createReadStream(filePath)

    rs.pipe(res);

})


app.get('/img', (req,res) => {
    const filePath=path.resolve(__dirname,'./lijing.jpg');
    const rs=fs.createReadStream(filePath)
    //设置响应头 强制缓存
    res.set('Cache-Control','max-age=10000');

    rs.pipe(res);

})








app.listen('3000', (err) => {
    if (err){
        console.log(err);
    }
    console.log('服务器启动，地址:http://127.0.0.1:3000');
})