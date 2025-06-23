import React from "react";

export default function BottomContent() {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat px-4 sm:px-8 lg:px-16 min-h-[600px] flex items-center mr-20 ml-20 mt-20">
      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-white-100 bg-opacity-60 bg-cover bg-center bg-no-repeat blur"
        style={{
          backgroundImage:
            'url("https://purepng.com/public/uploads/thumbnail//purepng.com-doctorsdoctorsdoctors-and-nursesclinicianmedical-practitionernotepad-1421526857415vwnwn.png")',
        }}
      ></div>
      {/* Text content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-gray">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Your Health Journey Starts Here
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Don’t wait for the right time—take control of your well-being today.
          Join{" "}
          <span className="font-semibold text-yellow-300">MediConnect</span> to
          connect instantly with trusted doctors, book appointments, and access
          personalized care—all in one place.
        </p>
        <a
          href="/signup"
          className="inline-block bg-transparent text-gray-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition duration-300 border border-gray-800"
        >
          Create Your Account Now
        </a>
      </div>
    </section>
  );
}
