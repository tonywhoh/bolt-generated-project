import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Cleaning Services PWA</h1>
      <p>Your one-stop solution for all cleaning needs!</p>
      <div className="service-cards">
        <Link to="/services/commercial-carpet-cleaning" className="service-card">
          <h2>Commercial Carpet Cleaning</h2>
          <p>Keep your business environment clean and professional.</p>
        </Link>
        <Link to="/services/residential-carpet-cleaning" className="service-card">
          <h2>Residential Carpet Cleaning</h2>
          <p>Ensure your home's carpets are spotless and fresh.</p>
        </Link>
        <Link to="/services/upholstery-cleaning" className="service-card">
          <h2>Upholstery Cleaning</h2>
          <p>Rejuvenate your furniture with our gentle cleaning techniques.</p>
        </Link>
        <Link to="/services/air-duct-cleaning" className="service-card">
          <h2>Air Duct Cleaning</h2>
          <p>Improve air quality and HVAC efficiency.</p>
        </Link>
        <Link to="/services/mold-remediation" className="service-card">
          <h2>Mold Remediation</h2>
          <p>Remove mold and restore your property to a safe condition.</p>
        </Link>
        <Link to="/services/emergency-restoration" className="service-card">
          <h2>Emergency Restoration</h2>
          <p>Minimize damage and restore your property quickly.</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
