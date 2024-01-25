import { useEffect, useState } from "react";
import { API_BASE_URL, initialNumberValue } from "../constants/constants";
import { Pokemon } from "../interfaces/interface";
// import { useDataStates } from "./useDataStates";
export const usePokemonData = () => {
  const [exPokemon, setExPokemon] = useState<Pokemon>();
  const [isLoading, setIsLoading] = useState(true);
  // External Data - API
  const [exId, setExId] = useState(initialNumberValue);
  const [exName, setExName] = useState("");
  const [exExperience, setExExperience] = useState(initialNumberValue);
  const [exWeight, setExWeight] = useState(initialNumberValue);
  const [exHeight, setExHeight] = useState(initialNumberValue);
  const [exHealth, setExHealth] = useState(initialNumberValue);
  const [exAttack, setExAttack] = useState(initialNumberValue);
  const [exDefense, setExDefense] = useState(initialNumberValue);
  const [exSpecialAttack, setExSpecialAttack] = useState(initialNumberValue);
  const [exSpecialDefense, setExSpecialDefense] = useState(initialNumberValue);
  const [exSpeed, setExSpeed] = useState(initialNumberValue);
  const [exMoves, setExMoves] = useState([]);
  // Internal Data - Local
  const [inHealth, setInHealth] = useState(initialNumberValue);
  const [inExperience, setInExperience] = useState(initialNumberValue);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_BASE_URL);
        const data = await res.json();
        setExPokemon(data);
        setIsLoading(false);
      } catch (error) {
        console.error(`Error: ${error}`);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading && exPokemon) {
      setExId(exPokemon.id);
      setExExperience(exPokemon.base_experience);
      setExName(
        exPokemon.name.slice(0, 1).toLocaleUpperCase() +
          exPokemon.name.slice(1),
      );
      setExHeight(exPokemon.height);
      setExWeight(exPokemon.weight);
      setExHealth(exPokemon.stats[0].base_stat);
      setExAttack(exPokemon.stats[1].base_stat);
      setExDefense(exPokemon.stats[2].base_stat);
      setExSpecialAttack(exPokemon.stats[3].base_stat);
      setExSpecialDefense(exPokemon.stats[4].base_stat);
      setExSpeed(exPokemon.stats[5].base_stat);
      setInHealth(exPokemon.stats[0].base_stat);
      setInExperience(exPokemon.base_experience);
      setExMoves(exPokemon.moves);
    }
  }, [isLoading]);
  return {
    exPokemon,
    isLoading,
    exId,
    exName,
    exExperience,
    exWeight,
    exHeight,
    exHealth,
    exAttack,
    exDefense,
    exSpecialAttack,
    exSpecialDefense,
    exSpeed,
    setExHealth,
    inHealth,
    setInHealth,
    inExperience,
    setInExperience,
    exMoves,
    setExMoves,
  };
};
