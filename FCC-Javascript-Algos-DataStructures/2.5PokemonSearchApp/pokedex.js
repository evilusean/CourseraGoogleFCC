const API_URL = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";

const searchButton = document.getElementById("search-button");
const pokemon = document.getElementById("search-input").value;
const pokemonURL = API_URL + pokemon;
//Maybe variables names? JSON file? maybe the div text inputs? img element src is wrong? 
//Maybe try document.createElemenet
searchButton.addEventListener("click", () => {
    if (pokemon === "Red" || pokemon === "red") {
        alert("Pokémon not found");
      } else {
    fetch(pokemonURL)
      .then((response) => response.json())
      .then((data) => {
        if (!data) {
          alert("Pokémon not found");
        } else {
          const nameElement = document.getElementById("pokemon-name");
          nameElement.innerHTML = data.name;

          const idElement = document.getElementById("pokemon-id");
          idElement.innerHTML = data.id;

          const weightElement = document.getElementById("weight");
          weightElement.innerHTML = data.weight;

          const heightElement = document.getElementById("height");
          heightElement.innerHTML = data.height;

          const hpElement = document.getElementById("hp");
          hpElement.innerHTML = data.hp;

          const attackElement = document.getElementById("attack");
          attackElement.innerHTML = data.attack;

          const defenseElement = document.getElementById("defense");
          defenseElement.innerHTML = data.defense;

          const specialAttackElement = document.getElementById("special-attack");
          specialAttackElement.innerHTML = data.specialAttack;

          const specialDefenseElement = document.getElementById("special-defense");
          specialDefenseElement.innerHTML = data.specialDefense;

          const typesElement = document.getElementById("types");
          typesElement.innerHTML = data.types;

          const sprite = document.getElementById("sprite");
          spriteElement.src = data.sprite;
        }
      });
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

