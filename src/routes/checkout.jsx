import ShippingDetails from "../components/ShippingDetails"
import OrderSummary from "../components/OrderSummary"
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/checkout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className="max-w-[1296px] mx-auto mt-[40px]
    max-sm:w-[312px] max-sm:gap-[80px]">

        <div className="hidden flex-col gap-3 sm:flex">
            <h1 className="text-[36px] leading-[40px] text-[#111827] font-semibold">
                Checkout
            </h1>
            <div className="flex gap-[12px] text-[16px] leading-[24px] font-medium text-[#4b5563]">
                <Link to="/">
                    <p>Homepage</p>
                </Link>
                <p>/</p>
                <Link to="/checkout">
                    <p>Checkout</p>
                </Link>
            </div>
        </div>
        
        <div className="hidden gap-[40px] sm:flex">
          {/* shipping details */}
          <ShippingDetails />
          {/* order summary */}
          <OrderSummary />
        </div>

        <div className="hidden max-sm:block">
          <OrderSummary />
        </div>


    </section>
  ) 
}
