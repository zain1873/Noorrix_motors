import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FaCalendarAlt,
  FaTachometerAlt,
  FaCog,
  FaLeaf,
  FaGasPump,
  FaCamera,
  FaClone,
  FaCheckCircle,
} from "react-icons/fa";
import "./FeatureCard.css";

const carData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    title: "Land Rover Discovery Sport",
    subtitle: "2.0 SKYACTIV-G Sport Nav Euro 6 (s/s) 5dr",
    year: "2017",
    cc: "1,998 CC",
    transmission: "Manual",
    miles: "56,600 Miles",
    mot: "07/04/2027",
    fuel: "Petrol",
    monthly: "£196.95",
    total: "£9,795",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    title: "BMW 3 Series",
    subtitle: "2.0 320d M Sport Saloon Auto Euro 6 4dr",
    year: "2019",
    cc: "1,995 CC",
    transmission: "Automatic",
    miles: "42,300 Miles",
    mot: "01/06/2026",
    fuel: "Diesel",
    monthly: "£245.00",
    total: "£14,495",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80",
    title: "Audi A4 Avant",
    subtitle: "2.0 TDI S Line Estate S Tronic Euro 6 5dr",
    year: "2020",
    cc: "1,968 CC",
    transmission: "Automatic",
    miles: "31,100 Miles",
    mot: "15/09/2027",
    fuel: "Diesel",
    monthly: "£289.00",
    total: "£17,950",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80",
    title: "Mercedes-Benz C-Class",
    subtitle: "1.5 C200 AMG Line Edition Auto Euro 6 4dr",
    year: "2021",
    cc: "1,496 CC",
    transmission: "Automatic",
    miles: "22,800 Miles",
    mot: "20/03/2028",
    fuel: "Petrol",
    monthly: "£319.00",
    total: "£21,495",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    title: "Volkswagen Golf GTI",
    subtitle: "2.0 TSI 245 GTI DSG Euro 6 5dr Hatchback",
    year: "2022",
    cc: "1,984 CC",
    transmission: "Automatic",
    miles: "18,500 Miles",
    mot: "11/08/2028",
    fuel: "Petrol",
    monthly: "£275.00",
    total: "£18,750",
  },
];


const FeatureCard = () => {
  const [imgHovered, setImgHovered] = useState(null);

  return (
    <div className="card-wrapper sp">
      {/* Section Heading */}
      <div className="section-heading">
        <h2 className="sec-title">Dealer's Top Picks</h2>
        <p>Only the best rides make our featured car list.</p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={16}
        grabCursor={true}
        breakpoints={{
          0:    { slidesPerView: 1 },
          480:  { slidesPerView: 2 },
          768:  { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {carData.map((car) => (
          <SwiperSlide key={car.id}>
            <div className="mazda-card">
              {/* Image Section */}
              <div
                className="card-image-container"
                onMouseEnter={() => setImgHovered(car.id)}
                onMouseLeave={() => setImgHovered(null)}
              >
                <img
                  src={car.img}
                  alt={car.title}
                  className={`card-image ${imgHovered === car.id ? "card-image-zoom" : ""}`}
                />
              </div>

              {/* Content Section */}
              <div className="card-content">
                {/* Title */}
                <h2 className="car-title">{car.title}</h2>
                <p className="car-subtitle">{car.subtitle}</p>

                {/* Specs Grid */}
                <div className="specs-grid">
                  <div className="spec-item">
                    <FaCalendarAlt className="spec-icon" />
                    <span className="spec-value">{car.year}</span>
                  </div>
                  <div className="spec-item">
                    <FaTachometerAlt className="spec-icon" />
                    <span className="spec-value">{car.cc}</span>
                  </div>
                  <div className="spec-item">
                    <FaCog className="spec-icon" />
                    <span className="spec-value">{car.transmission}</span>
                  </div>
                  <div className="spec-item">
                    <FaClone className="spec-icon" />
                    <span className="spec-value">{car.miles}</span>
                  </div>
                  <div className="spec-item">
                    <FaLeaf className="spec-icon" />
                    <span className="spec-value">{car.mot}</span>
                  </div>
                  <div className="spec-item">
                    <FaGasPump className="spec-icon" />
                    <span className="spec-value">{car.fuel}</span>
                  </div>
                </div>

                {/* Price Section */}
                <div className="price-section">
                  <div className="monthly-price">
                    <span className="price-amount">{car.monthly}</span>
                    <span className="price-label">Per month</span>
                  </div>
                  <div className="total-price">
                    <span className="total-amount">{car.total}</span>
                    <span className="total-label">Total Price</span>
                  </div>
                </div>

                {/* Rating Badges */}
                {/* <div className="rating-badges">
                  <div className="badge autotrader-badge">
                    <span className="badge-source autotrader-source">≡AutoTrader</span>
                    <span className="badge-label great">Great Price</span>
                  </div>
                  <div className="badge gurus-badge">
                    <span className="badge-source gurus-source">CarGurus·</span>
                    <span className="badge-label good">Good Price</span>
                  </div>
                </div> */}

                {/* Action Buttons */}
                <div className="action-buttons">
                  <button className="btn btn-finance">Apply For Finance</button>
                  <button className="btn btn-reserve">
                    <span className="reserve-title">Reserve For £200</span>
                    <span className="reserve-sub">Deposit fully refundable</span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeatureCard;