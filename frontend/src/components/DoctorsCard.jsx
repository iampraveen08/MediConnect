
import React from "react";
import { Link } from "react-router-dom";

export default function DoctorsCard({ data }) {
    return (
        <section aria-labelledby="doctors-section-title">
            <div className="text-center my-8 mt-40">
                <h2 id="doctors-section-title" className="text-3xl md:text-4xl font-bold text-black-600 mb-4">
                    Find the Right Specialist
                </h2>
                <p className="text-base md:text-lg text-gray-700">
                    Connect with qualified healthcare professionals across various
                    specialties—fast, simple, and secure appointment booking.
                </p>
            </div>

            <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[10px] justify-items-center p-4">
                {data.doctors.slice(0, 10).map((doctor, index) => (
                    <article
                        key={`${doctor.name}-${index}`}
                        className="w-60 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-white-800 border-gray-200 overflow-hidden"
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
                            <h3 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-gray">
                                {doctor.name}
                            </h3>
                            <p className="mb-3 text-sm text-gray-700 dark:text-gray-600">
                                {doctor.speciality}
                            </p>
                        </div>
                    </article>
                ))}
            </div>

            <div className="flex justify-center mt-6 mb-20">
                <Link
                    to="/alldoctors"
                    className="bg-white text-gray-700 border border-gray-300 font-semibold py-2 px-4 rounded-full hover:bg-indigo-600 hover:text-white transition duration-300"
                    role="button"
                >
                    View All Doctors
                </Link>
            </div>
        </section>
    );
}