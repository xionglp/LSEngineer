import { name, age, sayHello } from "./foo.js";

console.log(age, name)
sayHello()

// 2.import函数的使用
// 不允许在逻辑代码中编写import导入声明语法, 只能写到js代码顶层
// 如果确实是逻辑成立时, 才需要导入某个模块
// const importPromise = import("./foo.js")
// importPromise.then(res => {
//   console.log(res.name, res.age)
// })
import("./foo.js").then(res => {
  console.log(res.name, res.age)
})

console.log("------")