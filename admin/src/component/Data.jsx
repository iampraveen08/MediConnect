import React from 'react';
import {FaUserDoctor, FaUserLarge} from "react-icons/fa6";
import {LuFolderSearch} from "react-icons/lu";

const Data = () => {
    return (
        <div>
            <div className="mt-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                    {[
                        {
                            desc: "Doctors",
                            num: "3",
                            icon : <FaUserDoctor className="w-5 h-5"/>,
                        },
                        {
                            desc : "Appointments",
                            num: "2",
                            icon : <LuFolderSearch className="w-5 h-5"/>,
                        },
                        {
                            desc: "Patients",
                            num: "21",
                            icon : <FaUserLarge className="w-5 h-5"/>,
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="w-50 h-20 shadow-sm hover:shadow-xl cursor-pointer transition duration-300"
                        >
                            {item.icon}
                            <h3 className="font-semibold text-gray-800 mb-0">
                                {item.num}
                            </h3>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Data;