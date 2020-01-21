//creating objects

/*
object literal
*/

var obj = {
  firstName: "Oleg",
  lastName: "Mork"
};

/* Object Constructor */
var obj1 = new Object();
obj1.firstName = "Steve";
obj1.lastName="Morphius";
obj1.greeting = function (){
  console.log('Hi')
  console.log(arguments)
  console.log(this)
}
obj1.greeting();

delete obj1.lastName;
"lastName" in obj1;
"greeting" in obj1;
obj1.hasOwnProperty("firstName")
