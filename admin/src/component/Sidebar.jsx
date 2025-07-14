import React from "react";
import { TbSmartHome } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { LuUsersRound } from "react-icons/lu";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { FaUserDoctor } from "react-icons/fa6";
import { LuFolderSearch } from "react-icons/lu";
import { FaUserLarge } from "react-icons/fa6";
import Data from "./Dashboard";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex overflow-hidden bg-white rounded-lg">
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r border-gray-50">
            <div className="flex flex-col items-center flex-shrink-0 px-4">
              <button className="hidden rounded-lg focus:outline-none">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex flex-col flex-grow px-4">
              <nav className="flex-1 space-y-1 bg-white">
                <ul>
                  <li>
                    <a className="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-gray-900 transition duration-500 ease-in-out transform rounded-lg bg-gray-100">
                      <TbSmartHome className="w-5 h-5" />
                      <span className="ml-4">
                        <Link to="/">Dashboard</Link>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-gray-900 transition duration-500 ease-in-out transform rounded-lg hover:bg-gray-100">
                      <SlCalender class="w-4.5 h-5" />
                      <span className="ml-4">
                        <Link to="/appointments">Appointments</Link>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-gray-900 transition duration-500 ease-in-out transform rounded-lg hover:bg-gray-100">
                      <AiOutlinePlusSquare className="w-5 h-5" />
                      <span className="ml-4">
                        <Link to="/adddoctor">Add Doctor</Link>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-gray-900 transition duration-500 ease-in-out transform rounded-lg hover:bg-gray-100">
                      <LuUsersRound className="w-5 h-5" />
                      <span className="ml-4">
                        <Link to="/doctorlist">Doctors List</Link>
                      </span>
                    </a>
                  </li>
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
