import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full h-[100px] flex items-center justify-center gap-[350px] border-b border-[#e5e7eb] 
    max-sm:h-[64px] max-sm:gap-[32px] max-sm:px-4 max-sm:justify-between">
      <img src="/logo.png" alt="company logo" className="hidden w-[119px] h-[46px] md:block" />
      <img src="/mobile-nav-icon.svg" alt="company logo" className="hidden w-[32px] h-[40px] max-sm:block" />
      <div className="w-100 h-[52px] relative max-sm:w-[200px] max-sm:h-[36px]">
        <input
          type="text"
          placeholder="Search in products..."
          className="w-full h-full bg-[#f8f8f8] text-[14px] leading-[20px] text-[#4b5563] rounded-[9999px] py-4 pl-[54px] outline-none
          max-sm:py-[10px] max-sm:pl-[36px] max-sm:text-[12px] max-sm:leading-[16px]"
        />
        <img
          src="/search-bar-search.svg"
          alt="search-bar-icon"
          className="w-5 h-5 absolute left-4 top-4
          max-sm:size-[14px] max-sm:top-[11px]"
        />
      </div>

      <div className="flex gap-[22px] max-sm:hidden">
        <img
          src="/user-btn.svg"
          alt="user-icon"
          className="w-[24px] h-[24px]"
        />
        <img
          src="/svg.svg"
          alt="cart-icon"
          className="w-[24px] h-[24px]"
        />
      </div>
      <div className="hidden max-sm:block">
        <Menu size={28} />
      </div>

    </nav>
  );
}
