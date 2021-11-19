var arr2d = [   [2, 5, 8],
                [3, 6, 1],
                [5, 7, 7]   ];
    
// We can console.log the `8` in this array if we
console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

// Could we determine if a certain value is present? 

// Write a function called isPresent2d(arr2d, value) that returns
// true if the value is present, and false otherwise
function isPresent2d(arr2d, value) {
    for(var i = 0; i < arr2d.length; i++) {
        for(var j = 0; j < arr2d[i].length; j++) {
            if(arr2d[i][j] === value) {
                return true;
            }
        }
    }

    return false;
}

// Example:
var twoDArr = [
    [8, 6, 7],
    [5, 3], 
    [0, 9, 9, 9]
];

console.log(isPresent2d(twoDArr, 3)); // Should return true
console.log(isPresent2d(twoDArr, 2)); // Should return false