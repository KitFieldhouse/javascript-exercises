const sumAll = function(a ,b) {
    sum = 0;

    if(typeof a != 'number' || typeof b != 'number' || a < 0 || b < 0){
        return "ERROR"
    }

    if(a <= b){
        s = a;
        l = b;
    }
    else{
        s = b;
        l = a;
    }

    for(let i = s ; i <= l; i++)
    {
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
