//引入fs模块
const fs = require('fs');
//引入path模块得到绝对路径
const path = require('path');
//得到当前文件夹的绝对路径
const filePath = path.resolve(__dirname, 'text.txt');

//创建简单写入
const re=fs.readFile(filePath,(err) => {
    if(err){
        return err;
    }
    console.log('读取成功');

})


