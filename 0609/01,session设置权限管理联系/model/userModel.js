//引入mongoose模块
const mongoose=require('mongoose');
//新建一个约束
const userModelSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

//新建一个模块，应用上约束
const userModel=mongoose.model('userInfo',userModelSchema);
//暴露出模块
module.exports = userModel;