import { useState } from "react";
import "./Navbar.css";
import {
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaHome,
  FaCar,
  FaShuttleVan,
  FaTh,
  FaWrench,
  FaMoneyBillWave,
  FaInfoCircle,
  FaPhone,
  FaChevronDown,
  FaChevronLeft,
  FaExchangeAlt, 
  FaTruck,        
  FaTools,         
  FaShieldAlt,    
  FaCertificate,   

} from "react-icons/fa";

// ─── Services Sub-Panel ───────────────────────────────────────────────────────
function ServicesPanel({ open, onBack }) {
const items = [
  { label: "Part Exchange", icon: FaExchangeAlt },
  { label: "Vehicle Sourcing", icon: FaCar },
  { label: "Delivery", icon: FaTruck },
  { label: "Servicing", icon: FaTools },
  { label: "AA Standards", icon: FaCertificate },
  { label: "Warranty", icon: FaShieldAlt },
];

  return (
    <div className={`services-panel${open ? " open" : ""}`}>
      {/* Header */}
      <div className="services-header">
        <FaWrench size={18} className="services-icon" />
        <button className="services-back-btn" onClick={onBack} aria-label="Back">
          <FaChevronLeft size={14} />
        </button>
        <span className="services-title">Services</span>
      </div>

      {/* List */}
        <div className="services-list">
          {items.map(({ label, icon: Icon }) => (
            <a href="#" className="services-list-item" key={label}>
              <Icon size={16} className="service-item-icon" />
              <span>{label}</span>
            </a>
          ))}
        </div>
    </div>
  );
}

// ─── Main Drawer ──────────────────────────────────────────────────────────────
function NavDrawer({ open, onClose }) {
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleClose = () => {
    setServicesOpen(false);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`drawer-overlay${open ? " open" : ""}`}
        onClick={handleClose}
      />

      {/* Drawer Panel */}
      <div className={`drawer-panel${open ? " open" : ""}`}>
        {/* Drawer Header */}
        <div className="drawer-header">
          <button className="drawer-close-btn" onClick={handleClose} aria-label="Close menu">
            <FaTimes size={20} color="white" />
            <span className="drawer-close-label">Menu</span>
          </button>
          <div className="drawer-logo-area">
            <div className="drawer-logo-script">ACC</div>
            <div className="drawer-logo-tagline">Affordable Car Centre</div>
          </div>
        </div>

        {/* Nav Items */}
        <nav className="drawer-nav">
          {/* Home — gold */}
          <a href="#" className="drawer-nav-home">
            <FaHome size={18} color="white" />
            <span>Home</span>
          </a>

          {/* Used Cars */}
          <a href="#" className="drawer-nav-item">
            <FaCar size={18} className="nav-icon" />
            <span>Used Cars</span>
          </a>

          {/* Used Vans */}
          <a href="#" className="drawer-nav-item">
            <FaShuttleVan size={18} className="nav-icon" />
            <span>Used Vans</span>
          </a>

          {/* Finance */}
          <a href="#" className="drawer-nav-item">
            <FaMoneyBillWave size={18} className="nav-icon" />
            <span>Finance</span>
          </a>

          {/* Looking to sell */}
          <div className="drawer-nav-sell">
            <span>Looking to sell?</span>
          </div>

          {/* Services — opens sub-panel */}
          <div
            className="drawer-nav-item"
            onClick={() => setServicesOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setServicesOpen(true)}
          >
            <FaWrench size={18} className="nav-icon" />
            <span>Services</span>
            <FaChevronDown size={12} className="nav-chevron" />
          </div>

          {/* About */}
          <a href="#" className="drawer-nav-item">
            <FaInfoCircle size={18} className="nav-icon" />
            <span>About</span>
          </a>

          {/* Our Stock */}
          <a href="#" className="drawer-nav-item">
            <FaTh size={18} className="nav-icon" />
            <span>Our Stock</span>
          </a>

          {/* Contact */}
          <a href="#" className="drawer-nav-item">
            <FaPhone size={18} className="nav-icon" />
            <span>Contact</span>
          </a>
        </nav>

        {/* Services Sub-Panel (slides over drawer) */}
        <ServicesPanel open={servicesOpen} onBack={() => setServicesOpen(false)} />
      </div>
    </>
  );
}

// ─── Main Header ──────────────────────────────────────────────────────────────
export default function AffordableCarCentreHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="acc-header w-full">
        <div className="flex items-stretch w-full" style={{ minHeight: 72 }}>
          {/* Menu Button */}
          <button
            className="acc-menu-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <FaBars size={20} color="white" />
            <span className="acc-menu-label">Menu</span>
          </button>

          {/* Logo */}
          <div className="flex flex-col justify-center pl-4 pr-6 py-2" style={{ minWidth: 140 }}>
            <div className="acc-logo-script">ACC</div>
            <div className="acc-logo-tagline">Affordable Car Centre</div>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Contact Info + Social */}
          <div className="flex items-center gap-4 px-4 sm:px-6">
            <div className="hidden sm:block" />

            {/* Phone */}
            <div className="hidden sm:flex flex-col items-start divider">
              <span className="acc-contact-label">Call Us Today</span>
              <span className="acc-contact-number">01234 900 786</span>
            </div>

            {/* WhatsApp */}
            <div className="hidden sm:flex flex-col items-start">
              <span className="acc-contact-label">Whatsapp</span>
              <span className="acc-contact-number">07375 730421</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 ml-2">
              <a
                href="#"
                className="acc-social-btn"
                style={{ background: "#25D366" }}
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={17} />
              </a>
              <a
                href="#"
                className="acc-social-btn"
                style={{ background: "#1877F3" }}
                aria-label="Facebook"
              >
                <FaFacebookF size={15} />
              </a>
              <a
                href="#"
                className="acc-social-btn"
                style={{
                  background:
                    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
                }}
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Nav Drawer */}
      <NavDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}