"use Client";
import React from "react";

export const SearchBar = () => {
  return (
    <div className="w-[100%]">
      <form className="flex flex-row p-2 gap-2 ">
        <input
          type="text"
          placeholder="search blog..."
          className="outline-none text-sm font-semibold flex-1 border-b-2 border-black/10 focus:placeholder"
        />
        <button className="border-2 border-black/50 text-black/50 px-4 py-1 rounded-md ">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
