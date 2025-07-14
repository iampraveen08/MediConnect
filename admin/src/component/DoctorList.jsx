import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import data from "./content.json";

export default function DoctorList() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content area */}
      <div className="flex flex-1">
        {/* Sidebar on the left */}
        <div className="w-64 bg-gray-100 border-r">
          <Sidebar />
        </div>

        {/* Doctor cards area */}
        <section
          aria-labelledby="doctors-section-title"
          className="flex-1 bg-white overflow-y-auto"
        >
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center p-4">
            {data?.doctors?.slice(0, 10).map((doctor, index) => (
              <article
                key={`${doctor.name}-${index}`}
                className="w-60 bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition duration-200"
              >
                <div className="aspect-square">
                  <img
                    className="w-full h-60 object-cover"
                    src={doctor.imgSrc}
                    alt={`Dr. ${doctor.name}`}
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {doctor.name}
                  </h3>

                  <p className="text-sm text-gray-700">{doctor.speciality}</p>
                  <p className=" font-medium mb-1">
                    <input type="checkbox" />
                    <span className="ml-1">Available</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
