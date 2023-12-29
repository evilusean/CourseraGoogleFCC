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

    const getAllPokemons = async (url) => {
  
        const response = await fetch(url)
      
        if (!response.ok) {
          alert('Pokémon not found');
        } else {
              const result = await response.json()
          return result
        }
      }

      const showPokemon = (pokemon) => {
        let backColor=convertHexToRgb(colours['electric'])
        let textColor=contrastColor(backColor)
        if (pokemon.types[0].type.name) {
            backColor=convertHexToRgb(colours[pokemon.types[0].type.name])
        }
        let backColorHTML='rgb(' + backColor.join(', ') + ')'
        let textColorHTML='rgb(' + textColor.join(', ') + ')'
        for (let p=0; p<=3; p++) {
            backgrdNameId[p].style.backgroundColor = backColorHTML
            backgrdNameId[p].style.color = textColorHTML
        }
        cardBorder.style.borderColor = backColorHTML
        pokemonName.innerText = pokemon.name.toUpperCase()
        pokemonId.innerText = pokemon.id
        pokemonWeight.innerText = 'Weight: ' + pokemon.weight
        pokemonHeight.innerText = 'Height: ' + pokemon.height
        pokemonTypes[0].innerHTML = ''
    pokemonImg.innerHTML = ''
        for (let typeName of pokemon.types) {
            pokemonTypes[0].innerHTML += '<h4>' + typeName.type.name.toUpperCase() + '</h4>'
        }
        pokemonHp.innerText = pokemon.stats[0].base_stat
        pokemonAttack.innerText = pokemon.stats[1].base_stat
        pokemonDefense.innerText = pokemon.stats[2].base_stat
        pokemonSpecialAttack.innerText = pokemon.stats[3].base_stat
        pokemonSpecialDefense.innerText = pokemon.stats[4].base_stat
        pokemonSpeed.innerText = pokemon.stats[5].base_stat
        pokemonImg.innerHTML = `<img id="sprite" src="${pokemon.sprites.front_default}" alt="pokemon-image" class="pokemonimage" />`
    }