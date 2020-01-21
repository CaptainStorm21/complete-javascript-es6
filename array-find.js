var arr = [2, 5, 1, 21, 99,  123, 1231];

const results = arr.findIndex(function(number){
  return number > 20;
})
console.log(results);
// firsts 1st number that is larger than 20

const results3 = arr.find(function(number){
  return number > 20;
})
console.log(results3);
//first 1st number that is larger than 20



