import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Services.css';

function Services() {
  const navigate = useNavigate();

  const services = [
    { title: 'Oil Change', description: 'Quick and efficient oil change services.', icon: '🛢️' },
    { title: 'Brake Repair', description: 'Ensure your safety with professional brake repairs.', icon: '🛞' },
    { title: 'Engine Diagnostics', description: 'Comprehensive diagnostics for your engine.', icon: '🔧' },
    { title: 'Tire Services', description: 'Tire rotation, balancing, and replacement.', icon: '🚗' },
    { title: 'Battery Replacement', description: 'Replace and recycle old car batteries.', icon: '🔋' },
    { title: 'Transmission Repair', description: 'Efficient repairs for smooth gear shifts.', icon: '⚙️' },
    { title: 'Air Conditioning Service', description: 'Keep your car cool with AC maintenance.', icon: '❄️' },
    { title: 'Suspension Repair', description: 'Fix worn-out shocks and struts.', icon: '🛠️' },
    { title: 'Exhaust System Repair', description: 'Maintain your car’s performance and emissions.', icon: '💨' },
    { title: 'Alignment Services', description: 'Ensure your wheels are perfectly aligned.', icon: '📐' },
    { title: 'Headlight Restoration', description: 'Improve visibility with headlight restoration.', icon: '💡' },
    { title: 'Window Tinting', description: 'Enhance privacy and UV protection.', icon: '🌞' },
    { title: 'Pre-Purchase Inspection', description: 'Thorough vehicle inspections before buying.', icon: '🔍' },
    { title: 'Fuel System Cleaning', description: 'Optimize engine performance with fuel system cleaning.', icon: '⛽' },
    { title: 'Alternator Replacement', description: 'Keep your car’s electrical system running smoothly.', icon: '🔌' },
    { title: 'Timing Belt Replacement', description: 'Prevent engine failure with timely replacements.', icon: '⏰' },
    { title: 'Radiator Repair', description: 'Keep your engine cool with radiator servicing.', icon: '🌡️' },
    { title: 'Clutch Repair', description: 'Smooth transitions with clutch adjustments or replacements.', icon: '🪛' },
    { title: 'Catalytic Converter Repair', description: 'Reduce emissions and enhance performance.', icon: '🌍' },
    { title: 'Check Engine Light Diagnosis', description: 'Identify and resolve check engine light issues.', icon: '🚨' },
    { title: 'Electrical System Repair', description: 'Fix wiring, fuses, and other electrical components.', icon: '💡' },
    { title: 'Backup Camera Installation', description: 'Install and calibrate backup cameras.', icon: '📹' },
    { title: 'Interior Upholstery Repair', description: 'Fix seat tears and other interior issues.', icon: '🛋️' },
    { title: 'Rustproofing', description: 'Protect your vehicle against rust and corrosion.', icon: '🛡️' },
  ];

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="services" className="services">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
      {showButton && (
        <button className="back-to-top" onClick={scrollToTop}>
          ⬆
        </button>
      )}
      <div className="book-service-container">
        <button className="book-service-button" onClick={() => navigate('/booking')}>
          Book a Service
        </button>
      </div>
    </section>
  );
}

export default Services;
