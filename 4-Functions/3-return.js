//returns undefined
function greeting(){
  console.log('hello')
}

console.log(greeting);
greeting();


//return a value
function sum(a, b){
  return a+b;
}

var x = sum (9, 8);
console.log(x);


// return a function
function greet() {
  return function () {
    console.log('Good morning')
  }
}
greet()();



// return a function 2
function greet2(x) {
  return function (name) {
    console.log('Good night, ' + name + ' from ' + x)
  }
}
greet2('Kyiv')('Martha')
