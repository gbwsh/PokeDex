import { useEffect, useState } from "react";
import fetchPokemons from "./components/fetchPokemon";
import ListView from "./components/ListView";
import SearchBar from "./components/SearchBar";

function App() {
  const [currentPokemon, setCurrentPokemon] = useState();

  const homePage = () => {
    fetchPokemons()
      .then((response) => response.json())
      .then((response) => setCurrentPokemon(response.results));
  };

  useEffect(() => {
    homePage();
  }, []);

  return (
    <>
      <SearchBar />
      <div className="grid grid-cols-auto gap-4">
        <ListView pokemons={currentPokemon} />
      </div>
    </>
  );
}

export default App;
