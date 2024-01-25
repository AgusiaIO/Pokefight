import { DataContext } from "./context/DataContext";
import { CardContext } from "./context/CardContext";
import { Card } from "./components/ui/Card";
import { FightIcon, ReadyIcon } from "./assets/icons";
import { Button } from "./components/ui/buttons/Button";
import { usePokemonData } from "./hooks/usePokemonData";
import { useMovesData } from "./hooks/useMovesData";
import { Modal } from "./components/ui/Modal";
import { useDataStates } from "./hooks/useDataStates";
export default function App() {
  // const { isOpenModal, setIsOpenModal } = useDataStates();
  // const { exName } = usePokemonData();
  useMovesData();
  return (
    <DataContext.Provider value={usePokemonData()}>
      <div className="c_flex-center min-h-screen bg-dark_bg text-dark_text">
        <div className="container relative">
          {/* {isOpenModal ? <MyModal /> : ""} */}
          <CardContext.Provider value={useDataStates()}>
            <Modal />
          </CardContext.Provider>
          <Button variant="initiateFightMobile">
            <ReadyIcon className="m-3 h-12 w-12 animate-pulse fill-white/60 transition-transform duration-300 hover:scale-110 sm:hover:scale-100 " />
          </Button>
          <div className="mx-auto grid gap-3 p-3 sm:grid-cols-2 sm:grid-rows-[1fr_auto] lg:grid-cols-[1fr_auto_1fr] lg:gap-y-16">
            <CardContext.Provider value={useDataStates()}>
              <Card />
              <FightIcon className="hidden lg:m-auto lg:block lg:w-56 lg:stroke-[#bbb]" />
              <Card />
            </CardContext.Provider>
            <Button variant="initiateFightDesktop">
              <ReadyIcon className="m-3 h-12 w-12 animate-pulse fill-white/60 transition-transform duration-300 hover:scale-110 sm:hover:scale-100 " />
            </Button>
          </div>
        </div>
      </div>
    </DataContext.Provider>
  );
}
