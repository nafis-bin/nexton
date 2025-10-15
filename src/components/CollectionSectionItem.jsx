export default function CollectionSectionItem({ title, description }) {
  return (
    <div className="flex items-center justify-around min-w-[418.67px] h-full rounded-[16px] border-1 border-[#ebe7eb] snap-start">
      <div className="flex flex-col">
        <div className="text-[24px] leading-[32px] font-semibold text-[#111827]">
            {title}
        </div>
        <p className="text-[14px] leading-[20px] text-[#4b5563]">
            {description}
        </p>
      </div>
      <button className="flex gap-2 items-center font-medium inset-0 border-l-2 border-[#ebe7eb] w-[131px] h-[36px] pl-3">
        SHOP NOW{" "}
        <span>
          <img src="/right-arrow-icon.png" alt="right-arrow-icon" />
        </span>
      </button>
    </div>
  );
}
