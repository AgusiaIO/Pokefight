import React from "react";
interface ProgressbarProps {
  variant: string;
  externalData: number;
  internalData: number;
}

export const Progressbar: React.FC<ProgressbarProps> = ({
  variant,
  internalData,
  externalData,
}) => {
  const progressValue = parseInt(
    ((internalData / externalData) * 100).toFixed(2),
  );

  const getClasses = () => {
    switch (variant) {
      case "health":
        return `${`c_progressbar bg-gradient-to-r from-red-500 to-red-800 `}`;
      case "experience":
        return `c_progressbar bg-gradient-to-r from-blue-500 to-blue-800`;
      default:
        return "";
    }
  };
  return (
    <>
      <div className="overflow-hidden rounded-lg  bg-gray-200  dark:bg-dark_bg">
        <div
          style={{ width: `${progressValue}%` }}
          className={getClasses()}
        ></div>
      </div>
      <p>
        {internalData}/{externalData}
      </p>
    </>
  );
};
