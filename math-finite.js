//isNaN
console.log(Number.isNaN(1));
//false

console.log(Number.isNaN(NaN));
//true

console.log(Number.isNaN('holograph'));
//false




//isFinite
var i = 1/0;
i="hello";
console.log(Number.isFinite(i));
//false
