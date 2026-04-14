"use client";

const imgBgGlow = "/images/hero-bg-glow.png";
const imgDashboard = "/images/zerofeeEduDashboard.png";
const imgDashboardMobile = "/images/hero-dashboard-mobile.png";
const imgGraduationCap = "/icons/graduation-cap.svg";
const imgMessageIcon = "/icons/message.svg";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[907px] md:min-h-[1080px] overflow-hidden bg-[#0b0e14]">
      {/* 배경 글로우 */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          alt=""
          src={imgBgGlow}
          className="absolute w-full h-full object-cover opacity-60"
        />
      </div>

      {/* 메인 콘텐츠 */}
      <div className="relative flex flex-col items-center pt-[104px] md:pt-[160px] px-5 md:px-10">
        <div className="flex flex-col items-center gap-[52px] md:gap-8">
          {/* 배지 + 헤딩 */}
          <div className="flex flex-col items-center gap-4">
            {/* 배지 */}
            <div className="btn-gradient btn-gradient-black bg-[rgba(255,255,255,0.1)] border border-white flex items-center justify-center gap-1 h-10 px-4 rounded-[32px]">
              <p className="text-[#f8faff] text-[14px] font-bold leading-[21px] whitespace-nowrap">
                바로 운영할 수 있는 인터넷 강의 플랫폼
              </p>
            </div>

            {/* 메인 헤딩 */}
            <div className="text-center">
              {/* 모바일: 3줄 / 데스크톱: 2줄 */}
              <h1 className="text-[#f8faff] font-black tracking-[-0.8px] md:tracking-[-1.2px] text-[32px] leading-[48px] md:text-[48px] md:leading-[72px] md:whitespace-nowrap">
                <span className="block">하나의 플랫폼에서</span>
                <span className="block">효율적인 교육 운영을</span>
                <span className="block md:hidden">시작하세요</span>
                <span className="hidden md:inline"> 시작하세요</span>
              </h1>
            </div>
          </div>

          {/* 버튼 그룹 */}
          <div className="flex flex-col md:flex-row gap-2 items-center">
            {/* 도입 상담 신청하기 */}
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-gradient btn-gradient-blue flex items-center gap-1 h-[52px] px-6 rounded-[32px] border border-white hover:opacity-90 transition-opacity w-[172px]"
            >
              <img alt="" src={imgGraduationCap} className="size-4" />
              <span className="text-[#f8faff] text-[14px] font-bold leading-[21px] whitespace-nowrap">
                도입 상담 신청하기
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 3L11 8L6 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* 카톡 간편 문의하기 */}
            <a
              href="http://pf.kakao.com/_xaxnexhX/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient btn-gradient-yellow flex items-center gap-1 h-[52px] px-6 rounded-[32px] border border-white hover:opacity-90 transition-opacity w-[172px]"
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

      {/* 대시보드 이미지 - 모바일 */}
      <div className="md:hidden absolute left-5 w-[calc(100%-40px)] rounded-[14px] overflow-hidden" style={{ top: "618px" }}>
        <img
          alt="zerofee edu 플랫폼 대시보드"
          src={imgDashboardMobile}
          className="w-full h-auto block"
        />
      </div>

      {/* 대시보드 이미지 - 데스크톱 */}
      <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1080px] rounded-tl-[48px] rounded-tr-[48px] overflow-hidden">
        <img
          alt="zerofee edu 플랫폼 대시보드"
          src={imgDashboard}
          className="w-full h-auto block"
        />
      </div>
    </section>
  );
}
