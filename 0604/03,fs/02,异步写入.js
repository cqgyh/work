//引入fs模块
const fs = require('fs');
//引入path模块得到绝对路径
const path = require('path');
//得到当前文件夹的绝对路径
const filePath = path.resolve(__dirname, 'text.txt');

//打开文件
 fs.open(filePath, 'a', (err,fd) => {
    if (err) {
        return;
    }
    console.log('文件已打开');
    //写入文件
    fs.write(fd, '0.0'+'\n', (err) => {
        if (err) {
            return;
        }
        //关闭文件
        fs.close(fd, (err) => {
            if (err) {
                return;
            }
            console.log('文件关闭');
        });
    });


});

