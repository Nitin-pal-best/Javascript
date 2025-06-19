
// node partices/01_string.js

let firstName = "Nitin"
let lastName = "rana"
let fullName = firstName + " " + lastName
console.log(fullName)


let tri = "  Hello World  "
let trim2 = tri.trim()
console.log(tri);
console.log(trim2);



let name = "My name is Nitin rana"
let nam =  name.includes("rana")
console.log(nam);


let char = "Hello"
let chart = char.charAt(0)
console.log(chart);

let change = "I love javascript"
let ischange = change.replace("love", "like")
console.log(ischange);


let name1 = "Nitin"
let course = "javascript"
let message = `Hello ${name1}\nwelcome to ${course} course`
console.log(message);


// Captilaize karne ka treeka
let capital = "javascript"
let capital2 = capital.charAt(0).toUpperCase() + capital.slice(1).toLowerCase()
console.log(capital2);


let str = "apple apple apple";
console.log(str.replaceAll("apple", "banana"));  
// Output: "banana banana banana"



function toTitleCase(sentence) {
  return sentence
    .toLowerCase() // sabko lowercase me convert karo
    .split(" ")    // words me split
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // capitalize
    .join(" ");     // wapas jodo
}

let input = "my name is nitin rana";
let result = toTitleCase(input);
console.log(result);  // Output: "My Name Is Nitin Rana"


