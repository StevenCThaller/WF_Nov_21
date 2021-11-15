// Let's make a baked potato
var potato = "Russet potato";
var cheese = "cheddah";
var additionalToppings = ["bacon", "sour cream", "chives"];

var potato2 = "Yukon gold";
var cheese2 = "swiss";
var additionalToppings2 = ["facon", "broccoli"];

function printPotatoInfo(potatoType, cheeseType, toppings) {
    console.log("You have ordered a " + potatoType + " with " + cheeseType + ".\nOn top of it, you have:");
    for(var i = 0; i < toppings.length; i++) {
        console.log(toppings[i]);
    }
}

printPotatoInfo(potato, cheese, additionalToppings);

printPotatoInfo(potato2, cheese2, additionalToppings2);