const object = {
  name: "Nitin",
  age: 21,
  Salary: 1200000,
  language: "Javascript",
};

for (const key in object) {
  console.log(key, ":", object[key]);
}



// Not recommand
const myarray = ["js", "java", "py", "html", "css"];

for (const key in myarray) {
  // console.log(myarray[key])
}