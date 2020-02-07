function fn(){
  console.log(this)
}

fn();

const fn1 = () => console.log(this)
//arrow keeps context
