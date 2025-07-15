import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminLogin from "./component/AdminLogin";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import Dashboard from "./component/Dashboard";
import AddDoctor from "./component/AddDoctor";
import DoctorList from "./component/DoctorList";
import Appointments from "./component/Appointments";

import DoctorDashboard from "./Pages/Doctor/DoctorDashboard";
import DoctorAppointments from "./Pages/Doctor/DoctorAppointments";
import DoctorProfile from "./Pages/Doctor/DoctorProfile";

import data from "./component/content.json";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route
          path="/adddoctor"
          element={<AddDoctor admin={data.adminSidebar} />}
        />
        <Route path="/" element={<Dashboard admin={data.adminSidebar} />} />
        <Route
          path="/appointments"
          element={<Appointments admin={data.adminSidebar} />}
        />
        <Route
          path="/doctorlist"
          element={<DoctorList admin={data.adminSidebar} />}
        />
        <Route
          path="/doctordashboard"
          element={<DoctorDashboard doctor={data.doctorSidebar} />}
        />
        <Route
          path="/doctorappointments"
          element={<DoctorAppointments doctor={data.doctorSidebar} />}
        />
        <Route
          path="/doctorprofile"
          element={<DoctorProfile doctor={data.doctorSidebar} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
