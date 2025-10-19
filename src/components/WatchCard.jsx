import { ShoppingBag } from "lucide-react";

export default function WatchCard() {
  return (
    <div className="relative min-w-[309px] h-[448px] flex flex-col gap-[20px] snap-start">
      <img
        src="/black-watch.png"
        alt="black watch"
        className="w-full h-[347px] rounded-[16px]"
      />

      <div>
        <div className="flex justify-between text-[16px] leading-[24px] text-[#111827] font-semibold px-4">
          <p>Black Automatic Watch</p>
          <p>$169.99</p>
        </div>
        <div className="flex justify-between text-[14px] leading-[20px] text-[#4b5563] px-4 mt-[2px]">
          <p>Black Automatic Watch</p>
          <p>
            <del>$169.99</del>
          </p>
        </div>
      </div>

      {/* ratings */}
      <div className="flex gap-1 items-center px-4">
        <img src="/star.png" alt="star icon" className="size-5" />
        <p className="text-[14px] leading-[20px] text-[#4b5563]">4.9 (98)</p>
      </div>

      <div className="absolute w-9 h-9 rounded-full flex items-center justify-center top-3 right-3 bg-white cursor-pointer">
        <ShoppingBag size={16} color={"#4b5563"} />
      </div>
    </div>
  );
}
