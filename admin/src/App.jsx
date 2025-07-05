import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AdminLogin from './component/AdminLogin';

function App() {
    return (
        <Router>
            <AdminLogin />
        </Router>
    );
}

export default App;