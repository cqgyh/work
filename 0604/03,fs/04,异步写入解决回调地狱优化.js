//引入fs模块
const fs = require('fs');
//引入path模块得到绝对路径
const path = require('path');
//得到当前文件夹的绝对路径
const filePath = path.resolve(__dirname, 'text.txt');
function open() {
    return new Promise((resolve,reject) => {
        //打开文件
        fs.open(filePath,'a', (err,fd) => {
            //错误处理
            if(err){
                //将promise状态改为失败，直接返回这个失败对象给async
                reject(err);
                return;
            }
            resolve(fd);
            console.log('文件打开');
        })
    })
}
function write(fd) {
    return new  Promise((resolve,reject) => {
        fs.write(fd,'优化解决回调地狱'+'\n', (err) => {
            //错误处理
            if(err){
                //将promise状态改为失败，直接返回这个失败对象给async
                reject(err);
                return;
            }
            resolve(fd);
        })
    })
}
function close(fd) {
    return new Promise((resolve,reject) => {
        fs.close(fd, (err) => {
            //错误处理
            if(err){
                //将promise状态改为失败，直接返回这个失败对象给async
                reject(err);
                return;
            }
            resolve(fd);
            console.log('文件关闭');
        })
    })
}

(async function () {
    const  fd=await open();

    await write(fd);
    const re=await close(fd);
    return re;
})()