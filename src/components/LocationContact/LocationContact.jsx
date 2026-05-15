import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import "./LocationContact.css";

const LocationContact = () => {
  return (
    <section className="location-section sp">
      <div className="location-container">
        {/* Header */}
        <div className="location-header">
          <h2 className="location-heading">
            Visit Our <span>Workshop</span>
          </h2>
          <p className="location-subtitle">
            Come see us in person or get in touch — we're always happy to help.
          </p>
          <div className="location-accent-bar" />
        </div>

        {/* Grid */}
        <div className="location-grid">
          {/* ── Left: Google Map ── */}
          <div className="location-map-wrapper">
            <iframe
              title="Noorrix Motors Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.234567890123!2d55.123456789012!3d25.123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA3JzI0LjQiTiA1NcKwMDcnMjQuNCJF!5e0!3m2!1sen!2sae!4v1699999999999!5m2!1sen!2sae"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* ── Right: Contact Details ── */}
          <div className="location-details">
            {/* Address */}
            <div className="location-card">
              <div className="location-card-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="location-card-content">
                <span className="location-card-label">Address</span>
                <span className="location-card-value">
                  Industrial Area, Motor City, Dubai
                </span>
              </div>
            </div>

            {/* Phone */}
            <div className="location-card">
              <div className="location-card-icon">
                <FaPhoneAlt />
              </div>
              <div className="location-card-content">
                <span className="location-card-label">Phone</span>
                <span className="location-card-value">
                  <a href="tel:+971501234567">+971 50 123 4567</a>
                </span>
              </div>
            </div>

            {/* Email */}
            <div className="location-card">
              <div className="location-card-icon">
                <FaEnvelope />
              </div>
              <div className="location-card-content">
                <span className="location-card-label">Email</span>
                <span className="location-card-value">
                  <a href="mailto:service@yourbrand.com">
                    service@yourbrand.com
                  </a>
                </span>
              </div>
            </div>

            {/* Working Hours */}
            <div className="location-card">
              <div className="location-card-icon">
                <FaClock />
              </div>
              <div className="location-card-content">
                <span className="location-card-label">Working Hours</span>
                <span className="location-card-value">
                  Mon – Sat: 9 AM – 8 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationContact;