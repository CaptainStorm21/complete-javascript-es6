/*first class functions*/
/* a language treats functions as values that 
you can assign a function into a variable

var sum = function (x, y){
  return x + y;
};

console.log(sum(3,2))

var a = sum;

var run = function(z){
  z();
};

run(a)
*/


var sum = function (x, y){
  return x + y;
}

var run  = function (fn, a, b){
  console.log(fn(a, b));
};

run (sum, 3, 2)

run( function (x, y){
  return x * y;
}, 90, 21);


