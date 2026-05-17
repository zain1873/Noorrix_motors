import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatsAppButton from "./components/WhatsApp/WhatsAppButton";
import Home from "./pages/Home";
import CarsListing from "./pages/CarDetails/CarDetails";
import DentsPaints from "./pages/DentsPaintsPage";
//  import PartExchange from "./pages/PartExchange";
// import VehicleSourcing from "./pages/VehicleSourcing";
// import Delivery from "./pages/Delivery";
// import Servicing from "./pages/Servicing";
// import UsedVans from "./pages/UsedVans";
// import Finance from "./pages/Finance";
import About from "./pages/About";
// import OurStock from "./pages/OurStock";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<CarsListing />} />  
        <Route path="/dents-paints" element={<DentsPaints />} />  
        <Route path="/about" element={<About />} />  
        {/* <Route path="/part-exchange" element={<PartExchange />} />   */}
        {/* <Route path="/vehicle-sourcing" element={<VehicleSourcing />} />  
        <Route path="/delivery" element={<Delivery />} />  
        <Route path="/servicing" element={<Servicing />} />  
        <Route path="/vans" element={<UsedVans />} />  
        <Route path="/finance" element={<Finance />} />  
        <Route path="/stock" element={<OurStock />} />  */}
        <Route path="/contact" element={<Contact />} />  
      </Routes>
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
