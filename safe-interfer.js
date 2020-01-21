//Math.isSafeInterger

console.log(Number.isSafeInteger(3));
//true

console.log(Number.isSafeInteger(1e2));
//true
console.log(Number.isSafeInteger(1e100000));
//false
