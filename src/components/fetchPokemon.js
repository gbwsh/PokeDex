import API_URL from "./constants/Api";

const fetchPokemons = async (limit = 20, offset = 0) =>
  await fetch(API_URL + `?limit=${limit}&offset=${offset}`);
export default fetchPokemons;
