import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AboutUs() {
  return (
    <div>
      <div className="bg-white text-gray-800 py-12 px-4 sm:px-8 md:px-16">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
            ABOUT US
          </h1>

          {/* Main Content with Image and Text */}
          <div className="md:flex md:items-start md:space-x-10">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img
                src="https://img.freepik.com/free-photo/successful-medical-team_329181-9252.jpg?uid=R202393192&ga=GA1.1.2144590951.1743410086&semt=ais_hybrid&w=740"
                alt="MediConnect Team"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>

            <div className="md:w-1/2 space-y-4 text-justify">
              <p>
                Welcome to <span className="font-semibold">MediConnect</span>,
                your trusted partner in streamlining healthcare access for
                patients and providers. At MediConnect, we understand the
                challenges people face when trying to schedule doctor visits and
                manage medical records, and we aim to make that process easier
                and faster.
              </p>
              <p>
                We are dedicated to delivering smart healthcare solutions
                through technology. Our platform is designed to simplify
                appointment booking, improve doctor-patient interaction, and
                provide reliable access to medical information — all in one
                place.
              </p>
              <div>
                <h2 className="font-semibold text-lg mb-1">Our Vision</h2>
                <p>
                  At MediConnect, our vision is to create a unified, efficient
                  healthcare experience for everyone. We strive to connect
                  individuals with the right healthcare professionals at the
                  right time, ensuring timely care and better health outcomes.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">
              WHY CHOOSE US
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                {
                  title: "EFFICIENCY:",
                  desc: "Quick and reliable appointment scheduling designed to fit your lifestyle.",
                },
                {
                  title: "CONVENIENCE:",
                  desc: "Easily access a wide network of certified doctors and specialists near you.",
                },
                {
                  title: "PERSONALIZATION:",
                  desc: "Receive appointment reminders and health tips customized for your needs.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border p-6 rounded-lg shadow-sm hover:shadow-xl cursor-pointer transition duration-300"
                >
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
