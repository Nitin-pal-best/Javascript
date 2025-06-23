// Singleton

const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "Nitin"
tinderUser.isloggedIn = false

// console.log(tinderUser)

const regularUser ={
    email: "nitin@gmail.com",
    userName :{
        name :"Nitin",
        lastName :"pal",
    }
}
// console.log(regularUser.userName)


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "c", 6: "d"}

// const final = Object.assign(obj1,obj2)
// const final = Object.assign( {},obj1,obj2)

const final = {...obj1, ...obj2, ...obj3}
console.log(final);


const value = {
    course : "js in hindi",
    price : 999,
    teacher: "Nitin"
}

const {teacher: sir} = value

console.log(sir)