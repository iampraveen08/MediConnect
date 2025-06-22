import React from "react";

export default function DoctorsCard(props) {
  return (
    <div>
      <div class="text-center my-8 mt-40">
        <h2 class="text-3xl md:text-4xl font-bold text-black-600 mb-4">
          Find the Right Specialist
        </h2>
        <p class="text-base md:text-lg text-gray-700">
          Connect with qualified healthcare professionals across various
          specialties—fast, simple, and secure appointment booking.
        </p>
      </div>

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[10px] justify-items-center p-4">
        {props.data.doctors.map((doctor) => (
          <div
            key={doctor.name}
            className="w-60 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-white-800 dark:border-gray-700 overflow-hidden"
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
      <div class="flex justify-center mt-6">
        <button class="bg-white text-gray-700 border border-gray-300 font-semibold py-2 px-4 rounded-full hover:bg-blue-600 hover:text-white transition duration-300">
          more...
        </button>
      </div>
    </div>
  );
}
