
function fetchPokemon(name) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
  .then(res => res.json())
  .then(data => displayPokemon(data))  
}

//fetchPokemon
document.querySelector(".form-search")
.addEventListener("submit", (e) => {
  e.preventDefault()
  const name = e.target.search.value
  console.log(name)
  fetchPokemon(name)
})

function displayPokemon(pokemon) {
  //set the name
  document.querySelector("#name").innerText = pokemon.name
  
  //set the img
  document.querySelector("#pokemon-img").src = pokemon.sprites.front_shiny
}

/*
Send http request (url) give instruction to API what data to get/change, and get the data back from database

json view chrome extension, make API easier to read

“defer” not load js until html get loaded

fetch API - read it
fetch take an argument
return a promise to get data

fetch("https://pokeapi.co/api/v2/pokemon/squirtle/")
promise pending

when burger is done,
.then (function)

fetch document remember the documentation

response carry the data we need and turn it into json which allow us to access info inside it
.then(res => console.log(res)

debugger

SPAs :
Fetch data in the background
No page refresh required
And... everybody is doing it (most modern web applications are single page)

List of public/free APIs: https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/ 
The Pokemon API: https://pokeapi.co/
*/