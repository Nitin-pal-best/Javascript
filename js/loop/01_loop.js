

for (let i = 1; i <= 20; i++) {
//   console.log(`Table ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`${i} X ${j} = ${i * j}`);
  }
}


const myArray = ['Nitin', 'Khushi', 'Pooja', 'Sonu', 'Nisha', 'Shalu', 'Piyush']
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
}

let myarr = "Nitin"
for (let index = 0; index < myarr.length; index++) {
  const element = myarr[index];
  // console.log(element)
  
}

// break and continue

for (let index = 0; index <= 20; index++) {
    if ( index == 5){
        console.log("Detecred 5")
        // break
        continue
    }
    console.log(`Value of  is ${index}`);
}
