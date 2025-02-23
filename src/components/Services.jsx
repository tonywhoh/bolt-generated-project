import React from 'react';
import { Link } from 'react-router-dom';
import CommercialCarpetCleaning from './CommercialCarpetCleaning';
import ResidentialCarpetCleaning from './ResidentialCarpetCleaning';
import UpholsteryCleaning from './UpholsteryCleaning';
import AirDuctCleaning from './AirDuctCleaning';
import MoldRemediation from './MoldRemediation';
import EmergencyRestoration from './EmergencyRestoration';

function Services() {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <ul>
        <li><Link to="/services/commercial-carpet-cleaning">Commercial Carpet Cleaning</Link></li>
        <li><Link to="/services/residential-carpet-cleaning">Residential Carpet Cleaning</Link></li>
        <li><Link to="/services/upholstery-cleaning">Upholstery Cleaning</Link></li>
        <li><Link to="/services/air-duct-cleaning">Air Duct Cleaning</Link></li>
        <li><Link to="/services/mold-remediation">Mold Remediation</Link></li>
        <li><Link to="/services/emergency-restoration">Emergency Restoration Services</Link></li>
      </ul>
    </div>
  );
}

export default Services;
