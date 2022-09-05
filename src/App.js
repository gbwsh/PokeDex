import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./components/DetailPage";
import fetchPokemons from "./components/fetchPokemon";
import ListView from "./components/ListView";
import SearchBar from "./components/SearchBar";

async function* getPokePagerator() {
  let nextUrl = `https://pokeapi.co/api/v2/pokemon?limit=20`;
  while (nextUrl) {
    const response = await fetch(nextUrl);
    const data = await response.json();
    nextUrl = data.next;
    yield data.results;
  }
}

const pokeGen = getPokePagerator();

const paginate = async () => {
  const results = [];
  const { value } = await pokeGen.next();

  if (value) results.push(...value);
  return results;
};

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

  const handeScroll = (e) => {
    // console.log("top: ", e.target.documentElement.scrollTop);
    // console.log("win: ", window.innerHeight);
    // console.log("height: ", e.target.documentElement.scrollHeight);
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 100 >=
      e.target.documentElement.scrollHeight
    ) {
      console.log("scroll method");
      paginate().then((data) =>
        setCurrentPokemon((oldArr) => [...oldArr, ...data])
      );
    }
  };

  useEffect(() => {
    paginate().then((data) =>
      setCurrentPokemon((oldArr) => [...oldArr, ...data])
    );
    window.addEventListener("scroll", handeScroll);
  }, []);

  return (
    <div className="xl:flex xl:justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListView pokemons={currentPokemon} />} />
          <Route path="/details/:id" element={<DetailPage />} />
        </Routes>
        {/* <div className="xl:w-2/4">
          <SearchBar setCurrentPokemon={setCurrentPokemon} />
          <div className="grid grid-cols-auto gap-4">
            <ListView pokemons={currentPokemon} />
          </div>
        </div> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
