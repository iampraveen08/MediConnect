import React, { useState } from "react";
import Sidebar from "./Sidebar.jsx";

const AddDoctor = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        speciality: "General physician",
        degree: "",
        experience: "1 Year",
        fees: "",
        address1: "",
        address2: "",
        about: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // submit form to backend here
    };

    return(
        <div>
            <Sidebar />
            <div className="p-6 max-w-5xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6">Add Doctor</h2>
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Upload */}
                    <div className="col-span-2 flex flex-col items-center">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                            <span className="text-gray-400 text-sm">Upload</span>
                        </div>
                        <p className="text-sm text-gray-600">Upload doctor picture</p>
                    </div>

                    <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="input" />
                    <select name="speciality" value={formData.speciality} onChange={handleChange} className="input">
                        <option>General physician</option>
                        <option>Dentist</option>
                        <option>Cardiologist</option>
                        <option>Neurologist</option>
                    </select>

                    <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" className="input" />
                    <input name="degree" value={formData.degree} onChange={handleChange} placeholder="Degree" className="input" />

                    <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" className="input" />
                    <input name="address1" value={formData.address1} onChange={handleChange} placeholder="Address 1" className="input" />

                    <select name="experience" value={formData.experience} onChange={handleChange} className="input">
                        <option>1 Year</option>
                        <option>2 Years</option>
                        <option>5+ Years</option>
                    </select>
                    <input name="address2" value={formData.address2} onChange={handleChange} placeholder="Address 2" className="input" />

                    <input name="fees" value={formData.fees} onChange={handleChange} placeholder="Doctor fees" className="input col-span-2" />

                    <textarea
                        name="about"
                        value={formData.about}
                        onChange={handleChange}
                        placeholder="Write about doctor"
                        className="input col-span-2 h-24 resize-none"
                    />

                    <button type="submit" className="col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300">
                        Add Doctor
                    </button>
                </form>
            </div>
        </div>

    );
};

export default AddDoctor;
