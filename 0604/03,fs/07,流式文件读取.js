//引入fs模块
const fs = require('fs');
//引入path模块得到绝对路径
const path = require('path');
//得到当前文件夹的绝对路径
const filePath = path.resolve(__dirname, 'text.txt');

//创建一个可读流
const rs=fs.createReadStream(filePath);

//打开一个可读流，只要有数据读取 data就会触发，读流每次最大释放的数据大小是64kb，将会一直持续释放
rs.on('data', (chunk) => {
    console.log(chunk);
})
//监听是否读取完毕
// rs.on('end', () => {
//     console.log('数据读取完毕');
// })
rs.on('close', () => {
    console.log('数据读取完毕');
})