
/*
Invoking a function means to call or execute it.
- as a function
- as a method
- as a constructor (new)
- indirectly using call() and apply()
*/


var test = function(val){
  console.log(val);
};

// this and arguments

test(); //returns undefined

test(2);
test(2, 3); // displays only 2 (1st param)


var test1 = function(val){
  console.log(this)
  console.log(val);
  console.log(arguments)
  console.log(arguments[3])
};

test1();
//this returns a global object
test1(3, 2, 11); //arguments output
test1(324, 22, 22, 11)
/*
using arguments to determine what values are 
passed in your function doesn't have a signature.
And so by defining the parameters your function 
communicates much better to other people looking at
*/

var sumIt = function() {
  var sum = 0;
  for (let i=0; i<arguments.length; i++){
    sum += arguments[i]
  }
  
  console.log(sum)
}

sumIt(3, 5, 6, 3, 2, 8)
