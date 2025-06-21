// node 01_basic_js/08_number.js

const num = new Number(100)
console.log(num)

console.log(num.toFixed(2))

const number = 99.8966
console.log(number.toPrecision(3))
console.log(typeof number.toString(), number.toString())


const local = 1000000
console.log(local.toLocaleString('en-IN'))
