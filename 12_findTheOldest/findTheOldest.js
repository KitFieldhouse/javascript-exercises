const findTheOldest = function(arr) {

let initialObj = {yearOfDeath: 0, yearOfBirth: 0};

return arr.reduce(compareAge, initialObj);

};

function compareAge(currentOldest, el){

    if(!("yearOfDeath" in el)){
        el.yearOfDeath = (new Date()).getFullYear();
    }

    if ( (el.yearOfDeath - el.yearOfBirth ) > (currentOldest.yearOfDeath - currentOldest.yearOfBirth) )
    {
        return el;
    }

    return currentOldest

}

// Do not edit below this line
module.exports = findTheOldest;
