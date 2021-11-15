var container = document.querySelector(".container");

function bakePotato() {
    // This function should:
    // 1. Target the image I would like to change
    var potatoImage = document.querySelector("#potato")
    // 2. Change the src of the img to the new image
    potatoImage.src = "images/baked.jpg";
    potatoImage.alt = "Baked potato";

    // It should also:
    // 1. Target the paragraph I want to change the text of
    var paragraph = document.querySelector(".yuck");
    // 2. Change that text to be better
    paragraph.innerHTML = "Oooh, that looks <em>delicious!</em>";
}

function setActive(element) {
    if(element.classList.contains("dark-mode")) {
        element.innerText = "Switch to dark mode";
        element.classList.remove("dark-mode");
    } else {
        element.innerText = "Switch to light mode";
        element.classList.add("dark-mode");
    }
}
