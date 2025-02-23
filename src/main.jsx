import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Services from './components/Services';
import CommercialCarpetCleaning from './components/CommercialCarpetCleaning';
import ResidentialCarpetCleaning from './components/ResidentialCarpetCleaning';
import UpholsteryCleaning from './components/UpholsteryCleaning';
import AirDuctCleaning from './components/AirDuctCleaning';
import MoldRemediation from './components/MoldRemediation';
import EmergencyRestoration from './components/EmergencyRestoration';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />}>
            <Route path="commercial-carpet-cleaning" element={<CommercialCarpetCleaning />} />
            <Route path="residential-carpet-cleaning" element={<ResidentialCarpetCleaning />} />
            <Route path="upholstery-cleaning" element={<UpholsteryCleaning />} />
            <Route path="air-duct-cleaning" element={<AirDuctCleaning />} />
            <Route path="mold-remediation" element={<MoldRemediation />} />
            <Route path="emergency-restoration" element={<EmergencyRestoration />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
