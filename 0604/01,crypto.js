//引入加密包
const crypto = require('crypto');
//创建并指定一个加密算法 得到一个哈希对象
const hash = crypto.createHash('sha256');

//创建一个需要加密的数据
let date='cuiqiang';
//使用update方法得到对应的hash对象，参数是明文和明文的字符编码
//用哈希对象的update方法加密数据,得到加密后的哈希对象 第一个参数指定需要加密的数据，第二参数指定字符串编码,未指定默认是utf-8
const hashSecret=hash.update(date,'utf-8');

//将得到加密后的hash对象用digest方法 解密成密文
const dateSecret=hashSecret.digest('hex');

console.log(hashSecret);
console.log(hashSecret);
console.log(dateSecret);

// const crypto = require('crypto');
//
// const secret = 'abcdefg';
// const hash = crypto.createHmac('sha256', secret)
//     .update('123','utf-8')//使用update方法得到对应的hash对象，参数是明文和明文的字符编码,
//     .digest('hex');
// console.log(hash);
