const data = [
  {
    title: "Getting Started",
    notes: "Release Notes",
    guide: "Upgrade Guide",
    support: "Browser Support",
    mode: "Dark Mode",
  },
  {
    title: "Explore",
    notes: "Prototyping",
    guide: "Design System",
    support: "Pricing",
    mode: "Security",
  },
  {
    title: "Community",
    notes: "Discussion Forums",
    guide: "Code of Conduct",
    support: "Contributing",
    mode: "API Reference",
  },
];

const firstCol = [
    {
        logo: "/facebook.svg",
        title: "Facebook"
    },
    {
        logo: "/youtube.svg",
        title: "Youtube"
    },
    {
        logo: "/telegram.svg",
        title: "Telegram"
    },
    {
        logo: "/twitter.svg",
        title: "Twitter"
    },
]

export default function Aside() {
  return (
    <div className="max-w-[1536px] mx-auto h-[318px] px-30 py-15 mt-[52px] grid grid-cols-4 gap-5 border-t-1 border-b-1 border-gray-200
    max-sm:w-full max-sm:h-[926px] max-sm:grid-cols-1 max-sm:px-[24px] max-sm:py-[24px] max-sm:gap-[60px]">
      {/* first col */}
      <div className="flex flex-col gap-[12px] w-[309px] h-[198px]">
        <div className="w-[119px] h-[46px] mb-[20px]">
          <img src="/mobile-nav-icon.svg" alt="logo" className="w-full h-full" />
        </div>
        {firstCol.map(({logo, title}, idx) => (
            <div key={idx} className="text-[#4b5563] text-[16px] leading-[24px] flex gap-2">
            <img className="size-5" src={logo} alt={`${title} logo`} />
            <p>{title}</p>
            </div>
        ))}
      </div>

      {data.map(({ title, notes, guide, support, mode }, idx) => (
        <div key={idx} className="flex flex-col gap-[16px] w-[309px] h-[156px]">
          <div className="text-[16px] leading-[24px] font-semibold text-[#111827] mb-1
          max-sm:text-[14px] max-sm:leading-[20px]">
            {title}
          </div>
          <div className="text-[#4b5563] text-[16px] leading-[24px] max-sm:text-[14px] max-sm:leading-[20px]">
            {notes}
          </div>
          <div className="text-[#4b5563] text-[16px] leading-[24px] max-sm:text-[14px] max-sm:leading-[20px]">
            {guide}
          </div>
          <div className="text-[#4b5563] text-[16px] leading-[24px] max-sm:text-[14px] max-sm:leading-[20px]">
            {support}
          </div>
          <div className="text-[#4b5563] text-[16px] leading-[24px] max-sm:text-[14px] max-sm:leading-[20px]">
            {mode}
          </div>
        </div>
      ))}
    </div>
  );
}
