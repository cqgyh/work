//引入第三方连接数据库的模块 mongoose
const mongoose = require('mongoose');
//连接数据库  'mongodb://127.0.0.1:27017/login'
mongoose.connect('mongodb://127.0.0.1:27017/test',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('数据库连接成功');
    })
    .catch((err) => {
        console.log(err);
    });
