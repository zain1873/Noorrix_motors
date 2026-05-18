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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2455.122765432109!2d-0.4748039232848384!3d52.13021867970633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877b8a5dd5d5d5d%3A0x5d5d5d5d5d5d5d5d!2s84A+Ford+End+Road,+Bedford+MK40+4JX!5e0!3m2!1sen!2suk!4v1"
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
                  84A Ford End Road, Bedford, MK40 4JX
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
                  <a href="tel:+4407399999188">07399 991 888</a>
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
                  <a href="mailto:info@noorrixmotors.co.uk">
                    info@noorrixmotors.co.uk
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