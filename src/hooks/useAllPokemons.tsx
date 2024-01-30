import { useEffect, useState } from "react";
import { FilteredPokemonFromAll } from "../interfaces/interface";
export const useAllPokemons = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [isLoadingAllPokemons, setIsLoadingAllPokemons] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=500");
        const data = await res.json();
        const filteredPokemons = data.results.filter(
          (pokemon: FilteredPokemonFromAll) => !pokemon.name.includes("-"),
        );
        setAllPokemons(filteredPokemons);
        setIsLoadingAllPokemons(false);
      } catch (error) {
        setIsLoadingAllPokemons(false);
      }
    };
    fetchData();
  }, []);
  return { isLoadingAllPokemons, allPokemons };
};
