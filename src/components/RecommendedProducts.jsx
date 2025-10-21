import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import WatchCard from "./WatchCard";

let prev = new Array(4).fill(0);

let arr = [...prev, ...prev, ...prev];

export default function RecommendedProducts({ marginTop }) {
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
    <div className={clsx(`h-[598px] max-w-[1296px] mx-auto flex flex-col
      max-sm:w-full max-sm:px-[24px] max-sm:mt-[52px]`, {
      "mt-[176px]": marginTop === 176,
      "mt-[96px]": marginTop === 96,
    })}>
      <div className="text-[36px] leading-[40px] font-semibold items-start">
        Recommendations.{" "}
        <span className="hidden text-[#4b5563] sm:inline-block">Best matching products for you</span>
      </div>
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="w-full h-[448px] flex gap-[20px] mt-[40px] overflow-y-hidden overflow-x-scroll scroll-smooth snap-x snap-mandatory no-scrollbar"
      >
        {arr.map((_, i) => (
          <WatchCard key={i} />
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
