// node js/01_array.js


let nums = [1,2,3,4,5];
let part = nums.slice(0, 3);  // [2, 3]

console.log(part)

let arr = [1,2,3,4,5,6,7,8,9,10];
arr.splice(1, 6);  // [1, 4]

console.log(arr)

let colors = ["red", "green", "blue", "yellow", "purple"];
let result = colors.slice(1, 4);
console.log(result);


let numbers = [10, 20, 30, 40, 50];
numbers.splice(2, 2);
console.log(numbers);


let fruits = ["apple", "banana", "mango"];
fruits.splice(2, 0, "orange");
console.log(fruits);



let arrays = [0,1,2,3,4,5]
console.log(arrays[1],arrays)

let newNumber = new Array(0,1,2,3,4,5,6)
console.log(newNumber)

const frut = ["Apple", "Mongo", "Banana"]
frut.push('Orange')
frut.pop()
frut.unshift("grapes")
frut.shift()
frut.includes("Orange")
console.log(frut.indexOf('Banana'))
console.log(frut)


const hero = [1,2,3,4,5,6]

hero.splice(1,3,101,102,103)
console.log(hero)

let aother = [1,2,3,4]
let aother2 = [5,6,7,8]

// let add = aother.concat(aother2)

let speard = [...aother, ...aother2]
console.log(speard)

const another_array = [1,2,3,[4,5,6],7,[8,9,10,[11,12,13,14,[15,16,17,18]]]]
const real_another_array = another_array.flat(Infinity)

console.log(real_another_array)

// +++++++++++++++++++++++++++++++++++++ method (from)++++++++++++++++++++++++++++++++++++++++++++++
console.log(Array.isArray("Nitin"));
console.log(Array.from("Nitin"))

let socre1 = 100
let socre2 =200
let socre3 =300

console.log(Array.of(socre1,socre2,socre3))