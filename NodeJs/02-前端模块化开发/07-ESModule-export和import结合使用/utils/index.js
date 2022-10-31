// 工具类中的 index.js 一般情况不写具体的逻辑， 只是导入导出
// import { formatCount, formatDate } from "./format.js"
// import { parseLyric } from "./parse.js"

// export {
//   formatCount, 
//   formatDate,
//   parseLyric
// }

// 优化一写法：
// export { formatCount, formatDate } from "./format.js"
// export { parseLyric } from "./parse.js"

export * from "./format.js"
export * from "./parse.js"