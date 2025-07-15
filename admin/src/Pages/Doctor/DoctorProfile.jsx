import React from 'react';

export default function DoctorProfile() {
    return (
        <div className="p-6 w-full">
            <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
                <img
                    src="https://via.placeholder.com/600x200"
                    alt="Cover"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                />

                <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-gray-800">admin</h2>
                    <p className="text-gray-600">
                        MBBS - General physician{' '}
                        <span className="inline-block ml-2 px-2 py-0.5 text-xs bg-gray-200 rounded-full">
              1 Year
            </span>
                    </p>

                    <div>
                        <p className="font-semibold text-gray-700">About :</p>
                        <p className="text-gray-600">jhsiagigue</p>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-700">
                            Appointment fee: <span className="text-black">₹ 2000</span>
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-700">Address:</p>
                        <p className="text-gray-600">
                            307, Amanda Heights, Opposite Celebration Lawn, Dewa Road<br />
                            Sun Breeze 1, BBD Green City
                        </p>
                    </div>

                    <div className="flex items-center space-x-2 pt-2">
                        <input type="checkbox" checked readOnly className="w-4 h-4" />
                        <label className="text-gray-700">Available</label>
                    </div>

                    <button className="mt-4 px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50">
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
}
