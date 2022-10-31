export const name = "xionglp"
export const age = 19
export function sayhello() {
  console.log("xionglp sayhello")
}

// 方式一:
// ESModule 导出
// export {
//   name,
//   age,
//   sayhello
// }

// 方式二: 导出时给标识符取一个别名
// export {
//   name as fName,
//   age as fAge,
//   sayhello as fSayhello
// }