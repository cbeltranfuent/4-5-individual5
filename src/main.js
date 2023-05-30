/*
Crear un programa con JavaScript mediante el uso de funciones con Callback y el método
setTimeout, que permita mostrar los datos de un Pokemon de acuerdo con el nombre o el
número de identificación o ID. La salida debe ser por consola
Para poder trabajar el ejercicio lo pueden bajar desde la siguiente URL:

● https://drive.google.com/drive/folders/1Sn0oyJ5nQiYp--
rO3NkZLfJtJDWnh2gO?usp=sharing
*/


import './style.css';
import javascriptLogo from './public/JavaScript.svg';
import viteLogo from './public/vite.svg';
import { setupCounter } from './components/counter.js';
import { data } from './components/datos.js';
import { initClock } from './components/clocks.js';


document.querySelector('#app').innerHTML = `
<div>
<h2>Aqui usamos Vite!</h2>
<a href="https://vitejs.dev" target="_blank">
  <img src="${viteLogo}" class="logo" alt="Vite logo" />
</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
  <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
</a>
<div class="card">
  <button id="counter" type="button"></button>
</div>
<p class="read-the-docs">
  Clickea en el logo de vite y js para más informacion
</p>
</div>
`

setupCounter(document.querySelector('#counter'));

initClock(document.querySelector("#clock"));

// data(document.querySelector("#data"));

function mostrarPokemon(nombreOId) {
  // Buscar el Pokemon por su nombre o ID
  let pokemon = data.find(p => p.name === nombreOId || p.id === nombreOId);

  // Si se encuentra el Pokemon, mostrar sus datos
  if (pokemon) {
    console.log(`ID: ${pokemon.id}`);
    console.log(`Nombre: ${pokemon.name}`);
    console.log(`Tipos: ${pokemon.types.join(', ')}`);
  } else {
    console.log(`No se encontró un Pokemon con el nombre o ID "${nombreOId}"`);
  }
}

// Ejemplos de uso de la función mostrarPokemon
mostrarPokemon('Pikachu'); // Muestra los datos de Pikachu
mostrarPokemon(25); // Muestra los datos de Pikachu
mostrarPokemon('Charizard'); // Muestra "No se encontró un Pokemon con el nombre o ID "Charizard""

// Obtener referencias a los elementos del DOM
const pokemonInput = document.querySelector('#pokemonInput');
const buscarPokemonBtn = document.querySelector('#buscarPokemon');
const resultadoDiv = document.querySelector('#resultado');

// Agregar un event listener al botón para buscar el Pokemon cuando se haga clic
buscarPokemonBtn.addEventListener('click', () => {
  // Obtener el valor del input
  let nombreOId = pokemonInput.value;

  // Convertir el valor a número si es posible
  if (!isNaN(nombreOId)) {
    nombreOId = Number(nombreOId);
  }

  // Buscar el Pokemon por su nombre o ID
  let pokemon = data.find(p => p.name === nombreOId || p.id === nombreOId);

  // Si se encuentra el Pokemon, mostrar sus datos en pantalla
  if (pokemon) {
    resultadoDiv.innerHTML = `
      <p>ID: ${pokemon.id}</p>
      <p>Nombre: ${pokemon.name}</p>
      <p>Tipos: ${pokemon.types.join(', ')}</p>
    `;
  } else {
    resultadoDiv.innerHTML = `<p>No se encontró un Pokemon con el nombre o ID "${nombreOId}"</p>`;
  }
});


console.log("============ F I N ==============")