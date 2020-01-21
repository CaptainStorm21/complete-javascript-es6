/*
primitive data types
strings
numbers
booleans
underfined
nulll
symbols

/*
Defining function 
*/

/*
Function declaration 

function functionName(){
//code block to execute
}
*/

/*
Function expression 

var x = function functionName(){
  //code block to execute
}
*/

//passing a value and log a value
var functionExpression = function (val){
  console.log(val);

}

functionExpression("function expression")

//function constructor
var functionConstructor = new Function("val", "console.log(val)");
functionConstructor("constructor")

functionExpression.firsName = "Steven Seagull";
console.log(functionExpression.firsName);

//adding a function 
functionExpression.showUser = function(){
  console.log(this.firstName)
}
