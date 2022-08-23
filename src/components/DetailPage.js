import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchPokemonDetails from "./fetchPokemonDetails";

const DetailPage = () => {
  const [details, setDetails] = useState();
  const { id } = useParams();

  useEffect(() => fetchPokemonDetails());
};

export default DetailPage;
