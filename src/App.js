import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HeroBanner from "./components/Hero/Hero";
import FeatureCard from "./components/FeatureCards/FetureCard";

function App() {
  return (
    <>
      <Navbar />
      <HeroBanner/>
      <FeatureCard/>
      <Footer />
    </>
  );
}

export default App;