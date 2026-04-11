import Image from "next/image";

const imgBgGlow = "/images/hero-bg-glow.png";                                                    
const imgDashboard = "/images/zerofeeEduDashboard.png";                                               
const imgGraduationCap = "/icons/graduation-cap.svg";                                            
const imgMessageIcon = "/icons/message.svg";


export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[1080px] overflow-hidden bg-[#0b0e14]">
      {/* 배경 글로우 */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          alt=""
          src={imgBgGlow}
          className="absolute w-full h-full object-cover opacity-60"
        />
      </div>

      {/* 메인 콘텐츠 */}
      <div className="relative flex flex-col items-center pt-[160px] px-10">
        {/* 배지 + 헤딩 + 버튼 */}
        <div className="flex flex-col items-center gap-8">
          {/* 상단 텍스트 그룹 */}
          <div className="flex flex-col items-center gap-4">
            {/* 배지 */}
            <div className="bg-[rgba(255,255,255,0.1)] border border-white flex items-center justify-center gap-1 h-10 px-4 rounded-[32px]">
              <p className="text-[#f8faff] text-[14px] font-bold leading-[21px] whitespace-nowrap">
                바로 운영할 수 있는 인터넷 강의 플랫폼
              </p>
            </div>

            {/* 메인 헤딩 */}
            <div className="text-center">
              <h1 className="text-[#f8faff] text-[48px] font-black leading-[72px] tracking-[-1.2px] whitespace-nowrap">
                하나의 플랫폼에서
                <br />
                효율적인 교육 운영을 시작하세요
              </h1>
            </div>
          </div>

          {/* 버튼 그룹 */}
          <div className="flex gap-2 items-center">
            {/* 도입 상담 신청하기 */}
            <a
              href="#contact"
              className="flex items-center gap-1 h-[52px] px-6 rounded-[32px] border border-white bg-gradient-to-r from-[#3d82f5] to-[#0360ef] hover:opacity-90 transition-opacity w-full max-w-[172px]"
            >
              <img alt="" src={imgGraduationCap} className="size-4" />
              <span className="text-[#f8faff] text-[14px] font-bold leading-[21px] whitespace-nowrap">
                도입 상담 신청하기
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 3L11 8L6 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            {/* 카톡 간편 문의하기 */}
            <a
              href="http://pf.kakao.com/_xaxnexhX/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 h-[52px] px-6 rounded-[32px] border border-white hover:opacity-90 transition-opacity w-full max-w-[172px]"
              style={{
                background: "linear-gradient(105.638deg, #FAE100 0%, #FAE100 49.519%, #FAC800 100%)",
              }}
            >
              <img alt="" src={imgMessageIcon} className="size-4" />
              <span className="text-[#3b1d1d] text-[14px] font-bold leading-[21px] whitespace-nowrap">
                카톡 간편 문의하기
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* 대시보드 스크린샷 */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1080px] rounded-tl-[48px] rounded-tr-[48px] overflow-hidden">
        <img
          alt="zerofee edu 플랫폼 대시보드"
          src={imgDashboard}
          className="w-full h-auto block"
        />
      </div>
    </section>
  );
}
