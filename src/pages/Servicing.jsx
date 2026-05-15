import React from "react";
import Navbar from "../components/Navbar/Navbar";
import NoorrixFooter from "../components/Footer/Footer";
import { FaTools, FaCheckCircle, FaOilCan, FaCarBattery, FaTachometerAlt, FaCalculator, FaClipboardList } from "react-icons/fa";
import AboutSection from "../components/AboutSection/AboutSection";
import CTA from "../components/CTA/CTA";

function Servicing() {
  return (
    <>
      <Navbar />
      
      {/* ── Breadcrumb ── */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3 text-sm">
          <a href="/" className=" breadcrumb text-gray-500 hover:text-blue-600 transition-colors">Home</a>
          <span className="mx-2 text-gray-300">›</span>
          <a href="/services" className=" breadcrumb text-gray-500 hover:text-blue-600 transition-colors">Services</a>
          <span className="mx-2 text-gray-300">›</span>
          <span className="text-gray-900 font-medium">Servicing</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&q=80')",
          }}
        />
        <div className="relative z-20 max-w-6xl mx-auto px-4 py-24 md:py-36">
          <div className="flex items-center gap-3 mb-4 hero-logo">
            <FaTools size={32} className="text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold">Servicing</h1>
          </div>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            Professional vehicle servicing and maintenance to keep your car running smoothly and safely all year round.
          </p>
        </div>
      </section>

      {/* ─── About Section ─── */}
      <AboutSection
        image="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=900&q=80&fit=crop"
        tag="Servicing"
        title="Professional Car"
        titleHighlight="Servicing & Maintenance"
        description="At Noorrix Motors, we provide comprehensive vehicle servicing to keep your car performing at its best. From interim checks to major services, our qualified technicians use genuine parts and follow manufacturer specifications. Trust us to keep your vehicle safe, reliable, and running smoothly for years to come."
        badgeNumber="3,000+"
        badgeLabel="Services Done"
        stats={[
          { number: "3,000+", label: "Services Done" },
          { number: "100%", label: "Genuine Parts" },
          { number: "20+", label: "Years Exp" },
        ]}
        primaryBtnText="Book a Service"
        primaryBtnLink="/contact"
        secondaryBtnText="View Packages"
        secondaryBtnLink="#packages"
      />

      {/* ─── Services Grid ─── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Servicing Options
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-50 rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <FaOilCan size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Interim Service</h3>
              <p className="text-gray-600 leading-relaxed">
                An oil and filter change plus basic checks. Ideal for high-mileage drivers or between full services.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <FaTachometerAlt size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Full Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive inspection covering engine, brakes, suspension, fluids, and more. Keeps your warranty valid.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <FaCarBattery size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Major Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Everything in the full service plus cambelt replacement, coolant flush, and comprehensive system checks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits ─── */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Why Service With Us
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Qualified Technicians", desc: "Our team are fully trained and experienced with all makes and models." },
              { title: "Genuine Parts", desc: "We use quality parts that meet manufacturer specifications." },
              { title: "Competitive Pricing", desc: "Affordable service packages with no hidden costs." },
              { title: "Service History Stamped", desc: "Your service book will be stamped to maintain your vehicle's history." },
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
        title="Book Your Service Today"
        description="Keep your car in peak condition with our professional servicing. Call us to schedule an appointment at your convenience."
        primaryBtnText="Get Free Estimate"
        primaryBtnIcon={<FaCalculator size={18} />}
        secondaryBtnText="Book Inspection"
        secondaryBtnIcon={<FaClipboardList size={18} />}
      />

      <NoorrixFooter />
    </>
  );
}

export default Servicing;