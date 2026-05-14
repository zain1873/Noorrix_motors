import React from "react";
import Navbar from "../components/Navbar/Navbar";
import NoorrixFooter from "../components/Footer/Footer";

function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg max-w-2xl text-center">Learn more about Noorrix Motors and our commitment to providing quality vehicles and exceptional customer service.</p>
      </div>
      <NoorrixFooter />
    </>
  );
}

export default About;