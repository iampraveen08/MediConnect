import React from "react";
import { useLocation } from "react-router-dom";
import BookingSlot from "./BookingSlot";
import RelatedDoctors from "./RelatedDoctors";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function DoctorDetail() {
  const location = useLocation();
  const { doctor } = location.state || {};

  if (!doctor) {
    return (
      <div className="text-center mt-10 text-red-600">
        No doctor information provided.
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <img
            src={doctor.imgSrc}
            alt="Doctor Profile"
            className="rounded-xl w-72 h-72 object-cover"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-gray-800">
            {doctor.name} <span className="text-blue-600">✔️</span>
          </h1>
          <p className="text-lg text-gray-600">
            {doctor.degree} - {doctor.speciality}
            <span className="ml-2 text-sm bg-gray-200 px-2 py-0.5 rounded-full">
              {doctor.Experience} Year
            </span>
          </p>

          <div>
            <h2 className="font-semibold text-gray-800">
              About <span className="ml-1 text-gray-500">ℹ️</span>
            </h2>
            <p className="text-sm text-gray-700 mt-1 leading-relaxed">
              {doctor.description || "Doctor description not available."}
            </p>
          </div>

          <p className="text-md font-semibold text-gray-700">
            Appointment fee: <span className="text-black">{doctor.Fees}</span>
          </p>
        </div>
      </div>
      <BookingSlot />
      <RelatedDoctors speciality={doctor.speciality} />
      <Footer />
    </div>
  );
}
