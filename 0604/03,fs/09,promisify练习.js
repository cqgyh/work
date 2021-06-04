//引入fs模块
const fs = require('fs');
//引入path模块得到绝对路径
const path = require('path');
//文件的绝对路径
const filePath = path.resolve(__dirname, 'text.txt');

//promisify是把一个异步方法处理 返回一个函数，并且这个函数已经使用promise进行封装了，如果异步成功则返回成功的promise对象，否则返回失败的promise对象
// 使用promisify 需引入util包
const {promisify} = require('util');
const readFile = promisify(fs.readFile);
//读取文件,参数与fs.readFile一样 使用方法也一样，不同的是已经使用promise进行封装了，类似下面
// function open() {
//     return new Promise((resolve,reject) => {
//         //打开文件
//         fs.open(filePath,'a', (err,fd) => {
//             //错误处理
//             if(err){
//                 //将promise状态改为失败，直接返回这个失败对象给async
//                 reject(err);
//                 return;
//             }
//             resolve(fd);
//             console.log('文件打开');
//         })
//     })
// }

readFile(filePath).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})