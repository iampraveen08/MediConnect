import React from "react";

export default function Hero({ scrollToInfo }) {
  return (
    <div>
      <section className="bg-white dark:bg-white-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-gray">
              Your gateway to secure and hassle-free doctor bookings.
            </h1>

            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-black-400">
              Find trusted doctors, view availability, and book appointments
              instantly—convenient, reliable healthcare at your fingertips,
              anytime you need it.
            </p>

            <button
              onClick={scrollToInfo}
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-white dark:text-gray dark:border-gray-700 dark:hover:bg-indigo-600 transform transition duration-200 hover:scale-105 cursor-pointer"
            >
              Book an Appointment ⟶
            </button>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://img.freepik.com/free-photo/medium-shot-scientists-posing-together_23-2148969982.jpg"
              alt="mockup"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
