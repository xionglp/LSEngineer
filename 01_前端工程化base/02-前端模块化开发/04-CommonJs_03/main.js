// 1. 根据路径导入自己编写的模块
const utils = require("./utils")
console.log(utils.formatDate())

const foo = require("./foo")
console.log(foo.age, foo.name)

// 2. 导入node提供的内置模块
const path = require("path")
const http = require("http")
console.log(path)
console.log(http)

// 3. 名称不是路径，也不是一个内置模块
// const why = require("why")
// console.log(why)


// 备注: 模块加载过程
// 1> 模块在第一次被引入时，模块中的js代码会被加载一次；
// 2> 模块被多次引入时，会缓存，最终只会加载运行一次
// 3> 如果有循环引入，加载顺序是： Node采用的是深度优先算法
