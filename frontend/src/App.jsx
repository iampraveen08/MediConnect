import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import data from "./components/content.json";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Info from "./components/Info";
import DoctorsCard from "./components/DoctorsCard";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import AllDoctors from "./pages/AllDoctors";
import BottomContent from "./components/BottomContent";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Info />
              <DoctorsCard data={data} />
              <AboutUs />
              <BottomContent />
              <Footer />
            </>
          }
        />
        <Route
          path="/alldoctors"
          element={
            <>
              <Navbar />
              <AllDoctors />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <AboutUs />
              <Footer />
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
