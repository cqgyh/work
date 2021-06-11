//统一暴露
const a=10,b=20;
function sub1() {
    console.log('统一暴露'+(a-b))

}
function sub2() {
    console.log('统一暴露'+(b-a))

}

export {
    sub1,
    sub2
}