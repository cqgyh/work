//引入第三方模块express
const express=require('express');


//创建一个express对象
const app=new express();
//引入path模块
const path=require('path');

//创建接口
app.get('/',(req,res) => {
    console.log('主机被请求了');

    //返回一个页面
    const filePath=path.resolve(__dirname,'index.html');
    console.log(filePath);
    res.sendFile(filePath, (err) => {
        if(err){
            console.log(err);
            return;
        }
        console.log('返回成功')
    })

})
//如果路径错误了话
app.get("/:id", (req,res) => {
    res.send('访问路径错误');
})
//注册请求：
app.post("/register", (req,res)=> {
    console.log('post请求成');
    // send自动设置了请求头
    res.send('注册成功');
});

//监听服务器
app.listen(3001, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("服务启动成功，请访问：" + `http://127.0.0.1:3001`);
})