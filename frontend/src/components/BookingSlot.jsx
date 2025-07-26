
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BookingSlot({ doctorId }) {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Generate next 7 days for booking
  const generateDates = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push({
        fullDate: date.toISOString().split('T')[0],
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        date: date.getDate(),
      });
    }
    return dates;
  };

  const timeSlots = [
    "13:30", "14:00", "14:30", "15:00",
    "15:30", "16:00", "16:30", "17:00"
  ];

  const handleBookAppointment = async () => {
    if (!selectedDate || !selectedTime) {
      setMessage("Please select both date and time");
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const response = await axios.post(
          "/api/user/book-appointment",
          {
            docId: doctorId,
            slotDate: selectedDate,
            slotTime: selectedTime,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
      );

      if (response.data.success) {
        setMessage("Appointment booked successfully!");
        // Navigate to payment page or appointment confirmation
        navigate("/appointments");
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Error booking appointment");
    } finally {
      setLoading(false);
    }
  };

  return (
      <div>
        <div className="max-w-4xl mx-auto px-4 mt-10 space-y-6">
          <h3 className="text-xl font-semibold text-gray-800">Book an Appointment</h3>

          {message && (
              <div className={`p-3 rounded ${message.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {message}
              </div>
          )}

          <div className="flex space-x-3 overflow-x-auto">
            {generateDates().map((dateObj, index) => (
                <div
                    key={index}
                    onClick={() => setSelectedDate(dateObj.fullDate)}
                    className={`text-center px-4 py-2 rounded-full text-sm cursor-pointer ${
                        selectedDate === dateObj.fullDate
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                >
                  {`${dateObj.day} ${dateObj.date}`}
                </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {timeSlots.map((time, index) => (
                <div
                    key={index}
                    onClick={() => setSelectedTime(time)}
                    className={`px-4 py-2 rounded-full border cursor-pointer ${
                        selectedTime === time
                            ? "bg-blue-600 text-white border-blue-600"
                            : "border-gray-300 text-gray-700 hover:border-blue-400"
                    }`}
                >
                  {`${time}`}
                </div>
            ))}
          </div>

          <button
              onClick={handleBookAppointment}
              disabled={loading || !selectedDate || !selectedTime}
              className={`mt-4 px-6 py-2 rounded-full transition ${
                  loading || !selectedDate || !selectedTime
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
          >
            {loading ? "Booking..." : "Book Appointment"}
          </button>
        </div>
      </div>
  );
}