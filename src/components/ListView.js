import { useEffect, useState } from "react";
import DetailView from "./DetailView";
import fetchPokemonDetails from "./fetchPokemonDetails";

const ListView = ({ pokemons }) => {
  return pokemons ? (
    pokemons.map((pokemon) => (
      <DetailView key={pokemon.name} url={pokemon.url} />
    ))
  ) : (
    <h1>loading</h1>
  );
};

export default ListView;
