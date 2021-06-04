//引入模块
const EventEmitter=require('events');
//创建一个继承的子类 避免不小心修改到父类
class MyEmitter extends EventEmitter{};
//实例化一个新的事件触发器
const myEmitter=new MyEmitter();

//设置一个事件监听
// myEmitter.on('myClick', () => {
//     console.log('我被点击了');
// })

myEmitter.on('myClick', function (){
    console.log('我被点击了');
    console.log(this)
})
//触发事件
myEmitter.emit('myClick');
