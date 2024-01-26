import { createContext } from "react";

interface X {
  isOpenModal: any;
  setIsOpenModal: any;
}
export const CardContext = createContext({} as X);
