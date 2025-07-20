import React from "react";
import { useNavigate } from "react-router-dom";

export default function Info() {
  const navigate = useNavigate();

  const handleSpecialityClick = (speciality) => {
    navigate(`/alldoctors?speciality=${encodeURIComponent(speciality)}`);
  };

  const specialities = [
    {
      name: "General Physician",
      icon: "https://cdn-icons-png.flaticon.com/128/3952/3952988.png",
    },
    {
      name: "Gynecologist",
      icon: "https://cdn-icons-png.flaticon.com/128/14373/14373989.png",
    },
    {
      name: "Dermatologist",
      icon: "https://cdn-icons-png.flaticon.com/128/6025/6025105.png",
    },
    {
      name: "Pediatrician",
      icon: "https://cdn-icons-png.flaticon.com/128/3461/3461589.png",
    },
    {
      name: "Neurologist",
      icon: "https://cdn-icons-png.flaticon.com/128/8123/8123399.png",
    },
    {
      name: "Gastroenterologist",
      icon: "https://cdn-icons-png.flaticon.com/128/846/846973.png",
    },
  ];

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
        {specialities.map((speciality, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer transform transition duration-300 hover:scale-105"
            onClick={() => handleSpecialityClick(speciality.name)}
          >
            <img
              src={speciality.icon}
              className="w-20 h-20 rounded-full mb-2"
              alt={`${speciality.name} Icon`}
            />
            <strong className="text-center">{speciality.name}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
