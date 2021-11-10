var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

// Going off of our last challenge from yesterday, we can use the length property
// of an array in the condition portion of the for loop to iterate through an array
for(var i = 0; i < numbers.length; i++) {
    // Remember: To access a value at a given index within an array, we use bracket
    // notation, with a number within the square brackets.

    // And what condition are we looking for to determine if a value is positive?
    // Well, a number is positive as long as it is greater than zero, so that will
    // be our condition!
    if(numbers[i] > 0) {
        // Now that we've determined that we found a positive number, what do we need to do?
        // Well, the goal is to keep count of how many positive values are in the array,
        // and the countPositives variable is being used below to display that information,
        // so we need to increment it by 1!
        countPositives++;
    }
}

console.log("there are " + countPositives + " positive values");

// Expected output:
// there are 4 positive values
