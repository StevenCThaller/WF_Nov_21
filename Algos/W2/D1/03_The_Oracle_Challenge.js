function consultOracle() {
    var lifesAnswers = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes – definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful.",
        "Did I stutter?"
    ];

    // Similar to the d6 challenge, we want to select a random number between 2 values.

    // Lowest: 0 (index of first item)
    // Highest: whatever the index of the last item is.

    // Let's start by initializing our random number
    var answerIndex = Math.random();

    // We have (inc)0 - 1(exc), but we want (inc)0 - lastIndex(inc)
    // this is, coincidentally, the same thing as:
    // (inc)0 - arrayLength(exc)
    // So let's multiply by the length
    answerIndex *= lifesAnswers.length;
    // And round down for integers only (and to turn exclusive length to inclusive last index)
    answerIndex = Math.floor(answerIndex);

    // Finally, let's return the string at that index!
    return lifesAnswers[answerIndex];
}

console.log(consultOracle());