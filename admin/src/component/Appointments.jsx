import React from "react";
import Navbar from "./Navbar"; // Adjust the path based on your file structure
import Sidebar from "./Sidebar"; // Adjust the path based on your file structure

export default function Appointments() {
  const appointments = [
    {
      id: 1,
      patient: "Ayush Singh",
      age: 0,
      datetime: "25 Jul 2025, 10:30",
      doctor: "Praveen Kumar",
      doctorImg: "https://via.placeholder.com/30x30", // Use your doctor image URL
      fees: "₹50",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex flex-col w-full">
        {/* Navbar at the top */}
        <Navbar />

        {/* Main content area with sidebar + table */}
        <div className="flex flex-1">
          {/* Sidebar on the left */}
          <div className="w-64">
            <Sidebar />
          </div>

          {/* Appointments Table */}
          <main className="flex-1 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">All Appointments</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border-gray-300 rounded shadow">
                <thead className="bg-gray-100 text-gray-700 text-left text-sm">
                  <tr>
                    <th className="p-4">#</th>
                    <th className="p-4">Patient</th>
                    <th className="p-4">Age</th>
                    <th className="p-4">Date & Time</th>
                    <th className="p-4">Doctor</th>
                    <th className="p-4">Fees</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appt) => (
                    <tr
                      key={appt.id}
                      className="border-t border-gray-300 text-sm"
                    >
                      <td className="p-4">{appt.id}</td>
                      <td className="p-4 flex items-center space-x-2">
                        <img
                          src="https://i.pravatar.cc/30"
                          alt="patient"
                          className="w-6 h-6 rounded-full"
                        />
                        <span>{appt.patient}</span>
                      </td>
                      <td className="p-4">{appt.age}</td>
                      <td className="p-4">{appt.datetime}</td>
                      <td className="p-4 flex items-center space-x-2">
                        <img
                          src={appt.doctorImg}
                          alt="doctor"
                          className="w-6 h-6 rounded-full"
                        />
                        <span>{appt.doctor}</span>
                      </td>
                      <td className="p-4">{appt.fees}</td>
                      <td className="p-4">
                        <button className="text-red-500 hover:text-red-700 text-lg">
                          ✖
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
