import React from "react";

type BoxProps = {
  selected?: boolean;
  onClick?: () => void;
  name?: string;
};

const Box = ({ selected = false, onClick, name }: BoxProps) => {
  return (
    <div
      className={`h-36 md:h-48 ${
        selected ? "bg-gray-600" : "bg-gray-200"
      } w-36 md:w-48 md:m-4 m-2 center rounded-xl text-black
      cursor-pointer hover:bg-gray-400 transition-all duration-300 ease-in-out
      active:bg-gray-800 active:text-white
      `}
      onClick={() => {onClick && onClick()}}
    >
      {name}
    </div>
  );
};

export default Box;
