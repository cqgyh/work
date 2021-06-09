//引入mongoose模块
const mongoose = require('mongoose');
//连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/0609demo',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(r => console.log('数据库连接成功'))
    .catch(err => console.log('数据库连接失败'));
