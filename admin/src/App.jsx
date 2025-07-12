
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from './component/AdminLogin';
import Navbar from './component/Navbar';
import Sidebar from "./component/Sidebar.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/adminlogin" element={<AdminLogin />} />


                <Route
                    path="/"
                    element={
                        <>
                            <Navbar />
                            <Sidebar />
                        {/*    Add Data.jsx here to use*/}
                        </>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;