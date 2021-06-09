//引入mongoose模块
const mongoose=require('mongoose');
//建立约束
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:true, //设置成不可重复，唯一值
        required:true//必填项
    },
    password:{
        type:String,
        required:true//必填项
    }
})
//建立模块
const userModel=mongoose.model('login',userSchema);
module.exports = userModel;