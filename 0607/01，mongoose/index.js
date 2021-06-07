//引入自定义数据库连接模块
require('./db/db');
//引入student模块 准备增添数据
const student = require('./schema/StudentSchema');

student.create({
    name: "李四",
    age: 18,
    sex: "男",
    hobby: ["唱", "跳"],
}).then(() => console.log('创建成功')).catch(err => console.log(err));