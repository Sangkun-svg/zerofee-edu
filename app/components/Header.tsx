"use client";

import Image from "next/image";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Header() {
  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-40px)] md:w-[calc(100%-80px)] max-w-[1360px] h-[64px] md:h-[80px]">
      <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.04)] flex items-center justify-between px-6 md:px-10 rounded-[40px] h-full">
        <Image src="/logo.svg" alt="zerofee edu" width={200} height={32} priority />
        <div className="hidden md:flex items-center gap-8 ml-8">
          <button
            onClick={() => scrollTo("pricing")}
            className="text-[#fefefe] text-[16px] font-medium leading-6 tracking-[-0.24px] whitespace-nowrap hover:opacity-80 transition-opacity"
          >
            가격안내
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="btn-gradient btn-gradient-blue flex items-center gap-1 h-[52px] px-6 rounded-[32px] border border-white hover:opacity-90 transition-opacity"
          >
            <span className="text-[#fefefe] text-[14px] font-bold leading-[21px] whitespace-nowrap">
              도입 상담 신청하기
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
