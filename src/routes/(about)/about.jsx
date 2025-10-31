import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/(about)/about")({
  component: RouteComponent,
});

function RouteComponent() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [msg, setMsg] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setName("")
    setEmail("")
    setMsg("")
  }

  return (
    <section className="max-w-[1296px] mx-auto mt-10 h-max max-sm:max-w-[312px]">
      <div className="flex flex-col gap-3 w-full mb-[64px] max-sm:mb-[72px]">
        <p
          className="text-[36px] leading-[40px] font-semibold text-[#111827]
                    max-sm:text-[24px] max-sm:leading-[32px]"
        >
          About us
        </p>
        <p
          className="text-[16px] leading-[24px] font-medium text-[#4b5563] max-w-[643px] 
        max-sm:text-[14px] max-sm:leading-[20px] max-sm:font-normal max-sm:full"
        >
          We not only help you design exceptional products, but also make it
          easy for you to share your designs with more like-minded people.
        </p>
      </div>

      {/* gallary grid */}
      <div className="flex flex-col gap-[72px] w-full max-sm:gap-[104px]">
        
        {/* part 1 */}
        <div className="flex items-center gap-[120px] h-[507px] w-full max-sm:flex-col max-sm:gap-[32px] max-sm:h-max">
          <div className="w-[622.26px] h-full rounded-2xl max-sm:w-full max-sm:h-[254.21px]">
            <img
              src="/about-image-1.png"
              alt="about image"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-center gap-4 flex-1 max-sm:gap-3 max-sm:flex-0">
            <p className="max-w-[297px] text-[24px] leading-[32px] font-semibold text-[#111827] 
            max-sm:max-w-[248px] max-sm:text-[20px] max-sm:leading-[28px]">
              Provide fashionable and qualifed products
            </p>
            <p className="text-[16px] leading-[24px] text-[#4b5563]
            max-sm:text-[14px] max-sm:leading-[20px]">
              Already millions of people are very satisfied by thi. s page
              builder and the number is growing more and more. Technolog
              developing, requirements are increasing. Riode has brought.
            </p>
          </div>
        </div>


        {/* part 2 */}
        <div className="flex flex-row-reverse items-center gap-[120px] h-[507px] w-full max-sm:flex-col max-sm:gap-[32px] max-sm:h-max">
          <div className="w-[622.26px] h-full rounded-2xl max-sm:w-full max-sm:h-[254.21px]">
            <img
              src="/about-image-2.png"
              alt="about image"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-center gap-4 flex-1 max-sm:gap-3 max-sm:flex-0">
            <p className="max-w-[297px] text-[24px] leading-[32px] font-semibold text-[#111827] 
            max-sm:max-w-[248px] max-sm:text-[20px] max-sm:leading-[28px]">
              Provide fashionable and qualifed products
            </p>
            <p className="text-[16px] leading-[24px] text-[#4b5563]
            max-sm:text-[14px] max-sm:leading-[20px]">
              Already millions of people are very satisfied by thi. s page
              builder and the number is growing more and more. Technolog
              developing, requirements are increasing. Riode has brought.
            </p>
          </div>
        </div>



        {/* get in touch part */}
        <div className="max-sm:max-w-[312px]">
            <p className="text-[24px] leading-[32px] font-semibold max-sm:text-[20px] max-sm:leading-[28px]">
                Get in touch with us
            </p>
            <div className="flex gap-[96px] mt-[40px] max-sm:flex-col max-sm:gap-[80px] max-sm:mt-[32px] max-sm:max-w-[312px]">
                <div className="flex flex-col w-[600px] gap-[32px]">
                    <div className="flex flex-col gap-2">
                        <p className="text-[18px] leading-[28px] font-semibold text-[#111827] 
                        max-sm:text-[16px] max-sm:leading-[24px]">
                            Address
                        </p>
                        <p className="text-[14px] leading-[20px] text-[#6b7280]
                        max-sm:text-[16px] max-sm:leading-[24px] max-sm:max-w-[312px]">
                            Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-[18px] leading-[28px] font-semibold text-[#111827] 
                        max-sm:text-[16px] max-sm:leading-[24px]">
                            Email
                        </p>
                        <p className="text-[14px] leading-[20px] text-[#6b7280]
                        max-sm:text-[16px] max-sm:leading-[24px]">
                            nexton@email.com
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-[18px] leading-[28px] font-semibold text-[#111827] 
                        max-sm:text-[16px] max-sm:leading-[24px]">
                            Phone
                        </p>
                        <p className="text-[14px] leading-[20px] text-[#6b7280]
                        max-sm:text-[16px] max-sm:leading-[24px]">
                            +880-1637-562-256
                        </p>
                    </div>
                    <div className="hidden flex-col gap-2 sm:flex">
                        <p className="text-[18px] leading-[28px] font-semibold text-[#111827] 
                        max-sm:text-[16px] max-sm:leading-[24px]">
                            Socials
                        </p>
                        <div className="flex gap-[10px] text-[#6b7280]">
                            <img className="size-[24px]" src="/facebook.svg" alt="social icon" />
                            <img className="size-[24px]" src="/youtube.svg" alt="social icon" />
                            <img className="size-[24px]" src="/telegram.svg" alt="social icon" />
                            <img className="size-[24px]" src="/twitter.svg" alt="social icon" />
                        </div>
                    </div>
                </div>

                {/* form section */}
                <form className="flex flex-col gap-[24px] max-sm:max-w-[312px]" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                        <p className="text-[16px] leading-[24px] font-semibold">Full name</p>
                        <input 
                            type="text" 
                            placeholder="Enter your name..."
                            className="w-[600px] h-[43.2px] ring-1 ring-[#ebe7eb] rounded-[12px] px-4 max-sm:max-w-[312px]" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-[16px] leading-[24px] font-semibold">Email</p>
                        <input 
                            type="text" 
                            placeholder="Enter your email..."
                            className="w-[600px] h-[43.2px] ring-1 ring-[#ebe7eb] rounded-[12px] px-4 max-sm:max-w-[312px]" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-[16px] leading-[24px] font-semibold">Message</p>
                        <textarea 
                            type="text" 
                            placeholder="Enter your message..."
                            className="w-[600px] h-[128px] ring-1 ring-[#ebe7eb] rounded-[12px] py-3 px-4 max-sm:max-w-[312px]" 
                            value={msg}
                            onChange={(e) => setMsg(e.target.value)}
                        ></textarea>
                    </div>
                    
                    <button 
                        type="submit"
                        className="bg-[#111827] rounded-[9999px] text-white shadow-md w-[182px] h-[52px] max-sm:w-[312px] max-sm:h-[40px]
                        text-[16px] leading-[24px] max-sm:text-[14px] max-sm:leading-[20px]"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>


      </div>
    </section>
  );
}
