import OrderedWatch from "./OrderedWatch";
import PriceSummary from "./PriceSummary";
import ShippingDetails from "./ShippingDetails";

export default function OrderSummary() {
  return (
    <section className="flex flex-col gap-[24px] mt-[52px] w-[618px] max-sm:w-[312px] max-sm:mt-0">
      <h3 className="text-[24px] leading-[32px] font-semibold text-[#111827]
      max-sm:text-[20px] max-sm:leading-[28px]">
        Order summary
      </h3>

      {/* ordered watch */}
      <OrderedWatch name="Black Automatic Watch" count={1} size="small" />

      <OrderedWatch name="Golden Retriever Watch" count={3} size="medium" />

      <div className="hidden border-t-2 border-[#ebe7eb] max-sm:block" />

      <div className="hidden max-sm:block">
        <ShippingDetails />
      </div>

      <PriceSummary />

      <button
        className={`w-[618px] h-[52px] bg-[#111827] text-white font-medium text-[16px] leading-[24px] rounded-[9999px] shadow-2xl
            max-sm:w-[312px] max-sm:h-[40px] max-sm:text-[14px] max-sm:leading-[20px] drop-shadow-sm`}
      >
        Confirm Order
      </button>

    </section>
  );
}
