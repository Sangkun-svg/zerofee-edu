"use client";

const imgBgGlow = "/images/hero-bg-glow.png";
const imgDashboard = "/images/banner-pc-img.png";
const imgDashboardMobile = "/images/banner-mob.png";
const imgMessageIcon = "/icons/message.svg";

export default function HeroSection() {
  return (
    // 640px(sm) 기준으로 최소 높이 조절
    <section className="relative w-full overflow-hidden bg-[#0b0e14]">
      <div className="absolute inset-0 pointer-events-none">
        <img
          alt=""
          src={imgBgGlow}
          className="absolute w-full h-full object-cover opacity-60"
        />
      </div>

      {/* 상단 여백 조절: 640px 미만 pt-[171px], 이상 pt-[216px] */}
      <div className="relative flex flex-col items-center pt-[171px] sm:pt-[216px] px-5 sm:px-10">
        <div className="flex flex-col items-center gap-[52px] sm:gap-8">
          <div className="flex flex-col items-center gap-4">
            <div className="btn-gradient btn-gradient-black bg-[rgba(255,255,255,0.1)] border border-white flex items-center justify-center gap-1 h-10 px-4 rounded-[32px]">
              <p className="text-[#f8faff] text-[14px] font-bold leading-[21px] whitespace-nowrap">
                바로 운영할 수 있는 온라인 학원
              </p>
            </div>

            <div className="text-center">
              <h1 className="text-[#f8faff] font-black tracking-[-0.8px] sm:tracking-[-1.2px] text-[32px] leading-[48px] sm:text-[48px] sm:leading-[72px] sm:whitespace-nowrap">
                {/* 640px(sm) 이상에서 보임 */}
                <span className="hidden sm:block">
                  하나의 플랫폼에서<br/>효율적인 교육 운영을 시작하세요
                </span>

                {/* 640px(sm) 미만에서 보임 */}
                <span className="block sm:hidden">
                  하나의 플랫폼에서<br/>효율적인 교육 운영을<br/>시작하세요
                </span>
              </h1>
            </div>
          </div>

          {/* 버튼 레이아웃: 640px 미만 세로 배치, 이상 가로 배치 */}
          <div className="flex flex-col sm:flex-row gap-2 items-center">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-gradient btn-gradient-blue flex items-center gap-1 h-[52px] px-6 rounded-[32px] border border-white hover:opacity-90 transition-opacity w-[172px]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8.3576 12.8287L8.85245 12.2741C9.45962 11.5936 10.549 11.682 11.0384 12.4516C11.4943 13.1684 12.4849 13.3043 13.117 12.7368L14.014 11.9314M1.98584 12.98L4.8965 12.3936C5.05101 12.3624 5.19289 12.2863 5.30432 12.1749L11.8201 5.6555C12.1325 5.34293 12.1323 4.83627 11.8196 4.52397L10.4393 3.14525C10.1268 2.83307 9.62041 2.83328 9.30814 3.14572L2.79168 9.66576C2.68047 9.77703 2.60454 9.91862 2.57338 10.0728L1.98584 12.98Z" stroke="#F8FAFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span className="text-[#f8faff] text-[14px] font-bold leading-[21px] whitespace-nowrap">
                도입 상담 신청하기
              </span>
            </button>

            <button
              onClick={() => window.open("https://pf.kakao.com/_EgdlX", "_blank", "noopener,noreferrer")}
              className="btn-gradient btn-gradient-yellow flex items-center gap-1 h-[52px] px-6 rounded-[32px] border border-white hover:opacity-90 transition-opacity w-[172px]"
              style={{
                background: "linear-gradient(105.638deg, #FAE100 0%, #FAE100 49.519%, #FAC800 100%)",
              }}
            >
              <img alt="" src={imgMessageIcon} className="size-4" />
              <span className="text-[#3b1d1d] text-[14px] font-bold leading-[21px] whitespace-nowrap">
                카톡 간편 문의하기
              </span>
            </button>
          </div>
    
          {/* 대시보드 이미지 - 모바일 (640px 미만에서만 보임) */}
          <div className="sm:hidden w-[calc(100%-40px)] rounded-[14px] overflow-hidden mt-7 mb-5 mx-auto">
            <img
              alt="zerofee edu 플랫폼 대시보드"
              src={imgDashboardMobile}
              className="w-full h-auto block"
            />
          </div>
          
          {/* 대시보드 이미지 - 데스크톱 (640px 이상에서 보임) */}
          <div className="hidden sm:block w-full max-w-[1080px] rounded-tl-[48px] rounded-tr-[48px] overflow-hidden px-20 mt-8">
            <img
              alt="zerofee edu 플랫폼 대시보드"
              src={imgDashboard}
              className="w-full h-auto block"
            />
          </div>
        </div>
      </div>



    </section>
  );
}