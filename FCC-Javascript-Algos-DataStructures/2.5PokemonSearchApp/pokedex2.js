const API_URL = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon"

const pokemonImgProx = 'https://static.vecteezy.com/system/resources/previews/027/127/591/original/pokemon-logo-pokemon-icon-transparent-free-png.png'

const bckgrdNameId = document.getElementsByClassName('pokemonname')

const searchInput = document.getElementById('search-input')

const pokemonName = document.getElementById('pokemon-name')

const pokemonImg = document.getElementById('imgcontainer')

const pokemonId = document.getElementById('pokemon-id')

const pokemonWeight = document.getElementById('weight')

const pokemonHeight = document.getElementById('height')

const pokemonTypes = document.getElementsByClassName('types')

const pokemonHp = document.getElementById('hp')

const pokemonAttack = document.getElementById('attack')

const pokemonDefense = document.getElementById('defense')

const pokemonSpecialAttack = document.getElementById('special-attack')

const pokemonSpecialDefense = document.getElementById('special-defense')

const pokemonSpeed = document.getElementById('speed')

const cardBorder = document.getElementById('card-border')

const searchButton = document.getElementById('search-button')


pokemonImg.innerHTML = `<img id='sprite' src='${pokemonImgProx}' alt='pokemon-image' class='pokemonimage'/>`

const lookForPokemon = async (searchStr) => {
    if (searchStr) {
      const searchResult = await getAllPokemons(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchStr.toLowerCase()}`)
          showPokemon(searchResult)
        }
    }  