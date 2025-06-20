// # Primitive Data Type
// Seven type Datatype
// string
// number
// Boolean
// undifined
// null
// symbol
// bigInt


const str = "Nitin"
console.log(str);

const num = 32
console.log(num);

const bool = true
console.log(bool);

const valueaBle = undefined
console.log(valueaBle);

const nullNumber = null
console.log(typeof nullNumber);

const id = Symbol("123")
const anotherId = Symbol("123")
const valueAble = id === anotherId

console.log(valueAble)



// Reference (No Primitive DataType)
// Object
// function
// array

// array
const list =['Nitin', "Sonu", "Nisha", "Shiv kumari", "Nemsingh", "khushi"]
console.log(list)

// Object
const obj ={
    name : "Nitin",
    age : 21,
    salary : 1200000,
}
console.log(obj)

const myFunction = function(){
    console.log("Hello Nitin");
};
myFunction();




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack memory and Heap memory

let myYoutuber = "Nitin"

let anotherPeople = myYoutuber

anotherPeople = "Khushi"

console.log(myYoutuber)
console.log(anotherPeople)

let person ={
    email : "nitin.pal443054@gamil.com",
    upi : "nitin@ybl",
}

let twoPerson = person

twoPerson.email = "paln44004@gmail.com"

console.log(person.email)
console.log(twoPerson.email)