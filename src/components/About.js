import React from 'react';
import '../styles/About.css';
import logo from '../assets/PACE-logo.jpg'; // Ensure the path to the logo is correct

function About() {
  return (
    <section id="about" className="about">
      <img src={logo} alt="P.A.C.E. Logo" className="about-logo" />
      <h2 className="about-heading">About Us</h2>
      <div className="about-content">
        <p className="about-mission">
          At <strong>P.A.C.E. (Power Automotive Center of Excellence)</strong>, our mission is to provide reliable, high-quality automotive services that keep your vehicles running smoothly and safely.
        </p>
        <div className="about-values">
          <h3>Our Values</h3>
          <ul>
            <li><strong>Trust:</strong> Building lasting relationships with our customers through honesty and transparency.</li>
            <li><strong>Quality:</strong> Delivering top-notch services with certified technicians and premium parts.</li>
            <li><strong>Customer Focus:</strong> Putting your needs at the forefront of everything we do.</li>
          </ul>
        </div>
        <div className="about-history">
          <h3>Our Story</h3>
          <p>
            Established in 2023, P.A.C.E. began as a small family-owned business with a passion for automobiles. Over the years, we have grown into a trusted name in the community, known for our exceptional service and dedication to customer satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
