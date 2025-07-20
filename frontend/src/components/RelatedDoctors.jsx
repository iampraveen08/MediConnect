import React from "react";
import content from "./content.json";

export default function RelatedDoctors({ speciality }) {
  const doctorList = content.doctors
    .filter((doc) => doc.speciality === speciality)
    .slice(0, 6); // Show only first 6

  return (
    <div className="max-w-6xl mx-auto px-4 mt-16">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
        Related Doctors
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Simply browse through our extensive list of trusted doctors.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {doctorList.map((doc, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 w-60 flex flex-col items-center"
          >
            <img
              src={doc.imgSrc}
              alt={doc.name}
              className="w-28 h-28 rounded-full object-cover mb-3"
            />
            <span className="text-green-600 text-sm font-medium mb-1">
              ● Available
            </span>
            <h4 className="font-semibold text-gray-800 text-center">
              {doc.name}
            </h4>
            <p className="text-sm text-gray-600 text-center">
              {doc.speciality}
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              {doc.degree}
            </p>
            <p className="text-xs text-gray-500 text-center">
              Exp: {doc.Experience} yrs
            </p>
            <p className="text-sm font-medium text-green-700 mt-2">
              {doc.Fees}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
