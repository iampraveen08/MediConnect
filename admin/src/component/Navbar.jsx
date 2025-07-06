
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";

export default function Navbar() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
    };

    return (
        <Disclosure as="nav">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center text-indigo-600 font-extrabold italic">
                            MediConnect
                        </div>

                        {/* Admin Panel Button (only if not logged in) */}
                        {!user && (
                            <button
                                type="button"
                                onClick={() => navigate("/adminlogin")}
                                className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-full text-[10px] px-2 py-0.5 h-6 text-center me-1 mb-1 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-indigo-600 ml-[20px] mt-[7px] cursor-pointer"
                            >
                                Admin Panel
                            </button>
                        )}
                    </div>

                    {/* Logout Button */}
                    {user && (
                        <div className="flex items-center pr-2">
                            <button
                                onClick={handleLogout}
                                className="text-sm px-3 py-1 bg-indigo-500 text-white rounded hover:bg-red-600 cursor-pointer"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <hr className="border-t border-gray-200" />
        </Disclosure>
    );
}