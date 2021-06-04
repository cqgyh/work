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


// pipe会持续性消费可读流数据
// 将可读流数据写入到可写流中
// 会自动关闭可写流
rs.pipe(ws);

//监听可读流
rs.on("end", (err) => {
    if(err){
        return;
    }
    console.log("读取完成");
})
ws.on('close', () => {
    console.log('写入关闭');
})