//引入第三方mongoose模块
const mongoose=require('mongoose');
//创建schema，对未来添加的数据进行约束
const studentSchema=new mongoose.Schema({
    name:{
        type:String,//限制填入类型必须为字符串
        unique:true,//限制这个值是个唯一值，将来不能重复
        required:true,//限制为必填项
    },
    sex:{
        type:String,//限制填入类型必须为字符串
        default:'男'
    },
    age:{
        type:Number,//限制填入类型必须为字符串
        required:true,//限制为必填项
    },
    hobby:{
        type:[String],//限制填入类型必须为数组，数组的value必须为String
    }
})
//直接将约束的数据库集合建立
const studentModule=mongoose.model('student',studentSchema);
module.exports = studentModule;