//Your data modules to make the Axios calls and get the data

const axios = require("axios");
const helpers = require("../helpers");

async function getPokemon() {
    
  const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
  return data;
}

async function getPokemonbyID(id) {
  let URL = "https://pokeapi.co/api/v2/pokemon/" + id;
 
  const { data } = await axios.get(URL);
  return data;
}

const pokemon = async () => {
  let data = await getPokemon();
  return data;
};

const pokemonById = async (id) => {
     id= helpers.checkId(id)
  let data1 = await getPokemonbyID(id);
  return data1;
};

module.exports = {
  pokemon,
  pokemonById,
};
