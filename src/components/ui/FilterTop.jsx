import React from "react";
import { IoStopCircleOutline } from "react-icons/io5";
import { AiOutlineStop } from "react-icons/ai";
import { RiFilterFill } from "react-icons/ri";
import { MdOutlineSearch } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdNetworkCheck } from "react-icons/md";
import { GoDownload } from "react-icons/go";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoSettings } from "react-icons/io5";

const FilterTop = () => {
  return (
    <div>
      <div className="border-2 border-gray-500 flex justify-between p-2">
        <div className="flex w-[40%] border-r-2 border-gray-500">
          <div className="flex gap-2 border-r-2 px-2 border-gray-500  my-auto">
            <IoStopCircleOutline className="text-red-700 hover:scale-110 duration-500 text-[20px]" />
            <AiOutlineStop className="text-white  rotate-90 hover:scale-110 duration-500" />
          </div>
          <div className="flex gap-2 border-r-2 px-2 border-gray-500  my-auto">
            <RiFilterFill className="text-blue-400 hover:scale-110 duration-500 text-[20px]" />
            <MdOutlineSearch className="text-white hover:scale-110 duration-500 text-[20px]" />
          </div>
          <div className="flex gap-2 border-r-2 px-2 border-gray-500 my-auto">
            <input type="checkbox" className="w-3 h-3 bg-gray-500 m-auto" />
            <label className="text-gray-400 text-[14px] hover:scale-110 duration-500">Peserve log</label>
          </div>
          <div className="flex gap-2 px-2 my-auto">
            <input type="checkbox" className="w-3 h-3 bg-gray-500 m-auto" />
            <label className="text-gray-400 text-[14px] hover:scale-110 duration-500">Disable cache</label>
            <p className="text-gray-400 my-auto text-[14px] hover:scale-110 duration-500">No throttling</p>
            <IoMdArrowDropdown className="text-gray-400 my-auto hover:scale-110 duration-500 text-[20px]" />
            <MdNetworkCheck className="text-gray-400 my-auto hover:scale-110 duration-500 text-[20px]" />
          </div>
        </div>
        <div className="flex w-[40%] justify-between">
          <div className="flex justify-between w-[50%] gap-2 border-r-2 px-2 border-gray-500 my-auto">
            <div className="flex justify-start gap-2">
              <MdOutlineFileUpload className="text-gray-400 my-auto text-[18px] hover:scale-110 duration-500" />
              <GoDownload className="text-gray-400 my-auto text-[18px] hover:scale-110 duration-500  " />
            </div>
            <div> </div>
          </div>
          <div className="flex gap-2  my-auto">
            <IoSettings className="text-gray-400 my-auto text-[18px] hover:scale-110 duration-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterTop;
