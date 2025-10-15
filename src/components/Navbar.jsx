export default function Navbar() {
  return (
    <nav className="w-full h-[100px] flex items-center justify-center gap-[350px]">
      <img src="/logo.png" alt="company logo" className="w-[119px] h-[46px]" />
      <div className="w-100 h-[52px] relative">
        <input
          type="text"
          placeholder="Search in products..."
          className="w-full h-full bg-[#f8f8f8] text-[14px] leading-[20px] text-[#4b5563] rounded-[9999px] py-4 px-[54px] outline-none"
        />
        <img
          src="/search-icon.png"
          alt="search-bar-icon"
          className="w-5 h-5 absolute left-4 top-4"
        />
      </div>

      <div className="flex gap-[22px]">
        <img
          src="/user-icon.png"
          alt="user-icon"
          className="w-[24px] h-[24px]"
        />
        <img
          src="/cart-icon.png"
          alt="cart-icon"
          className="w-[24px] h-[24px]"
        />
      </div>
    </nav>
  );
}
