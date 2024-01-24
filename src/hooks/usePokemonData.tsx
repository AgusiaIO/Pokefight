import { useEffect, useState } from "react";
import { API_BASE_URL } from "../constants/constants";
interface Pokemon {
  base_experience: number;
  name: string;
  height: number;
  weight: number;
  stats: { base_stat: number }[];
}

export const usePokemonData = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_BASE_URL);
        const data = await res.json();
        setPokemon(data);
        setIsLoading(false);
      } catch (error) {
        console.error(`Error: ${error}`);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { pokemon, isLoading };
};
