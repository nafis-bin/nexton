import { Menu, User, LogIn, UserPlus } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export default function Navbar() {
  const routerState = useRouterState();
  const [open, setOpen] = useState(false);

  // closes popovers on route change
  useEffect(() => {
    setOpen(false);
  }, [routerState.location.pathname]);

  return (
    <nav
      className="relative w-full h-[100px] flex items-center justify-center gap-[350px] border-b border-[#e5e7eb] 
    max-sm:h-[64px] max-sm:gap-[32px] max-sm:px-4 max-sm:justify-between"
    >
      <img
        src="/mobile-nav-icon.svg"
        alt="company logo"
        className="hidden w-[119px] h-[46px] md:block"
      />
      <img
        src="/mobile-nav-icon.svg"
        alt="company logo"
        className="hidden w-[32px] h-[40px] max-sm:block"
      />
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
        <img src="/svg.svg" alt="cart-icon" className="w-[24px] h-[24px]" />
      </div>
      <div className="hidden max-sm:block">
        <button onClick={() => setOpen(!open)}>
          <Menu size={28} />
        </button>

        {open && (
          <div className="absolute w-32 py-4 z-100 bg-white shadow-sm rounded-2xl flex flex-col gap-2 left-full top-20 -translate-x-[calc(100%+16px)]">
            <div
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-gray-800 text-[14px] hover:bg-gray-100 transition-all duration-300 rounded-lg mx-2 px-2 py-1 cursor-pointer"
            >
              <User size={14} />
              user
            </div>
            <Link to="/login" onClick={() => setOpen(false)}>
              <div className="flex items-center gap-2 text-gray-800 text-[14px] hover:bg-gray-100 transition-all duration-300 rounded-lg mx-2 px-2 py-1 cursor-pointer">
                <LogIn size={14} />
                login
              </div>
            </Link>
            <Link to="/register" onClick={() => setOpen(false)}>
              <div className="flex items-center gap-2 text-gray-800 text-[14px] hover:bg-gray-100 transition-all duration-300 rounded-lg mx-2 px-2 py-1 cursor-pointer">
                <UserPlus size={14} />
                signup
              </div>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
