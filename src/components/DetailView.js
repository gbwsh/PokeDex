import { useEffect, useState } from "react";
import fetchPokemonDetails from "./fetchPokemonDetails";

const DetailView = ({ url }) => {
  const [details, setDetails] = useState();

  useEffect(() => {
    const getDetails = () => {
      fetchPokemonDetails(url)
        .then((response) => response.json())
        .then((res) => setDetails(res));
    };
    getDetails();
  }, []);

  return details ? (
    <div
      key={details.id}
      className="flex items-center justify-center aspect-square bg-blue-400 border-pink-600 border-2"
    >
      <h1>{details.name}</h1>
      <h2>{details.height * 10} cm</h2>
      <h2>{details.weight / 10} kg</h2>
      {details.types.map((type) => (
        <h2 key={type.type.name}>{type.type.name}</h2>
      ))}
    </div>
  ) : (
    <h1>loading</h1>
  );
};

export default DetailView;
