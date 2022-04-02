import { NextComponentType } from "next";
import React, { useState } from "react";

export const LegendarySwitch: NextComponentType = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex justify-between items-center lg:flex-col xl:flex-row">
      <h2 className="uppercase text-lg lg:text-xl  font-normal ">
        Legendary Mode
      </h2>
      <label className="switch mt-2.5">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => handleChecked()}
        />
        <div className="slider"></div>
      </label>
    </div>
  );
};
