const repeatString = function(string, numberRepetitions) {
    if (numberRepetitions < 0) {
        return "ERROR"
    } else {
        let newString = "";
        while (numberRepetitions > 0) {
            newString += string;
            --numberRepetitions;
        }
        return newString;
    }
    };

// Do not edit below this line
module.exports = repeatString;
