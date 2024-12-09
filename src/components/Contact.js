import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h1 className="contact-heading">Get in Touch</h1>
      <div className="contact-container">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="tel" placeholder="Your Phone" />
          <textarea placeholder="Your Message"></textarea>
          <button className="submit-button">Submit</button>
        </form>
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Address:</strong> 123 P.A.C.E. Street, Alberta, Canada</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Email:</strong> contact@paceauto.com</p>
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?..."
            className="map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
