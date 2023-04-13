const palindromes = function (val) {

    let processedStr = val.toLowerCase().split("").filter((el) => (el >= "a" && el <= "z")).join("");
    let backwardsStr = processedStr.split("").reverse().join("");

    return processedStr === backwardsStr;

};

//palindromes(" this is a test 1237898793v , !!! , ... of the function  "); // a test

// Do not edit below this line
module.exports = palindromes;
