// Write a function reverse(arr) to reverse an array.

// If we are given:
// var x = ["a", "b", "c", "d", "e"]

// We expect to get back:
// ["e", "d", "c", "b", "a"]

function reverse(arr) {
    var start = 0;
    var end = arr.length - 1;

    while(start < end) {
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
    }

    return arr;
}

var x = ["a", "b", "c", "d", "e"];
console.log(reverse(x));