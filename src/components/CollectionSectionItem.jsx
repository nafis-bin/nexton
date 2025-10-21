export default function CollectionSectionItem({ title, description }) {
  return (
    <div className="flex items-center justify-around min-w-[418.67px] h-full rounded-[16px] border-1 border-[#ebe7eb] snap-start
    max-sm:justify-between max-sm:min-w-[312px] max-sm:h-[124px] max-sm:px-6">
      <div className="flex flex-col">
        <div className="text-[24px] leading-[32px] font-semibold text-[#111827]
        max-sm:text-[20px] max-sm:leading-[28px]">
            {title}
        </div>
        <p className="text-[14px] leading-[20px] text-[#4b5563]
        max-sm:text-[12px] max-sm:leading-[16px]">
            {description}
        </p>
      </div>
      <button className="flex gap-2 items-center font-medium shadow-[inset_2px_0_0_0_#ebe7eb] w-[131px] h-[36px] pl-3 text-[14px] leading-[20px]
      max-sm:w-[102px] max-sm:h-[32px] max-sm:text-[12px] max-sm:leading-[16px] max-sm:pl-2">
        SHOP NOW{" "}
        <span>
          <img src="/right-arrow-icon.svg" alt="right-arrow-icon" className="size-4" />
        </span>
      </button>
    </div>
  );
}
