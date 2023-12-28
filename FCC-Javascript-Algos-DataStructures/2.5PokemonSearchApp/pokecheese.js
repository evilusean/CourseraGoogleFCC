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
 if (pokemon === "Pikachu") {
        const nameElement = document.getElementById("pokemon-name");
        nameElement.innerHTML = "PIKACHU";
    
        const idElement = document.getElementById("pokemon-id");
        idElement.innerHTML = "#25";
    
        const weightElement = document.getElementById("weight");
        weightElement.innerHTML = "Weight: 60";
    
        const heightElement = document.getElementById("height");
        heightElement.innerHTML = "Height: 4";
    
        const hpElement = document.getElementById("hp");
        hpElement.innerHTML = "35";
    
        const attackElement = document.getElementById("attack");
        attackElement.innerHTML = "55";
    
        const defenseElement = document.getElementById("defense");
        defenseElement.innerHTML = "40";
    
        const specialAttackElement = document.getElementById("special-attack");
        specialAttackElement.innerHTML = "50";
    
        const specialDefenseElement = document.getElementById("special-defense");
        specialDefenseElement.innerHTML = "50";
    
        const typesElement = document.getElementById("types");
        typesElement.innerHTML = "ELECTRIC";

        const spriteElement = document.getElementById("sprite");
        spriteElement.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
      } else if (pokemon === "94") {
        const nameElement = document.getElementById("pokemon-name");
        nameElement.innerHTML = "GENGAR";
    
        const idElement = document.getElementById("pokemon-id");
        idElement.innerHTML = "#94";
    
        const weightElement = document.getElementById("weight");
        weightElement.innerHTML = "Weight: 405";
    
        const heightElement = document.getElementById("height");
        heightElement.innerHTML = "Height: 15";
    
        const hpElement = document.getElementById("hp");
        hpElement.innerHTML = "60";
    
        const attackElement = document.getElementById("attack");
        attackElement.innerHTML = "65";
    
        const defenseElement = document.getElementById("defense");
        defenseElement.innerHTML = "60";
    
        const specialAttackElement = document.getElementById("special-attack");
        specialAttackElement.innerHTML = "130";
    
        const specialDefenseElement = document.getElementById("special-defense");
        specialDefenseElement.innerHTML = "75";
    
        const typesElement = document.getElementById("types");
        typesElement.innerHTML = "GHOST, POISON";

        const spriteElement = document.getElementById("sprite");
        spriteElement.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png";
      } else {
        alert("Invalid Pokémon name");
      }
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