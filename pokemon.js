"use strict"

async function fetchPokemonData() {
    const response = await fetch( "https://pokeapi.co/api/v2/pokemon/17/")
    const data = await response.json();
    const pokemonInfo = {
        name: data.name,
        imageURL: data.sprites.front_default,
        backImage: data.sprites.back_shiny
    }
    return pokemonInfo;
}

async function DisplayData() {
    const pokemonInfo = await fetchPokemonData();
    console.log(pokemonInfo.name);
    document.getElementById('pokemon-name').textContent = pokemonInfo.name;
    document.getElementById('pokemon-front-sprite').src = pokemonInfo.imageURL;
    document.getElementById('pokemon-back-sprite').src = pokemonInfo.backImage;
}
DisplayData();

let element = document.getElementById("messageArea");
fetch("http://jsonplaceholder.typicode.com/users/1")
 .then(response => response.json())
 .then(data => {
 let message = "User email: " + data.email;
 element.innerHTML = message
 });