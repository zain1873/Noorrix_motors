import React from "react";
import Navbar from "../components/Navbar/Navbar";
import NoorrixFooter from "../components/Footer/Footer";
import { FaExchangeAlt, FaCheckCircle, FaMoneyBillWave, FaHandshake, FaFileContract, FaCalculator, FaClipboardList } from "react-icons/fa";
import AboutSection from "../components/AboutSection/AboutSection";
import CTA from "../components/CTA/CTA";

function PartExchange() {
  return (
    <>
      <Navbar />
      
      {/* ── Breadcrumb ── */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3 text-sm">
          <a href="/" className="breadcrumb text-gray-500 hover:text-blue-600 transition-colors">Home</a>
          <span className="mx-2 text-gray-300">›</span>
          <a href="/services" className=" breadcrumb text-gray-500 hover:text-blue-600 transition-colors">Services</a>
          <span className="mx-2 text-gray-300">›</span>
          <span className="text-gray-900 font-medium">Part Exchange</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1600&q=80')",
          }}
        />
        <div className="relative z-20 max-w-6xl mx-auto px-4 py-24 md:py-36">
          <div className="flex items-center gap-3 mb-4">
            <FaExchangeAlt size={32} className="text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold">Part Exchange</h1>
          </div>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            Trade in your current vehicle for a newer model. We offer competitive valuations and a hassle-free part exchange process.
          </p>
        </div>
      </section>

      {/* ─── About Section ─── */}
      <AboutSection
        image="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=900&q=80&fit=crop"
        tag="Part Exchange"
        title="Upgrade Your Car"
        titleHighlight="Hassle-Free Part Exchange"
        description="At Noorrix Motors, we make upgrading to your next vehicle simple and stress-free. Our experienced team provides fair, transparent valuations for your current car and handles all the paperwork. Get a competitive part-exchange price and put it towards your dream vehicle today."
        badgeNumber="1,000+"
        badgeLabel="Part Exchanged"
        stats={[
          { number: "1,000+", label: "Cars Exchanged" },
          { number: "£500+", label: "Avg. Value" },
          { number: "15+", label: "Years Exp" },
        ]}
        primaryBtnText="Value My Car"
        primaryBtnLink="/contact"
        secondaryBtnText="Browse Cars"
        secondaryBtnLink="/cars"
      />

      {/* ─── How It Works ─── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            How Part Exchange Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-gray-50 rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <FaFileContract size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">1. Get a Valuation</h3>
              <p className="text-gray-600 leading-relaxed">
                Contact us with your vehicle's details for a free, no-obligation valuation.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-50 rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <FaHandshake size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">2. Agree on Price</h3>
              <p className="text-gray-600 leading-relaxed">
                We'll agree on a part-exchange value and deduct it from the price of your new vehicle.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-50 rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <FaMoneyBillWave size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">3. Drive Away</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete the paperwork and drive away in your new car. We handle all the admin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits ─── */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Benefits of Part Exchanging With Us
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Competitive Valuations", desc: "We offer fair market prices for your trade-in vehicle." },
              { title: "Hassle-Free Process", desc: "We handle all the paperwork so you don't have to." },
              { title: "Instant Deduction", desc: "Value deducted immediately from your new purchase price." },
              { title: "No Hidden Fees", desc: "Transparent pricing with no surprise charges." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
                <FaCheckCircle size={22} className="text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <CTA
        title="Ready to Upgrade?"
        description="Get your vehicle valued today and find your perfect next car. Our team is ready to help you make the switch hassle-free."
        primaryBtnText="Get Free Estimate"
        primaryBtnIcon={<FaCalculator size={18} />}
        secondaryBtnText="Book Inspection"
        secondaryBtnIcon={<FaClipboardList size={18} />}
      />

      <NoorrixFooter />
    </>
  );
}

export default PartExchange;