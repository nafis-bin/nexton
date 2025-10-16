export default function FooterBanner() {
    return (
        <div className="max-w-[1296px] h-[437px] mx-auto bg-[#f5f5f5] rounded-3xl relative mt-30">
            {/* content */}
            <div className="mx-[120px] w-[552px] pt-[93.5px] h-max">
                <p className="text-[20px] leading-[28px] font-medium text-[#4b5563]">100% Original Products</p>
                <p className="text-[#111827] text-[36px] leading-[40px] font-semibold mt-[14px]">
                    The All New Fashion<br />
                    Collection Items
                </p>
                <p className="text-[20px] leading-[28px] font-medium text-[#4b5563] mt-[24px]">
                    Starting from: $59.99
                </p>
                <button className="w-[144px] h-[52px] rounded-[9999px] bg-black text-white mt-[24px]">
                    Shop now
                </button>
            </div>
            <img src="/footer-banner.png" alt="footer banner" className="absolute z-30 top-0 right-0" />
        </div>
    )
}