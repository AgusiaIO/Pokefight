import { Card } from "./components/ui/Card";
import { FightIcon, ReadyIcon } from "./assets/icons";
import { usePokemonData } from "./hooks/usePokemonData";
import { Button } from "./components/ui/buttons/Button";
import { useEffect, useState } from "react";

export default function App() {
  const { pokemon, isLoading } = usePokemonData();
  const [experience, setExperience] = useState(0);
  const [name, setName] = useState("");
  // const [weight, setWeight] = useState<number>(0);
  // const [height, setHeight] = useState<number>(0);
  // const [health, setHealth] = useState<number>(0);
  // const [attack, setAttack] = useState<number>(0);
  // const [defense, setDefense] = useState<number>(0);
  // const [specialAttack, setSpecialAttack] = useState<number>(0);
  // const [specialDefense, setSpecialDefense] = useState<number>(0);
  // const [speed, setSpeed] = useState<number>(0);

  useEffect(() => {
    if (!isLoading && pokemon) {
      setExperience(pokemon.base_experience);
      setName(pokemon.name);
      // setHeight(pokemon.height);
      // setWeight(pokemon.weight);
      // setHealth(pokemon.stats[0].base_stat);
      // setAttack(pokemon.stats[1].base_stat);
      // setDefense(pokemon.stats[2].base_stat);
      // setSpecialAttack(pokemon.stats[3].base_stat);
      // setSpecialDefense(pokemon.stats[4].base_stat);
      // setSpeed(pokemon.stats[5].base_stat);
    }
  }, [pokemon, isLoading]);
  console.log(experience);
  return (
    <div className="c_flex-center min-h-screen bg-dark_bg text-dark_text">
      <div className="container relative">
        <Button variant="initiateFightMobile">
          <ReadyIcon className="m-3 h-12 w-12 animate-pulse fill-white/60 transition-transform duration-300 hover:scale-110 sm:hover:scale-100 " />
        </Button>
        <div className="mx-auto grid gap-3 p-3 sm:grid-cols-2 sm:grid-rows-[1fr_auto] lg:grid-cols-[1fr_auto_1fr] lg:gap-y-16">
          <Card />
          <FightIcon className="hidden lg:m-auto lg:block lg:w-56 lg:stroke-[#bbb]" />
          <Card />
          <Button variant="initiateFightDesktop">
            <ReadyIcon className="m-3 h-12 w-12 animate-pulse fill-white/60 transition-transform duration-300 hover:scale-110 sm:hover:scale-100 " />
          </Button>
        </div>
      </div>
    </div>
  );
}
