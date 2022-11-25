// 方式一:
// import { name, age, sayhello } from "./foo.js";
// console.log(name, age)
// sayhello()

// 方式二:
// import { fName as xName, fAge, fSayhello } from "./foo.js"
// console.log(xName)
// console.log(fAge)
// fSayhello()

// 方式三: 
import * as foo from "./foo.js"
console.log(foo.name, foo.age)
foo.sayhello()