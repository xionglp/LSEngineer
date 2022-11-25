const name = "foo"
const age = 19
function sayHello() {
  console.log("hello")
}

// 1.在开发中很少使用
// exports.name = name
// exports.age = age
// exports.sayHello = sayHello

// 2. 将模块中的内容导出，Node导出的本质是在导出module.exports对象
// module.exports.name = name
// module.exports.age = age
// module.exports.sayHello = sayHello

// console.log(exports === module.exports)

// 3. 开发中常见的写法
module.exports = {
  name,
  age,
  sayHello
}