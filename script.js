// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");

// const { addDestinationInfo } = require("./scriptHelper");

// const { pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let thePickedRandomPlanet = pickPlanet(listedPlanets);
       console.log(thePickedRandomPlanet.name);
       addDestinationInfo(document, thePickedRandomPlanet.name, thePickedRandomPlanet.diameter, thePickedRandomPlanet.star, thePickedRandomPlanet.distance, thePickedRandomPlanet.moons, thePickedRandomPlanet.image);
       
    });
    
    let list = document.getElementById("faultyItems")
    let form = document.querySelector("form");
    list.style.visibility = "hidden";
    form.addEventListener("submit", function(event){
        event.preventDefault();
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevelName = document.querySelector("input[name=fuelLevel]");
        let cargoMassName = document.querySelector("input[name=cargoMass]");
        
        formSubmission(document, list, pilotName.value, copilotName.value, Number(fuelLevelName.value), Number(cargoMassName.value));
        // console.log(pilotName)


    })

    // addDestinationInfo(document, thePickedRandomPlanet.name, thePickedRandomPlanet.diameter, thePickedRandomPlanet.star, thePickedRandomPlanet.distance, thePickedRandomPlanet.moons, thePickedRandomPlanet.image)
    
});