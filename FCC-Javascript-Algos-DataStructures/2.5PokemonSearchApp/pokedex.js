const API_URL = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon"
const pokemon = document.getElementById("search-input").value;
const pokemon_URL = API_URL + pokemon
addEventListener = document.getElementById("search-button") 
 { fetch(`${API_URL}/${pokemon}`) 
 .then((response) => response.json())
 .then((updatePokemon) => {
    const nme = document.getElementById(pokemon-name);
    nme.innerHTML = updatePokemon.pokemon-name;
    const id = document.getElementById(pokemon-id);
    id.innerHTML = updatePokemon.pokemon-id;
    const weight = document.getElementById(weight);
    weight.innerHTML = updatePokemon.weight;
    const height = document.getElementById(height);
    height.innerHTML = updatePokemon.height;
    const hp = document.getElementById(hp);
    hp.innerHTML = updatePokemon.hp;
    const attack = document.getElementById(attack);
    attack.innerHTML = updatePokemon.attack;
    const defense = document.getElementById(defense);
    defense.innerHTML = updatePokemon.defense;
    const special_attack = document.getElementById(special-attack);
    special_attack.innerHTML = updatePokemon.special-attack;
    const special_defense = document.getElementById(special-defense);
    special_defense.innerHTML = updatePokemon.special-defense;})
 }
//add if not found error message, and if found update all divs with stats
// maybe use .replace to add new data if .innerhtml doesnt work
/*
  // Get the div element
  const div = document.getElementById(divId);

  // Fetch the JSON data
  fetch(jsonUrl)
    .then((response) => response.json())
    .then((data) => {
      // Update the div with the new data
      div.innerHTML = JSON.stringify(data);
    });
}

// Attempt 2
const API_URL = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

const pokemon = document.getElementById("search-input").value;
const pokemon_URL = API_URL + pokemon;

addEventListener("click", () => {
  fetch(pokemon_URL)
    .then((response) => response.json())
    .then((data) => {
      const div = document.getElementById("pokemon-name");
      div.innerHTML = data.name;
    });
});
*/

 // Need to add API_URL + pokemon to get data
 // Need to update all divs in index with pokemon data - how to post?
 // how to update divs : https://stackoverflow.com/questions/33801650/how-do-i-refresh-a-div-content
 //
 // Need to add event listener to search button
// Need to add "pokemon not found" for NA

/*
Tests to Pass:
Failed:You should have an input element with an id of search-input and is required.
Failed:When the #search-input element contains the value Red and the 
  #search-button element is clicked, an alert should appear with the text 
  Pokémon not found.
Failed:When the #search-input element contains the value Pikachu and 
  the #search-button element is clicked, the values in the #pokemon-name, 
  #pokemon-id, #weight, #height, #hp, #attack, #defense, #special-attack, and
   #special-defense elements should be PIKACHU, #25 or 25, Weight: 60 or 60, 
   Height: 4 or 4, 35, 55, 40, 50, 50, and 90, respectively.
Failed:When the #search-input element contains the value Pikachu and the 
  #search-button element is clicked, you should add an img element with the 
  id of sprite and the src set to the Pokémon's front_default sprite to the page.
Failed:When the #search-input element contains the value Pikachu and the 
  #search-button element is clicked, the #types element should contain a single
   inner element with the value ELECTRIC.
Failed:When the #search-input element contains the value 94 and the 
  #search-button element is clicked, the values in the #pokemon-name, 
  #pokemon-id, #weight, #height, #hp, #attack, #defense, #special-attack, 
  and #special-defense elements should be GENGAR, #94 or 94, Weight: 405 or 405,
   Height: 15 or 15, 60, 65, 60, 130, 75, and 110, respectively.
Failed:When the #search-input element contains the value 94 and the 
  #search-button element is clicked, you should add an img element with the id 
  of sprite and the src set to the Pokémon's front_default sprite to the page.
Failed:When the #search-input element contains the value 94 and the 
  #search-button element is clicked, the #types element should contain a two inner
   element with the text values GHOST and POISON, respectively.
*/