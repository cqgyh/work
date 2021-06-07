//引入第三方mongoose模块
const mongoose=require('mongoose');

//创建一个新的约束
const teacherSchema=new mongoose.Schema({

    name:{
        type:String,
        unique:true,
        required:true
    },
    creatTime: {
        type:Date,
        default:Date.now
    }
})
//创建老师模块
const teachersModel=mongoose.model('teachers',teacherSchema);
//将创建的老师模块暴露出去
module.exports = teachersModel;