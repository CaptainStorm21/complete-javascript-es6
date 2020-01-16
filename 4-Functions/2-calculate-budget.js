
/*
calculateCost function params
hotelPrice
duration
ticketPrice
budget
*/

/*
write a function which takes an input
- hotel price per night
- duration days stay
- flight cost
- budge avail 
prints the total cost of the plan and return a string 
"lets' go!" or "change your plan"
*/

//build the calculateCost
function calculateCost (hotelPrice, duration, ticketPrice, budget){
    var totalCost = hotelPrice * duration + ticketPrice;
    console.log("The total cost is $" + totalCost);
    console.log("your budge is $" + budget);
  
  //decide on when when you are within the budget or not
  var result;
  if(totalCost <= budget){
   console.log( "lets' go!");
  } else {
   console.log( "Over the budget! Please change your plans.");
  }
               
}

calculateCost (50, 10, 300, 200);
