import FeatureItem from "./FeatureItem";

export default function BrandInfo() {
  return (
    <div className="flex items-center justify-center w-[1296px] h-[98.44px] mt-[52px] mx-[120px] inset-0 border-1 border-[#e5e7eb] rounded-[16px]">
      <FeatureItem 
        iconSrc={"/shipping-icon.png"}
        title={"Free Shipping"}
        subtitle={"On orders over $50.00"}
        isFirst={true}
      />
      <FeatureItem 
        iconSrc={"/return-icon.png"}
        title={"Very easy to return"}
        subtitle={"Just phone number"}
        isFirst={false}
      />
      <FeatureItem 
        iconSrc={"/world-icon.png"}
        title={"Worldwide delivery"}
        subtitle={"Fast delivery worldwide"}
        isFirst={false}
      />
      <FeatureItem 
        iconSrc={"/refund-icon.png"}
        title={"Refund policy"}
        subtitle={"60 days return for any reason"}
        isFirst={false}
      />
      
    </div>
  );
}
