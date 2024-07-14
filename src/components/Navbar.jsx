import React from "react";
import { NavLink } from "react-router-dom";
import { GiResize } from "react-icons/gi";
import { IoDesktop, IoSettings } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="max-w-full">
      <nav className="flex justify-between bg-gray-600 h-10 text-md text-center m-auto p-2">
        <div className="hidden sm:flex gap-2 border-r-2 px-2 border-gray-400">
          <GiResize className="text-gray-200 mt-1 cursor-pointer" />
          <IoDesktop className="text-gray-200 mt-1 cursor-pointer" />
        </div>
        <div className="md:w-[85%] flex justify-between gap-2 px-2">
          <NavLink
            to="/elements"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 underline "
                : "underline-offset-0 text-gray-200 hover:text-gray-400"
            }
          >
            Elements
          </NavLink>
          <NavLink
            to="/console"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 underline "
                : "underline-offset-0 text-gray-200 hover:text-gray-400"
            }
          >
            Console
          </NavLink>
          <NavLink
            to="/sources"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 underline"
                : "underline-offset-0 text-gray-200 hover:text-gray-400 "
            }
          >
            Sources
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 underline"
                : "underline-offset-0 text-gray-200 hover:text-gray-400"
            }
          >
            Network
          </NavLink>
          <NavLink
            to="/performance"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 underline "
                : "underline-offset-0 text-gray-200 hover:text-gray-400"
            }
          >
            Preformance
          </NavLink>
          <NavLink
            to="/memory"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 underline "
                : "underline-offset-0 text-gray-200 hover:text-gray-400"
            }
          >
            Memory
          </NavLink>
          <NavLink
            to="/application"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 underline "
                : "underline-offset-0 text-gray-200 hover:text-gray-400"
            }
          >
            Application
          </NavLink>
          <NavLink
            to="/security"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 underline "
                : "underline-offset-0 text-gray-200 hover:text-gray-400"
            }
          >
            Security
          </NavLink>
          <NavLink
            to="/lighthouse"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 underline "
                : "underline-offset-0 text-gray-200 hover:text-gray-400"
            }
          >
            Lighthouse
          </NavLink>
        </div>
        <div className="hidden sm:flex gap-2 border-l-2 px-2 border-gray-400">
          <IoSettings className="text-gray-200 mt-1 cursor-pointer" />
          <BsThreeDotsVertical className="text-gray-200 mt-1 cursor-pointer" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
