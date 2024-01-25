import { useState } from "react";

export const useDataStates = () => {
  const [isOpenModal, setIsOpenModal] = useState(true);
  return { isOpenModal, setIsOpenModal };
};
