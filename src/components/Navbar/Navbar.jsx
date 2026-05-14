import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/noorix_logo.jpg";
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
  FaPhone,
  FaChevronDown,
  FaChevronLeft,
  FaExchangeAlt,
  FaTruck,
  FaTools,
  FaShieldAlt,
  FaCertificate,
  FaHeart,
  FaPhoneVolume,
  FaPhoneAlt,
  FaCarSide,
  FaTruckMoving,
  FaSprayCan,
  FaHammer,
  FaInfoCircle,
  FaMoneyBillWave,
} from "react-icons/fa";

// ─── Mobile Contact Dropdown ──────────────────────────────────────────────────
function MobileContactDropdown({ open, onClose }) {
  return (
    <>
      {/* Backdrop */}
      {open && (
        <div className="mobile-contact-backdrop" onClick={onClose} />
      )}

      {/* Dropdown Panel */}
      <div className={`mobile-contact-dropdown${open ? " open" : ""}`}>
        <h3 className="mobile-contact-title">Contact Information</h3>
        <p className="mobile-contact-subtitle">
          Click any of the numbers below to call us directly.
        </p>

        <div className="mobile-contact-numbers">
          {/* Number 1 */}
          <a href="tel:07399999188" className="mobile-contact-num-item">
            <FaPhoneVolume size={22} className="mobile-contact-num-icon" />
            <span>07399999188</span>
          </a>

          {/* Number 2 */}
          <a href="tel:01234637805" className="mobile-contact-num-item">
            <FaPhoneAlt size={22} className="mobile-contact-num-icon" />
            <span>01234637805</span>
          </a>
        </div>

        <button className="mobile-contact-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </>
  );
}

// ─── Services Sub-Panel ───────────────────────────────────────────────────────
function ServicesPanel({ open, onBack }) {
const items = [
  { label: "Part Exchange", icon: FaExchangeAlt },
  { label: "Vehicle Sourcing", icon: FaCarSide },
  { label: "Delivery", icon: FaTruckMoving },
  { label: "Servicing", icon: FaTools },
  { label: "Dents and Paints", icon: FaSprayCan },
];

  return (
    <div className={`services-panel${open ? " open" : ""}`}>
      <div className="services-header">
        <FaWrench size={18} className="services-icon" />
        <button className="services-back-btn" onClick={onBack} aria-label="Back">
          <FaChevronLeft size={14} />
        </button>
        <span className="services-title">Services</span>
      </div>
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
      <div
        className={`drawer-overlay${open ? " open" : ""}`}
        onClick={handleClose}
      />
      <div className={`drawer-panel${open ? " open" : ""}`}>
        <div className="drawer-header">
          <button className="drawer-close-btn" onClick={handleClose} aria-label="Close menu">
            <FaTimes size={20} color="white" />
            <span className="drawer-close-label">Menu</span>
          </button>
          <div className="flex items-center justify-center logo">
            <img src={logo} alt="ACC Logo" className="w-14 h-14 object-contain" />
          </div>
        </div>

        <nav className="drawer-nav">
          <a href="#" className="drawer-nav-home">
            <FaHome size={18} color="white" />
            <span>Home</span>
          </a>
          <a href="#" className="drawer-nav-item">
            <FaCar size={18} className="nav-icon" />
            <span>Used Cars</span>
          </a>
          <a href="#" className="drawer-nav-item">
            <FaShuttleVan size={18} className="nav-icon" />
            <span>Used Vans</span>
          </a>
          <a href="#" className="drawer-nav-item">
            <FaMoneyBillWave size={18} className="nav-icon" />
            <span>Finance</span>
          </a>
          <div className="drawer-nav-sell">
            <span>Looking to sell?</span>
          </div>
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
          <a href="#" className="drawer-nav-item">
            <FaInfoCircle size={18} className="nav-icon" />
            <span>About</span>
          </a>
          <a href="#" className="drawer-nav-item">
            <FaTh size={18} className="nav-icon" />
            <span>Our Stock</span>
          </a>
          <a href="#" className="drawer-nav-item">
            <FaPhone size={18} className="nav-icon" />
            <span>Contact</span>
          </a>
        </nav>

        <ServicesPanel open={servicesOpen} onBack={() => setServicesOpen(false)} />
      </div>
    </>
  );
}

// ─── Main Header ──────────────────────────────────────────────────────────────
export default function AffordableCarCentreHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <header className="acc-header w-full acc-header-relative">
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
          <div className="flex items-center justify-center logo">
            <img src={logo} alt="ACC Logo" className="w-14 h-14 object-contain" />
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* ─── Right Side ─────────────────────────────────────── */}
          <div className="flex items-center gap-3 px-4 sm:px-6">

            {/* Heart — desktop only */}
            <button className="acc-icon-outline-btn acc-desktop-only" aria-label="Saved">
              <FaHeart size={16} />
            </button>

            {/* Reviews — desktop only */}
            <button className="acc-reviews-btn acc-desktop-only">Reviews</button>

            {/* Contact Us — desktop only */}
            <button className="acc-contact-us-btn acc-desktop-only">Contact Us</button>

            {/* Phone Numbers — desktop only */}
            <div className="acc-desktop-only acc-phone-block">
              <div className="flex items-center gap-2">
                <FaPhoneVolume size={13} color="#2d3058" />
                <span className="acc-contact-number">07399999188</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt size={13} color="#2d3058" />
                <span className="acc-contact-number">01234637805</span>
              </div>
            </div>

            {/* WhatsApp — always visible */}
            <a
              href="https://wa.me/447399999188"
              target="_blank"
              rel="noopener noreferrer"
              className="acc-social-btn"
              style={{ backgroundColor: "#25D366" }}
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={20} />
            </a>

            {/* Phone icon — mobile only */}
            <button
              className="acc-mobile-icon-btn acc-mobile-only hidden"
              style={{ backgroundColor: "#6c5ce7" }}
              onClick={() => setContactOpen((v) => !v)}
              aria-label="Call us"
            >
              <FaPhoneAlt size={17} color="#fff" />
            </button>

            {/* Heart icon — mobile only */}
            <button
              className="acc-mobile-icon-btn acc-mobile-only acc-mobile-heart hidden"
              aria-label="Saved"
            >
              <FaHeart size={17} color="#6c5ce7" />
            </button>

          </div>
        </div>

        {/* Mobile Contact Dropdown */}
        <MobileContactDropdown
          open={contactOpen}
          onClose={() => setContactOpen(false)}
        />
      </header>

      <NavDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}