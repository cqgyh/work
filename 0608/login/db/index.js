//引入数据库模块
const mongoose=require('mongoose');

//连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/login').then(() => {
    console.log('数据库连接成功');
}).catch((err) => {
    console.log(err)
});
