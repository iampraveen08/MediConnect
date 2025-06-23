import React from "react";
import { Link } from "react-router-dom";

export default function DoctorsCard(props) {
  return (
    <div>
      <div className="text-center my-8 mt-40">
        <h2 className="text-3xl md:text-4xl font-bold text-black-600 mb-4">
          Find the Right Specialist
        </h2>
        <p className="text-base md:text-lg text-gray-700">
          Connect with qualified healthcare professionals across various
          specialties—fast, simple, and secure appointment booking.
        </p>
      </div>

      {/* Show only 10 doctors */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[10px] justify-items-center p-4">
        {props.data.doctors.slice(0, 10).map((doctor) => (
          <div
            key={doctor.name}
            className="w-60 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-white-800 border-gray-200 overflow-hidden"
          >
            <a href="#">
              <img
                className="w-full h-60 object-cover"
                src={doctor.imgSrc}
                alt="Doctor"
              />
            </a>
            <div className="p-4">
              <a href="#">
                <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-gray">
                  {doctor.name}
                </h5>
              </a>
              <p className="mb-3 text-sm text-gray-700 dark:text-gray-600">
                {doctor.speciality}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 mb-20">
        <Link to="/alldoctors">
          <button className="bg-white text-gray-700 border border-gray-300 font-semibold py-2 px-4 rounded-full hover:bg-indigo-600 hover:text-white transition duration-300">
            more...
          </button>
        </Link>
      </div>
    </div>
  );
}
