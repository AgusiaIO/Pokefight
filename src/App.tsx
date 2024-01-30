import { Button } from "./components/ui/buttons/Button";
import {
  Info,
  ReadyIcon,
  Heart,
  ArrowBottomRight,
  Spinner,
  Pokeball,
  Trash,
} from "./assets/icons";
import { usePokemonData } from "./hooks/usePokemonData";
// import { Card } from "./components/ui/Card";
import { FilteredPokemonFromAll } from "./interfaces/interface";
import { DataContext } from "./context/DataContext";
import { useAllPokemons } from "./hooks/useAllPokemons";
import { useEffect, useState } from "react";
// import { Pokemon } from "./interfaces/interface";
// import { Tooltip } from "./components/ui/Tooltip";
export default function App() {
  const [yourChoice, setYourChoice] = useState(false);
  // const [likedPokemons, setLikedPokemons] = useState<Pokemon[]>([]);
  const { allPokemons } = useAllPokemons();
  const { state, pokemon, setPokemon, isLoadingPokemon, dispatch } =
    usePokemonData();
  const handleClearValues = () => {
    dispatch({ type: "clear" });
    setPokemon("");
  };

  const handleChangeChoice = () => {
    setYourChoice(!yourChoice);
    setPokemon("");
  };

  return (
    <DataContext.Provider value={usePokemonData()}>
      <div className="c_flex-center min-h-screen bg-dark_bg text-dark_text">
        <div className="container max-w-[900px] text-center text-xl sm:text-2xl">
          <h1 className="mb-6 text-5xl uppercase text-yellow-600 sm:text-6xl">
            Poke
            <span className=" border-b-2 border-yellow-300 text-yellow-300">
              Fight
            </span>
          </h1>
          <div className="grid grid-cols-3 grid-rows-5 gap-3 p-5 md:grid-cols-[2fr_auto_1.3fr] md:grid-rows-[auto_auto_1fr_auto]">
            {/* <p className="mt-10 text-2xl">Select pokemon!</p> */}
            <div className="hidden rounded-xl bg-dark_card p-3  md:col-[3/4] md:flex md:items-center md:justify-center">
              <ArrowBottomRight className="h-8 w-8 md:h-10 md:w-10" />
            </div>
            <div className="hidden rounded-xl bg-dark_card p-3 md:col-[3/4] md:row-[2/4] md:flex md:text-xl">
              {state.name == "" || isLoadingPokemon ? (
                <p className="c_flex-center">
                  Select your Pokemon to see more information
                </p>
              ) : (
                <ul role="list" className="grid text-left">
                  <li>
                    <span role="presentation">❤️</span> HP:
                    <span className="font-bold"> {state.health.external}</span>
                  </li>
                  <li>
                    <span role="presentation">🗡️</span> Attack:
                    <span className="font-bold"> {state.attack}</span>
                  </li>
                  <li>
                    <span role="presentation">🛡️</span> Defense:
                    <span className="font-bold"> {state.defense}</span>
                  </li>
                  <li>
                    <span role="presentation">☄️</span> Special attack:
                    <span className="font-bold"> {state.specialAttack}</span>
                  </li>
                  <li>
                    <span role="presentation">💫</span> Special defense:
                    <span className="font-bold"> {state.specialDefense}</span>
                  </li>
                  <li>
                    <span role="presentation">💨</span> Speed:
                    <span className="font-bold"> {state.speed}</span>
                  </li>
                </ul>
              )}
            </div>
            <select
              value={pokemon}
              onChange={(e) => setPokemon(e.target.value.toLocaleLowerCase())}
              className="col-[1/4] w-full rounded-xl bg-dark_card p-5 text-center outline-none focus:outline-yellow-300 md:col-[1] md:row-[1/2]"
              name=""
              id=""
            >
              <option selected value={""}>
                Select your pokemon
              </option>
              {allPokemons.map((pokemon: FilteredPokemonFromAll) => (
                <option
                  key={pokemon.name}
                  value={pokemon.name.toLocaleLowerCase()}
                >
                  {pokemon.name.toLocaleUpperCase().slice(0, 1) +
                    pokemon.name.slice(1)}
                </option>
              ))}
            </select>
            <input
              value={pokemon}
              onChange={(e) => setPokemon(e.target.value.toLocaleLowerCase())}
              className="col-[1/3] rounded-xl bg-dark_card p-5 text-center md:col-[1] md:row-[2]"
              type="text"
            />
            <button
              className="c_flex-center group rounded-xl bg-dark_card p-3 disabled:opacity-50 md:col-[2] md:row-[2]"
              disabled={pokemon ? false : true}
              onClick={handleClearValues}
            >
              <Trash className="h-8 w-8 stroke-red-500 transition-transform duration-300 group-hover:scale-110 group-disabled:group-hover:scale-100 group-disabled:group-hover:fill-none " />
            </button>
            <button
              className="c_flex-center col-[1/3] row-[5] rounded-xl bg-dark_card p-3 md:row-[4]"
              onClick={handleChangeChoice}
            >
              <p className=" animate-pulse">
                {yourChoice ? "Your" : "Enemy"} choice
              </p>
            </button>
            {pokemon !== "" && isLoadingPokemon ? (
              <div
                role="status"
                className="c_flex-center col-[2/4] row-[3/5] rounded-xl bg-dark_card p-4
                md:col-[1/3] md:row-[3]"
              >
                <Spinner />
              </div>
            ) : state.id !== 0 && pokemon ? (
              <div
                className="c_flex-center col-[2/4] row-[3/5] w-full rounded-xl bg-dark_card p-4
              md:col-[1/3] md:row-[3]"
              >
                <img
                  className="h-32"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${state.id}.svg`}
                  alt=""
                />
              </div>
            ) : (
              <div className="c_flex-center col-[2/4] row-[3/5] w-full rounded-xl bg-dark_card p-4 md:col-[1/3] md:row-[3]">
                <Pokeball className="h-32" />
              </div>
            )}
            <button
              className="c_flex-center group row-[3] rounded-xl bg-dark_card p-3 disabled:opacity-50 md:hidden"
              disabled={!pokemon || isLoadingPokemon ? true : false}
            >
              <Info className="h-8 w-8 stroke-dark_text transition-transform duration-300 group-hover:scale-110 group-hover:fill-yellow-400/50 group-hover:stroke-yellow-400 group-disabled:group-hover:scale-100 group-disabled:group-hover:fill-none group-disabled:group-hover:stroke-current sm:h-10 sm:w-10" />
            </button>

            <button
              className="c_flex-center group row-[4] overflow-hidden rounded-xl bg-dark_card p-3 disabled:opacity-50 md:col-[2] md:row-[1]"
              disabled={pokemon && state.name ? false : true}
            >
              <Heart
                className={`h-8 w-8 stroke-red-500 transition-transform duration-300 group-hover:scale-110 group-hover:fill-red-500 group-disabled:group-hover:scale-100  group-disabled:group-hover:stroke-red-500 sm:h-10 sm:w-10 `}
              />
            </button>
            <button
              className="c_flex-center group rounded-xl bg-dark_card p-3 disabled:opacity-50 md:col-[3] md:row-[4]"
              disabled={pokemon && state.name ? false : true}
            >
              <ReadyIcon className="h-8 w-8 stroke-dark_text transition-transform duration-300 group-hover:scale-110 group-hover:fill-gray-600 group-hover:stroke-gray-400  group-disabled:group-hover:scale-100 group-disabled:group-hover:fill-none group-disabled:group-hover:stroke-current sm:h-16 sm:w-16 md:h-11 md:w-11" />
            </button>
          </div>
          {/* <Button variant="initiateFightMobile">
            <ReadyIcon className="animate-pulse m-3 h-12 w-12 fill-white/60 transition-transform duration-300 hover:scale-110 sm:hover:scale-100 " />
          </Button> */}
          {/* <div className="mx-auto grid gap-3 p-3 sm:grid-cols-2 sm:grid-rows-[1fr_auto] lg:grid-cols-[1fr_auto_1fr] lg:gap-y-16">
            <Card />
            <FightIcon className="hidden lg:m-auto lg:block lg:w-56 lg:stroke-[#bbb]" />
            <Card />
            <Button variant="initiateFightDesktop">
              <ReadyIcon className="animate-pulse m-3 h-12 w-12 fill-white/60 transition-transform duration-300 hover:scale-110 sm:hover:scale-100 " />
            </Button>
          </div> */}
        </div>
      </div>
    </DataContext.Provider>
  );
}
