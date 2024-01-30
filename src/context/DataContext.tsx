import { createContext } from "react";
import { internalExternalData } from "../interfaces/interface";
interface dataContextInterface {
  state: {
    id: number;
    name: string;
    health: internalExternalData;
    exp: internalExternalData;
  };
}

export const DataContext = createContext({} as dataContextInterface);
