const foo = require("./util.js")
// 或者用展开语法也行
// const { UTIL_NAME, formatCount, formatDate } = require("./util")
console.log(foo)

console.log(foo.UTIL_NAME)
console.log(foo.formatCount())
console.log(foo.formatDate())