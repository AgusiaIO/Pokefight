import { initialNumberValue } from "../constants/constants";
import { Pokemon } from "../interfaces/interface";
export const PokemonData: Pokemon = {
  id: initialNumberValue,
  name: "",
  exp: {
    external: initialNumberValue,
    internal: initialNumberValue,
  },
  weight: initialNumberValue,
  height: initialNumberValue,
  health: {
    external: initialNumberValue,
    internal: initialNumberValue,
  },
  attack: initialNumberValue,
  defense: initialNumberValue,
  specialAttack: initialNumberValue,
  specialDefense: initialNumberValue,
  speed: initialNumberValue,
  moves: [],
};
