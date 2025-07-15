import React from "react";
import {
  FaMoneyBillWave,
  FaCalendarCheck,
  FaUserInjured,
} from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";

import Navbar from "../../component/Navbar";
import Sidebar from "../../component/Sidebar";

export default function DoctorDashboard({ doctor }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content area with sidebar and dashboard cards */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64">
          <Sidebar data={doctor} />
        </div>

        {/* Dashboard Content */}
        <div className="p-6 w-full">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
              <FaMoneyBillWave className="text-2xl text-blue-500 mr-3" />
              <div>
                <p className="text-gray-500 text-sm">Earnings</p>
                <p className="text-xl font-semibold">₹ 0</p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
              <FaCalendarCheck className="text-2xl text-purple-500 mr-3" />
              <div>
                <p className="text-gray-500 text-sm">Appointments</p>
                <p className="text-xl font-semibold">1</p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
              <FaUserInjured className="text-2xl text-green-500 mr-3" />
              <div>
                <p className="text-gray-500 text-sm">Patients</p>
                <p className="text-xl font-semibold">1</p>
              </div>
            </div>
          </div>

          {/* Latest Bookings Section */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex items-center mb-4">
              <BsCalendarDate className="text-blue-600 mr-2" />
              <h2 className="text-lg font-semibold">Latest Bookings</h2>
            </div>

            <div className="flex items-center justify-between border rounded-md p-3">
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/40x40"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Ayush Sig</p>
                  <p className="text-sm text-gray-500">
                    Booking on 16 Aug 2025
                  </p>
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200">
                  ✕
                </button>
                <button className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200">
                  ✓
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
