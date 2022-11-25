import "../css/index.css"
import "../css/component.less"

import zznhImage from "../img/zznh.png"

function component() {
  const element = document.createElement("div");
  element.innerHTML = ["hello", "webpack"].join(" ");
  element.className = "content";

  const img1 = new Image();
  // img1.src = require("../img/zznh.png").defalut;
  img1.src = zznhImage;
  element.appendChild(img1);

  // const div2 = document.createElement("div");
  // div2.style.height = 200 + "px";
  // div2.style.width = 200 + "px";
  // div2.style.backgroundColor = "red";
  // div2.className = "bg-image";
  // element.appendChild(div2)


  // 创建一个div, 设置背景图片
  const bgDivEl = document.createElement('div');
  bgDivEl.style.width = 200 + 'px';
  bgDivEl.style.height = 200 + 'px';
  bgDivEl.className = 'bg-image';
  bgDivEl.style.backgroundColor = "red";
  element.appendChild(bgDivEl);

  const iEl = document.createElement("i");
  iEl.className = "iconfont icon-ashbin why-iconfont";
  element.appendChild(iEl);

  return element;
}

document.body.appendChild(component());