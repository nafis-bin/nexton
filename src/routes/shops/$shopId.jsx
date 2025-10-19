import { createFileRoute } from "@tanstack/react-router";
import { fetchWatch } from "../../lib/utility";
import { Minus, Plus, ShoppingBag, Sparkles } from "lucide-react";
import RecommendedProducts from "../../components/RecommendedProducts";

export const Route = createFileRoute("/shops/$shopId")({
  loader: async ({ params }) => {
    const shopId = params.shopId;
    const data = await fetchWatch(shopId);
    return data;
  },
  component: RouteComponent,
});

function RouteComponent() {
  // let data = Route.useLoaderData()
  return (
    <div className="w-[1296px] mx-auto h-max mt-[40px]">
      <div className="flex">
        <div className="w-[140px] h-[678px] mr-[24px] flex flex-col gap-4">
          <div className="w-[140px] h-[157.5px] rounded-[16px] bg-green-200">
            <img
              src="/sidewatch-1.png"
              alt="side watch"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-[140px] h-[157.5px] rounded-[16px] bg-green-200">
            <img
              src="/sidewatch-2.png"
              alt="side watch"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-[140px] h-[157.5px] rounded-[16px] bg-green-200">
            <img
              src="/sidewatch-3.png"
              alt="side watch"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-[140px] h-[157.5px] rounded-[16px] bg-green-200">
            <img
              src="/sidewatch-4.png"
              alt="side watch"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="relative w-[640px] h-[678px] mr-[32px] rounded-[16px]">
          <img
            src="/main-watch.png"
            alt="main watch"
            className="w-full h-full object-contain rounded-[16px]"
          />
          <div className="absolute w-9 h-9 rounded-full flex items-center justify-center top-3 right-3 bg-white cursor-pointer">
            <ShoppingBag size={16} color={"#4b5563"} />
          </div>
          <div className="absolute flex items-center justify-center gap-1 w-[83.38px] h-[32px] rounded-[9999px] bg-white top-[16px] left-[16px]">
            <Sparkles size={11.38} />
            <p className="text-[12px] leading-[16px] text-[#4b5563]">New in</p>
          </div>
        </div>
        <div className="w-[460px] h-[463px] bg-white rounded-[16px] border-1 border-[#e5e7eb] flex flex-col items-center p-[33px] gap-[32px]">
          <div className="w-[394px] h-[54px] flex items-start justify-between">
            <div className="flex items-center w-[155.71px] h-[24px] gap-[6px]">
              <img src="/star.png" alt="star logo" className="size-4" />
              <div className="text-4 leading-6 font-semibold text-[#4b5563]">
                4.9
              </div>
              <div className="w-1 h-1 rounded-full bg-[#4b5563]"></div>
              <div className="text-4 leading-6 font-medium text-[#4b5563]">
                142 reviews
              </div>
            </div>

            <div className="flex flex-col gap-[2px] items-end">
              <p className="text-6 leading-8 font-semibold text-[#111827]">
                $169.99
              </p>
              <p className="text-[14px] leading-5 font-medium text-[#4b5563]">
                <s>$199.99</s>
              </p>
            </div>
          </div>

          {/* size section */}
          <div className="w-[394px] h-[80px] flex flex-col gap-3 items-start">
            <p className="text-4 leading-6 font-semibold text-[#111827]">
              Size: S
            </p>
            <div className="w-[394px] h-[44px] flex gap-[8.5px]">
              <div className="w-[72px] h-full bg-[#0ea5e9] text-[#fff] border-1 border-[#ebe7eb] place-content-center text-center rounded-[12px] text-4 leading-6 font-semibold cursor-pointer">
                S
              </div>
              <div className="w-[72px] h-full bg-white text-[#4b5563] border-1 border-[#ebe7eb] place-content-center text-center rounded-[12px] text-4 leading-6 font-semibold cursor-pointer">
                M
              </div>
              <div className="w-[72px] h-full bg-white text-[#4b5563] border-1 border-[#ebe7eb] place-content-center text-center rounded-[12px] text-4 leading-6 font-semibold cursor-pointer">
                L
              </div>
              <div className="w-[72px] h-full bg-white text-[#4b5563] border-1 border-[#ebe7eb] place-content-center text-center rounded-[12px] text-4 leading-6 font-semibold cursor-pointer">
                XL
              </div>
              <div className="w-[72px] h-full bg-white text-[#4b5563] border-1 border-[#ebe7eb] place-content-center text-center rounded-[12px] text-4 leading-6 font-semibold cursor-pointer">
                XXL
              </div>
            </div>
          </div>

          {/* add to cart  */}
          <div className="w-[394px] h-[52px] flex items-center justify-between">
            {/* change num button */}
            <div className="w-[110px] h-[40px] bg-[#f8f8f8] rounded-[9999px] flex items-center px-3 py-2 gap-[16px]">
              <div className="border-1 border-[#e5e7eb] w-[24px] h-[24px] rounded-full bg-white flex items-center justify-center">
                <Minus size={10} />
              </div>
              <div className="text-4 leading-6 font-medium text-[#4b5563]">
                1
              </div>
              <div className="border-1 border-[#e5e7eb] w-[24px] h-[24px] rounded-full bg-white flex items-center justify-center">
                <Plus size={10} />
              </div>
            </div>
            {/* add cart button */}
            <button className="flex gap-2 bg-[#111827] w-[178px] h-[52px] rounded-[9999px] items-center justify-center shadow-xl cursor-pointer">
              <ShoppingBag size={16} color={`white`} />
              <div className="text-4 leading-6 font-medium text-white">
                Add to cart
              </div>
            </button>
          </div>

          {/* price and all */}
          <div className="w-[394px] h-[58px] flex flex-col gap-[10px]">
            <div className="text-4 leading-6 text-[#4b5563] flex justify-between">
              <div>$169.99 x 1</div>
              <div>$169.99</div>
            </div>
            <div className="text-4 leading-6 text-[#4b5563] flex justify-between">
              <div>Tax estimate</div>
              <div>$0</div>
            </div>
            <div className="w-full border-1 border-[#e5e7eb] mt-[6px]" />
            <div className="flex justify-between text-[16px] leading-6 font-semibold text-[#111827]">
              <p>Total</p>
              <p>$169.99</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[804px] h-[1px] bg-[#ebe7eb] mt-[52px] mb-[52px]" />
      {/* device info */}
      <div className="flex flex-col gap-[60px]">
        <div>
          <h2 className="text-[36px] leading-[40px] font-semibold mb-1 text-[#111827]">
            Black Automatic Watch
          </h2>
          <p className="w-[735px] h-[72px] text-[#4b5563] text-[16px] leading-[24px]">
            The St. Louis Meramec Canoe Company was founded by Alfred Wickett in
            1922. Wickett had previously worked for the Old Town Canoe Co from
            1900 to 1914. Manufacturing of the classic wooden canoes in Valley
            Park, Missouri ceased in 1978.
          </p>
        </div>

        <div>
          <h3 className="text-[24px] leading-[32px] font-semibold mb-1 text-[#111827]">
            Fabric + Care
          </h3>
          <p className="w-[735px] h-[72px] text-[#4b5563] text-[16px] leading-[24px]">
            Material: Soft wool blend
            <br />
            Color: Various
          </p>
        </div>

        <div>
          <h3 className="text-[24px] leading-[32px] font-semibold mb-1 text-[#111827]">
            Sale Performance
          </h3>
          <p className="w-[735px] h-[72px] text-[#4b5563] text-[16px] leading-[24px]">
            Sales: 0<br />
            Review Count: -<br />
            Review Average: -
          </p>
        </div>

        <div>
          <h3 className="text-[24px] leading-[32px] font-semibold mb-2 text-[#111827]">
            Keywords
          </h3>
          <div className="flex gap-2">
            <div className="flex gap-1 justify-center items-center py-2 px-[14px]  h-[32px] rounded-[9999px] inset-0 border-1 border-[#ebe7eb] text-[12px] leading-[16px] text-[#4b5563]">
              <Sparkles size={11.38} color={"#4b5563"} />
              <p>men's fashion</p>
            </div>
            <div className="flex gap-1 justify-center items-center py-2 px-[14px]  h-[32px] rounded-[9999px] inset-0 border-1 border-[#ebe7eb] text-[12px] leading-[16px] text-[#4b5563]">
              <Sparkles size={11.38} color={"#4b5563"} />
              <p>winter hat</p>
            </div>
            <div className="flex gap-1 justify-center items-center py-2 px-[14px]  h-[32px] rounded-[9999px] inset-0 border-1 border-[#ebe7eb] text-[12px] leading-[16px] text-[#4b5563]">
              <Sparkles size={11.38} color={"#4b5563"} />
              <p>colorful accessory</p>
            </div>
            <div className="flex gap-1 justify-center items-center py-2 px-[14px]  h-[32px] rounded-[9999px] inset-0 border-1 border-[#ebe7eb] text-[12px] leading-[16px] text-[#4b5563]">
              <Sparkles size={11.38} color={"#4b5563"} />
              <p>warm headwear</p>
            </div>
          </div>
        </div>
      </div>

      <RecommendedProducts marginTop={96} />
    </div>
  );
}
