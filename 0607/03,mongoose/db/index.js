//引入第三放mongoose模块
const mongoose = require('mongoose');

//建立数据库连接
mongoose.connect('mongodb://127.0.0.1:27017/atguigu',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('数据库连接成功');
    })
    .catch((err) => {
        console.log(err);
        console.log('数据库连接失败');
    });

