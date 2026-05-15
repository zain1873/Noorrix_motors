import React from "react";
import Navbar from "../components/Navbar/Navbar";
import NoorrixFooter from "../components/Footer/Footer";
import { FaSprayCan } from "react-icons/fa";
import DentsAndPaints from "../components/DentsPaintsServices/DentsPaintsServices";
import AboutSection from "../components/AboutSection/AboutSection";
import TrustStrip from "../components/TrustStrip/TrustStrip";
import RepairProcess from "../components/RepairProcess/RepairProcess";
import TrustSection from "../components/TrustSection/TrustSection";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import EstimateForm from "../components/EstimateForm/EstimateForm";
import LocationContact from "../components/LocationContact/LocationContact";
import FinalCTA from "../components/FinalCTA/FinalCTA";
import BeforeAfter from "../components/BeforeAfter/BeforeAfter";

function DentsPaints() {
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
          <span className="text-gray-900 font-medium">Dents & Paints</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80')",
          }}
        />
        <div className="relative z-20 max-w-6xl mx-auto px-4 py-24 md:py-36">
          <div className="flex items-center gap-3 mb-4 hero-logo">
            <FaSprayCan size={32} className="text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold">Dents & Paints</h1>
          </div>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            Restore your car’s original finish with expert dent removal, scratch repair, and precision paintwork.
          </p>
        </div>
      </section>


      {/* ─── About Section ─── */}
      <AboutSection
        image="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80"
        tag="Dents & Paints"
        title="Expert Dent Repair &"
        titleHighlight="Precision Paintwork"
        description="At Noorrix Motors, we take pride in restoring your vehicle to its former glory. Our skilled technicians use state-of-the-art equipment and premium materials to deliver flawless dent removal, scratch repair, and colour-matched paintwork. Every vehicle that leaves our workshop has been meticulously crafted to showroom standards."
        badgeNumber="500+"
        badgeLabel="Cars Restored"
        stats={[
          { number: "500+", label: "Cars Restored" },
          { number: "98%", label: "Satisfaction" },
          { number: "12+", label: "Years Exp" },
        ]}
        primaryBtnText="Get Free Quote"
        primaryBtnLink="/contact"
        secondaryBtnText="View Our Work"
        secondaryBtnLink="#services"
      />

      {/* ─── What We Do (Service Grid) ─── */}
      <WhatWeDo />

      <BeforeAfter/>

      {/* <DentsAndPaints/> */}

      {/* ─── Why Car Owners Trust Us (Feature Grid) ─── */}
      <TrustSection />

      {/* ─── Trust Strip (Quick Trust) ─── */}
      <TrustStrip />

      <RepairProcess/>

      {/* ─── Estimate Form ─── */}
      <EstimateForm />

      {/* ─── Location & Contact ─── */}
      <LocationContact />

      {/* ─── Final CTA Banner ─── */}
      <FinalCTA />

      <NoorrixFooter />
    </>
  );
}

export default DentsPaints;