var myPotato = {
    potato: "Russet",
    cheese: "cheddah",
    additionalToppings: [
        "bacon",
        "sour cream",
        "chives"
    ]
};

var yourPotato = {
    potato: "Yukon gold",
    cheese: "swiss",
    additionalToppings: [
        "facon",
        "broccoli"
    ]
};

function printPotatoInfo(bakedPotato) {
    console.log("You have ordered a " + bakedPotato.potato + " potato with " + bakedPotato.cheese + ".");
    console.log("On top of the potato, you also have: ");
    for(var i = 0; i < bakedPotato.additionalToppings.length; i++) {
        console.log(bakedPotato.additionalToppings[i]);
    }
}

printPotatoInfo(myPotato);

printPotatoInfo(yourPotato);