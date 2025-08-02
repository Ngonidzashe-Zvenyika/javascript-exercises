const sumAll = function(firstNumber, secondNumber) {
    switch(true) {
        case (typeof firstNumber !== "number"):
            return "ERROR";
        case (typeof secondNumber !== "number"):
            return "ERROR";
        case ((firstNumber < 0) || (secondNumber < 0)):
            return "ERROR";
    }

    if (firstNumber > secondNumber) {
        upperBound = firstNumber;
        lowerBound = secondNumber;
    } else {
        upperBound = secondNumber;
        lowerBound = firstNumber;
    }

    let sum = 0;
    for (upperBound; upperBound >= lowerBound; --upperBound) {
        sum += upperBound;
    }
    return sum; 

};

// Do not edit below this line
module.exports = sumAll;
