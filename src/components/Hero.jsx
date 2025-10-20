export default function Hero() {
    return (
        <div className="w-full h-[600px] relative flex items-center px-[120px] bg-[#f8f8f8]
                        max-sm:h-[550px] max-sm:items-start max-sm:px-[24px] max-sm:pt-[163px]">
            <img 
                src="/hero-bg.png" 
                alt="hero-image" 
                className="hidden w-full h-full z-10 absolute left-0 right-0 top-0 bottom-0 sm:block"
            />
            <div className="flex flex-col gap-[24px] max-sm:gap-2">
                <p className="text-[#4b5563] font-medium text-xl z-20
                                max-sm:text-[14px] max-sm:leading-[20px]">
                    Starting from: $49.99
                </p>
                <p className="text-[64px] leading-[72px] font-semibold text-[#111827] z-20
                            max-sm:text-[30px] max-sm:leading-[38px]"
                >
                    Exclusive Collection <br />for everyone</p>
                <button className="flex items-center justify-center cursor-pointer text-[16px] leading-[24px] font-medium gap-[10px] w-[198px] h-[64px] bg-[#111827] text-white rounded-[9999px] z-20
                                    max-sm:w-[156px] max-sm:h-[44px] max-sm:mt-[32px] max-sm:text-[14px] max-sm:leading-[20px]">
                    <p>Explore now</p>
                    <img src="/search-icon.svg" alt="search-icon" className="text-[#f8fafc] size-5 max-sm:size-4" />
                </button>
            </div>
        </div>
    )
}