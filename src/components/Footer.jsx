export default function Footer() {
    return (
        <footer className="max-w-[1536px] h-[96px] flex items-center justify-between px-[120px]
        max-sm:w-full max-sm:flex-col max-sm:justify-center max-sm:gap-3">
            <p className="text-[16px] leading-[24px] text-[#4b5563] max-sm:text-[14px] max-sm:leading-[20px]">Nexton eCommerce. © 2024</p>
            <div className="w-[236px] h-[32px] max-sm:w-[172px] max-sm:h-[23px]">
                <img className="w-full h-full"
                    src="/payment-icons.svg" 
                    alt="payment icons" 
                />
            </div>
        </footer>
    )
}