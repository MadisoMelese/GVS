import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js'; 
import Contact from './components/Contact.js';
import StudentPortal from './components/StudentPortal.js';
import Login from './components/Login.js';
import AdminDashboard from './components/admin/AdminDashboard.js';
import CertificateDetail from './components/CertificateDetail.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/student-portal" element={<StudentPortal />} />
        <Route path="/certificate/:id" element={<CertificateDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
