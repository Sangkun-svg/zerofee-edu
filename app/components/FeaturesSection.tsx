const features = [
  {
    badge: "1",
    title: ["플랫폼 내", "전자책, VOD 교육 운영"],
    description: [
      "업로드된 교육 자료는 다운로드 없이 플랫폼 내에서",
      "바로 열람할 수 있으며, 캡처 및 녹화 방지 기술을 적용해",
      "콘텐츠 유출을 완벽하게 차단합니다.",
    ],
    mock: "video",
    mobileImg: "/images/feature-mobile-1.png",
  },
  {
    badge: "2",
    title: ["결제 알림도", "학습 리포트도 자동으로"],
    description: [
      "결제 완료 알림, 학습 리포트 등",
      "필요한 내용은 모두 카카오 알림톡으로 자동 발송됩니다.",
    ],
    mock: "kakao",
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
    mock: "ai",
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
    mock: "payment",
    mobileImg: "/images/feature-mobile-2.png",
  },
];

// Feature 1: Video player mock
function VideoMock() {
  return (
    <div className="flex flex-col gap-[32px] w-full">
      {/* Header */}
      <div className="flex flex-col gap-[20px]">
        <div className="flex items-start justify-between gap-[8px]">
          <div className="flex flex-col gap-[8px] min-w-0">
            <span className="text-[24px] font-bold text-[#e9ecf2] tracking-[-0.36px] leading-[32px] whitespace-nowrap">
              지수함수와 로그함수
            </span>
            <div className="flex gap-[8px] items-center text-[18px] font-medium text-[#e9ecf2] tracking-[-0.27px] leading-[26px]">
              <span className="whitespace-nowrap">지수</span>
              <span>-</span>
              <span className="whitespace-nowrap">거듭제곱과 거듭제곱근의 뜻과 성질</span>
            </div>
          </div>
          <div className="flex items-center gap-[4px] shrink-0">
            <img src="/icons/features/alert-circle.svg" alt="" className="size-[20px]" />
            <span className="text-[14px] font-bold text-[#b4d9fb] leading-[21px] whitespace-nowrap">
              해당 콘텐츠의 보호되고 있습니다.
            </span>
          </div>
        </div>

        {/* Video thumbnail */}
        <div className="relative h-[284px] w-full rounded-[12px] overflow-hidden">
          <img
            src="/images/features-video-bg.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <img
            src="/images/features-video-thumb.png"
            alt="lecture video"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Video controls overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-[16px] flex flex-col gap-[8px]">
            <img
              src="/images/features-video-progress-bg.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            {/* Progress bar */}
            <div className="relative h-[2px] w-full rounded-full bg-black/50 mt-1">
              <div className="h-[2px] w-[44px] rounded-full bg-white/50" />
              <div className="absolute top-1/2 -translate-y-1/2 left-[44px] size-[10px] rounded-full bg-white -ml-[5px]" />
            </div>
            {/* Controls row */}
            <div className="flex items-center justify-between">
              <div className="flex gap-[8px] items-center">
                <div className="size-[32px] rounded-full bg-black/50 flex items-center justify-center pl-[3px]">
                  <img src="/icons/features/play.svg" alt="play" className="size-[20px]" />
                </div>
                <div className="size-[32px] rounded-full bg-black/50 flex items-center justify-center">
                  <img src="/icons/features/volume.svg" alt="volume" className="size-[24px]" />
                </div>
                <div className="h-[32px] px-[12px] rounded-full bg-black/50 flex items-center">
                  <span className="text-[14px] font-medium text-white tracking-[-0.21px] leading-[21px] whitespace-nowrap">
                    0:01 / 15:32
                  </span>
                </div>
              </div>
              <div className="flex gap-[8px] items-center">
                <div className="size-[32px] rounded-full bg-black/50 flex items-center justify-center">
                  <img src="/icons/features/fast-forward.svg" alt="fast-forward" className="size-[20px]" />
                </div>
                <div className="size-[32px] rounded-full bg-black/50 flex items-center justify-center">
                  <img src="/icons/features/expand.svg" alt="fullscreen" className="size-[20px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comments section */}
      <div className="flex flex-col gap-[16px]">
        <span className="text-[20px] font-bold text-[#e9ecf2] tracking-[-0.3px] leading-[30px]">
          댓글
        </span>
        <div className="flex flex-col gap-[8px]">
          {/* Student comment */}
          <div className="flex flex-col gap-[8px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[4px]">
                <div className="size-[16px] rounded-full bg-[#1b1f2a] flex items-center justify-center">
                  <img src="/icons/features/user-profile.svg" alt="" className="size-[10px]" />
                </div>
                <span className="text-[12px] font-medium text-[#e9ecf2] tracking-[-0.18px] leading-[18px]">
                  이동규 학생
                </span>
              </div>
              <span className="text-[12px] font-medium text-[#a9b1c1] tracking-[-0.18px] leading-[18px]">
                2026. 02. 09
              </span>
            </div>
            <p className="text-[14px] font-medium text-[#e9ecf2] tracking-[-0.21px] leading-[21px]">
              선생님, 강의 잘 들었습니다! 그런데 개념 복습을 하다가 너무 헷갈리는 부분이 생겨서 질문<br />
              남깁니다. ㅠㅠ 교재를 보니까 &apos;-8의 세제곱근&apos;이랑 &apos;세제곱근 -8&apos;이라는 말이 나오는데,<br />
              이 두 개가 같은 건가요?
            </p>
            <div className="flex justify-end">
              <span className="text-[12px] font-medium text-[#a9b1c1] tracking-[-0.18px] leading-[18px]">
                수정하기 · 삭제하기
              </span>
            </div>
          </div>

          {/* Teacher reply */}
          <div className="flex gap-[8px] items-start">
            <img src="/icons/features/reply-arrow.svg" alt="" className="size-[16px] mt-[1px] shrink-0 -scale-x-100" />
            <div className="flex flex-col gap-[8px] flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[4px]">
                  <div className="size-[16px] rounded-full overflow-hidden shrink-0">
                    <img src="/images/features-teacher-profile.png" alt="" className="size-full object-cover" />
                  </div>
                  <span className="text-[12px] font-medium text-[#e9ecf2] tracking-[-0.18px] leading-[18px]">
                    홍길동 선생님
                  </span>
                </div>
                <span className="text-[12px] font-medium text-[#a9b1c1] tracking-[-0.18px] leading-[18px]">
                  2026. 02. 09
                </span>
              </div>
              <p className="text-[14px] font-medium text-[#e9ecf2] tracking-[-0.21px] leading-[21px]">
                안녕하세요, 수포자탈출기님! 아주 예리하고 좋은 질문입니다! 😊 결론부터 말씀드리면, 두 가지는 전혀 다른 의미를 가집니다.
              </p>
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="h-[52px] bg-[#0b0e14] border border-[#1b1f2a] rounded-[16px] flex items-center justify-between px-[16px]">
          <span className="text-[14px] font-medium text-[#f8faff] tracking-[-0.21px] leading-[21px] truncate">
            와 드디어 다크 모드가 나왔네요! 👏 밤에 작업할 때마다 눈이 너무 부셨는데 정말 감사합니다.
          </span>
          <div className="size-[32px] rounded-full bg-[#3d82f5] flex items-center justify-center shrink-0 ml-2">
            <img src="/icons/features/arrow-up.svg" alt="send" className="size-[16px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Feature 2: KakaoTalk payment notification mock
function KakaoMock() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[16px]">
      <img
        src="/images/features-kakao-message.png"
        alt="카카오 알림톡 결제 완료"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
    </div>
  );
}

