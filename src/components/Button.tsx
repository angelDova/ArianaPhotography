import { RiArrowRightUpLongLine } from "@remixicon/react";
import React from "react";

interface buttonProps {
  label: string;
}

const Buttons = ({ label }: buttonProps) => {
  return (
    <button className="flex items-center gap-2.5 max-w-max">
      <h2 className="flex items-center gap-2.5 max-w-max">
        {label}
        <span className="bg-purple-600 w-20 h-12 flex items-center justify-center rounded-full hover:bg-purple-500 transition-colors">
          <RiArrowRightUpLongLine size={26} />
        </span>
      </h2>
    </button>
  );
};

export default Buttons;
