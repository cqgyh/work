//引入mongoose第三方模块
const mongoose = require('mongoose');
//连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/atguigu', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//设置数据库监听事件

mongoose.connection.once('open', (err) => {
    if(err){
        console.log(err);
        console.log('数据库连接失败');
        return;
    }

    console.log('数据库连接成功');
})


