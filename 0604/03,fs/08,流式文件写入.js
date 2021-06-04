//引入fs模块
const fs = require('fs');
//引入path模块得到绝对路径
const path = require('path');
//读取文件的绝对路径
const readFilePath = path.resolve(__dirname, 'text.txt');
//写入文件的绝对路径
const writeFilePath = path.resolve(__dirname, 'newText.txt');

//创建一个可读流
const rs = fs.createReadStream(readFilePath);
//创建一个可写流
const ws = fs.createWriteStream(writeFilePath, {flags: 'a'});

//将可读流读取到的数据写入可写流文件中
rs.on('data', (chunk) => {
    ws.write(chunk);
})
//监听可读流是读取完毕，读取完毕关闭可写流
rs.on('close', () => {
    //关闭可写流
    ws.close();
    console.log('写入完成');
})
//监听可写流是否关闭,关闭则提醒写入完毕
ws.on('close', () => {
    console.log('文件写入完毕');
})



