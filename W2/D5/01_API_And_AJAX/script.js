function makeAPIRequest(e) {
    e.preventDefault(); // cancel the default form submission, allowing us to stay on this page
    var category = document.querySelector("#category").value;
    // console.log(category);
    var id = document.querySelector("#id").value;
    // console.log(id);
    // But how do we send the API request from javascript?
    // ` is the ~, or, the key under the esc key
    fetch(`https://swapi.dev/api/${category}/${id}`) // fetch is an asynchronous function that returns a promise
        .then(function(response) {
            // console.log("Successfully received a response, but I can't understand it.");
            // Tell the interpreter to take the response we get back, and please
            // convert it to something a little more readable (aka, json)
            return response.json(); // .json() is a built in function we can call off the response
            // to convert it to the actual data we're trying to access
        }) // this runs if the promise is eventually kept
        .then(function(jsonResponse) {
            if(jsonResponse.detail && jsonResponse.detail == "Not found") {
                throw "Oh no";
            }
            else if(category == "people") {
                renderPerson(jsonResponse);
            } else if(category == "planets") {
                renderPlanet(jsonResponse);
            } else if(category == "starships") {
                renderStarship(jsonResponse);
            }
        })
        .catch(function(error){
            console.log(error);
            renderError();
        }) // this runs if the promise is broken

    // console.log("This is console logging after the request is sent")
}

var displayDiv = document.querySelector("#result-data")

function renderPerson(person){
    displayDiv.innerHTML = "";
    console.log(person);
    var h1 = document.createElement("h1");
    h1.innerText = person.name;
    
    var heightDiv = document.createElement("div");
    heightDiv.classList.add("flex-row", "row", "col-6");
    heightDiv.innerHTML = `<h3 class="col-6">Height:</h3> <p class="col-6">${person.height}</p>`;
    
    var massDiv = document.createElement("div");
    massDiv.classList.add("flex-row", "row", "col-6");
    massDiv.innerHTML = `<h3 class="col-6">Mass:</h3><p class="col-6">${person.mass}</p>`;

    
    displayDiv.appendChild(h1);
    displayDiv.appendChild(heightDiv);
    displayDiv.appendChild(massDiv);
}

function renderPlanet(planet) {
    displayDiv.innerHTML = "";

    console.log(planet);
    var h1 = document.createElement("h1");
    h1.innerText = planet.name;

    displayDiv.appendChild(h1);
    
}

function renderStarship(starship){
    displayDiv.innerHTML = "";
    
}

function renderError() {
    var url = "https://media1.giphy.com/media/l2JJKs3I69qfaQleE/200.gif"
    displayDiv.innerHTML = `<img src="${url}" alt="Error"><h2>These are not the results you are looking for</h2>`;
}