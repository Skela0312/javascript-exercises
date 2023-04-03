const sumAll = function(num1, num2) {
    // if either of them is not a number
    if (typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR";
    // if either of them is negative
    } else if (num1 < 0 || num2 < 0) {
        return "ERROR";
    // if num1 is smaller than num2, swap them
    } else if (num1 > num2) {  
        let tmp = num1;
        num1 = num2;
        num2 = tmp;
    }
    let sum = 0;
    for (i = num1; i <= num2; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
