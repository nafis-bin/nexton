export default function Hero() {
    return (
        <div className="w-full h-[600px] relative flex items-center px-[120px]">
            <img 
                src="/hero-bg.png" 
                alt="hero-image" 
                className="w-full h-full -z-10 absolute left-0 right-0 top-0 bottom-0"
            />
            <div className="flex flex-col gap-[24px]">
                <p className="text-[#4b5563] font-medium text-xl">Starting from: $49.99</p>
                <p className="text-[64px] leading-[72px] font-semibold text-[#111827]">Exclusive Collection <br />for everyone</p>
                <button className="flex items-center justify-center cursor-pointer gap-[10px] w-[198px] h-[64px] bg-[#111827] text-white rounded-[9999px]">
                    <p>Explore now</p>
                    <img src="/button-search.png" alt="search-icon" className="text-[#f8fafc] size-5" />
                </button>
            </div>
        </div>
    )
}