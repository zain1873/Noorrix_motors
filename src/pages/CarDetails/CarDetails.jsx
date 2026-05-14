import { useState } from "react";

// ---------- react-icons ----------
import { FiChevronLeft, FiChevronRight, FiChevronDown, FiX } from "react-icons/fi";
import { FaHeart, FaRegHeart, FaStar, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { MdLocationOn, MdOutlineDirectionsCar, MdGridView } from "react-icons/md";
import { BsCalendar3, BsSpeedometer2, BsFuelPump, BsGear } from "react-icons/bs";
import { TbEngine } from "react-icons/tb";
import { GiCarDoor } from "react-icons/gi";
import { RiPaintBrushLine } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import { HiCheckCircle } from "react-icons/hi";
import { BiSolidBuilding } from "react-icons/bi";
import { AiOutlineCalendar, AiOutlineInfo } from "react-icons/ai";

import "../CarDetails/CarDetails.css";

// ----------------------------------------------------------------
// DATA
// ----------------------------------------------------------------

const SLIDES = [
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80",
  "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=900&q=80",
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=900&q=80",
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=900&q=80",
  "https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?w=900&q=80",   
  "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=900&q=80",
];

const SPECS = [
  { icon: <BsSpeedometer2 />, label: "Mileage",        value: "82,000 miles"  },
  { icon: <BsCalendar3    />, label: "Year",           value: "2015 (15 reg)" },
  { icon: <HiCheckCircle />,  label: "History check",  value: "All passed", green: true },
  { icon: <TbEngine       />, label: "Engine",         value: "1.6L"          },
  { icon: <BsFuelPump     />, label: "Fuel type",      value: "Diesel"        },
  { icon: <BsGear         />, label: "Transmission",   value: "Manual"        },
  { icon: <MdOutlineDirectionsCar />, label: "Body Type", value: "Hatchback"  },
  { icon: <GiCarDoor      />, label: "Doors",          value: "5"             },
  { icon: <IoMdPerson     />, label: "Seats",          value: "5"             },
  { icon: <RiPaintBrushLine />, label: "Colour",       value: "Blue"          },
];

const FEATURES = [
  "USB input",              "Trip computer",
  "Traction control",       "Reverse parking aid",
  "Remote central locking", "Rear park assist camera",
  "Rear electric windows",  "Radio/CD",
  "Power Assisted Steering","Passenger airbag",
];

const TABS = ["Features", "Specs", "Equipment", "Running costs & ULEZ"];

// ----------------------------------------------------------------
// GALLERY MODAL  (new component)
// ----------------------------------------------------------------
function GalleryModal({ startIndex, onClose }) {
  const [active, setActive] = useState(startIndex);

  const prev = () => setActive(i => (i - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setActive(i => (i + 1) % SLIDES.length);

  // Close on overlay click (but not on inner content click)
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Keyboard navigation
  const handleKey = (e) => {
    if (e.key === "ArrowLeft")  prev();
    if (e.key === "ArrowRight") next();
    if (e.key === "Escape")     onClose();
  };

  return (
    <div
      className="gallery-overlay"
      onClick={handleOverlayClick}
      onKeyDown={handleKey}
      tabIndex={-1}
      ref={el => el && el.focus()}
    >
      {/* Counter */}
      <div className="gallery-counter">
        {active + 1} / {SLIDES.length}
      </div>

      {/* Close button */}
      <button className="gallery-close" onClick={onClose}>
        <FiX />
      </button>

      {/* Main image + arrows */}
      <div className="gallery-main">
        <button className="gallery-arrow prev" onClick={prev}>
          <FiChevronLeft />
        </button>

        <img
          key={active}
          className="gallery-main-img"
          src={SLIDES[active]}
          alt={`Gallery ${active + 1}`}
        />

        <button className="gallery-arrow next" onClick={next}>
          <FiChevronRight />
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className="gallery-thumbs">
        {SLIDES.map((src, i) => (
          <div
            key={i}
            className={`gallery-thumb-item ${active === i ? "active" : ""}`}
            onClick={() => setActive(i)}
          >
            <img src={src} alt={`Thumb ${i + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ----------------------------------------------------------------
// IMAGE SLIDER  (gallery modal wired in here only)
// ----------------------------------------------------------------
function ImageSlider() {
  const [current,     setCurrent    ] = useState(0);
  const [loved,       setLoved      ] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  const prev = () => setCurrent(i => (i - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setCurrent(i => (i + 1) % SLIDES.length);

  return (
    <>
      <div>
        {/* ---- Main slide ---- */}
        <div className="image-slider-wrapper">
          {/* Banner */}
          <div className="image-badge-banner">
            Very Clean Example<br />FSH
          </div>

          {/* Photo count */}
          <div className="photo-count-badge">
            <MdGridView size={14} />
            {SLIDES.length}
          </div>

          {/* Favourite */}
          <button className="favourite-btn" onClick={() => setLoved(l => !l)}>
            {loved ? <FaHeart color="#e8000f" size={18} /> : <FaRegHeart size={18} />}
          </button>

          {/* Main image */}
          <img
            className="main-slide"
            src={SLIDES[current]}
            alt={`Car slide ${current + 1}`}
          />

          {/* Viewed badge */}
          <span className="viewed-badge">Viewed</span>

          {/* View gallery — opens modal */}
          <button
            className="view-gallery-btn"
            onClick={() => setShowGallery(true)}
          >
            <MdGridView size={14} />
            View gallery
          </button>

          {/* Arrows */}
          <button className="slider-arrow prev" onClick={prev}>
            <FiChevronLeft size={18} />
          </button>
          <button className="slider-arrow next" onClick={next}>
            <FiChevronRight size={18} />
          </button>
        </div>

        {/* ---- Thumbnails ---- */}
        <div className="thumbnails-row">
          {SLIDES.slice(0, 3).map((src, i) => (
            <div
              key={i}
              className={`thumbnail ${current === i ? "active" : ""}`}
              onClick={() => setCurrent(i)}
            >
              <img src={src} alt={`Thumb ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* ---- Gallery Modal (rendered outside slider div, in DOM root via portal would be ideal but inline is fine) ---- */}
      {showGallery && (
        <GalleryModal
          startIndex={current}
          onClose={() => setShowGallery(false)}
        />
      )}
    </>
  );
}

// ----------------------------------------------------------------
// SPECS GRID
// ----------------------------------------------------------------
function SpecsGrid() {
  return (
    <div className="specs-grid-detail">
      {SPECS.map((s, i) => (
        <div className="spec-item-details" key={i}>
          <span className="icon-specs">{s.icon}</span>
          <div>
            <div className="spec-label-grid">{s.label}</div>
            <div className={`spec-value-grid ${s.green ? "green" : ""}`}>
              {s.green && <HiCheckCircle size={14} />}
              {s.value}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ----------------------------------------------------------------
// FEATURES TABS
// ----------------------------------------------------------------
function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="features-section">
      <div className="tabs-row">
        {TABS.map((tab, i) => (
          <button
            key={i}
            className={`tab-detail-btn ${activeTab === i ? "active" : ""}`}
            onClick={() => setActiveTab(i)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 0 ? (
        <>
          <div className="features-grid">
            {FEATURES.map((f, i) => (
              <div className="feature-item" key={i}>{f}</div>
            ))}
          </div>
          <button className="view-all-features-btn">
            View all features <FiChevronDown size={16} />
          </button>
        </>
      ) : (
        <div style={{ padding: "20px 16px", color: "#888", fontSize: 14 }}>
          {TABS[activeTab]} information coming soon.
        </div>
      )}
    </div>
  );
}

// ----------------------------------------------------------------
// PRICE CARD
// ----------------------------------------------------------------
function PriceCard() {
  return (
    <div className="price-card">
      <div className="car-title-detail">Honda Civic</div>
      <div className="car-subtitle">
        2015 (15) 1.6 1DTEC SE Plus Hatchback 5d...
      </div>

      <div className="badges-row">
        <span className="badge">82,000 miles</span>
        <span className="badge">2015 (15)</span>
        <span className="badge">Manual</span>
        <span className="badge">Diesel</span>
      </div>

      <div className="price-row">
        <span className="main-price">£6,250</span>
        <div className="finance-info">
          £110.2/pm (HP)<br />
          <a href="#">Apply now</a>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------
// DEALER CARD
// ----------------------------------------------------------------
function DealerCard() {
  return (
    <div className="dealer-card">
      <div className="dealer-logo-area">
        <div className="dealer-logo">GRAMPIAN CARS</div>
      </div>

      <div className="dealer-info">
        <div className="dealer-row">
          <BiSolidBuilding className="dealer-row-icon" />
          <div>
            <div className="dealer-name-text">Grampian Cars</div>
            <div className="dealer-address">Bath Street Macduff AB44 1SA</div>
          </div>
        </div>

        <div className="dealer-row">
          <MdLocationOn className="dealer-row-icon" />
          <div>
            Macduff{" "}
            <a href="#" className="dealer-location-link">(See distance)</a>
          </div>
        </div>

        <div className="dealer-row">
          <FaStar className="dealer-row-icon star-icon" />
          <div className="rating-row">
            <span className="rating-num">4.1</span>
            <span className="rating-reviews">(60 reviews)</span>
          </div>
        </div>

        <div className="dealer-row">
          <MdOutlineDirectionsCar className="dealer-row-icon" />
          <span className="stock-link">33 (View all stock)</span>
        </div>

        <div className="dealer-row">
          <AiOutlineCalendar className="dealer-row-icon" />
          <div className="joined-row">
            Joined 2015
            <AiOutlineInfo size={13} color="#9ca3af" />
          </div>
        </div>

        <button className="show-phone-btn">
          <FaPhoneAlt size={14} />
          Show phone number
        </button>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------
// OUT OF HOURS PANEL
// ----------------------------------------------------------------
function OutOfHoursPanel() {
  return (
    <div className="out-of-hours">
      <div className="ooh-title">Out of hours contact</div>
      <div className="ooh-desc">
        Contact the dealer for a priority response as they open in the morning
      </div>

      <div className="ooh-label">What's your enquiry about? *</div>

      <div className="checkbox-row">
        <label className="checkbox-item">
          <input type="checkbox" /> Book a test drive
        </label>
        <label className="checkbox-item">
          <input type="checkbox" /> Reserve a vehicle
        </label>
        <label className="checkbox-item">
          <input type="checkbox" /> Is it still available?
        </label>
        <label className="checkbox-item">
          <input type="checkbox" /> Ask a question
        </label>
      </div>

      <div className="ooh-input-row">
        <input className="ooh-input" type="text" placeholder="First name *" />
        <input className="ooh-input" type="text" placeholder="Last name *" />
      </div>

      <input className="ooh-input" type="email" placeholder="Email address *" />
      <input className="ooh-input" type="tel"   placeholder="Phone number *" />

      <label className="part-exchange-row">
        <input type="checkbox" />
        I have a vehicle to part exchange
      </label>

      <div className="updates-text">
        <input type="checkbox" />
        We may email you with offers and updates about our products and services.
        If you do not wish to receive these, tick this box. You can unsubscribe
        at any time via the link in our emails or{" "}
        <a href="#">Contact Us</a>. See our{" "}
        <a href="#">Privacy Notice</a> to learn how we handle your data.
      </div>

      <button className="message-now-btn">
        <FaEnvelope size={15} />
        Message now
      </button>

      <div className="recaptcha-text">
        This site is protected by reCAPTCHA and the Google{" "}
        <a href="#">Privacy Policy</a> and{" "}
        <a href="#">Terms of Service</a> apply.
      </div>
    </div>
  );
}

// ----------------------------------------------------------------
// MAIN COMPONENT
// ----------------------------------------------------------------
export default function CarsListing() {
  return (
    <>
      {/* ---- Breadcrumb ---- */}
      <div className="breadcrumb">
        <div className="breadcrumb-inner">
          <a href="#">Cazoo</a>
          <span className="separator">›</span>
          <a href="#">Cars for sale</a>
          <span className="separator">›</span>
          <a href="#">Honda</a>
          <span className="separator">›</span>
          <a href="#">Civic</a>
          <span className="separator">›</span>
          <span className="current">2015 Blue</span>
        </div>
      </div>

      {/* ---- Page body ---- */}
      <div className="listing-container">
        <a href="#" className="back-btn">
          <FiChevronLeft size={18} /> Back
        </a>

        <div className="listing-grid" style={{ marginTop: 12 }}>

          {/* ======== LEFT COLUMN ======== */}
          <div>
            <ImageSlider />

            <div className="location-row">
              <div className="location-left">
                <MdLocationOn size={20} color="#888" />
                <div>
                  <span className="label">Car location</span>
                  Macduff{" "}
                  <a href="#" className="location-link">(See distance)</a>
                </div>
              </div>
              <a href="#" className="view-map-btn">
                View Map <FiChevronRight size={16} />
              </a>
            </div>

            <SpecsGrid />
            <FeaturesSection />
          </div>

          {/* ======== RIGHT COLUMN ======== */}
          <div className="right-panel">
            <PriceCard />
            <DealerCard />
            <OutOfHoursPanel />
            <button className="rate-listing-btn">Rate this listing</button>
          </div>

        </div>
      </div>
    </>
  );
}