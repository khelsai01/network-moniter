import React from "react";
import { MdOutlineFilterAlt } from "react-icons/md";
const FilterSection = () => {
  return (
    <div className="w-full flex  gap-2 border-b-2 border-gray-500 p-2">
      <div>
        <div className="flex m-auto items-center ">
          <MdOutlineFilterAlt className="text-gray-400 text-[18px] z-10 hover:scale-110 duration-500" />
          <input
            type="text"
            placeholder="filter"
            className="bg-gray-700 -ml-6 rounded-full px-2 placeholder:px-6"
          />
        </div>
      </div>
      <div>
        <div className="flex gap-1 border-r-2 px-2 border-gray-500 my-auto">
          <input type="checkbox" className="w-3 h-3 bg-gray-500 m-auto" />
          <label className="text-gray-400 text-[14px] hover:scale-110 duration-500">Invest</label>
        </div>
      </div>
      <div className="flex flex-wrap gap-1 border-r-2 px-2 border-gray-500 my-auto">
        <div className="flex flex-wrap gap-1 px-2 my-auto">
          <input type="checkbox" className="w-3 h-3 bg-gray-500 m-auto" />
          <label className="text-gray-400 text-[14px] hover:scale-110 duration-500">Hide data URLs</label>
        </div>
        <div className="flex gap-1 px-2">
          <input type="checkbox" className="w-3 h-3 bg-gray-500 m-auto" />
          <label className="text-gray-400 text-[14px] hover:scale-110 duration-500">
            Hide extension URLs
          </label>
        </div>
        <p className="px-1 bg-blue-500 rounded-md text-gray-300  text-[14px] hover:scale-110 duration-500">
          All
        </p>
      </div>
      <div className=" flex flex-wrap gap-1">
        <p className="text-[10px] text-gray-300 border-2 border-gray-400 rounded-md font-medium px-2 py-[2px] hover:scale-110 duration-500">
          fetch/XHR
        </p>
        <p className="text-[10px] text-gray-300 border-2 border-gray-400 rounded-md px-2 py-[2px] font-medium hover:scale-110 duration-500">
          Doc
        </p>
        <p className="text-[10px] text-gray-300 border-2 border-gray-400 rounded-md px-2 py-[2px] font-medium hover:scale-110 duration-500">
          CSS
        </p>
        <p className="text-[10px] text-gray-300 border-2 border-gray-400 rounded-md px-2 py-[2px] font-medium hover:scale-110 duration-500">
          Js
        </p>
        <p className="text-[10px] text-gray-300 border-2 border-gray-400 rounded-md px-2 py-[2px] font-medium hover:scale-110 duration-500">
          Font
        </p>
        <p className="text-[10px]  text-gray-300 border-2 border-gray-400 rounded-md px-2 py-[2px] font-medium hover:scale-110 duration-500">
          Img
        </p>
        <p className="text-[10px] text-gray-300 border-2 border-gray-400 rounded-md px-2 py-[2px] font-medium hover:scale-110 duration-500">
          Media
        </p>
        <p className="text-[10px] text-gray-300 border-2 border-gray-400 rounded-md px-2 py-[2px] font-medium hover:scale-110 duration-500">
          Manifest
        </p>
        <p className="text-[10px] text-gray-300 border-2 border-gray-400 rounded-md px-2 py-[2px] font-medium hover:scale-110 duration-500">
          WS
        </p>
        <p className="text-[10px] text-gray-300 border-2 border-gray-400 rounded-md px-2 py-[2px] font-medium hover:scale-110 duration-500">
          Wasm
        </p>
        <p className="text-[10px] text-gray-300 border-2 border-gray-400 rounded-md px-2 py-[2px] font-medium hover:scale-110 duration-500">
          Other
        </p>
      </div>
      <div className="flex">
        <div className="flex gap-2 px-2 my-auto">
          <input type="checkbox" className="w-3 h-3 bg-gray-500 m-auto" />
          <label className="text-gray-400 text-[14px] hover:scale-110 duration-500">
            Blocked response cookies
          </label>
        </div>
        <div className="flex gap-2 px-2 my-auto">
          <input type="checkbox" className="w-3 h-3 bg-gray-500 m-auto" />
          <label className="text-gray-400 text-[14px] hover:scale-110 duration-500">Blocked requests</label>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
