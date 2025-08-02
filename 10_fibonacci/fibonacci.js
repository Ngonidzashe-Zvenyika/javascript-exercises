const fibonacci = function(number) {
    if (Number(number) < 0) {
        return "OOPS"
    } else if (Number(number) === 0) {
        return 0;
    }else {
        let oneNumberBefore = 0;
        let twoNumbersBefore = 0;
        let fibonacciNumber = 1;
        for (let count = 1; count < Number(number); count++) {
            twoNumbersBefore = oneNumberBefore;
            oneNumberBefore = fibonacciNumber;
            fibonacciNumber = oneNumberBefore + twoNumbersBefore;
            
        }
        return fibonacciNumber;
    }
};

// Do not edit below this line
module.exports = fibonacci;
