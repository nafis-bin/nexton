import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandInfo from "./components/BrandInfo";
import CollectionSection from "./components/CollectionSection";

function App() {
  return (
    <div className="max-w-[1536px] mx-auto">
      <Navbar />
      <Hero />
      <BrandInfo />
      <CollectionSection />
    </div>
  );
}

export default App;
