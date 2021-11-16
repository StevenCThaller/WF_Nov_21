var carouselImages = [
    {
        src: "images/office.jpg",
        alt: "Office"
    },
    {
        src: "images/livingroom.jpg",
        alt: "Living Room"
    },
    {
        src: "images/bedroom.jpg",
        alt: "Bedroom"
    }
];
var selectedImage = 0;

function signIn(el) {
    el.innerText = "Sign Out";
}

function dropDownChange(el) {
    alert('You searched for "' + el.value + '"')
}

function nextImage(){
    if(selectedImage === 2) {
        selectedImage = 0;
    } else {
        selectedImage++;
    }

    changeImage(selectedImage);
}

function previousImage(){
    if(selectedImage === 0) {
        selectedImage = 2;
    } else {
        selectedImage--;
    }

    changeImage(selectedImage);
}

function changeImage(i) {
    if(i != selectedImage) {
        selectedImage = i;
    }


    var imageToChange = document.querySelector(".main-image");
    imageToChange.src = carouselImages[i].src;
    imageToChange.alt = carouselImages[i].alt;

    var changeImageButtons = document.querySelectorAll(".select-image");

    for(var j = 0; j < changeImageButtons.length; j++) {
        if(i == j) {
            changeImageButtons[j].classList.add("selected");
        } else if(changeImageButtons[j].classList.contains("selected")){
            changeImageButtons[j].classList.remove("selected");
        }
    }
}
