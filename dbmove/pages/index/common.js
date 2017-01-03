//common.js
// function sayHello(name){
//     consoleconsole.log('hello'+name);
// }
// function sayBay(name){
//     consoleconsole.log('bay'+name);
// }
// module.exprots.sayHello = sayHello
// exprots.sayBay = sayBay

// common.js
function sayHello(name) {
  console.log(`Hello ${name} !`)
}
function sayGoodbye(name) {
  console.log(`Goodbye ${name} !`)
}

module.exports.sayHello = sayHello
exports.sayGoodbye = sayGoodbye