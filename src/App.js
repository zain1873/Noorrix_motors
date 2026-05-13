import Navbar from "./components/Navbar/Navbar";
import HeroBanner from "./components/Hero/Hero";
import FeatureCard from "./components/FeatureCards/FetureCard";
import WhyChooseUs from "./components/WhyChooseUs/WhyChoose";
import ServicesSlider from "./components/ServicesSlider/ServicesSlider";
import StockSubscribeBanner from "./components/StockSubscribe/StockSubscribe";
import NoorrixFooter from "./components/Footer/Footer";
import BrowseByBudget from "./components/Browsebybudget/Budget";
import WhatsAppButton from "./components/WhatsApp/WhatsAppButton";

function App() {
  return (
    <>
      <Navbar />
      <HeroBanner/>
      <FeatureCard/>
      <ServicesSlider/>
      <WhyChooseUs/>
      <BrowseByBudget/>
      <StockSubscribeBanner/>
      <NoorrixFooter/>


{/* ___Whatsap btn____ */}
      <WhatsAppButton/>
    </>
  );
}


export default App;