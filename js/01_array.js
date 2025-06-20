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
