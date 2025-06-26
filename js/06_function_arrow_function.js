// node js/06_function_arrow_function.js


function real(parameter){
    console.log(parameter);
    
}
// real("Krish")

const  greet = (name) => {
    console.log(name)
}
// greet("Nitin")


const chai = (a, b) => (a * b);
console.log(chai(5 , 2))


const obj = () => ({name: "Nitin", age: 21,});
console.log(obj())
