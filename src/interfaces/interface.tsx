export interface internalExternalData {
  external: number;
  internal: number;
}

export interface Pokemon {
  id: number;
  name: string;
  exp: internalExternalData;
  weight: number;
  height: number;
  health: internalExternalData;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
  moves: Move[];
}

export interface Move {
  move: {
    url: string;
    name: string;
  };
}

export interface FilteredPokemonFromAll {
  name: string;
} // useAllPokemons
