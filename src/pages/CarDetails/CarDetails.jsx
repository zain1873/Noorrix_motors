import { useState } from "react";

// ---------- react-icons ----------
import { FiChevronLeft, FiChevronRight, FiChevronDown, FiChevronUp, FiX } from "react-icons/fi";
import { FaHeart, FaRegHeart, FaStar, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { MdLocationOn, MdOutlineDirectionsCar, MdGridView, MdColorLens } from "react-icons/md";
import { BsCalendar3, BsSpeedometer2, BsFuelPump, BsGear, BsCalendarCheck, BsShieldCheck } from "react-icons/bs";
import { TbEngine } from "react-icons/tb";
import { GiCarDoor } from "react-icons/gi";
import { RiPaintBrushLine } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import { HiCheckCircle } from "react-icons/hi";
import { AiOutlineCalendar, AiOutlineInfo, AiOutlineCar } from "react-icons/ai";
import { BiPlayCircle } from "react-icons/bi";
import Navbar from "../../components/Navbar/Navbar"

import "./CarDetails.css";
import NoorrixFooter from "../../components/Footer/Footer";

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
// GALLERY MODAL
// ----------------------------------------------------------------
function GalleryModal({ startIndex, onClose }) {
  const [active, setActive] = useState(startIndex);

  const prev = () => setActive(i => (i - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setActive(i => (i + 1) % SLIDES.length);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

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
      <div className="gallery-counter">
        {active + 1} / {SLIDES.length}
      </div>

      <button className="gallery-close" onClick={onClose}>
        <FiX />
      </button>

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
// IMAGE SLIDER
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
        <div className="image-slider-wrapper" style={{ width: "100%", maxWidth: "100%" }}>
          <div className="image-badge-banner">
            Very Clean Example<br />FSH
          </div>

          <div className="photo-count-badge">
            <MdGridView size={14} />
            {SLIDES.length}
          </div>

          <button className="favourite-btn" onClick={() => setLoved(l => !l)}>
            {loved ? <FaHeart color="#e8000f" size={18} /> : <FaRegHeart size={18} />}
          </button>

          <img
            className="main-slide"
            src={SLIDES[current]}
            alt={`Car slide ${current + 1}`}
          />

          <span className="viewed-badge">Viewed</span>

          <button
            className="view-gallery-btn"
            onClick={() => setShowGallery(true)}
          >
            <MdGridView size={14} />
            View gallery
          </button>

          <button className="slider-arrow prev" onClick={prev}>
            <FiChevronLeft size={18} />
          </button>
          <button className="slider-arrow next" onClick={next}>
            <FiChevronRight size={18} />
          </button>
        </div>

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
// DESCRIPTION + CAR OVERVIEW SECTION (Image 1 - Light)
// ----------------------------------------------------------------
const CAR_OVERVIEW_ITEMS = [
  { icon: <BsCalendarCheck size={26} />,        label: "MOT date",  value: "08/10/2026" },
  { icon: <MdColorLens size={26} />,            label: "Color",     value: "Blue"       },
  { icon: <BsShieldCheck size={26} />,          label: "Insurance", value: "36"         },
  { icon: <AiOutlineCar size={26} />,           label: "Make",      value: "Honda"      },
  { icon: <MdOutlineDirectionsCar size={26} />, label: "Model",     value: "Civic"      },
  { icon: <BsFuelPump size={26} />,             label: "Fuel Type", value: "Diesel"     },
];

const DESCRIPTION_TEXT =
  "This 2015 Honda Civic 1.6 iDTEC SE Plus offers an exceptional blend of performance and efficiency, boasting a Euro 6 compliant 1.6L diesel engine. As an SE Plus model, it comes with the distinctive trim enhancing its sporty appeal. This vehicle is equipped with practical features such as Bluetooth Hands Free with USB Audio Interface for seamless connectivity.";

function DescriptionOverviewSection() {
  const [expanded, setExpanded] = useState(false);
  const short = DESCRIPTION_TEXT.slice(0, 200) + "…";

  return (
    <div className="do-wrapper">
      <div className="do-inner">
        <div className="do-desc">
          <h3 className="do-desc-title">Description</h3>
          <p className="do-desc-body">{expanded ? DESCRIPTION_TEXT : short}</p>
          <button className="do-read-more" onClick={() => setExpanded(v => !v)}>
            {expanded ? "Read Less" : "Read More"}
          </button>
        </div>
        <div className="do-overview">
          <h3 className="do-overview-title">Car Overview</h3>
          <div className="do-overview-grid">
            {CAR_OVERVIEW_ITEMS.map((item, i) => (
              <div className="do-card" key={i}>
                <div className="do-card-icon">{item.icon}</div>
                <span className="do-card-label">{item.label}</span>
                <span className="do-card-value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------
// VEHICLE DESCRIPTION SECTION (Image 2 - Dark)
// ----------------------------------------------------------------
const ACCORDION_ITEMS = [
  { id: "summary",     label: "VEHICLE",       accent: "SUMMARY"  },
  { id: "performance", label: "PERFORMANCE &", accent: "ECONOMY"  },
  { id: "interior",    label: "INTERIOR /",    accent: "EXTERIOR" },
  { id: "safety",      label: "SAFETY /",      accent: "OTHER"    },
];

const ACCORDION_CONTENT = {
  summary:     "This 2015 Honda Civic 1.6 iDTEC SE Plus is a five door hatchback featuring a 1.6 litre diesel engine meeting Euro 6 emission standards. It comes with a full service history and a valid MOT.",
  performance: "Capable of impressive fuel economy with the 1.6L iDTEC engine. Features cruise control and a smooth manual gearbox ensuring a comfortable and efficient driving experience.",
  interior:    "Notable features include Bluetooth connectivity, USB input, rear parking camera, remote central locking, rear electric windows, and power assisted steering.",
  safety:      "This vehicle has been through a full safety inspection. All safety systems are operational and the vehicle has a clear history check with no previous accidents or structural damage recorded.",
};

function VehicleDescriptionSection() {
  const [expanded, setExpanded] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  const shortText = "This 2015 Honda Civic 1.6 iDTEC SE Plus boasts a clear vehicle history and a full service history, ensuring peace of mind for its next owner. This five door hatchback features a 1.6 litre diesel engine and meets Euro 6 emission standards. Notable features include Bluetooth connectivity, rear parking camera, USB input, and remote central locking.";
  const fullText  = shortText + " Experience impressive fuel economy with this Honda Civic, the 1.6L iDTEC engine delivers exceptional efficiency that sets it apart from many similar vehicles. The comfortable interior features dual zone climate control ensuring comfort for all occupants, while the generous boot space provides ample room for luggage and everyday essentials.";

  const toggleAccordion = (id) => setOpenAccordion(prev => prev === id ? null : id);

  return (
    <div className="vd-wrapper">
      <h2 className="vd-title">Vehicle Description</h2>
      <p className="vd-body">{expanded ? fullText : shortText.slice(0, 400) + "…"}</p>
      <button className="vd-read-more" onClick={() => setExpanded(v => !v)}>
        {expanded ? "Read Less −" : "Read More +"}
      </button>

      <div className="vd-accordion">
        {ACCORDION_ITEMS.map((item) => {
          const isOpen = openAccordion === item.id;
          return (
            <div key={item.id} className="vd-accordion-item">
              <button className="vd-accordion-header" onClick={() => toggleAccordion(item.id)}>
                <span className="vd-acc-label">
                  <span className="vd-acc-accent">{item.label}</span>{" "}
                  <span className="vd-acc-white">{item.accent}</span>
                </span>
                {isOpen ? <FiChevronUp className="vd-acc-icon" /> : <FiChevronDown className="vd-acc-icon" />}
              </button>
              <div className={`vd-accordion-body ${isOpen ? "open" : ""}`}>
                <p className="vd-acc-content">{ACCORDION_CONTENT[item.id]}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="vd-footer-notes">
        <p>For more info on this vehicle call our showroom on 07399452319</p>
        <p>Every effort has been made to ensure the accuracy of the above information but errors may occur. Please check with a salesperson.</p>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------
// DARK SPEC CARD  (replaces PriceCard + DealerCard + OutOfHoursPanel)
// ----------------------------------------------------------------
function DarkSpecCard() {
  return (
    <div className="dark-spec-card">

      {/* ── Title ── */}
      <div className="dark-card-title">Honda Civic</div>
      <div className="dark-card-subtitle">
        2015 (15) 1.6 iDTEC SE Plus Hatchback 5dr &mdash;
        Manual · Diesel · Blue
      </div>

      {/* ── Price row ── */}
      <div className="dark-price-row">
        <div className="dark-price-left">
          <div className="dark-finance-label">Finance from</div>
          <div className="dark-finance-amount">
            £110.20
            <span className="dark-finance-suffix">P/M. HP</span>
          </div>
        </div>
        <div className="dark-price-right">
          <span className="dark-main-price">£6,250</span>
        </div>
      </div>

      {/* ── Spec icons ── */}
      <div className="dark-specs-icons">
        <div className="dark-spec-icon-item">
          <div className="dark-spec-circle"><BsCalendar3 /></div>
          <span className="dark-spec-label">2015</span>
        </div>
        <div className="dark-spec-icon-item">
          <div className="dark-spec-circle"><BsSpeedometer2 /></div>
          <span className="dark-spec-label">82,000</span>
        </div>
        <div className="dark-spec-icon-item">
          <div className="dark-spec-circle"><RiPaintBrushLine /></div>
          <span className="dark-spec-label">Blue</span>
        </div>
        <div className="dark-spec-icon-item">
          <div className="dark-spec-circle"><TbEngine /></div>
          <span className="dark-spec-label">1.6 ltr</span>
        </div>
        <div className="dark-spec-icon-item">
          <div className="dark-spec-circle"><BsGear /></div>
          <span className="dark-spec-label">Manual</span>
        </div>
        <div className="dark-spec-icon-item">
          <div className="dark-spec-circle"><BsFuelPump /></div>
          <span className="dark-spec-label">Diesel</span>
        </div>
      </div>

      <div className="dark-divider" />

      {/* ── Action buttons ── */}
      <div className="dark-btns">

        {/* Reserve */}
        <button className="dark-btn-reserve">
          Reserve now for £99 <FiChevronRight size={16} />
        </button>

        {/* Make an enquiry + Part exchange side by side */}
        <div className="dark-btn-enquiry-row">
          <button className="dark-btn-outline">
            <FaEnvelope size={12} /> Make an enquiry
          </button>
          <button className="dark-btn-outline">
            <MdOutlineDirectionsCar size={14} /> Part exchange
          </button>
        </div>

        {/* View video — links to YouTube */}
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="dark-btn-video"
        >
          <BiPlayCircle size={17} />
          View video walkthrough
        </a>
      </div>

      {/* ── Contact strip ── */}
      <div className="dark-contact-row">
        <a href="tel:07399452319" className="dark-contact-item">
          <FaPhoneAlt size={12} /> 07399 452 319
        </a>
        <span className="dark-contact-divider">|</span>
        <a href="mailto:sales@affordablecarcentre.co.uk" className="dark-contact-item">
          <FaEnvelope size={12} /> sales@dealership.co.uk
        </a>
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
      <Navbar/>
      {/* ── Breadcrumb ── */}
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

      {/* ── Page body ── */}
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

    
          </div>

          {/* ======== RIGHT COLUMN ======== */}
          <div className="right-panel">
            <DarkSpecCard />
            <button className="rate-listing-btn">Rate this listing</button>
          </div>

        </div>

      </div>
              
          {/* ── NEW SECTIONS ADDED BELOW ── */}
            <DescriptionOverviewSection />
            <VehicleDescriptionSection />

      <NoorrixFooter/>
    </>
  );
}