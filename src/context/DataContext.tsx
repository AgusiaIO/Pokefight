import { createContext } from "react";

import { usePokemonData } from "../hooks/usePokemonData";

interface X{
    exName:any;
    exId:any;
    inHealth:any;
    exHealth:any;
    inExperience:any;
    exExperience:any
  }
export const DataContext = createContext({}     as X
    );

// export const PokemonContextProvider=()=>{
//     const {exName, exId, inHealth, exHealth, inExperience, exExperience}=usePokemonData()

//     return
// }
