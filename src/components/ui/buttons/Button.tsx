import React from "react";

export const Button: React.FC<{
  variant?: string;
  children: React.ReactNode;
}> = (props) => {
  const getClasses = () => {
    switch (props.variant) {
      case "initiateFightMobile":
        return " fixed right-0 top-0 animate-pulse rounded-bl-3xl border-b-2 border-l-2 border-white bg-black/40 sm:hidden ";
      case "initiateFightDesktop":
        return " col-span-3 row-[2] mx-auto hidden rounded-xl border-2 border-dark_cardBorder bg-dark_card p-3 duration-300 hover:scale-110 sm:block ";
      default:
        break;
    }
  };

  return <button className={`${getClasses()}`}> {props.children} </button>;
};
