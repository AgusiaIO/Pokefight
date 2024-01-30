import { initialNumberValue } from "../constants/constants";
import { Pokemon } from "../interfaces/interface";
import { PokemonActionType } from "../types/types";

export const reducer = (state: Pokemon, action: PokemonActionType) => {
  switch (action.type) {
    case "fetch":
      return {
        ...state,

        id: action.payload.id,
        name: action.payload.name,
        exp: {
          ...state.exp,
          external: action.payload.base_experience,
          internal: action.payload.base_experience,
        },
        weight: action.payload.weight,
        height: action.payload.height,
        health: {
          ...state.health,
          external: action.payload.stats[0].base_stat,
          internal: action.payload.stats[0].base_stat,
        },
        attack: action.payload.stats[1].base_stat,
        defense: action.payload.stats[2].base_stat,
        specialAttack: action.payload.stats[3].base_stat,
        specialDefense: action.payload.stats[4].base_stat,
        speed: action.payload.stats[5].base_stat,
        moves: action.payload.moves,
      };
    case "internalExp":
      return {
        ...state,
        exp: {
          ...state.exp,
          internal: action.payload,
        },
      };
    case "internalHealth":
      return {
        ...state,
        health: {
          ...state.health,
          internal: action.payload,
        },
      };
    case "clear":
      return {
        ...state,

        id: initialNumberValue,
        name: initialNumberValue,
        exp: {
          ...state.exp,
          external: initialNumberValue,
          internal: initialNumberValue,
        },
        weight: initialNumberValue,
        height: initialNumberValue,
        health: {
          ...state.health,
          external: initialNumberValue,
          internal: initialNumberValue,
        },
        attack: initialNumberValue,
        defense: initialNumberValue,
        specialAttack: initialNumberValue,
        specialDefense: initialNumberValue,
        speed: initialNumberValue,
        moves: initialNumberValue,
      };

    default:
      return state;
  }
};
