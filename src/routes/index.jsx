import { createFileRoute } from "@tanstack/react-router";
import Hero from "../components/Hero"
import BrandInfo from "../components/BrandInfo"
import CollectionSection from "../components/CollectionSection"
import BestSellingProducts from "../components/BestSellingProducts"
import RecommendedProducts from "../components/RecommendedProducts"
import FooterBanner from "../components/FooterBanner"


export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <BrandInfo />
      <CollectionSection />
      <RecommendedProducts />
      <BestSellingProducts />
      <FooterBanner />
    </>
  );
}
