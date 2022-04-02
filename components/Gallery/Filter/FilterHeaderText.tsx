import { NextComponentType } from "next";
import React from "react";

export const FilterHeaderText: NextComponentType = () => {
  return (
    <div>
      <h1 className="text-left uppercase border-b border-white border-solid  text-lg lg:text-xl font-normal pb-4 mb-0">
        Filter
      </h1>
      <hr />
    </div>
  );
};
