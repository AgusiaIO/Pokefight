import { useEffect, useReducer, useState } from "react";
import { reducer } from "../features/pokemonReducer";
import { PokemonData } from "../data/PokemonData";
export const usePokemonData = () => {
  const controller = new AbortController();
  const [pokemon, setPokemon] = useState<string>("");

  const [state, dispatch] = useReducer(reducer, PokemonData);
  const [isLoadingPokemon, setIsLoadingisLoadingPokemon] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (pokemon == "") return;
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
          {
            signal: controller.signal,
          },
        );
        const data = await res.json();
        dispatch({ type: "fetch", payload: data });
        setIsLoadingisLoadingPokemon(false);
      } catch (error) {
        dispatch({ type: "clear" });
        setIsLoadingisLoadingPokemon(false);
      }
    };
    setIsLoadingisLoadingPokemon(true);
    fetchData();
    return () => {
      controller.abort();
    };
  }, [pokemon]);

  return {
    pokemon,
    setPokemon,
    isLoadingPokemon,
    state,
    dispatch,
  };
};
