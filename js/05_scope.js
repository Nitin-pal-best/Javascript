
// var c = 300

let a = 100
if(true){
    let a  =  5;
    const b = 10;
    // var c = 40;
    // console.log("Inner",a)
}
// console.log(c)
// console.log(a)

let name = "Nitin" // Global Scope

function greet(){
    // console.log(`Hi!, I am ${name}`) // name acciable hai
}

greet()
// console.log(name)


function one(){
    const username = "Nitin"

    function two(){
        const website = "Youtuber"
        // console.log(username)
        // console.log(website)
    }
    two()
}
one()

if (true) {
  const username = "Nitin";
  if (username === "Nitin") {
    const website = " Youtuber"
    // console.log(username.concat(website))
  }
//   console.log(website);
}

// console.log(d)
// var d = 10


// console.log(name)
// let name = 20;

// console.log(list)
// const list = 30



// object ke ander this keyword

const obj = {
    name: "Nitin",
    greet: function(){
        console.log(this.name)
    }
}
// obj.greet()






function num(){
    console.log(this)
}
// num()

const number = {
    name : "Jyoti",
    greet: function(){
        console.log(this.name)
        // console.log(this)
    }
}
number.greet()
number.name = "Nitin"
number.greet()



