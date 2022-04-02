import React, { useState, useEffect } from "react";

interface Props {
  availableTrait: any;
  trait: any;
  filterTraits: any;
  setFilterTraits: any;
  update: boolean;
  setUpdate: any;
}

export const AccordionItem: React.FC<Props> = ({
  availableTrait,
  trait,
  filterTraits,
  setFilterTraits,
  update,
  setUpdate,
}) => {
  const [checkbox, setCheckbox] = useState(false);

  const handleCheckbox = () => {
    setCheckbox(!checkbox);
    const holder = filterTraits;

    holder[trait] = {
      ...holder[trait],
      [availableTrait]: !checkbox,
    };

    setFilterTraits(holder);
    setUpdate(!update);
  };

  return (
    <label className="trait-label w-full inline-flex justify-between items-center mb-2 relative">
      <span className="ml-2 t-lg lg:text-xl  text-white-100">
        {availableTrait}
      </span>
      <input
        type="checkbox"
        className="form-checkbox"
        checked={checkbox}
        onChange={() => handleCheckbox()}
      />
      <span className="checkmark"></span>
    </label>
  );
};
