import { Button } from "./components/ui/buttons/Button";
import { Card } from "./components/ui/Card";
import { CardContext } from "./context/CardContext";
import { DataContext } from "./context/DataContext";
import { FightIcon, ReadyIcon } from "./assets/icons";
import { Modal } from "./components/ui/Modal";
import { useDataStates } from "./hooks/useDataStates";
import { useMovesData } from "./hooks/useMovesData";
import { usePokemonData } from "./hooks/usePokemonData";

export default function App() {
  const { isOpenModal, setIsOpenModal } = useDataStates();
  // const { exName } = usePokemonData();
  useMovesData();
  const {exName, exId, inHealth, exHealth, inExperience, exExperience}=usePokemonData()  
  return (
    <DataContext.Provider value={{exName, exId, inHealth, exHealth, inExperience, exExperience}}>
          <CardContext.Provider value={{isOpenModal, setIsOpenModal}}>
      <div className="c_flex-center min-h-screen bg-dark_bg text-dark_text">
        <div className="container relative">
          {/* {isOpenModal ? <MyModal /> : ""} */}
            <Modal />
          {/* </CardContext.Provider> */}
          <Button variant="initiateFightMobile">
            <ReadyIcon className="m-3 h-12 w-12 animate-pulse fill-white/60 transition-transform duration-300 hover:scale-110 sm:hover:scale-100 " />
          </Button>
          <div className="mx-auto grid gap-3 p-3 sm:grid-cols-2 sm:grid-rows-[1fr_auto] lg:grid-cols-[1fr_auto_1fr] lg:gap-y-16">
            {/* <CardContext.Provider value={useDataStates()}> */}
              <Card />
              <FightIcon className="hidden lg:m-auto lg:block lg:w-56 lg:stroke-[#bbb]" />
              <Card />
            <Button variant="initiateFightDesktop">
              <ReadyIcon className="m-3 h-12 w-12 animate-pulse fill-white/60 transition-transform duration-300 hover:scale-110 sm:hover:scale-100 " />
            </Button>
          </div>
        </div>
      </div>
            </CardContext.Provider>
    </DataContext.Provider>
  );
}
