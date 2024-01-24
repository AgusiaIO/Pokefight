import {
  AttackIcon,
  SpecialDefenseIcon,
  DefenseIcon,
  SpecialAttackIcon,
} from "../../assets/icons";
import { Move } from "./Move";

interface MoveListProps {
  onMobile?: boolean;
}

export const MoveList: React.FC<MoveListProps> = ({ onMobile = false }) => {
  return (
    <ul
      className={`${
        onMobile ? " lg:hidden" : "hidden md:flex-wrap lg:flex"
      } flex items-center justify-between`}
    >
      <Move moveName={"Attack"}>
        <AttackIcon className="c_moves" />
      </Move>
      <Move moveName={"Defend"}>
        <DefenseIcon className="c_moves" />
      </Move>
      <Move moveName={"Defend"}>
        <SpecialDefenseIcon className="c_moves" />
      </Move>
      <Move moveName={"Critical"}>
        <SpecialAttackIcon className="c_moves" />
      </Move>
    </ul>
  );
};
