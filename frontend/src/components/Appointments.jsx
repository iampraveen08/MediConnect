import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Appointments() {
  return (
    <div>
      <Navbar />
      <div class="max-w-5xl mx-auto px-4 py-12">
        <h2 class="text-2xl font-semibold mb-8">My appointments</h2>
        <div class="bg-white rounded-lg p-4 flex items-start gap-4 mb-6 shadow-sm">
          <img
            src="https://via.placeholder.com/100x100"
            alt="Doctor Ava"
            class="w-24 h-24 object-cover rounded-md"
          />
          <div class="flex-1">
            <h3 class="text-lg font-semibold">Dr. Ava Mitchell</h3>
            <p class="text-sm text-gray-500">Dermatologist</p>
            <p class="text-sm mt-2">
              <span class="font-semibold">Address:</span> 87th Cross, Richmond
              Circle, Ring Road, London
            </p>
            <p class="text-sm">
              <span class="font-semibold">Date & Time:</span> 17 Aug 2025 |
              11:00 AM
            </p>
          </div>
          <div class="flex flex-col gap-2">
            <button class="border border-gray-300 rounded-md px-4 py-2 text-sm hover:bg-green-500 hover:text-white transition cursor-pointer">
              Pay Online
            </button>
            <button class="border border-gray-300 rounded-md px-4 py-2 text-sm hover:bg-red-500 hover:text-white transition cursor-pointer">
              Cancel appointment
            </button>
          </div>
        </div>
        <div class="bg-white rounded-lg p-4 flex items-start gap-4 mb-6 shadow-sm">
          <img
            src="https://via.placeholder.com/100x100"
            alt="Doctor Christopher"
            class="w-24 h-24 object-cover rounded-md"
          />
          <div class="flex-1">
            <h3 class="text-lg font-semibold">Dr. Christopher Davis</h3>
            <p class="text-sm text-gray-500">General physician</p>
            <p class="text-sm mt-2">
              <span class="font-semibold">Address:</span> 67th Cross, Richmond
              Circle, Ring Road, London
            </p>
            <p class="text-sm">
              <span class="font-semibold">Date & Time:</span> 16 Aug 2025 |
              12:00 PM
            </p>
          </div>
          <div class="flex flex-col gap-2">
            <button class="border border-gray-300 rounded-md px-4 py-2 text-sm hover:bg-green-500 hover:text-white transition cursor-pointer">
              Pay Online
            </button>
            <button class="border border-gray-300 rounded-md px-4 py-2 text-sm hover:bg-red-500 hover:text-white transition cursor-pointer ">
              Cancel appointment
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
