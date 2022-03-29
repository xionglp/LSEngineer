import { sum, mul } from "./utils/main.js"

const { dateFormat, priceFormat } = require("./utils/format.js")

console.log(sum(10, 20));
console.log(mul(10, 20));

console.log(dateFormat());
console.log(priceFormat());