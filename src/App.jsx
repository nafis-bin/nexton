import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandInfo from "./components/BrandInfo";
import CollectionSection from "./components/CollectionSection";
import RecommendedProducts from "./components/RecommendedProducts";
import BestSellingProducts from "./components/BestSellingProducts";
import FooterBanner from "./components/FooterBanner"
import Aside from "./components/Aside";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="max-w-[1536px] mx-auto">
      <Navbar />
      <Hero />
      <BrandInfo />
      <CollectionSection />
      <RecommendedProducts />
      <BestSellingProducts />
      <FooterBanner />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
