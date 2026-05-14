import React from "react";
import Navbar from "../components/Navbar/Navbar";
import NoorrixFooter from "../components/Footer/Footer";
import { FaCarSide, FaCheckCircle, FaSearch, FaClipboardList, FaKey, FaCalculator } from "react-icons/fa";
import AboutSection from "../components/AboutSection/AboutSection";
import CTA from "../components/CTA/CTA";

function VehicleSourcing() {
  return (
    <>
      <Navbar />
      
      {/* ── Breadcrumb ── */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3 text-sm">
          <a href="/" className="breadcrumb text-gray-500 hover:text-blue-600 transition-colors">Home</a>
          <span className="mx-2 text-gray-300">›</span>
          <a href="/services" className="breadcrumb text-gray-500 hover:text-blue-600 transition-colors">Services</a>
          <span className="mx-2 text-gray-300">›</span>
          <span className="text-gray-900 font-medium">Vehicle Sourcing</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1600&q=80')",
          }}
        />
        <div className="relative z-20 max-w-6xl mx-auto px-4 py-24 md:py-36">
          <div className="flex items-center gap-3 mb-4">
            <FaCarSide size={32} className="text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold">Vehicle Sourcing</h1>
          </div>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            Can't find the perfect vehicle? Let us source it for you. We'll search the market to find exactly what you need.
          </p>
        </div>
      </section>

      {/* ─── About Section ─── */}
      <AboutSection
        image="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=900&q=80&fit=crop"
        tag="Vehicle Sourcing"
        title="Find Your Perfect Car"
        titleHighlight="We Source It For You"
        description="At Noorrix Motors, our vehicle sourcing service takes the stress out of finding your ideal car. We tap into our extensive network of auctions, dealerships, and private sellers to locate the exact make, model, and specification you're looking for. Sit back while we do the hard work."
        badgeNumber="800+"
        badgeLabel="Cars Sourced"
        stats={[
          { number: "800+", label: "Cars Sourced" },
          { number: "97%", label: "Match Rate" },
          { number: "12+", label: "Years Exp" },
        ]}
        primaryBtnText="Start Your Search"
        primaryBtnLink="/contact"
        secondaryBtnText="View Stock"
        secondaryBtnLink="/cars"
      />

      {/* ─── How It Works ─── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Sourcing Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-gray-50 rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <FaClipboardList size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">1. Tell Us Your Requirements</h3>
              <p className="text-gray-600 leading-relaxed">
                Share your budget, preferred make/model, colour, mileage, and any other specifications.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-50 rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <FaSearch size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">2. We Search the Market</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team scours auctions, dealerships, and private sales to find the best options for you.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-50 rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <FaKey size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">3. You Drive Away Happy</h3>
              <p className="text-gray-600 leading-relaxed">
                We present the best matches and handle the purchase so you get the car you want with zero hassle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits ─── */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Why Use Our Sourcing Service
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Access to Wider Market", desc: "We tap into networks and auctions you may not have access to." },
              { title: "Save Time & Effort", desc: "Let us do the searching while you focus on other things." },
              { title: "Expert Inspections", desc: "Every vehicle is thoroughly inspected before we recommend it." },
              { title: "Negotiation Included", desc: "We negotiate the best price on your behalf." },
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
        title="Looking for a Specific Vehicle?"
        description="Tell us what you need and we'll scour the market to find your perfect match at the best possible price."
        primaryBtnText="Get Free Estimate"
        primaryBtnIcon={<FaCalculator size={18} />}
        secondaryBtnText="Book Inspection"
        secondaryBtnIcon={<FaClipboardList size={18} />}
      />

      <NoorrixFooter />
    </>
  );
}

export default VehicleSourcing;