const add = function(a,b) {
  if(typeof a != 'number' || typeof b != 'number'){
    return "ERR";
  }

  return a + b;
	
};

const subtract = function(a,b) {
	  if(typeof a != 'number' || typeof b != 'number'){
    return "ERR";
  }
  
  return a - b;
};

const sum = function(arr) {

  let isNumberArr = arr.filter((el) => !(typeof el == "number" ));

  if(isNumberArr.length > 0){
    return "ERR";
  }

  return arr.reduce((total, el) => el + total, 0 );
	
};

const multiply = function(arr) {

  let isNumberArr = arr.filter((el) => !(typeof el == "number" ));

  if(isNumberArr.length > 0){
    return "ERR";
  }

  return arr.reduce((total, el) => el*total, 1);

};

const power = function(a,b) {

  return Math.pow(a,b);
	
};

const factorial = function(a) {
	
  let prod = 1;

  for(let i = 1; i <= a ; i++){
    prod = prod*i;
  }

  return prod;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
