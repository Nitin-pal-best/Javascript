
const mysym = Symbol("key1")
const user ={
    name : "Nitin",
    age : 21,
    [mysym]: "mykey1",
    "full name": "Nitin Pal",
    location: "jaipur",
    email: 'nitin.pal447053@gmail.com',
    isloggedIn: false

}
// delete user.age;

// console.log(user['name']);
// console.log(user['full name']);
// console.log(user[mysym]);

user.email = "nitin@chatgpt.com"
// Object.freeze(user)
user.email = "nitin@microsoft.com"

// console.log(user)

user.blog = function(){
    console.log("Hey! Welcome our website")
}

user.greeting = function(){
    console.log(`Hello js user! ${this.name}, your email: ${this.email} and ${this[mysym]}`)
}
user.blog()
user.greeting()

console.log(user)


const bike = new Object();
bike.brand = "Yamaha";
bike.cc = 150;

console.log(bike);

const car = new Object()
car.brand = "Honda";
car.cc = 200;

console.log(car);

