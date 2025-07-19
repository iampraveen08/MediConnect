import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component Imports
import Navbar from "./components/Navbar";

import Info from "./components/Info";

import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

// Page & Auth Imports
import AllDoctors from "./pages/AllDoctors";

// Static Data
import data from "./components/content.json";

// Styling
import "./App.css";
import MyProfile from "./components/MyProfile";
import Appointments from "./components/Appointments";
import Home from "./components/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home data={data} />} />

        <Route path="/alldoctors" element={<AllDoctors />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/about" element={<AboutUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/speaciality" element={<Info />} />
      </Routes>
    </Router>
  );
}
