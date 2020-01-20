
//object assign
var obj1 = {
  lastName: 'Smith',
  skills: {
    running: true,
    swimming: false
  }
};

var obj2 = {
  name: 'bob', 
  age: 10,
  location: 'florida',
  skills: {
    swimming: true
  }
}

console.log(Object.assign(obj1, obj2));


/*
output

[object Object] {
  age: 10,
  lastName: "Smith",
  location: "florida",
  name: "bob",
  skills: [object Object] {
    swimming: true
  }
}
*/
