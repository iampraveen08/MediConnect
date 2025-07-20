import React from "react";

export default function BookingSlot() {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 mt-10 space-y-6">
        <h3 className="text-xl font-semibold text-gray-800">Booking slots</h3>

        <div className="flex space-x-3 overflow-x-auto">
          {[
            "SUN 20",
            "MON 21",
            "TUE 22",
            "WED 23",
            "THU 24",
            "FRI 25",
            "SAT 26",
          ].map((day, index) => (
            <div
              key={index}
              className={`text-center px-4 py-2 rounded-full text-sm ${
                index === 0
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {day}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {[
            "01:30 pm",
            "02:00 pm",
            "02:30 pm",
            "03:00 pm",
            "03:30 pm",
            "04:00 pm",
            "04:30 pm",
            "05:00 pm",
          ].map((time, index) => (
            <div
              key={index}
              className="px-4 py-2 rounded-full border border-gray-300 text-sm text-gray-700"
            >
              {time}
            </div>
          ))}
        </div>

        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          Book an appointment
        </button>
      </div>
    </div>
  );
}
