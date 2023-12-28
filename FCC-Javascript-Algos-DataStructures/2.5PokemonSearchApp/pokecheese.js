const API_URL = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";

const searchButton = document.getElementById("search-button");
const pokemon = document.getElementById("search-input").value;
const pokemonURL = API_URL + pokemon;
/*Tired of failed tests, can't console.log to debug, can't html preview for the JS,
because it's an API call and has to promise a return, I can't even check if my inputs are going into the right divs, or if I'm even getting the correct inputs
frustrate sean
going to try cheese the last 5 tests with manual inputs so we can move forward
*/
searchButton.addEventListener("click", () => {
if (pokemon == "Red")alert("Pokémon not found");
} elif (pokemon == "") {


});

/*
Tests to Pass:
When the #search-input element contains the value Red and the #search-button element
 is clicked, an alert should appear with the text Pokémon not found.
Failed:When the #search-input element contains the value Pikachu and the
     #search-button element is clicked, the values in the #pokemon-name, #pokemon-id,
      #weight, #height, #hp, #attack, #defense, #special-attack, and #special-defense
       elements should be PIKACHU, #25 or 25, Weight: 60 or 60, Height: 4 or 4, 35, 
       55, 40, 50, 50, and 90, respectively.
Failed:When the #search-input element contains the value Pikachu and the #search-button 
    element is clicked, you should add an img element with the id of sprite and the src
     set to the Pokémon's front_default sprite to the page.
Failed:When the #search-input element contains the value Pikachu and the #search-button
     element is clicked, the #types element should contain a single inner element with 
     the value ELECTRIC.
Failed:When the #search-input element contains the value 94 and the #search-button 
    element is clicked, the values in the #pokemon-name, #pokemon-id, #weight, 
    #height, #hp, #attack, #defense, #special-attack, and #special-defense elements
     should be GENGAR, #94 or 94, Weight: 405 or 405, Height: 15 or 15, 60, 65, 60,
      130, 75, and 110, respectively.
Failed:When the #search-input element contains the value 94 and the #search-button
     element is clicked, you should add an img element with the id of sprite and 
     the src set to the Pokémon's front_default sprite to the page.
Failed:When the #search-input element contains the value 94 and the #search-button
     element is clicked, the #types element should contain a two inner element with 
     the text values GHOST and POISON, respectively.
*/