import React from "react";
import { FaUserDoctor, FaUserLarge } from "react-icons/fa6";
import { LuFolderSearch } from "react-icons/lu";
import { PiNotebookBold } from "react-icons/pi";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Data = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content area with sidebar + dashboard */}
      <div className="flex flex-1">
        {/* Sidebar on the left */}
        <div className="w-64">
          <Sidebar />
        </div>

        {/* Main content */}
        <div className="flex-1 p-6">
          {/* Dashboard Cards */}
          <div className="grid md:grid-cols-6 gap-6 text-center mb-6">
            {[
              {
                desc: "Doctors",
                num: "3",
                icon: (
                  <FaUserDoctor className="w-7 h-7 text-indigo-600 mb-1 mx-auto" />
                ),
              },
              {
                desc: "Appointments",
                num: "2",
                icon: (
                  <LuFolderSearch className="w-7 h-7 text-green-600 mb-1 mx-auto" />
                ),
              },
              {
                desc: "Patients",
                num: "21",
                icon: (
                  <FaUserLarge className="w-7 h-7 text-rose-600 mb-1 mx-auto" />
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded shadow-sm hover:shadow-xl transition duration-300 cursor-pointer p-4 flex items-center gap-4"
              >
                {/* Icon on the left */}
                <div className="text-indigo-600 text-xl">{item.icon}</div>

                {/* Number and description stacked vertically on the right */}
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg text-left">
                    {item.num}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Latest Bookings Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded shadow">
              <thead>
                <tr className="bg-gray-100 text-gray-700 text-left text-sm">
                  <th className="p-4 flex items-center gap-2" colSpan={2}>
                    <PiNotebookBold className="w-5 h-5 text-indigo-500" />
                    Latest Bookings
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-sm">
                  <td className="p-4">Praveen Kumar</td>
                  <button className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200">✕</button>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
