export type PokemonActionType =
  | { type: "fetch"; payload: any }
  | { type: "internalExp"; payload: number }
  | { type: "internalHealth"; payload: number }
  | { type: "clear" }
