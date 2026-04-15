const features = [
  {
    badge: "1",
    title: ["플랫폼 내", "전자책, VOD 교육 운영"],
    description: [
      "업로드된 교육 자료는 다운로드 없이 플랫폼 내에서",
      "바로 열람할 수 있으며, 캡처 및 녹화 방지 기술을 적용해",
      "콘텐츠 유출을 완벽하게 차단합니다.",
    ],
    pcImg: "feature-pc-1.png",
    mobileImg: "/images/feature-mobile-1.png",
  },
  {
    badge: "2",
    title: ["결제 알림도", "학습 리포트도 자동으로"],
    description: [
      "결제 완료 알림, 학습 리포트 등",
      "필요한 내용은 모두 카카오 알림톡으로 자동 발송됩니다.",
    ],
    pcImg: "feature-pc-2.png",
    mobileImg: "/images/feature-mobile-2.png",
  },
  {
    badge: "3",
    title: ["AI와 함께하는", "수강생 관리"],
    description: [
      "수강생의 몰입은 24시간 멈춤 없이,",
      "선생님의 부담은 절반으로 줄일 수 있습니다.",
      "AI가 완성하는 스마트한 질의응답 시스템을 경험해 보세요.",
    ],
    pcImg: "feature-pc-3.png",
    mobileImg: "/images/feature-mobile-2.png",
  },
  {
    badge: "4",
    title: ["최저 수수료로 받는", "간편하고 안전한 결제"],
    description: [
      "카드결제, 간편결제, 정기결제, 가상계좌 등",
      "일반 PG사 계약보다 최대 0.5% 낮은 수수료로",
      "결제 모듈을 제공합니다.",
    ],
    pcImg: "feature-pc-4.png",
    mobileImg: "/images/feature-mobile-2.png",
  },
];


const BADGE_SHAPE = "M0.77735 27.4818C0.445073 27.7033 4.64336e-07 27.4651 4.39789e-07 27.0657L-1.19318e-06 0.500004C-1.21016e-06 0.223862 0.223856 3.80491e-06 0.499999 3.79284e-06L27.5 2.61263e-06C27.7761 2.60056e-06 28 0.22386 28 0.500003L28 27.0657C28 27.4651 27.5549 27.7033 27.2226 27.4818L24.7773 25.8516C24.6094 25.7396 24.3906 25.7396 24.2226 25.8516L21.2773 27.8151C21.1094 27.9271 20.8906 27.9271 20.7226 27.8151L17.7773 25.8516C17.6094 25.7396 17.3906 25.7396 17.2226 25.8516L14.2773 27.8151C14.1094 27.9271 13.8906 27.9271 13.7226 27.8151L10.7773 25.8516C10.6094 25.7396 10.3906 25.7396 10.2226 25.8516L7.27735 27.8151C7.1094 27.9271 6.8906 27.9271 6.72265 27.8151L3.77735 25.8516C3.6094 25.7396 3.3906 25.7396 3.22265 25.8516L0.77735 27.4818Z";

const badgeNumbers: Record<string, string> = {
  "1": "M15.6445 6.27344V16.8906H17.9824V19H10.4238V16.8906H12.9902V8.92773L10.4238 10.668V8.18945L13.1836 6.27344H15.6445Z",
  "2": "M10.0547 19V17.1367L14.1504 12.8828C15.2051 11.7578 15.9082 11.0898 15.9258 10.0352C15.9258 8.85742 15.1172 8.20703 14.0977 8.20703C13.0605 8.20703 12.3223 8.91016 12.3223 10.1758H9.9668C9.94922 7.71484 11.6367 6.09766 14.1504 6.09766C16.6113 6.09766 18.3516 7.62695 18.3516 9.85938C18.3516 11.2832 17.7539 12.4434 15.3457 14.8691L13.5527 16.75V16.8203H18.5098V19H10.0547Z",
  "3": "M12.1641 15.4141C12.2168 16.4336 13.0781 16.9785 14.1504 16.9961C15.2578 16.9785 16.1016 16.3457 16.1016 15.1855C16.1016 14.0781 15.3457 13.3223 13.834 13.3223H12.498V11.5293L15.082 8.57617V8.43555H10.2305V6.27344H18.2812V8.13672L15.1875 11.582V11.7578C17.5957 12.0742 18.6855 13.6914 18.6855 15.3613C18.6855 17.6113 16.752 19.1758 14.1504 19.1758C11.5664 19.1758 9.7207 17.6641 9.65039 15.4141H12.1641Z",
  "4": "M9.47461 16.75V14.6934L13.8164 6.27344H16.3652L12.1113 14.5352V14.623H15.0469V11.0371H17.5078V14.623H18.9844V16.75H17.5078V19H14.9941V16.75H9.47461Z",
};

