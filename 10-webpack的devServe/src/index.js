import "./math.js";
import React from "react";
import ReactDom from "react-dom";
import ReactApp from "./App.jsx";

import Vue from "vue";
import VueApp from "./App.vue"

console.log("hello webpack s");

if (module.hot) {
  module.hot.accept("./math.js", () => {
    console.log("math模块发生热更新");
  })
}

// React代码
ReactDom.render(<ReactApp/>, document.getElementById("app"));

// Vue代码
new Vue({
  render: h => h(VueApp)
}).$mount("#root");

