import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_URL from "./constants/Api";
import fetchPokemonDetails from "./fetchPokemonDetails";

const DetailPage = () => {
  const [details, setDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchPokemonDetails(API_URL + id)
      .then((res) => res.json())
      .then((res) => setDetails(res));
  }, [id]);

  return details ? (
    <h1>{details.name}</h1>
  ) : (
    <h1>loading pokemon details...</h1>
  );
};

export default DetailPage;
