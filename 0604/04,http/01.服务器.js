//引入http模块
const http=require('http');
//创建一个服务端
//使用http模块创建一个服务  参数是一个回调函数 监听客户端请求（当客用户端请求了这个服务器 则回调函数调用）
//回调函数有两个参数，一个是请求对象request 一个是响应对象response
const server=http.createServer((request,response) => {

    console.log('客服端正在请求');
    //设置响应头
    response.setHeader('Content-Type','text/plain;utf-8');
    //接收到请求 响应一个网址
    response.end('http://www.baidu.com');

})

//设置服务器端口
let port=3000;
//设置服务器地址
let host='localhost';
//监听服务器是否启动
//给当前创建的服务添加端口号和主机地址,第三个参数是个回调函数，当启动服务的时候调用
server.listen(port,host, () => {
    console.log("服务器启动,请访问：" + `http://${host}:${port}`);
})