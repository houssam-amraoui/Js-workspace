let str = "Bonjour-tout-le monde";
console.log(typeof str); //'string'
const delimiter = "-";
let msgsplite = str.split(delimiter);
console.log(msgsplite);

console.log("Bonjour tout le monde !".split(/[\s,]+/));