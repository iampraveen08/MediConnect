import React from "react";

export default function Contact() {
  return (
    <section className="bg-white text-gray-800 py-12 px-4 sm:px-8 lg:px-20">
      {/* page heading */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-14">
        CONTACT US
      </h1>

      {/* main two-column layout */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* left: image */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-photo/labor-union-members-working-together_23-2150995038.jpg?uid=R202393192&ga=GA1.1.2144590951.1743410086&semt=ais_hybrid&w=740"
            alt="Doctor with patient"
            className="w-full max-w-md rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* right: office + careers */}
        <div className="space-y-10">
          {/* office info */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              OUR OFFICE
            </h2>
            <address className="not-italic leading-relaxed space-y-1 text-gray-700">
              <p>123 MediConnect Way</p>
              <p>Suite 500, San Francisco, CA 94104 USA</p>
              <p>Tel: (415) 555-0100</p>
              <p>Email: hello@mediconnect.com</p>
            </address>
          </div>

          {/* careers block */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              CAREERS AT MEDICONNECT
            </h2>
            <p className="text-gray-700 mb-6">
              Passionate about transforming healthcare? Explore our open roles
              and join a team that’s making access to care simpler for everyone.
            </p>

            {/* outline button */}
            <a
              href="/careers"
              className="inline-block px-8 py-3 border border-indigo-600 rounded-md text-indigo-600 font-medium
                         hover:bg-indigo-600 hover:text-white transition-colors duration-300 cursor-pointer"
            >
              Explore Jobs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
