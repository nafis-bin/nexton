export default function Footer() {
    return (
        <footer className="max-w-[1536px] h-[96px] flex items-center justify-between px-[120px]">
            <p className="text-[16px] leading-[24px] text-[#4b5563]">Nexton eCommerce. © 2024</p>
            <div className="w-[236px] h-[32px]">
                <img className="w-full h-full"
                    src="/payment-icons.png" 
                    alt="payment icons" 
                />
            </div>
        </footer>
    )
}