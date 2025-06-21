/*
let name = "Nitin"
let salary = 120000
console.log(`Hey! My name is ${name} and my salary \t is ${salary}`)


let str = "He said, \"Hello Nitin\"";
console.log(str);

let str1 = "He said, \" Hola Nitin\"";
console.log(str1);


let temp = `Hello Nitin,
Welcome to javascript Learning`

console.log(temp);

*/

/*
// .toUpperCase()
let str = "Apna Collage"
str1 = str.toUpperCase()
console.log(str1)
*/

/*
// .toLowerCase()
let str = "Apna Collage"
str1 = str.toLowerCase()
console.log(str1)
*/

/*
// trim()
let trim = "   Hello Nitin    "
console.log(trim);
console.log(trim.trim())
*/

/*
// .includes()
let inclued = "Nitin"
let isInclude = inclued.includes("p")
console.log(isInclude)
*/

/* 
// .indexOf()
let index = "Apna Collage"
let isIndex = index.indexOf("p")
console.log(isIndex)
*/

/*
// .slice(start, end)
let slic = "Nitin"
let isSlice = slic.slice(1,4)
console.log(isSlice);
*/

/*
// replace()
let replac = "Nitin"
let changeReplace = replac.replace("N", "k")
console.log(changeReplace);
*/

/*
// chartAt()
let chart = "Nitin"
let chacter = chart.charAt(4)
console.log(chacter);
*/

const gameChangers = "Nitin";
console.log(gameChangers.charAt(3));
console.log(gameChangers.endsWith("n"));
console.log(gameChangers.startsWith("N"));
console.log(gameChangers.includes('n'));
console.log(gameChangers.indexOf("i"));
console.log(gameChangers.toUpperCase());
console.log(gameChangers.toLowerCase());
console.log(gameChangers.length);
console.log(gameChangers.split());  // String to change array
console.log(gameChangers.split().join()) ; //array to change string
console.log(gameChangers.slice(1, 4));
console.log(gameChangers.replace("i", 'k'));
console.log(gameChangers.replaceAll("i", 'k'));
console.log(gameChangers.trim());

console.log(gameChangers.split("")) // ['N','i','t','i','n']




/*
| Category | Methods                                                             |
| -------- | ------------------------------------------------------------------- |
| Basic    | `length`, `charAt()`, `indexOf()`, `toUpperCase()`, `toLowerCase()` |
| Search   | `includes()`, `startsWith()`, `endsWith()`, `match()`, `search()`   |
| Extract  | `slice()`, `substring()`, `substr()`                                |
| Replace  | `replace()`, `replaceAll()`                                         |
| Modify   | `trim()`, `repeat()`, `padStart()`, `padEnd()`                      |
| Convert  | `split()`, `join()`                                                 |
| Compare  | `localeCompare()`                                                   |
| Extra    | Template Literals `` `${}` ``                                       |

*/