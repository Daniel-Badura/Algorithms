function fibon(number:number):number {
    if (number < 2) {
      return 1;
    }
    return fibon(number - 1) + fibon(number - 2);
  }
  
  let examp = fibon(10); // expected 89
  console.log(examp);
  