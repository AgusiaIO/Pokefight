import { useContext } from "react";
import { CardContext } from "../../context/CardContext";

interface MoveDataProps {
  children: React.ReactNode;
  moveName: string;
}

export const Move: React.FC<MoveDataProps> = ({ children, moveName }) => {
  const { isOpenModal, setIsOpenModal } = useContext(CardContext);
  return (
    <li className="group">
      <button
        className="c_flex-center flex-col"
        onClick={() => setIsOpenModal(!isOpenModal)}
      >
        {children}
        <p className="group-hover:text-dark_textHover">{moveName}</p>
      </button>
    </li>
  );
};
