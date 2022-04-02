import React from "react";
import { NextPage } from "next";

// Components
import { FilterHeaderText } from "./FilterHeaderText";
import { LegendarySwitch } from "./LegendarySwitch";
import { FilterSearch } from "./FilterSearch";
import { TraitFilter } from "./TraitFilter";

interface Props {
  filterTraits: any;
  setFilterTraits: any;
  filterName: string;
  setFilterName: any;
  update: boolean;
  setUpdate: any;
}

export const Filter: NextPage<Props> = ({
  filterTraits,
  setFilterTraits,
  filterName,
  setFilterName,
  update,
  setUpdate,
}) => {
  return (
    <div className="filter  col-span-12 lg:col-span-3  px-0 mt-6 ">
      <FilterHeaderText />
      <LegendarySwitch />
      <FilterSearch
        filterName={filterName}
        setFilterName={(filterName: string) => setFilterName(filterName)}
        update={update}
        setUpdate={(update: string) => setUpdate(update)}
      />
      <TraitFilter
        filterTraits={filterTraits}
        setFilterTraits={(filterTraits: string) =>
          setFilterTraits(filterTraits)
        }
        update={update}
        setUpdate={(update: string) => setUpdate(update)}
      />
    </div>
  );
};
