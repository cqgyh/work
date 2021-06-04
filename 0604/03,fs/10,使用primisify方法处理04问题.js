//引入fs模块
const fs = require('fs');
//引入path模块得到绝对路径
const path = require('path');
//得到当前文件夹的绝对路径
const filePath = path.resolve(__dirname, 'text.txt');
//引入promisify
const {promisify} = require('util');
const open=promisify(fs.open);
const write=promisify(fs.write);
const close=promisify(fs.close);
(async function () {
    const fd=await open(filePath,'a');
    await write(fd,'使用promisify优化');
    await close(fd);
    return '写入成功';
})().then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})