// Feature 3: AI Q&A mock
function AIMock() {
  return (
    <div className="flex flex-col gap-[32px] w-full">
      {/* Header */}
      <div className="flex flex-col gap-[8px]">
        <span className="text-[24px] font-bold text-[#e9ecf2] tracking-[-0.36px] leading-[32px] whitespace-nowrap">
          지수함수와 로그함수
        </span>
        <div className="flex gap-[8px] items-center text-[18px] font-medium text-[#e9ecf2] tracking-[-0.27px] leading-[26px]">
          <span className="whitespace-nowrap">지수</span>
          <span>-</span>
          <span className="whitespace-nowrap">거듭제곱근 기초 연산 및 개념 확인 문제</span>
        </div>
      </div>

      {/* Q&A comments */}
      <div className="flex flex-col gap-[8px]">
        {/* Student question with PDF */}
        <div className="flex flex-col gap-[8px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[4px]">
              <div className="size-[16px] rounded-full bg-[#1b1f2a] flex items-center justify-center">
                <img src="/icons/features/user-profile.svg" alt="" className="size-[10px]" />
              </div>
              <span className="text-[12px] font-medium text-[#e9ecf2] tracking-[-0.18px] leading-[18px]">
                이동규 학생
              </span>
            </div>
            <span className="text-[12px] font-medium text-[#a9b1c1] tracking-[-0.18px] leading-[18px]">
              2026. 02. 09
            </span>
          </div>
          {/* PDF attachment */}
          <div className="bg-[#0f1219] border border-[#1b1f2a] rounded-[16px] p-[16px] flex items-center gap-[8px]">
            <div className="size-[40px] rounded-[8px] flex items-center justify-center shrink-0"
              style={{ background: "linear-gradient(90deg, #3d82f5 0%, #0360ef 100%)" }}>
              <span className="text-[12px] font-medium text-[#e9ecf2] text-center leading-[18px]">PDF</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[14px] font-medium text-[#dcdddf] tracking-[-0.21px] leading-[21px] truncate">
                거듭제곱근 기초 연산 및 개념 확인 문제.pdf
              </p>
              <p className="text-[12px] font-medium text-[#5e677a] tracking-[-0.18px] leading-[18px]">12MB</p>
            </div>
            <img src="/icons/features/download.svg" alt="download" className="size-[24px] shrink-0" />
          </div>
          <div className="flex justify-end">
            <span className="text-[12px] font-medium text-[#a9b1c1] leading-[18px]">답글달기</span>
          </div>
        </div>

        {/* AI reply */}
        <div className="flex gap-[8px] items-start">
          <img src="/icons/features/reply-arrow.svg" alt="" className="size-[16px] mt-[1px] shrink-0 -scale-x-100" />
          <div className="flex flex-col gap-[8px] flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[4px]">
                <div className="size-[16px] rounded-full overflow-hidden shrink-0">
                  <img src="/images/features-ai-profile.png" alt="" className="size-full object-cover" />
                </div>
                <span className="text-[12px] font-medium text-[#e9ecf2] tracking-[-0.18px] leading-[18px]">
                  AI 조교
                </span>
                <img src="/icons/features/star.svg" alt="" className="size-[12px]" />
              </div>
              <span className="text-[12px] font-medium text-[#a9b1c1] tracking-[-0.18px] leading-[18px]">
                2026. 02. 09
              </span>
            </div>
            <p className="text-[14px] font-medium text-[#e9ecf2] tracking-[-0.21px] leading-[21px]">
              &quot;과제 하느라 고생 많았습니다! 전체적으로 연산 규칙은 잘 적용하고 있는데, 1번 서술형 문제에서 작은 실수가 있었네요. 😉<br /><br />
              앞서 강의에서 강조했던 핵심 개념이니, 헷갈린다면 해당 파트의 영상을 다시 한번 가볍게 복습하고 넘어가기를 추천합니다.<br /><br />
              충분히 잘하고 있으니 조금만 더 힘내요!&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="h-[52px] bg-[#0b0e14] border border-[#1b1f2a] rounded-[16px] flex items-center justify-between px-[16px]">
        <span className="text-[14px] font-medium text-[#5e677a] tracking-[-0.21px] leading-[21px]">
          질문답변을 작성해주세요.
        </span>
        <div className="size-[32px] rounded-full bg-[#5e677a] flex items-center justify-center shrink-0">
          <img src="/icons/features/arrow-up.svg" alt="send" className="size-[16px]" />
        </div>
      </div>
    </div>
  );
}

// Feature 4: Payment UI mock (full image)
function PaymentMock() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[16px]">
      <img
        src="/images/features-payment.png"
        alt="결제 방법"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
    </div>
  );
}

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
                  {/* Mock UI card */}
                  <div className="relative flex-1 min-w-0 max-w-[540px]">
                    <div className={`w-full bg-[#0b0e14] border-[8px] border-black rounded-3xl overflow-hidden p-5 flex flex-col ${
                      feature.mock === "kakao" || feature.mock === "payment"
                        ? "aspect-[540/600]"
                        : "aspect-[540/696]"
                    }`}>
                      {feature.mock === "video" && <VideoMock />}
                      {feature.mock === "kakao" && <KakaoMock />}
                      {feature.mock === "ai" && <AIMock />}
                      {feature.mock === "payment" && <PaymentMock />}
                    </div>
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
