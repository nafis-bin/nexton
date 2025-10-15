import { useEffect, useRef, useState } from "react";
import CollectionSectionItem from "./CollectionSectionItem";

const items = [
  {
    title: "For Men's",
    description: "Starting at $24",
  },
  {
    title: "For Women's",
    description: "Starting at $19",
  },
  {
    title: "Accessories",
    description: "Explore accessories",
  },
];

const doubledItems = [...items, ...items, ...items];

export default function CollectionSection() {
  const containerRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollInterval = setInterval(() => {
      let cardWidth = 418.67 + 20;
      let currentScroll = container.scrollLeft;

      if (currentScroll >= cardWidth * items.length) {
        container.scrollLeft = 0;
      } else {
        container.scrollTo({
          left: currentScroll + cardWidth,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, []);

  const handleScroll = () => {
    if (containerRef.current) {
      let { scrollLeft } = containerRef.current;
      let cardWidth = 418.67 + 20;

      let newIdx = Math.round(scrollLeft / cardWidth);
      setActiveIdx(newIdx);
    }
  };
  return (
    <div className="flex flex-col w-[1296px] mx-auto mt-[120px] h-max gap-10">
      <p className="text-[36px] leading-[40px] font-semibold text-[#111827]">
        Start exploring.{" "}
        <span className="text-[#4b5563]">Good things are waiting for you</span>
      </p>

      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex items-center gap-5 w-full h-[132px] overflow-x-scroll snap-x snap-mandatory scroll-smooth no-scrollbar"
      >
        {doubledItems.map((item, i) => (
          <CollectionSectionItem key={i} {...item} />
        ))}
      </div>

      <div className="flex items-center justify-center gap-[6px]">
        {Array(doubledItems.length - 3 + 1)
          .fill(0)
          .map((_, idx) => (
            <div
              key={idx}
              className={`size-[6px] rounded-full transition-colors duration-300 cursor-pointer ${
                activeIdx === idx ? "bg-gray-900" : "bg-gray-400"
              }`}
              onClick={() => {
                if (containerRef.current) {
                  let cardWidth = 418.67 + 20;
                  containerRef.current.scrollTo({
                    left: idx * cardWidth,
                    behavior: "smooth",
                  });
                }
              }}
            ></div>
          ))}
      </div>

      <div className="w-full h-30 bg-amber-200"></div>
    </div>
  );
}
