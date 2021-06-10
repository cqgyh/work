const express = require('express');
const path = require("path");
const fs = require("fs");
const zlib = require('zlib');

const app = express();


app.get('/', (req, res) => {

    const filePath = path.resolve(__dirname, './index.html');
    const rs = fs.createReadStream(filePath);


    //获取请求里面的压缩格式
    const zipType = req.headers['accept-encoding'];
    console.log(zipType);

    if (zipType.includes('gzip')) {
        const zipRs = rs.pipe(zlib.createGzip());
        //设置响应头通知要使用的压缩格式
        res.set('Content-Encoding', 'gzip');
        return zipRs.pipe(res);
    }
    if (zipType.includes('deflate')) {
        const zipRs = rs.pipe(zlib.createDeflate());
        //设置响应头通知要使用的压缩格式
        res.set('Content-Encoding', 'deflate');
        return zipRs.pipe(res);
    }
    //如果都没有 不压缩发送
    rs.pipe(res);


});


app.listen('3000', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('服务器启动成功，地址：http://127.0.0.1:3000');

})