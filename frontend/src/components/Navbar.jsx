import React from "react";
import {
  Disclosure,
  DisclosureButton,
  Menu,
  MenuButton,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "All Doctors", href: "/alldoctors" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();

  return (
    <Disclosure as="nav">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>

          {/* Logo */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center text-indigo-600 font-extrabold italic">
              MediConnect
            </div>

            {/* Desktop menu */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        "px-3 py-2 text-sm font-medium transition-colors duration-300",
                        isActive
                          ? "text-indigo-600 border-b-2 border-indigo-600"
                          : "text-gray-500 hover:text-indigo-600 cursor-pointer"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <button
              type="button"
              class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-full text-[10px] px-2 py-0.5 h-6 text-center me-1 mb-1 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-indigo-600 ml-[20px] mt-[7px] cursor-pointer"
            >
              Admin Panel
            </button>
          </div>

          {/* Create Account Button */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <Link
                    to="/signup"
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-indigo-600 rounded-lg border border-indigo-600 bg-white hover:bg-indigo-600 hover:text-white transition-colors duration-300"
                  >
                    <span className="relative px-5 py-2.5">Create Account</span>
                  </Link>
                </MenuButton>
              </div>
            </Menu>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-200" />
    </Disclosure>
  );
}
