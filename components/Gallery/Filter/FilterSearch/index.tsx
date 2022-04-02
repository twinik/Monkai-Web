import { NextPage } from "next";
import React from "react";

interface Props {
  filterName: string;
  setFilterName: any;
  update: boolean;
  setUpdate: any;
}

export const FilterSearch: NextPage<Props> = ({
  filterName,
  setFilterName,
  update,
  setUpdate,
}) => {
  return (
    <div>
      <div className="relative w-full  text-gray-600 transition-all duration-100 border-white border-solid border-0 border-b focus-within:text-white mt-2 ">
        <span className="absolute inset-y-0 left-0 flex items-center ">
          <button
            type="submit"
            className="p-1 focus:outline-none focus:shadow-outline"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </span>
        <input
          type="search"
          name="q"
          className=" py-3 w-10/12 ml-0 focus:outline-0 text-sm pl-4 bg-transparent text-gray-600 focus:placeholder-white  focus:text-white"
          placeholder="Search..."
          autoComplete="off"
          value={filterName}
          onChange={(e) => {
            setFilterName(e.target.value);
            setUpdate(!update);
          }}
        />
      </div>
      <hr />
    </div>
  );
};
