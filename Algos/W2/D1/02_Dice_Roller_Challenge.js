function d6() {
    var roll = Math.random();
    
    /*
        Let's approach this mathematically. We currently have (inc)0-1(exc), but we want
        (inc)1-6(inc) and integers only. Our first thought might be to multiply by 6, but then
        we're left with the issue of having decimal numbers too. "So then round it, duh!", but 
        we have 1 issue. The number will be (inc)0-6(exc). Rounding up will give us (inc)1-6(inc)
        in like 99.9999999% of situations. BUT, because Math.random() can roll a 0, and 0 is already
        an integer, rounding 0 up will still leave us with 0. 

        So if we want to make sure it's between 1 and 6 EVERY SINGLE TIME, instead we should multiply
        by 5
    */
    roll *= 5;

    // Round up
    roll = Math.ceil(roll);
    // Which leaves us with (inc)0 - 5(inc)
    // So add 1
    roll += 1;
    

    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);
