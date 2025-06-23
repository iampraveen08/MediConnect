import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSquareFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div>
      <footer class="bg-indigo-800 text-white py-8 mt-30">
        <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-2 italic">MediConnect</h3>
            <p class="text-sm">
              We connect patients with certified healthcare professionals across
              specialties, offering a seamless appointment booking experience.
            </p>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-2">Quick Links</h3>
            <ul class="text-sm space-y-1">
              <li>
                <a href="/" class="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/doctors" class="hover:underline">
                  Find a Doctor
                </a>
              </li>
              <li>
                <a href="/appointments" class="hover:underline">
                  Appointments
                </a>
              </li>
              <li>
                <a href="/contact" class="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-2">Services</h3>
            <ul class="text-sm space-y-1">
              <li>General Consultation</li>
              <li>Pediatrics</li>
              <li>Dermatology</li>
              <li>Telemedicine</li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-2">Contact</h3>
            <p class="text-sm">123 Health St, Wellness City, IN</p>
            <p class="text-sm">Email: support@medappoint.com</p>
            <p class="text-sm">Phone: +91-9876543210</p>
            <div class="flex mt-2 space-x-3">
              <a href="#">
                <FontAwesomeIcon
                  icon={faSquareFacebook}
                  className="text-gray-300 hover:text-indigo-600 transition duration-300"
                  size="1x"
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-white hover:text-indigo-400 transition duration-300"
                  size="1x"
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-white hover:text-indigo-400 transition duration-300"
                  size="1x"
                />
              </a>
            </div>
          </div>
        </div>
        <hr className="mt-10 border-t border-gray-400" />

        <div class="mt-8 text-center text-sm text-gray-400">
          &copy; 2025 MediConnect. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
