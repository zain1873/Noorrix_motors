import React from "react";
import Navbar from "../components/Navbar/Navbar";
import NoorrixFooter from "../components/Footer/Footer";

function OurStock() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Stock</h1>
        <p className="text-gray-600 text-lg">View our full inventory of vehicles available for purchase.</p>
      </div>
      <NoorrixFooter />
    </>
  );
}

export default OurStock;