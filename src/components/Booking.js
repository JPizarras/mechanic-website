import React from 'react';
import '../styles/Booking.css';

function Booking() {
  const services = [
    { title: 'Oil Change', icon: '🛢️' },
    { title: 'Brake Repair', icon: '🛞' },
    { title: 'Engine Diagnostics', icon: '🔧' },
    { title: 'Tire Services', icon: '🚗' },
    { title: 'Battery Replacement', icon: '🔋' },
    { title: 'Transmission Repair', icon: '⚙️' },
    { title: 'Air Conditioning Service', icon: '❄️' },
    { title: 'Suspension Repair', icon: '🛠️' },
    { title: 'Exhaust System Repair', icon: '💨' },
    { title: 'Alignment Services', icon: '📐' },
    { title: 'Headlight Restoration', icon: '💡' },
    { title: 'Window Tinting', icon: '🌞' },
    { title: 'Pre-Purchase Inspection', icon: '🔍' },
    { title: 'Fuel System Cleaning', icon: '⛽' },
    { title: 'Alternator Replacement', icon: '🔌' },
    { title: 'Timing Belt Replacement', icon: '⏰' },
    { title: 'Radiator Repair', icon: '🌡️' },
    { title: 'Clutch Repair', icon: '🪛' },
    { title: 'Catalytic Converter Repair', icon: '🌍' },
    { title: 'Check Engine Light Diagnosis', icon: '🚨' },
    { title: 'Electrical System Repair', icon: '💡' },
    { title: 'Backup Camera Installation', icon: '📹' },
    { title: 'Interior Upholstery Repair', icon: '🛋️' },
    { title: 'Rustproofing', icon: '🛡️' },
  ];

  return (
    <div className="booking">
      <h1 className="booking-heading">Book Your Appointment</h1>
      <form className="booking-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email or Phone" required />
        <input type="date" required />
        <input type="time" required />
        <select required>
          <option value="" disabled selected>
            Select a Service
          </option>
          {services.map((service, index) => (
            <option key={index} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
        <textarea placeholder="Additional Notes (Optional)" />
        <button className="submit-button">Submit</button>
      </form>
      <div className="available-services">
        <h2 className="available-services-heading">Available Services:</h2>
        <div className="available-services-grid">
          {services.map((service, index) => (
            <div key={index} className="available-services-item">
              <div className="service-icon">{service.icon}</div>
              <div className="service-title">{service.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Booking;
