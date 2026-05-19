import React, { useState } from "react";
import { FiTrendingUp } from "react-icons/fi";
import "./popularSearched.css";

import volkswagenLogo from "../../assets/images/car-logos/volkswagen-01.png";
import audiLogo from "../../assets/images/car-logos/audi-01.png";
import bmwLogo from "../../assets/images/car-logos/BMW-01.png";
import toyotaLogo from "../../assets/images/car-logos/toyota-01.png";
import nissanLogo from "../../assets/images/car-logos/nissan-01.png";
import landRoverLogo from "../../assets/images/car-logos/land rover-01.png";
import kiaLogo from "../../assets/images/car-logos/Kia-01.png";
import citroenLogo from "../../assets/images/car-logos/Citroen-01.png";
import fiatLogo from "../../assets/images/car-logos/fiat-01.png";
import hondaLogo from "../../assets/images/car-logos/honda-01.png";
import jeepLogo from "../../assets/images/car-logos/jeep-01.png";
import mazdaLogo from "../../assets/images/car-logos/mazda-01.png";
import mgLogo from "../../assets/images/car-logos/MG-01.png";
import miniLogo from "../../assets/images/car-logos/MINI-01.png";
import renaultLogo from "../../assets/images/car-logos/Renault-01.png";
import seatLogo from "../../assets/images/car-logos/SEAT-01.png";
import vauxhallLogo from "../../assets/images/car-logos/vauxhall-01.png";

const tabs = ["Make", "Body Type", "Fuel", "Gearbox", "Trending"];

const makeItems = [
  { label: "Volkswagen", logo: volkswagenLogo },
  { label: "Audi", logo: audiLogo },
  { label: "BMW", logo: bmwLogo },
  { label: "Toyota", logo: toyotaLogo },
  { label: "Nissan", logo: nissanLogo },
  { label: "Land Rover", logo: landRoverLogo },
  { label: "Kia", logo: kiaLogo },
  { label: "Citroen", logo: citroenLogo },
  { label: "Fiat", logo: fiatLogo },
  { label: "Honda", logo: hondaLogo },
  { label: "Jeep", logo: jeepLogo },
  { label: "Mazda", logo: mazdaLogo },
  { label: "MG", logo: mgLogo },
  { label: "MINI", logo: miniLogo },
  { label: "Renault", logo: renaultLogo },
  { label: "SEAT", logo: seatLogo },
  { label: "Vauxhall", logo: vauxhallLogo },
];

const bodyTypeItems = [
  { label: "Hatchback", img: "https://images.unsplash.com/photo-1541443131876-44b03de101c5?w=120&h=60&fit=crop&auto=format" },
  { label: "Estate", img: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=120&h=60&fit=crop&auto=format" },
  { label: "SUV", img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=120&h=60&fit=crop&auto=format" },
  { label: "Saloon", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=120&h=60&fit=crop&auto=format" },
  { label: "Coupe", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=120&h=60&fit=crop&auto=format" },
  { label: "People Carrier", img: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?w=120&h=60&fit=crop&auto=format" },
  { label: "Convertible", img: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=120&h=60&fit=crop&auto=format" },
  { label: "Pick-Up", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=60&fit=crop&auto=format" },
];

const fuelItems = [
  { label: "Petrol", icon: "⛽" },
  { label: "Diesel", icon: "🛢️" },
  { label: "Electric", icon: "⚡" },
  { label: "Hybrid", icon: "🔋" },
  { label: "Plug-in Hybrid", icon: "🔌" },
  { label: "Mild Hybrid", icon: "🌿" },
];

const gearboxItems = [
  { label: "Automatic", icon: "🔄" },
  { label: "Manual", icon: "⚙️" },
  { label: "Semi-Auto", icon: "🔧" },
];

const trendingItems = [
  { label: "Tesla Model 3", img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=120&h=60&fit=crop&auto=format" },
  { label: "Ford Puma", img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=120&h=60&fit=crop&auto=format" },
  { label: "Nissan Qashqai", img: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=120&h=60&fit=crop&auto=format" },
  { label: "VW Golf", img: "https://images.unsplash.com/photo-1541443131876-44b03de101c5?w=120&h=60&fit=crop&auto=format" },
  { label: "BMW 3 Series", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=120&h=60&fit=crop&auto=format" },
  { label: "Audi A3", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=120&h=60&fit=crop&auto=format" },
];

const MakeCard = ({ item }) => (
  <button className="search-card make-card" aria-label={item.label}>
    <img
      src={item.logo}
      alt={item.label}
      className="make-logo"
      onError={(e) => { e.target.style.display = "none"; }}
    />
  </button>
);

const BodyTypeCard = ({ item }) => (
  <button className="search-card body-card" aria-label={item.label}>
    <img
      src={item.img}
      alt={item.label}
      className="body-img"
      onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=120&h=60&fit=crop"; }}
    />
    <span className="body-label">{item.label}</span>
  </button>
);

const FuelCard = ({ item }) => (
  <button className="search-card fuel-card" aria-label={item.label}>
    <span className="fuel-icon">{item.icon}</span>
    <span className="fuel-label">{item.label}</span>
  </button>
);

const GearboxCard = ({ item }) => (
  <button className="search-card gearbox-card" aria-label={item.label}>
    <span className="fuel-icon">{item.icon}</span>
    <span className="fuel-label">{item.label}</span>
  </button>
);

const TrendingCard = ({ item }) => (
  <button className="search-card body-card" aria-label={item.label}>
    <img
      src={item.img}
      alt={item.label}
      className="body-img"
      onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=120&h=60&fit=crop"; }}
    />
    <span className="body-label">{item.label}</span>
  </button>
);

export default function PopularSearches() {
  const [activeTab, setActiveTab] = useState("Make");

  const renderCards = () => {
    switch (activeTab) {
      case "Make":
        return makeItems.map((item) => <MakeCard key={item.label} item={item} />);
      case "Body Type":
        return bodyTypeItems.map((item) => <BodyTypeCard key={item.label} item={item} />);
      case "Fuel":
        return fuelItems.map((item) => <FuelCard key={item.label} item={item} />);
      case "Gearbox":
        return gearboxItems.map((item) => <GearboxCard key={item.label} item={item} />);
      case "Trending":
        return trendingItems.map((item) => <TrendingCard key={item.label} item={item} />);
      default:
        return null;
    }
  };

  return (
    <section className="popular-searches-section wrapper">
      <h2 className="section-title sec-title">Popular searches</h2>

      {/* Tab Nav */}
      <div className="tabs-wrapper">
        <div className="tabs-list" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              className={`tab-btn${activeTab === tab ? " tab-btn--active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              {tab === "Trending" && (
                <FiTrendingUp className="trending-icon" aria-hidden="true" />
              )}
            </button>
          ))}
        </div>
        <div className="tabs-underline" />
      </div>

      {/* Cards Row */}
      <div className="cards-container">
        <div className="cards-scroll">
          {renderCards()}
        </div>

      </div>
    </section>
  );
}