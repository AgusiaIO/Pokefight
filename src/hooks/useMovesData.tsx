import { useEffect, useState } from "react";
// import { API_BASE_URL } from "../constants/constants";
import { usePokemonData } from "./usePokemonData";
import { Moves } from "../interfaces/interface";
export const useMovesData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { exMoves } = usePokemonData();
  // External Data - API
  const moveNames = exMoves as Moves[];
  console.log(moveNames.map((move) => move.move.url));

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await fetch(API_BASE_URL);
        // const data = await res.json();
        // setExPokemon(data);
        setIsLoading(false);
      } catch (error) {
        console.error(`Error: ${error}`);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      //   setExId(exPokemon.id);
      //   setExExperience(exPokemon.base_experience);
      //   setExName(
      //     exPokemon.name.slice(0, 1).toLocaleUpperCase() +
      //       exPokemon.name.slice(1),
      //   );
      //   setExHeight(exPokemon.height);
      //   setExWeight(exPokemon.weight);
      //   setExHealth(exPokemon.stats[0].base_stat);
      //   setExAttack(exPokemon.stats[1].base_stat);
      //   setExDefense(exPokemon.stats[2].base_stat);
      //   setExSpecialAttack(exPokemon.stats[3].base_stat);
      //   setExSpecialDefense(exPokemon.stats[4].base_stat);
      //   setExSpeed(exPokemon.stats[5].base_stat);
      //   setInHealth(exPokemon.stats[0].base_stat);
      //   setInExperience(exPokemon.base_experience);
    }
  }, [isLoading]);
  return {};
};
