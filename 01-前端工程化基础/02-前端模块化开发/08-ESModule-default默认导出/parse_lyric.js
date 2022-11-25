// 一个模块只能有一个默认导出default

// 常规写法
function parseLyric() {
  return ["歌词"]
}

const name = "xionglp"

export {
  name
}

export default parseLyric