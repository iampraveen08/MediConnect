import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MyProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    phone: "0000000000",
    address: "",
    gender: "",
    birthday: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Add save logic here (e.g., API call)
    setIsEditing(false);
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
        {/* Profile Header */}
        <div className="flex items-center space-x-6 mb-6">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A13.937 13.937 0 0112 15c2.89 0 5.555.916 7.879 2.461M15 10a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              Anupriya Singh
            </h1>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">
            Contact Information
          </h2>
          <div className="text-sm text-gray-700 space-y-3">
            <p>
              <span className="font-medium">Email id:</span>{" "}
              <a
                href="mailto:singhanu@gmail.com"
                className="text-blue-600 hover:underline"
              >
                singhanu@gmail.com
              </a>
            </p>
            <p>
              <span className="font-medium">Phone:</span>{" "}
              {isEditing ? (
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-2 py-1 ml-2"
                />
              ) : (
                formData.phone
              )}
            </p>
            <p>
              <span className="font-medium">Address:</span>{" "}
              {isEditing ? (
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-2 py-1 ml-2 w-full max-w-sm"
                />
              ) : (
                formData.address || "Not Provided"
              )}
            </p>
          </div>
        </div>

        {/* Basic Information */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">
            Basic Information
          </h2>
          <div className="text-sm text-gray-700 space-y-3">
            <p>
              <span className="font-medium">Gender:</span>{" "}
              {isEditing ? (
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-2 py-1 ml-2"
                >
                  <option value="">Not Selected</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                </select>
              ) : (
                formData.gender || "Not Selected"
              )}
            </p>
            <p>
              <span className="font-medium">Birthday:</span>{" "}
              {isEditing ? (
                <input
                  type="date"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-2 py-1 ml-2"
                />
              ) : (
                formData.birthday || "Not Selected"
              )}
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div>
          {isEditing ? (
            <button
              className="px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition cursor-pointer"
              onClick={handleSave}
            >
              Save information
            </button>
          ) : (
            <button
              className="px-4 py-2 border border-gray-300 text-sm rounded-full hover:bg-gray-50 transition cursor-pointer "
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
