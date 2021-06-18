import add from './add';
import person from './person.json';

//将所有的less文件引入到入口文件，让webpack进行统一编译,webpack会将他们写入的js中然后 以js的方式重新写入style标签中重新插入的页面
import '../less/public.less';
import '../less/test.less';



add(6,4);
console.log(person);
