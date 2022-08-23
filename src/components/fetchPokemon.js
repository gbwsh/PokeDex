import API_URL from "./constants/Api";

const fetchPokemons = async (limit = 20) =>
  await fetch(API_URL + `?limit=${limit}`);
export default fetchPokemons;
