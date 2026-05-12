import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "./Footer.css";

const NoorrixFooter = () => {
  const legalLinks = [
    "Terms & conditions",
    "Manage cookies & privacy",
    "Fraud disclaimer",
    "ESG Policy",
    "Privacy policy",
    "Fake Reviews Policy",
    "Modern slavery statement",
    "Accessibility notice",
    "Sitemap",
  ];

  return (
    <footer className="footer-root">
      {/* Top Section */}
      <div className="footer-top">
        {/* Help Centre */}
        <div className="footer-help">
          <h3>Help Centre</h3>
          <p>Monday to Friday 9.00 - 18.00</p>
          <p>Saturday 9.00 - 17.30</p>
          <p>Sundays and Bank Holidays CLOSED</p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="X (Twitter)">
              <FaXTwitter />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="#" aria-label="TikTok">
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Nav Links Column 1 */}
        <nav className="footer-nav">
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Authors and experts</a>
            </li>
            <li>
              <a href="#">Noorrix newsroom</a>
            </li>
            <li>
              <a href="#">Official Noorrix Merchandise</a>
            </li>
          </ul>
        </nav>

        {/* Nav Links Column 2 */}
        <nav className="footer-nav">
          <ul>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Dealer &amp; brand partners</a>
            </li>
          </ul>
        </nav>

        {/* Trustpilot */}
        <div className="footer-trust">
          <p className="footer-trust-text">
            Rated <strong>4.4/5</strong> from <strong>80,718</strong> reviews
          </p>
          <div className="trustpilot-logo">
            <span>★ Trustpilot</span>
          </div>
          {/* <div className="trustpilot-stars">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="star-full">
                <FaStar size={14} />
              </div>
            ))}
            <div className="star-half">
              <FaStarHalfAlt size={14} />
            </div>
          </div> */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-copyright">
          © 2026 Noorrix Ltd. All rights reserved
        </div>
        <div className="footer-legal-links">
          {legalLinks.map((link) => (
            <a key={link} href="#">
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* Countries */}
      <div className="footer-countries">
        <a className="country-link" href="#">
          <span className="flag">🇬🇧</span> UK
        </a>
        <a className="country-link" href="#">
          <span className="flag">🇩🇪</span> Germany
        </a>
        <a className="country-link" href="#">
          <span className="flag">🇪🇸</span> Spain
        </a>
      </div>

      {/* Disclaimer */}
        <div className="footer-disclaimer">
        <p className="asterisk-note">
          Average savings are based on daily comparisons between dealer prices and manufacturer RRP. Where applicable, EV grant amounts are included in displayed savings and applied at the point of sale.
          Noorrix Motors is a trading name of Noorrix Motors Ltd, authorised and regulated by the Financial Conduct Authority for credit broking and insurance distribution activities (FRN: 767155).
          Noorrix Motors Leasey Limited is an appointed representative of ITC Compliance Limited (FRN: 313486). Both act as credit brokers, not lenders.
          We may receive fees or commissions from partners and dealers for introducing customers.
          All finance offers are subject to application, status, and terms.
        </p>

        <p>
          <a href="#">Marketing claims explained</a>
        </p>

        <p>
          For more information, visit{" "}
          <a href="https://www.financial-ombudsman.org.uk">
            Financial Ombudsman Service
          </a>.
        </p>
        </div>
    </footer>
  );
};

export default NoorrixFooter;
