//引入自定义连接数据库模块
require('./db/index');
//引入teachers模块
const teachers=require('./schema/index');

//创建一个老师
teachers.create({
    name:"张三"
}).then(() => {
    console.log('创建成功');
}).catch((err) => {
    console.log(err)
    console.log('创建失败');
})


