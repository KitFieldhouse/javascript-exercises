const fibonacci = function(index) {
    index = Number(index);
    if (index < 0) {return "OOPS";}
    else if(index < 3){return 1}

    return fibonacci(index - 1) + fibonacci(index - 2);

};

// Do not edit below this line
module.exports = fibonacci;
