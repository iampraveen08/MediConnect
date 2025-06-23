import React from "react";

export default function BottomContent() {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat px-4 sm:px-8 lg:px-16 min-h-[600px] flex items-center">
      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-indigo-800 bg-opacity-60 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-photo/medical-people-collection-collage_23-2148884880.jpg?uid=R202393192&ga=GA1.1.2144590951.1743410086&semt=ais_items_boosted&w=740")',
        }}
      ></div>
      {/* Text content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
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
          className="inline-block bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition duration-300"
        >
          Create Your Account Now
        </a>
      </div>
    </section>
  );
}
