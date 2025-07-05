
import React from "react";

export default function Info() {
  return (
      <div className="text-center my-8 mt-40">
        <h2 className="text-3xl md:text-4xl font-bold text-black-600 mb-4">
          Find the Right Specialist
        </h2>
        <p className="text-base md:text-lg text-gray-700">
          Connect with qualified healthcare professionals across various
          specialties—fast, simple, and secure appointment booking.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="flex flex-col items-center">
            <img
                src="https://cdn-icons-png.flaticon.com/128/3952/3952988.png"
                className="w-15 h-15 rounded-full mb-2"
                alt="General Physician Icon"
            />
            <strong className="text-center">General Physician</strong>
          </div>

          <div className="flex flex-col items-center">
            <img
                src="https://cdn-icons-png.flaticon.com/128/14373/14373989.png"
                className="w-15 h-15 rounded-full mb-2"
                alt="Gynecologist Icon"
            />
            <strong className="text-center">Gynecologist</strong>
          </div>

          <div className="flex flex-col items-center">
            <img
                src="https://cdn-icons-png.flaticon.com/128/6025/6025105.png"
                className="w-15 h-15 rounded-full mb-2"
                alt="Dermatologist Icon"
            />
            <strong className="text-center">Dermatologist</strong>
          </div>

          <div className="flex flex-col items-center">
            <img
                src="https://cdn-icons-png.flaticon.com/128/3461/3461589.png"
                className="w-15 h-15 rounded-full mb-2"
                alt="Pediatrician Icon"
            />
            <strong className="text-center">Pediatrician</strong>
          </div>

          <div className="flex flex-col items-center">
            <img
                src="https://cdn-icons-png.flaticon.com/128/8123/8123399.png"
                className="w-15 h-15 rounded-full mb-2"
                alt="Neurologist Icon"
            />
            <strong className="text-center">Neurologist</strong>
          </div>

          <div className="flex flex-col items-center">
            <img
                src="https://cdn-icons-png.flaticon.com/128/846/846973.png"
                className="w-15 h-15 rounded-full mb-2"
                alt="Gastroenterologist Icon"
            />
            <strong className="text-center">Gastroenterologist</strong>
          </div>
        </div>
      </div>
  );
}