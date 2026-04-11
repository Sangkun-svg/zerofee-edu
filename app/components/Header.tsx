import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-80px)] max-w-[1360px] h-[72px]">
      <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.04)] flex items-center justify-between px-10 rounded-[40px] h-full">
        {/* 로고 + 네비 */}
        <div className="flex gap-8 items-center">
          <Image
            src="/logo.svg"
            alt="zerofee edu"
            width={200}
            height={32}
            priority
          />

          {/* 네비 링크 */}
          <a
            href="#pricing"
            className="text-[#fefefe] text-[16px] font-medium leading-6 tracking-[-0.24px] whitespace-nowrap hover:opacity-80 transition-opacity"
          >
            가격안내
          </a>
        </div>

        {/* CTA 버튼 */}
        <a
          href="#contact"
          className="flex items-center gap-1 h-[52px] px-6 rounded-[32px] border border-white bg-gradient-to-r from-[#3d82f5] to-[#0360ef] hover:opacity-90 transition-opacity"
        >
          <span className="text-[#fefefe] text-[14px] font-bold leading-[21px] whitespace-nowrap">
            도입 상담 신청하기
          </span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 3L11 8L6 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </header>
  );
}