let badgeUid = 0;
function FeatureBadge({ number }: { number: string }) {
  const id = `badge-grad-${number}-${++badgeUid}`;
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={id} x1="28" y1="27.5002" x2="5.49805e-07" y2="-0.499756" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0360EF" />
          <stop offset="1" stopColor="#3D82F5" />
        </linearGradient>
      </defs>
      <path d={BADGE_SHAPE} fill={`url(#${id})`} />
      <path d={badgeNumbers[number]} fill="white" />
    </svg>
  );
}

export default function FeaturesSection() {
  return (
    <section className="w-full">
      {/* 모바일 레이아웃 */}
      <div className="md:hidden flex flex-col gap-8 px-5 py-[104px]">
        <h2 className="text-[#fefefe] text-[28px] font-bold leading-[36px] tracking-[-0.42px] text-center w-full">
          가장 쉽고<br />편리한 교육 환경
        </h2>
        <div className="flex flex-col gap-[52px]">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-5 items-center">
              {/* 이미지 */}
              <div className="w-full max-w-[600px] mx-auto rounded-[16px] overflow-hidden">
                <img
                  src={feature.mobileImg}
                  alt={feature.title.join(" ")}
                  className="w-full h-auto block"
                />
              </div>
              {/* 텍스트 */}
              <div className="flex flex-col gap-2 w-full max-w-[600px]">
                <div className="flex flex-col gap-2">
                  <FeatureBadge number={feature.badge} />
                  <h3 className="text-[#fefefe] text-[20px] font-bold leading-[30px] tracking-[-0.3px]">
                    {feature.title.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < feature.title.length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                </div>
                <p className="text-[#fefefe] text-[14px] font-medium leading-[21px] tracking-[-0.21px]">
                  {feature.description.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < feature.description.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 데스크톱 레이아웃 */}
      <div className="hidden md:block py-36">
        <div className="max-w-[1440px] mx-auto px-10">
          <div className="flex gap-10 items-start">
            {/* Left sticky heading */}
            <div className="sticky top-[224px] w-[370px] shrink-0">
              <h2 className="text-[#fefefe] text-[48px] font-black leading-[72px] tracking-[-1.2px]">
                가장 쉽고
                <br />
                편리한 교육 환경
              </h2>
            </div>

            {/* Right scrollable feature rows */}
            <div className="flex flex-col gap-[52px] flex-1 min-w-0">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-10 items-center justify-center w-full">
                  {/* PC 이미지 카드 */}
                  <div className="relative flex-1 min-w-0 max-w-[540px]">
                    {feature.pcImg.endsWith(".gif") ? (
                      /* GIF: 흰 배경 + 폰 목업 위치 */
                      <div className="w-full aspect-[540/600] border-[8px] border-black rounded-3xl overflow-hidden bg-white relative">
                        <img
                          src={`/images/${feature.pcImg}`}
                          alt={feature.title.join(" ")}
                          className="absolute max-w-none"
                          style={{ left: "9.45%", top: "-0.69%", width: "81.1%", height: "102.19%" }}
                        />
                      </div>
                    ) : (
                      <div className="w-full border-[8px] border-black rounded-3xl overflow-hidden">
                        {feature.pcImg && (
                          <img
                            src={`/images/${feature.pcImg}`}
                            alt={feature.title.join(" ")}
                            className="w-full h-auto block"
                          />
                        )}
                      </div>
                    )}
                    {/* Border overlay */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-[#a9b6c2] pointer-events-none" />
                  </div>

                  {/* Feature description */}
                  <div className="w-[370px] shrink-0 flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <FeatureBadge number={feature.badge} />
                      <h3 className="text-[#fefefe] text-[28px] font-bold leading-[36px] tracking-[-0.42px]">
                        {feature.title.map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < feature.title.length - 1 && <br />}
                          </span>
                        ))}
                      </h3>
                    </div>
                    <p className="text-[#fefefe] text-[16px] font-medium leading-[24px] tracking-[-0.24px]">
                      {feature.description.map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < feature.description.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
