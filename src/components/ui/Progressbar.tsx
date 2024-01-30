import React from "react";

export const Progressbar: React.FC<{
  variant: string;
  internalData: number;
  externalData: number;
}> = ({ variant, internalData, externalData }) => {
  const progressValue = parseInt(
    ((internalData / externalData) * 100).toFixed(2),
  );
  console.log(internalData, externalData, progressValue);

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
