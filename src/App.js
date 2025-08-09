import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HospitalOverview from './components/HospitalOverview';
import Locations from './components/Locations';
import FindDoctor from './components/FindDoctor';
import Login from './components/Login';
import Review from './components/Review';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Routes>
        <Route path="/" element={<HospitalOverview />} />
        <Route path="/patient-management" element={<Locations />} />
        <Route path="/doctor" element={<FindDoctor />} />
        <Route path="/appointments" element={<div>Appointments Page</div>} />
        <Route path="/departments" element={<div>Departments Page</div>} />
        <Route path="/reports" element={<div>Reports Page</div>} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Review />
      <Footer />
    </Router>
  );
}

export default App;
