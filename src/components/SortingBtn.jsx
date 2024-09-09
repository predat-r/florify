import React from "react";

function SortingBtn({ sortResults }) {
  return (
    <select
      onChange={(event) => sortResults(event.target.value)}
      className=" flex flex-row justify-center items-center text-center  appearance-none bg-[#9AE5C9] w-20 text-xs focus:appearance-none outline-none border-none sm:text-lg sm:w-40 h-full rounded-md text-bars mr-none p-1 sm:mr-4"
    >
      <option>Sort Results</option>
      <option value={1}>Relevance</option>
      <option value={2}>Price Low-High</option>
      <option value={3}>Price High-Low</option>
    </select>
  );
}

export default SortingBtn;
