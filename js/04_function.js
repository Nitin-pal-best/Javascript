// node js/04_function.js

function real(num, num2){
    return num + num2
}
const vp = real(5,6)
console.log(vp)

function greeting(username){
    if(!username){
        console.log("please enter username!");
        return;
    }
    return `${username} just logged in`;
}

console.log(greeting("Nitin"))



const user ={
    userName : "Nitin",
    price : 200,
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);
    
}

handleObject(user);


function numberCheck(num){
    if(num%2===0){
        console.log(`Number is ${num} even number`)
    }
    else{
        console.log("Odd number")
    }
}

numberCheck(10)




// let obj ={
//     name : "Nitin",
//     age : 21,
// }

// function person(data){
//     console.log(`My name is ${data.name} and my age is ${data.age}`)
// }

// person(obj)



// function createPerson(name , age){
//     console.log(`my name is ${name} and i twenty one ${age} years old`)
// }

// createPerson("Nitin Pal", 21)

// function createPerson(name, age){
//     return{
//         name : name,
//         age : age,
//     };
// }

// let  newPerson = createPerson("Nitin", 21)
// console.log((newPerson));



// function with Array
function createPerson(...num){
    return num
}
console.log(createPerson(100,200,300,440))