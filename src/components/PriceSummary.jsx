export default function PriceSummary() {
    return (
        <section className="flex flex-col gap-[24px] pt-[24px] w-[618px] h-max border-t-2 border-[#e5e7eb] 
        max-sm:border-0 max-sm:w-[312px]">
            <p className="hidden text-[20px] leading-[28px] font-semibold text-[#111827] max-sm:block">Confirm your order</p>
            <div className="flex justify-between text-[16px] leading-[24px] text-[#4b5563]
            max-sm:text-[14px] max-sm:leading-[20px]">
                <div className="flex flex-col gap-2 max-sm:gap-3">
                    <p>Subtotal</p>
                    <p>Shipping estimate</p>
                    <p>Tax estimate</p>
                </div>

                <div className="flex flex-col gap-2 max-sm:gap-3">
                    <p>$169.99</p>
                    <p>$5.00</p>
                    <p>$24.90</p>
                </div>

            </div>

            <div className="flex justify-between text-[16px] leading-[24px] font-semibold text-[#111827]
            max-sm:text-[14px] max-sm:leading-[20px]">
                <p>Order total</p>
                <p>$199.89</p>
            </div>
        </section>
    )
}