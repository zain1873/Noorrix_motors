import React from "react";
import Navbar from "../components/Navbar/Navbar";
import NoorrixFooter from "../components/Footer/Footer";
import { FaTruckMoving, FaCheckCircle, FaMapMarkerAlt, FaClock, FaShieldAlt, FaCalculator, FaClipboardList } from "react-icons/fa";
import AboutSection from "../components/AboutSection/AboutSection";
import CTA from "../components/CTA/CTA";

function Delivery() {
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
          <span className="text-gray-900 font-medium">Delivery</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=80')",
          }}
        />
        <div className="relative z-20 max-w-6xl mx-auto px-4 py-24 md:py-36">
          <div className="flex items-center gap-3 mb-4">
            <FaTruckMoving size={32} className="text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold">Delivery</h1>
          </div>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            We offer reliable and convenient vehicle delivery services. Get your new car brought directly to your doorstep.
          </p>
        </div>
      </section>

      {/* ─── About Section ─── */}
      <AboutSection
        image="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=80&fit=crop"
        tag="Delivery"
        title="Nationwide Vehicle"
        titleHighlight="Delivery Made Simple"
        description="At Noorrix Motors, we bring your new vehicle directly to you. Whether you're local or nationwide, our fully insured delivery service ensures your car arrives safely and on time. Convenient, flexible, and completely hassle-free – that's the Noorrix delivery promise."
        badgeNumber="2,500+"
        badgeLabel="Deliveries Made"
        stats={[
          { number: "2,500+", label: "Deliveries Made" },
          { number: "99%", label: "On Time" },
          { number: "UK Wide", label: "Coverage" },
        ]}
        primaryBtnText="Arrange Delivery"
        primaryBtnLink="/contact"
        secondaryBtnText="View Our Stock"
        secondaryBtnLink="/cars"
      />

      {/* ─── Services Grid ─── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Delivery Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-50 rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <FaMapMarkerAlt size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Local Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Fast and free local delivery within our service area. We bring the car to you for a test drive or final handover.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <FaTruckMoving size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Nationwide Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                We can arrange delivery anywhere in the country. Professional transport at competitive rates.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <FaShieldAlt size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Insured Transport</h3>
              <p className="text-gray-600 leading-relaxed">
                Fully insured transport for your peace of mind. Your vehicle is protected throughout the journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits ─── */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose Our Delivery Service
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Doorstep Delivery", desc: "We deliver your vehicle directly to your home or workplace." },
              { title: "Flexible Scheduling", desc: "Choose a delivery time that suits your schedule." },
              { title: "Fully Insured", desc: "Complete insurance coverage for every delivery." },
              { title: "Track Your Delivery", desc: "Stay updated with real-time delivery tracking." },
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
        title="Need Your Vehicle Delivered?"
        description="Contact us to arrange delivery of your new vehicle. We offer flexible scheduling and fully insured transport nationwide."
        primaryBtnText="Get Free Estimate"
        primaryBtnIcon={<FaCalculator size={18} />}
        secondaryBtnText="Book Inspection"
        secondaryBtnIcon={<FaClipboardList size={18} />}
      />

      <NoorrixFooter />
    </>
  );
}

export default Delivery;