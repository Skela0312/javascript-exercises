const reverseString = function(str) {
    if (str === "") {
        return ""
    } 
    let reversedArray = [];
    let charArr = str.split("");
    // console.log(charArr);
    for (let i = 0; i < str.length; i++) {
        reversedArray.push(charArr.pop());
        // console.log(reversedArray);
    }
    let reversedString = reversedArray.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
