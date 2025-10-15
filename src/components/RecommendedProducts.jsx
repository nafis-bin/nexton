let arr = new Array(4).fill(0);

export default function RecommendedProducts() {
  return (
    <div className="h-[598px] max-w-[1296px] mx-auto mt-[176px] flex flex-col">
      <div className="text-[36px] leading-[40px] font-semibold items-start">
        Recommendations. <span className="text-[#4b5563]">Best matching products for you</span>
      </div>
      <div className="w-full h-[448px] flex gap-[20px] mt-[40px]">
        {arr.map((_, i) => (
            <div key={i} className="w-[309px] h-[448px] flex flex-col gap-[20px]">
                <img src="/black-watch.png" alt="black watch" className="w-full h-[347px] rounded-[16px]" />

                <div>
                    <div className="flex justify-between text-[16px] leading-[24px] text-[#111827] font-semibold px-4">
                        <p>Black Automatic Watch</p>
                        <p>$169.99</p>
                    </div>
                    <div className="flex justify-between text-[14px] leading-[20px] text-[#4b5563] px-4 mt-[2px]">
                        <p>Black Automatic Watch</p>
                        <p><del>$169.99</del></p>
                    </div>
                </div>

                {/* ratings */}
                <div className="flex gap-1 items-center px-4">
                    <img src="/star.png" alt="star icon" className="size-5" />
                    <p className="text-[14px] leading-[20px] text-[#4b5563]">4.9 (98)</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}
