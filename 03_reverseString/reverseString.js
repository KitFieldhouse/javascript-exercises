const reverseString = function(str) {

    arr = str.split("");
    arr.reverse();
    newStr = arr.join('');

    return newStr;

};

// Do not edit below this line
module.exports = reverseString;
