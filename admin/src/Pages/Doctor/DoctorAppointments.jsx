import React from "react";
import Sidebar from "../../component/Sidebar";
import Navbar from "../../component/Navbar";
export default function DoctorAppointments({ doctor }) {
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
        <div className="p-6 w-full">
          <h2 className="text-xl font-semibold mb-4">All Appointments</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="text-left text-gray-600 border-b">
                  <th className="py-3 px-4">#</th>
                  <th className="py-3 px-4">Patient</th>
                  <th className="py-3 px-4">Payment</th>
                  <th className="py-3 px-4">Age</th>
                  <th className="py-3 px-4">Date & Time</th>
                  <th className="py-3 px-4">Fees</th>
                  <th className="py-3 px-4">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b hover:bg-gray-50 transition">
                  <td className="py-3 px-4">0</td>
                  <td className="py-3 px-4 flex items-center gap-3">
                    <img
                      src="https://via.placeholder.com/32x32"
                      alt="avatar"
                      className="w-8 h-8 rounded-full"
                    />
                    <span>Ayush Sig</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-600">
                      CASH
                    </span>
                  </td>
                  <td className="py-3 px-4">0</td>
                  <td className="py-3 px-4">16 Aug 2025, 11:00</td>
                  <td className="py-3 px-4">₹2000</td>
                  <td className="py-3 px-4 flex items-center gap-2">
                    <button className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200">
                      ✕
                    </button>
                    <button className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200">
                      ✓
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
