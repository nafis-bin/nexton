import { Minus, Maximize2, Plus } from "lucide-react";

export default function OrderedWatch({ name, count, size }) {
  return (
    <div className="flex gap-[24px] w-full h-[132px] border-t-2 border-[#e5e7eb] pt-[24px]
    max-sm:gap-3">
      <img
        src="/item-image.png"
        alt="item image"
        className="w-[96px] h-[108px] rounded-[12px] object-contain"
      />

      <div className="flex flex-col gap-[20px] max-sm:gap-[30px]">
        <div className="flex flex-col gap-1">
          <p className="text-[16px] leading-[24px] font-semibold
          max-sm:text-[14px] max-sm:leading-[20px]">
            {name}
          </p>
          <div className="flex gap-1 items-center h-[16px]">
            <Maximize2 className="size-[14px] max-sm:size-[12px]" color={`#4b5563`} />
            <p className="text-[12px] leading-[16px] text-[#4b5563]">
                {size}
            </p>
          </div>
        </div>

        <div className="hidden items-center justify-center gap-[16px] w-[110px] h-[40px] rounded-[9999px] bg-[#f8f8f8] sm:flex">
          <div className="flex items-center justify-center size-[24px] ring-1 ring-[#ebe7eb] bg-white rounded-full">
            <Minus size={10} />
          </div>
          <p className="text-[16px] leading-[24px] font-medium text-[#4b5563]">{count}</p>
          <div className="flex items-center justify-center size-[24px] ring-1 ring-[#ebe7eb] bg-white rounded-full">
            <Plus size={10} />
          </div>
        </div>

        <div className="hidden w-[204px] h-[38px] items-center justify-between max-sm:flex">
            <div className="flex flex-col gap-[2px]">
                <p className="text-[14px] leading-[20px] font-semibold text-[#111827]">
                    $68.00
                </p>
                <p className="text-[12px] leading-[16px] text-[#4b5563]">
                    <s>$79.00</s>
                </p>
            </div>
            <div className="flex items-center justify-center gap-[16px] w-[110px] h-[40px] rounded-[9999px] bg-[#f8f8f8]
            max-sm:w-[85px] max-sm:h-[32px] max-sm:gap-[12px]">
                <div className="flex items-center justify-center size-[24px] ring-1 ring-[#ebe7eb] bg-white rounded-full
                max-sm:size-[20px]">
                    <Minus size={8} />
                </div>
                <p className="text-[14px] leading-[20px] font-medium text-[#4b5563]">{count}</p>
                <div className="flex items-center justify-center size-[24px] ring-1 ring-[#ebe7eb] bg-white rounded-full
                max-sm:size-[20px]">
                    <Plus size={8} />
                </div>
            </div>
        </div>

      </div>

      <div className="hidden flex-col gap-[2px] justify-center w-max h-[108px] ml-auto sm:flex">
        <p className="text-[16px] leading-[24px] font-semibold text-[#111827]">$169.99</p>
        <p className="text-[14px] leading-[20px] text-[#4b5563]"><s>$199.99</s></p>
      </div>
    </div>
  );
}
