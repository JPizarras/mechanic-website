import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <section id="home" className="home">
      <div className="hero">
        <h1 className="hero-title">Welcome to P.A.C.E.</h1>
        <p className="hero-subtitle">Power Automotive Center of Excellence</p>
        <div className="button-group">
          <button className="cta-button">Book a Service</button>
          <button className="cta-button secondary">Contact Us</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
