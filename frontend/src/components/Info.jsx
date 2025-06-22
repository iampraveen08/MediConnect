import React from "react";

export default function Info() {
  return (
    <div class="text-center my-8 mt-40">
      <h2 class="text-3xl md:text-4xl font-bold text-black-600 mb-4">
        Find the Right Specialist
      </h2>
      <p class="text-base md:text-lg text-gray-700">
        Connect with qualified healthcare professionals across various
        specialties—fast, simple, and secure appointment booking.
      </p>
      <div class="flex flex-wrap justify-center gap-6 mt-8">
        <div class="flex flex-col items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3952/3952988.png"
            class="w-15 h-15 rounded-full mb-2"
          />
          <strong class="text-center">General Physician</strong>
        </div>

        <div class="flex flex-col items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/14373/14373989.png"
            class="w-15 h-15 rounded-full mb-2"
          />
          <strong class="text-center">Gynecologist</strong>
        </div>

        <div class="flex flex-col items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/6025/6025105.png"
            class="w-15 h-15 rounded-full mb-2"
          />
          <strong class="text-center">Dermatologist</strong>
        </div>

        <div class="flex flex-col items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3461/3461589.png"
            class="w-15 h-15 rounded-full mb-2"
          />
          <strong class="text-center">Pediatrician</strong>
        </div>

        <div class="flex flex-col items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/8123/8123399.png"
            class="w-15 h-15 rounded-full mb-2"
          />
          <strong class="text-center">Neurologist</strong>
        </div>

        <div class="flex flex-col items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/846/846973.png"
            class="w-15 h-15 rounded-full mb-2"
          />
          <strong class="text-center">Gastroenterologist</strong>
        </div>
      </div>
    </div>
  );
}
