//starts with
 var message = "Hello world";
var substring1 = "hello";
const startedWith = message.toLowerCase(substring1).indexOf(substring1)===0;
console.log(startedWith);

//ends with 
const index1 = 'hello world'. indexOf('world')=== 'hello world'.length - 'world'.length;
console.log(index1);

const msg = "animals are cool";
const substring = "animals";
const endWord = msg.indexOf(substring) === msg.length - substring.length

//includes
const index = "hello world".indexOf('world')
console.log(index)


//es6
const endsWith = 'hello world'.endsWith('monkey')
console.log(endsWith)


const es6startsWith = 'hello'.startsWith('hello');
console.log(es6startsWith);


