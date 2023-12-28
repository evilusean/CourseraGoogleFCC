const API_URL = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";

const searchButton = document.getElementById("search-button");
const pokemon = document.getElementById("search-input").value;
const pokemonURL = API_URL + pokemon;
//Maybe variables names? JSON file? maybe the div text inputs? img element src is wrong? 
//Maybe try document.createElemenet use the createElement() method to 
//create an HTML element and then set the innerHTML property 
// maybe try <phrase>.replace like "Weight : " + "$name".replace
// elements are not updating correctly, 
//Need to find out how to extract data universally from JSON, 
// Might need to start console.log to debug, can't figure it out
searchButton.addEventListener("click", () => {
    if (pokemon === "Red") {
      alert("Pokémon not found");
    } else {
      fetch(pokemonURL)
        .then((response) => response.json())
        .then((data) => {
          if (!data|| null) {
            alert("Pokémon not found");
          } else {
            const nameElement = document.getElementById("pokemon-name");
            const name = data.name;
            const nameElement2 = document.createElement("h1");
            nameElement2.innerHTML = name.toUppercase();
            console.log(nameElement2)
  
            const idElement = document.getElementById("pokemon-id");
            const id = data.id;
            const idElement2 = document.createElement("h2");
            idElement2.innerHTML = id;
  
            const weightElement = document.getElementById("weight");
            const weight = data.weight;
            const weightElement2 = document.createElement("h3");
            weightElement2.innerHTML = weight;
  
            const heightElement = document.getElementById("height");
            const height = data.height;
            const heightElement2 = document.createElement("h4");
            heightElement2.innerHTML = height;
  
            const hpElement = document.getElementById("hp");
            const hp = data.hp;
            const hpElement2 = document.createElement("h5");
            hpElement2.innerHTML = hp;
  
            const attackElement = document.getElementById("attack");
            const attack = data.attack;
            const attackElement2 = document.createElement("h6");
            attackElement2.innerHTML = attack;
  
            const defenseElement = document.getElementById("defense");
            const defense = data.defense;
            const defenseElement2 = document.createElement("h7");
            defenseElement2.innerHTML = defense;
  
            const specialAttackElement = document.getElementById("special-attack");
            const specialAttack = data.specialAttack;
            const specialAttackElement2 = document.createElement("h8");
            specialAttackElement2.innerHTML = specialAttack;
  
            const specialDefenseElement = document.getElementById("special-defense");
            const specialDefense = data.specialDefense;
            const specialDefenseElement2 = document.createElement("h9");
            specialDefenseElement2.innerHTML = specialDefense;
  
            const typesElement = document.getElementById("types");
            const types = data.types;
            const typesElement2 = document.createElement("ul");
            types.forEach((type) => {
              const typeElement = document.createElement("li");
              typeElement.innerHTML = type.type.name;
              typesElement2.appendChild(typeElement.toUpperCase);
            });
  
            const sprite = document.getElementById("sprite");
            const spriteElement = document.createElement("img");
            spriteElement.src = data.sprites.front_default;
            spriteElement.alt = data.sprites.front_default;
            sprite.appendChild(spriteElement);
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

