const repeatString = function(string, num) {

    if(typeof string != "string")
    {
        console.log("First argument MUST be of type string");
        return "ERROR";
    }
    else if(typeof num != "number")
    {
        console.log("Second argument MUST be of type number");
        return "ERROR";
    }
    else if(num < 0)
    {
        console.log("Second argument MUST be positive");
        return "ERROR";
    }

    numberRound = Math.round(num);

    if(numberRound != num)
    {
        console.log("Rounded non-int second argument...");
    }

    str = '';

    for(let i = 0; i < num; i++)
    {
        str = str.concat(string);
    }

    return str;

};

// Do not edit below this line
module.exports = repeatString;
