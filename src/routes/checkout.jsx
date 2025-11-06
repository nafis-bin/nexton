import ShippingDetails from "../components/ShippingDetails"
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/checkout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className="max-w-[1296px] mx-auto mt-[40px]">
        <div className="flex flex-col gap-3">
            <h1 className="text-[36px] leading-[40px] text-[#111827] font-semibold">
                Checkout
            </h1>
            <div className="flex gap-[12px] text-[16px] leading-[24px] font-medium text-[#4b5563]">
                <p>Homepage</p>
                <p>/</p>
                <p>Checkout</p>
            </div>
        </div>
        
        {/* shipping details */}
        <ShippingDetails />
    </section>
  ) 
}
