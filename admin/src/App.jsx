import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./component/AdminLogin";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar.jsx";
import Dashboard from "./component/Dashboard.jsx";
import AddDoctor from "./component/AddDoctor.jsx";
import DoctorList from "./component/DoctorList.jsx";
import Appointments from "./component/Appointments.jsx";
import DoctorDashboard from "./Pages/Doctor/DoctorDashboard.jsx";
import DoctorAppointments from "./Pages/Doctor/DoctorAppointments.jsx";
import DoctorProfile from "./Pages/Doctor/DoctorProfile.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adddoctor" element={<AddDoctor />} />

        <Route path="/" element={<Dashboard />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/doctorlist" element={<DoctorList />} />
          <Route path="/doctordashboard" element={<DoctorDashboard />} />
          <Route path="/doctorappointments" element={<DoctorAppointments />} />
          <Route path="/doctorprofile" element={<DoctorProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
