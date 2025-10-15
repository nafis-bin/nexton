const FeatureItem = ({ iconSrc, title, subtitle, isFirst }) => {
  return (
    <div 
      className={`w-[303.25px] h-[50px] flex items-center gap-4 py-4 ${
        // Conditional class for the border
        !isFirst ? 'border-l border-gray-200 pl-8' : '' // Added padding left for spacing
      } ${
        // Adjust alignment for the first item to be "justify-start" 
        // within the BrandInfo's flex container, otherwise center it
        isFirst ? 'justify-start' : 'justify-start'
      }`}
    >
      <img src={iconSrc} alt={`${title} icon`} className="size-6" />
      <div className="flex flex-col gap-[2px]">
        <p className="text-[18px] leading-[28px] font-semibold text-[#111827]">
          {title}
        </p>
        <p className="text-[14px] leading-[20px] text-[#4b5563]">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default FeatureItem;