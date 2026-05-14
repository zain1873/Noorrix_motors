import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatsAppButton from "./components/WhatsApp/WhatsAppButton";
import Home from "./pages/Home";
import CarsListing from "./pages/CarDetails/CarDetails";
import DentsPaints from "./pages/DentsPaints";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/cars" element={<CarsListing />} />  
      <Route path="" element= {<DentsPaints/>} />  
      </Routes>
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
