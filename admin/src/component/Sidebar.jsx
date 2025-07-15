import React from "react";
import { Link } from "react-router-dom";

// Import all possible icons used by admin and doctor
import { TbSmartHome } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { LuUsersRound } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";

// Map icon strings to components
const iconMap = {
  TbSmartHome: <TbSmartHome className="w-5 h-5" />,
  SlCalender: <SlCalender className="w-5 h-5" />,
  AiOutlinePlusSquare: <AiOutlinePlusSquare className="w-5 h-5" />,
  LuUsersRound: <LuUsersRound className="w-5 h-5" />,
  IoPersonOutline: <IoPersonOutline className="w-5 h-5" />,
};

const Sidebar = ({ data }) => {
  return (
    <div className="flex">
      {/* Sidebar wrapper */}
      <div className="hidden md:flex md:flex-shrink-0 bg-white">
        <div className="flex flex-col w-64 min-h-screen bg-white border-r border-gray-200">
          {/* Sidebar content */}
          <div className="flex flex-col flex-grow pt-5 overflow-y-auto">
            <div className="flex flex-col flex-grow px-4">
              <nav className="flex-1">
                <ul className="space-y-2">
                  {data.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.path}
                        className="inline-flex items-center w-full px-4 py-2 text-base text-gray-900 transition duration-300 transform rounded-lg hover:bg-gray-100"
                      >
                        <span className="text-xl mr-3">
                          {iconMap[item.icon] || null}
                        </span>
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
