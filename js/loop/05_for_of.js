
// for.................................................................of loop
const fruits = ["Apple", "Orange", "Banana", "Lichi", "Cherry"];
// const fruits = "Nitin"

for (const fruit of fruits) {
  if (fruit === "Lichi") {
    // console.log('Mil gya..........');
    // break
    continue;
  }
  // console.log(fruit);
}



// Map ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const vl = new Map();

vl.set("Name", "Nitin");
vl.set("Age", 21);
vl.set("Salary", 120000);
vl.set("Language", "Js");

// console.log(vl);

for (const [Key, value] of vl) {
  // console.log(Key, ":" , value)
}