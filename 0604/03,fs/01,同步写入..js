//引入fs模块
const fs=require('fs');
//引入path模块得到绝对路径
const path=require('path');

//得到当前文件夹的绝对路径
const filePath=path.resolve(__dirname,'text.txt');

//同步打开文件(第二个参数是文件系统的flag:默认r代表可写，如果没有这个文件则报错，还有a,代表追加写入，如果没有这个文件则创建)、
const fd=fs.openSync(filePath,'a');

//同步写入
fs.writeSync(fd,'哈哈哈哈你看不到我吧'+'\n');

//关闭文件
fs.closeSync(fd);
console.log('文件写入完毕');
