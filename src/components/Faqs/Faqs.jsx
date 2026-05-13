import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { IoChatboxSharp } from "react-icons/io5";
import "./Faqs.css";
import carLogo from "../../assets/images/car-logo-svg.png";

const faqs = [
  {
    id: 1,
    question: "The expense windows adapted sir. Wrong widen drawn.",
    answer:
      "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.",
  },
  {
    id: 2,
    question: "Six curiosity day assurance bed necessary?",
    answer:
      "Attention he extremity unwilling on otherwise. Conviction up partiality as delightful is discovered.",
  },
  {
    id: 3,
    question: "Produce say the ten moments parties?",
    answer:
      "New plenty had defer you limited county settling principle. Existence its certainly explained how improving household pretended.",
  },
  {
    id: 4,
    question: "Simple innate summer fat appear basket his desire joy?",
    answer:
      "An especially invitation decisively possession reasonably terminated on. Calling not screened kindness one rapturous departure.",
  },
  {
    id: 5,
    question: "Outward clothes promise at gravity do excited?",
    answer:
      "Now pleasure provided judgment doubtful preserved bringing. Overcame in advantage suffering otherwise explained vicinity furniture.",
  },
  {
    id: 6,
    question: "Outward clothes promise at gravity do excited?",
    answer:
      "Now pleasure provided judgment doubtful preserved bringing. Overcame in advantage suffering otherwise explained vicinity furniture.",
  },

  {
    id: 7,
    question: "Outward clothes promise at gravity do excited?",
    answer:
      "Now pleasure provided judgment doubtful preserved bringing. Overcame in advantage suffering otherwise explained vicinity furniture.",
  },

  {
    id: 8,
    question: "Outward clothes promise at gravity do excited?",
    answer:
      "Now pleasure provided judgment doubtful preserved bringing. Overcame in advantage suffering otherwise explained vicinity furniture.",
  },
];

// Teal spiral blob SVG
const TealBlob = () => (
  <svg
    className="blob-teal"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M40 10 C55 10, 70 22, 68 38 C66 54, 52 66, 38 64 C24 62, 12 50, 14 36 C16 22, 25 10, 40 10Z"
      fill="none"
      stroke="#2fd4c0"
      strokeWidth="5"
    />
    <path
      d="M40 18 C50 18, 60 27, 58 38 C56 50, 46 58, 37 56 C28 54, 20 46, 22 37 C24 26, 30 18, 40 18Z"
      fill="none"
      stroke="#2fd4c0"
      strokeWidth="4"
    />
    <path
      d="M40 26 C46 26, 52 33, 50 40 C48 47, 41 51, 36 49 C31 47, 27 41, 29 36 C31 30, 34 26, 40 26Z"
      fill="none"
      stroke="#2fd4c0"
      strokeWidth="3"
    />
  </svg>
);


export default function FAQ() {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="faq-section wrapper">
      <TealBlob />

      <div className="faq-container">
        <h1 className="faq-title sec-title">
          Fequently
          <br />
          asked questions
        </h1>

        <div className="faq-grid">
          {/* Accordion */}
          <div className="accordion-list">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div className="accordion-item" key={faq.id}>
                  <button
                    className="accordion-header"
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="accordion-question">{faq.question}</span>
                    <FiPlus
                      className={`accordion-icon${isOpen ? " open" : ""}`}
                    />
                  </button>
                  <div className={`accordion-body${isOpen ? " open" : ""}`}>
                    <p className="accordion-answer">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact card */}
          <div
            className="contact-card"
            style={{
              position: "sticky",
              top: "100px",
              alignSelf: "flex-start",
            }}
          >
            <div className="chat-icon-wrapper">
              <img src={carLogo} alt="" />
            </div>

            <h3 className="contact-title">Are You Looking For a Car?</h3>

            <p className="contact-desc">
           Finding the perfect car has never been easier! 
          Whether you’re looking for a stylish ride for city commutes,
          a reliable family vehicle, or something sporty to fuel your adventures,
          we’ve got you covered.
          Our wide selection of cars is designed to meet every lifestyle
          and budget, all backed by our commitment to exceptional service. 
          Take the next step toward driving your dream car today —
          browse our stock and discover unbeatable deals waiting just for you!
            </p>

            <button className="contact-btn">Check Our Stock</button>
          </div>
        </div>
      </div>
    </div>
  );
}
