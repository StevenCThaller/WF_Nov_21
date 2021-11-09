for (var i = 0; i < 10; i++) {
    console.log(i);
    i = i + 3;
}

console.log("outside of the loop " + i);

// Output:
// 0
// 4
// 8
// outside of the loop 12