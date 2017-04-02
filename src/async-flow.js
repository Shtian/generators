const fetch = require('node-fetch');
const apiUrl = 'http://pokeapi.co/api/v2/';

function * createPokemonFetcher () {
  const pokemonId = Math.floor((Math.random() * 151) + 1);
  const result = yield fetch(`${apiUrl}pokemon/${pokemonId}`);
  const pokemon = yield result.json();
  const types = pokemon.types.map(item => item.type.name).join('/');
  return `🔍 Your random pokemon is named ${pokemon.name} and it is of the type(s) 👉 ${types}`;
};

const pokemonFetcher = createPokemonFetcher();

pokemonFetcher.next().value
.then(res => pokemonFetcher.next(res).value)
.then(res => pokemonFetcher.next(res).value)
.then(pokemonType => console.log(pokemonType))
.catch(err => console.log(err));
