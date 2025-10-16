import { useState, useEffect, useRef } from "react";

let prev = new Array(4).fill(0);

let arr = [...prev, ...prev, ...prev];

export default function BestSellingProducts() {
  let [activeIdx, setActiveIdx] = useState(0);
  let containerRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (!containerRef.current) return;
      let container = containerRef.current;
      let cardWidth = 309 + 20;

      if (container.scrollLeft >= cardWidth * prev.length) {
        container.scrollLeft = 0;
      } else {
        container.scrollTo({
          left: container.scrollLeft + cardWidth,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, []);

  const handleScroll = () => {
    if (containerRef.current) {
      let { scrollLeft } = containerRef.current;
      let cardWidth = 309 + 20;
      let newIdx = Math.round(scrollLeft / cardWidth);

      setActiveIdx(newIdx);
    }
  };

  return (
    <div className="h-[598px] max-w-[1296px] mx-auto mt-[176px] flex flex-col">
      <div className="text-[36px] leading-[40px] font-semibold items-start">
        Best Sellers.{" "}
        <span className="text-[#4b5563]">Best Selling of the month</span>
      </div>
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="w-full h-[448px] flex gap-[20px] mt-[40px] overflow-x-scroll scroll-smooth snap-x snap-mandatory no-scrollbar"
      >
        {arr.map((_, i) => (
          <div
            key={i}
            className="min-w-[309px] h-[448px] flex flex-col gap-[20px] snap-start"
          >
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
              <p className="text-[14px] leading-[20px] text-[#4b5563]">
                4.9 (98)
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-[6px] mt-15">
        {Array(arr.length - 4 + 1).fill(0).map((_, i) => (
          <div
            key={i}
            className={`size-[6px] rounded-full transition-colors duration-300 cursor-pointer ${
              activeIdx === i ? "bg-gray-900" : "bg-gray-400"
            }`}
            onClick={() => {
              if (containerRef.current) {
                let cardWidth = 309 + 20
                containerRef.current.scrollTo({
                  left: i * cardWidth,
                  behavior: "smooth",
                })
              }
            }}
          >

          </div>
        ))}
      </div>
    </div>
  );
}
