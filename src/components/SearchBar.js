import { useEffect, useState } from "react";
import fetchPokemons from "./fetchPokemon";
import ListView from "./ListView";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [options, setOptions] = useState([]);
  const [allPokemon, setAllPokemon] = useState();

  const search = (dataset) => {
    if (dataset) {
      setOptions(
        dataset.filter(
          (x) => x.name.toLowerCase().indexOf(input.toLowerCase()) > -1
        )
      );
    } else setOptions({ dataset });
  };

  useEffect(() => {
    search(allPokemon);
  }, [input]);

  const fetchAll = () => {
    fetchPokemons(2000)
      .then((res) => res.json())
      .then((res) => setAllPokemon(res.results));
  };

  return (
    <div>
      <input
        placeholder="Search"
        onChange={(e) => setInput(e.target.value)}
        onClick={() => fetchAll()}
        value={input}
        className="text-black w-full"
      />
      {options.length > 0 && <ListView pokemons={options} />}
    </div>
  );
};

export default SearchBar;
