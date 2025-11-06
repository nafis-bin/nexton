import { CircleUserRound, Split, CreditCard } from "lucide-react";

export default function ShippingDetails() {
  return (
    <section className="flex flex-col gap-[40px] mt-[52px] max-w-[638px]">


      {/* contact info segment */}
      <div className="flex flex-col gap-[24px] pt-[24px] ring-1 ring-[#ebe7eb] rounded-[16px]">
        <div className="flex gap-3 items-center pl-[24px]">
          <CircleUserRound color={`#334155`} size={20} />
          <h4 className="text-[16px] leading-[24px] font-medium text-[#4b5563]">
            CONTACT INFO
          </h4>
        </div>

        <div className="h-[131.2px] pt-[24px] pl-[24px] border-t-1 border-[#e5e7eb]">
          {/* one row for input */}
          <div className="flex gap-[24px]">
            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] leading-[24px] font-semibold">
                Your phone number
              </h4>
              <input
                className="w-[283px] h-[43.2px] ring-1 ring-[#ebe7eb] rounded-[12px] pl-3"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] leading-[24px] font-semibold">
                Email Address
              </h4>
              <input
                className="w-[283px] h-[43.2px] ring-1 ring-[#ebe7eb] rounded-[12px] pl-3"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>


    {/* shipping address segment */}
      <div className="flex flex-col gap-[24px] pt-[24px] ring-1 ring-[#ebe7eb] rounded-[16px]">
        <div className="flex gap-3 items-center pl-[24px]">
          <Split color={`#334155`} size={20} />
          <h4 className="text-[16px] leading-[24px] font-medium text-[#4b5563]">
            SHIPPING ADDRESS
          </h4>
        </div>

        <div className="flex flex-col gap-[24px] h-[528px] pt-[24px] pl-[24px] border-t-1 border-[#e5e7eb]">

          {/* first row for input */}
          <div className="flex gap-[24px]">
            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] leading-[24px] font-semibold">
                First Name
              </h4>
              <input
                className="w-[283px] h-[43.2px] ring-1 ring-[#ebe7eb] rounded-[12px] pl-3"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] leading-[24px] font-semibold">
                Last Name
              </h4>
              <input
                className="w-[283px] h-[43.2px] ring-1 ring-[#ebe7eb] rounded-[12px] pl-3"
                type="text"
              />
            </div>
          </div>


          {/* second row */}
          <div className="flex gap-[24px]">
            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] leading-[24px] font-semibold">
                Address line 1
              </h4>
              <input
                className="w-[384px] h-[43.2px] ring-1 ring-[#ebe7eb] rounded-[12px] pl-3"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] leading-[24px] font-semibold">
                Apt, Suite
              </h4>
              <input
                className="w-[180px] h-[43.2px] ring-1 ring-[#ebe7eb] rounded-[12px] pl-3"
                type="text"
              />
            </div>
          </div>



          {/* third row */}
          <div className="flex gap-[24px]">
            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] leading-[24px] font-semibold">
                Address line 2
              </h4>
              <input
                className="w-[588px] h-[43.2px] ring-1 ring-[#ebe7eb] rounded-[12px] pl-3"
                type="text"
              />
            </div>
          </div>



          {/* fourth row */}
          <div className="flex gap-[24px]">
            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] leading-[24px] font-semibold">
                City
              </h4>
              <input
                className="w-[283px] h-[43.2px] ring-1 ring-[#ebe7eb] rounded-[12px] pl-3"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] leading-[24px] font-semibold">
                Country
              </h4>
              <input
                className="w-[283px] h-[43.2px] ring-1 ring-[#ebe7eb] rounded-[12px] pl-3"
                type="text"
              />
            </div>
          </div>


          {/* fifth row */}
          <div className="flex gap-[24px]">
            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] leading-[24px] font-semibold">
                State / province
              </h4>
              <input
                className="w-[283px] h-[43.2px] ring-1 ring-[#ebe7eb] rounded-[12px] pl-3"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] leading-[24px] font-semibold">
                Postal code
              </h4>
              <input
                className="w-[283px] h-[43.2px] ring-1 ring-[#ebe7eb] rounded-[12px] pl-3"
                type="text"
              />
            </div>
          </div>


        </div>
      </div>


    {/* payment segment */}
      <div className="flex flex-col gap-[24px] pt-[24px] ring-1 ring-[#ebe7eb] rounded-[16px]">
        <div className="flex gap-3 items-center pl-[24px]">
          <CreditCard color={`#334155`} size={20} />
          <h4 className="text-[16px] leading-[24px] font-medium text-[#4b5563]">
            PAYMENT
          </h4>
        </div>

        <div className="flex flex-col gap-[24px] h-[329.6px] pt-[24px] pl-[24px] border-t-1 border-[#e5e7eb]">

        
          {/* first row */}
          <div className="flex gap-[24px]">
            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] leading-[24px] font-semibold">
                Card number
              </h4>
              <input
                className="w-[588px] h-[43.2px] ring-1 ring-[#ebe7eb] rounded-[12px] pl-3"
                type="text"
              />
            </div>
          </div>

          {/* second row */}
          <div className="flex gap-[24px]">
            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] leading-[24px] font-semibold">
                Name on the card
              </h4>
              <input
                className="w-[588px] h-[43.2px] ring-1 ring-[#ebe7eb] rounded-[12px] pl-3"
                type="text"
              />
            </div>
          </div>


          {/* third row */}
          <div className="flex gap-[24px]">
            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] leading-[24px] font-semibold">
                Expiration date (MM/YY)
              </h4>
              <input
                className="w-[384px] h-[43.2px] ring-1 ring-[#ebe7eb] rounded-[12px] pl-3"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] leading-[24px] font-semibold">
                CVC
              </h4>
              <input
                className="w-[180px] h-[43.2px] ring-1 ring-[#ebe7eb] rounded-[12px] pl-3"
                type="text"
              />
            </div>
          </div>

        </div>
      </div>


    </section>
  );
}
