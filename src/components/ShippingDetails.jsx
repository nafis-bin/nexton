import { CircleUserRound, Split, CreditCard } from "lucide-react";

export default function ShippingDetails() {
  return (
    <section className="flex flex-col gap-[40px] mt-[52px] w-[638px] 
    max-sm:w-[312px] max-sm:gap-[24px] max-sm:mt-[80px]">

      <h2 className="text-[20px] leading-[28px] font-semibold">Shipping Details</h2>

      {/* contact info segment */}
      <div className="flex flex-col gap-[24px] pt-[24px] ring-1 ring-[#ebe7eb] rounded-[16px]">
        <div className="flex gap-3 items-center pl-[24px]">
          <CircleUserRound color={`#334155`} size={20} />
          <h4 className="text-[16px] leading-[24px] font-medium text-[#4b5563]
          max-sm:text-[14px] max-sm:leading-[20px]">
            CONTACT INFO
          </h4>
        </div>

        <div className="h-[131.2px] pt-[24px] pl-[24px] border-t-1 border-[#e5e7eb]
        max-sm:h-[222.4px]">
          {/* one row for input */}
          <div className="flex gap-[24px] max-sm:flex-col">
            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] leading-[24px] font-semibold
              max-sm:text-[14px] max-sm:leading-[20px]">
                Your phone number
              </h4>
              <input
                className="w-[283px] h-[43.2px] ring-1 ring-[#ebe7eb] rounded-[12px] pl-3
                max-sm:w-[264px]"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] leading-[24px] font-semibold
              max-sm:text-[14px] max-sm:leading-[20px]">
                Email Address
              </h4>
              <input
                className="w-[283px] h-[43.2px] ring-1 ring-[#ebe7eb] rounded-[12px] pl-3
                max-sm:w-[264px]"
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
          <h4 className="text-[16px] leading-[24px] font-medium text-[#4b5563]
          max-sm:text-[14px] max-sm:leading-[20px]">
            SHIPPING ADDRESS
          </h4>
        </div>

        <div className="flex flex-col gap-[24px] h-[528px] pt-[24px] pl-[24px] border-t-1 border-[#e5e7eb]
        max-sm:h-[517px]">

          {/* first row for input */}
          <div className="flex gap-[24px] max-sm:gap-[16px]">
            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] leading-[24px] font-semibold
              max-sm:text-[14px] max-sm:leading-[20px]">
                First Name
              </h4>
              <input
                className="w-[283px] h-[43.2px] ring-1 ring-[#ebe7eb] rounded-[12px] pl-3
                max-sm:w-[123px]"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] leading-[24px] font-semibold
              max-sm:text-[14px] max-sm:leading-[20px]">
                Last Name
              </h4>
              <input
                className="w-[283px] h-[43.2px] ring-1 ring-[#ebe7eb] rounded-[12px] pl-3
                max-sm:w-[123px]"
                type="text"
              />
            </div>
          </div>


          {/* second row */}
          <div className="flex gap-[24px] max-sm:flex-col">
            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] leading-[24px] font-semibold
              max-sm:text-[14px] max-sm:leading-[20px]">
                Address line 1
              </h4>
              <input
                className="w-[384px] h-[43.2px] ring-1 ring-[#ebe7eb] rounded-[12px] pl-3
                max-sm:w-[264px]"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] leading-[24px] font-semibold
              max-sm:text-[14px] max-sm:leading-[20px]">
                Apt, Suite
              </h4>
              <input
                className="w-[180px] h-[43.2px] ring-1 ring-[#ebe7eb] rounded-[12px] pl-3
                max-sm:w-[264px]"
                type="text"
              />
            </div>



          </div>



          {/* third row */}
          <div className="hidden gap-[24px] sm:flex">
            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] leading-[24px] font-semibold
              max-sm:text-[14px] max-sm:leading-[20px]">
                Address line 2
              </h4>
              <input
                className="w-[588px] h-[43.2px] ring-1 ring-[#ebe7eb] rounded-[12px] pl-3"
                type="text"
              />
            </div>
          </div>



          {/* fourth row */}
          <div className="flex gap-[16px]">
            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] leading-[24px] font-semibold
              max-sm:text-[14px] max-sm:leading-[20px]">
                City
              </h4>
              <input
                className="w-[283px] h-[43.2px] ring-1 ring-[#ebe7eb] rounded-[12px] pl-3
                max-sm:w-[123px]"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] leading-[24px] font-semibold
              max-sm:text-[14px] max-sm:leading-[20px]">
                Country
              </h4>
              <input
                className="w-[283px] h-[43.2px] ring-1 ring-[#ebe7eb] rounded-[12px] pl-3
                max-sm:w-[123px]"
                type="text"
              />
            </div>
          </div>


          {/* fifth row */}
          <div className="flex gap-[16px]">
            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] leading-[24px] font-semibold
              max-sm:text-[14px] max-sm:leading-[20px]">
                State / province
              </h4>
              <input
                className="w-[283px] h-[43.2px] ring-1 ring-[#ebe7eb] rounded-[12px] pl-3
                max-sm:w-[123px]"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] leading-[24px] font-semibold
              max-sm:text-[14px] max-sm:leading-[20px]">
                Postal code
              </h4>
              <input
                className="w-[283px] h-[43.2px] ring-1 ring-[#ebe7eb] rounded-[12px] pl-3
                max-sm:w-[123px]"
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
          <h4 className="text-[16px] leading-[24px] font-medium text-[#4b5563]
          max-sm:text-[14px] max-sm:leading-[20px]">
            PAYMENT
          </h4>
        </div>

        <div className="flex flex-col gap-[24px] h-[329.6px] pt-[24px] pl-[24px] border-t-1 border-[#e5e7eb]
        max-sm:h-[311.6px]">

        
          {/* first row */}
          <div className="flex gap-[24px]">
            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] leading-[24px] font-semibold
              max-sm:text-[14px] max-sm:leading-[20px]">
                Card number
              </h4>
              <input
                className="w-[588px] h-[43.2px] ring-1 ring-[#ebe7eb] rounded-[12px] pl-3
                max-sm:w-[264px]"
                type="text"
              />
            </div>
          </div>

          {/* second row */}
          <div className="flex gap-[24px]">
            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] leading-[24px] font-semibold
              max-sm:text-[14px] max-sm:leading-[20px]">
                Name on the card
              </h4>
              <input
                className="w-[588px] h-[43.2px] ring-1 ring-[#ebe7eb] rounded-[12px] pl-3
                max-sm:w-[264px]"
                type="text"
              />
            </div>
          </div>


          {/* third row */}
          <div className="flex gap-[16px]">
            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] leading-[24px] font-semibold
              max-sm:text-[14px] max-sm:leading-[20px]">
                Expiration date <span className="hidden sm:inline">(MM/YY)</span>
              </h4>
              <input
                className="w-[384px] h-[43.2px] ring-1 ring-[#ebe7eb] rounded-[12px] pl-3
                max-sm:w-[148px]"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] leading-[24px] font-semibold
              max-sm:text-[14px] max-sm:leading-[20px]">
                CVC
              </h4>
              <input
                className="w-[180px] h-[43.2px] ring-1 ring-[#ebe7eb] rounded-[12px] pl-3
                max-sm:w-[100px]"
                type="text"
              />
            </div>
          </div>

        </div>
      </div>


    </section>
  );
}
