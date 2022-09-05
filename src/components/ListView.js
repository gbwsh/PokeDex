import TileView from "./TileView";

const ListView = ({ pokemons }) => {
  return pokemons ? (
    <div className="grid grid-cols-auto gap-4">
      {pokemons.map((pokemon) => (
        <TileView key={pokemon.name} url={pokemon.url} />
      ))}
    </div>
  ) : (
    <h1>loading...</h1>
  );
};

export default ListView;
