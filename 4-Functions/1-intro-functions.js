//function intro

//repeatetive
console.log('Hello');
console.log('Hello');
console.log('Hello');
console.log('Hello');


//how to create a function 

function helloWorld (){
  console.log('Hello world');
}

//call a function 
console.log(helloWorld);

//execute a function
helloWorld();


///////////////////// function with a parameter ////////////////
function greetings(day){
  day = "Good arternoon";
  return console.log(day);
}
greetings();


function goodMorning (firstname){
  console.log('Good morning, ' + firstname);
 
}

goodMorning('Katy');

/////////////////// more than one param
function sum ( x, y){
//   return x + y;
  return console.log(x+y)
}

// console.log(sum (9, 9));

sum(9, 2)
