import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import data from "../components/content.json"; // Ensure this path is correct

export default function AllDoctors() {
  const navigate = useNavigate();
  const location = useLocation(); // ✅ Add parentheses here
  const categories = [
    "All",
    "General Physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatrician",
    "Neurologist",
    "Gastroenterologist",
  ];

  const queryParams = new URLSearchParams(location.search);
  const defaultSpeciality = queryParams.get("speciality") || "All";

  const [selectedCategory, setSelectedCategory] = useState(defaultSpeciality);

  const filteredDoctors =
    selectedCategory === "All"
      ? data.doctors
      : data.doctors.filter((doc) => doc.speciality === selectedCategory);

  useEffect(() => {
    setSelectedCategory(defaultSpeciality);
  }, [defaultSpeciality]);

  return (
    <div>
      <Navbar />
      <section className="bg-white text-gray-800 py-10 px-4 sm:px-8 lg:px-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Browse through the doctors specialist.
        </h2>

        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`border px-4 py-2 rounded-md transition ${
                selectedCategory === category
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "border-gray-300 text-gray-700 hover:bg-indigo-50 hover:border-indigo-500 cursor-pointer"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDoctors.map((doc, index) => (
            <div
              key={index}
              onClick={() =>
                navigate("/doctordetail", {
                  state: { doctor: doc },
                })
              }
              className="bg-indigo-50 rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <img
                src={doc.imgSrc}
                alt={doc.name}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <p className="text-green-600 font-medium mb-1">
                ● <span className="ml-1">Available</span>
              </p>
              <h3 className="text-lg font-semibold text-gray-800">
                {doc.name}
              </h3>
              <p className="text-sm text-gray-600">{doc.speciality}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
