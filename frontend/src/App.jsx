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

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Info />
              <DoctorsCard data={data} />
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
