//引入第三方mongoose模块
const mongoose=require('mongoose');
//新建立一个user约束
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

//创建一个符合约束的user模块 第一个参数是在数据库中集合的名字 第二个参数是约束
const userModel=mongoose.model('userInfo',userSchema);
//暴露出创建好的模块
module.exports = userModel;