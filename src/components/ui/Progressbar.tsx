import React from "react";

interface ProgressbarProps {
  variant: string;
}

export const Progressbar: React.FC<ProgressbarProps> = ({ variant }) => {
  const getClasses = () => {
    switch (variant) {
      case "health":
        return "c_progressbar w-[50%] bg-gradient-to-r from-red-500 to-red-800 ";
      case "exp":
        return "c_progressbar w-[50%] bg-gradient-to-r from-blue-500 to-blue-800";
      default:
        return "";
    }
  };
  return (
    <>
      <div className="overflow-hidden rounded-lg  bg-gray-200  dark:bg-dark_bg">
        <div className={getClasses()}>
          <p>40/{}</p>
        </div>
      </div>
      <p>40/{}</p>
    </>
  );
};
