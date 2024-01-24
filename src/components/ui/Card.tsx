// Card.tsx
// import { DataContextProvider, useDataContext } from "./DataContext";
import { MoveList } from "./MoveList";
import { Progressbar } from "./Progressbar";

export const Card: React.FC = () => {
  return (
    <div className="mx-auto grid w-full max-w-96 gap-3 rounded-xl border-2 border-dark_cardBorder bg-dark_card p-3 md:max-w-md lg:p-5">
      <p className="c_flex-center col-[1] rounded-xl bg-dark_bg p-1.5 text-center text-2xl">
        Pikachu
      </p>
      <div className="flex w-full items-start justify-end gap-3 lg:grid lg:justify-normal">
        <img
          className="h-28 w-full border-r-2 border-dark_cardBorder pr-2 lg:h-48 lg:border-b-2 lg:border-r-0 lg:pb-2 lg:pr-0"
          alt=""
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
          }
        />
        <div className="grid w-full gap-2 text-end text-lg font-medium">
          <Progressbar variant="health" />
          <Progressbar variant="exp" />
          <MoveList />
        </div>
      </div>
      <MoveList onMobile={true} />
    </div>
  );
};
