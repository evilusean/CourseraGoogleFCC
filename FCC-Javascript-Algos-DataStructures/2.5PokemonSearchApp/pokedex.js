const API_URL = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon"
const pokemon = document.getElementById("search-input").value;
const pokemon_URL = API_URL + pokemon
addEventListener = document.getElementById("search-button")

fetch(`${API_URL}/${pokemon}`) //maybe fetch works?

 // Need to add API_URL + pokemon to get data
 // Need to update all divs in index with pokemon data - how to post?
 // Need to add event listener to search button
// Need to add "pokemon not found" for NA
