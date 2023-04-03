const removeFromArray = function(arr) {
    let parameters = arguments.length; // 2
    for (let i = 1; i < parameters; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === arguments[i]) {
                arr.splice(j, 1);
            } 
        }
    }
    return arr;
        
};

// Do not edit below this line
module.exports = removeFromArray;
