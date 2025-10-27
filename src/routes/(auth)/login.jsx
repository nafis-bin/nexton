import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/(auth)/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.table({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col items-center mb-[72px] mt-[40px]">
      <h1
        className="text-[36px] leading-[40px] font-semibold text-[#111827]
        max-sm:text-[24px] max-sm:leading-[32px]"
      >
        Login
      </h1>

      <div className="flex flex-col gap-6 w-[440px] h-max mt-[60px] max-sm:mt-[40px] max-sm:w-[312px]">
        <div className="w-full flex flex-col gap-2">
          <p className="text-[16px] leading-[24px] font-semibold text-[#111827]">
            Email
          </p>
          <input
            className="w-full h-[43.2px] rounded-[12px] px-4 ring-1 ring-[#e5e7eb]"
            type="email"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <p className="text-[16px] leading-[24px] font-semibold text-[#111827]">
            Password
          </p>
          <input
            className="w-full h-[43.2px] rounded-[12px] px-4 ring-1 ring-[#e5e7eb]"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="w-full h-[52px] bg-[#111827] shadow-md rounded-[9999px] text-[16px] leading-[24px] font-medium text-white
            max-sm:h-[40px] max-sm:text-[14px] max-sm:leading-[20px]"
          onClick={handleLogin}
        >
          Continue
        </button>
      </div>
      <div className="flex h-[20.4px] w-[440px] items-center my-6 max-sm:w-[312px]">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="text-[14px] leading-[20px] max-sm:text-[12px] max-sm:leading-[16px] font-medium text-[#4b5563] mx-[10px]">
          OR
        </span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <div className="text-[16px] leading-[24px] text-[#4b5563] max-sm:text-[14px] max-sm:leading-[20px]">
        New user? <span className="text-[#0ea5e9]">Create an account</span>
      </div>
    </div>
  );
}
