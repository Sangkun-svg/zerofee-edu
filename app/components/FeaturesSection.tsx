const features = [
  {
    badge: "1",
    title: ["플랫폼 내", "전자책, VOD 교육 운영"],
    description: [
      "업로드된 교육 자료는 다운로드 없이 플랫폼 내에서",
      "바로 열람할 수 있으며, 캡처 및 녹화 방지 기술을 적용해",
      "콘텐츠 유출을 완벽하게 차단합니다.",
    ],
    mock: "product",
  },
  {
    badge: "2",
    title: ["결제 알림도", "학습 리포트도 자동으로"],
    description: [
      "결제 완료 알림, 학습 리포트 등.",
      "필요한 내용은 모두 카카오 알림톡으로 자동 발송됩니다.",
    ],
    mock: "notion",
  },
  {
    badge: "3",
    title: ["AI와 함께하는", "수강생 관리"],
    description: [
      "수강생의 몰입은 24시간 멈춤 없이,",
      "선생님의 부담은 절반으로 줄일 수 있습니다.",
      "AI가 완성하는 스마트한 질의응답 시스템을 경험해 보세요.",
    ],
    mock: "notion2",
  },
  {
    badge: "4",
    title: ["최저 수수료로 받는", "간편하고 안전한 결제"],
    description: [
      "카드결제, 간편결제, 정기결제, 가상계좌 등.",
      "일반 PG사 계약보다 최대 0.5% 낮은 수수료로",
      "결제 모듈을 제공합니다.",
    ],
    mock: "notion3",
  },
];

function ProductMock() {
  return (
    <div className="flex flex-col gap-[20px] w-full">
      {/* 상품 대표이미지 */}
      <div className="flex flex-col gap-[8px]">
        <div className="flex flex-col">
          <span className="text-[14px] font-medium text-[#e9ecf2] tracking-[-0.21px] leading-[21px]">
            상품 대표이미지
          </span>
          <span className="text-[12px] text-[#b0b0b5] tracking-[-0.18px] leading-[18px]">
            * 1:1 비율의 1080*1080px 사이즈를 권장드려요.
          </span>
          <span className="text-[12px] text-[#b0b0b5] tracking-[-0.18px] leading-[18px]">
            * 최대 4장의 이미지 업로드가 가능하며, 첫번째 이미지가 대표 이미지로 설정돼요.
          </span>
        </div>
        <div className="relative size-[164px] rounded-[16px] overflow-hidden">
          <img
            src="/images/features-card1.png"
            alt="상품 이미지"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 상품명 */}
      <div className="flex flex-col gap-[8px]">
        <span className="text-[14px] font-medium text-[#e9ecf2] tracking-[-0.21px] leading-[21px]">
          상품명*
        </span>
        <div className="bg-[#0b0e14] border border-[#1b1f2a] h-[52px] flex items-center px-4 rounded-[16px]">
          <span className="text-[14px] font-medium text-[#f8faff] tracking-[-0.21px] leading-[21px] whitespace-nowrap overflow-hidden text-ellipsis">
            노션으로 온라인 교실을 운영해볼까요?
          </span>
        </div>
      </div>

      {/* 상품 카테고리 */}
      <div className="flex flex-col gap-[8px]">
        <span className="text-[14px] font-medium text-[#e9ecf2] tracking-[-0.21px] leading-[21px]">
          상품 카테고리
        </span>
        <div className="bg-[#1b1f2a] border border-[#1b1f2a] rounded-[16px] p-2">
          <div className="flex gap-1 h-10 items-center">
            <div className="flex-1 h-10 flex items-center justify-center bg-[#3d82f5] rounded-[12px]">
              <span className="text-[14px] font-bold text-[#f8faff] whitespace-nowrap leading-[21px]">
                디지털 상품
              </span>
            </div>
            <div className="flex-1 h-10 flex items-center justify-center rounded-[12px]">
              <span className="text-[14px] font-medium text-[#a9b1c1] tracking-[-0.21px] leading-[21px] whitespace-nowrap">
                링크페이(일반)
              </span>
            </div>
            <div className="flex-1 h-10 flex items-center justify-center rounded-[12px]">
              <span className="text-[14px] font-medium text-[#a9b1c1] tracking-[-0.21px] leading-[21px] whitespace-nowrap">
                링크페이(구독)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 기본가 */}
      <div className="flex flex-col gap-[8px]">
        <span className="text-[14px] font-medium text-[#e9ecf2] tracking-[-0.21px] leading-[21px] whitespace-nowrap">
          기본가*
        </span>
        <div className="bg-[#0b0e14] border border-[#1b1f2a] h-[52px] flex items-center justify-between px-4 rounded-[16px]">
          <span className="text-[14px] font-medium text-[#f8faff] tracking-[-0.21px] leading-[21px]">49,000</span>
          <span className="text-[14px] font-medium text-[#f8faff] tracking-[-0.21px] leading-[21px]">원</span>
        </div>
      </div>

      {/* 할인 금액 */}
      <div className="flex flex-col gap-[8px]">
        <div className="flex flex-col">
          <span className="text-[14px] font-medium text-[#e9ecf2] tracking-[-0.21px] leading-[21px]">
            할인 금액
          </span>
          <span className="text-[12px] text-[#a9b1c1] tracking-[-0.18px] leading-[18px]">
            * 할인 할 금액을 입력하면 기본가에서 입력된 금액만큼 차감돼요.
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <div className="bg-[#0f1219] border border-[#1b1f2a] h-[52px] flex items-center gap-2 px-4 rounded-[16px] shrink-0">
            <div className="bg-[#3d82f5] rounded-[8px] size-6 flex items-center justify-center">
              <img src="/icons/features/check.svg" alt="" className="size-4" />
            </div>
            <span className="text-[12px] font-medium text-[#e9ecf2] tracking-[-0.18px] leading-[18px] whitespace-nowrap">
              상품 할인 있음
            </span>
          </div>
          <div className="flex-1 bg-[#0b0e14] border border-[#1b1f2a] h-[52px] flex items-center justify-between px-4 rounded-[16px]">
            <span className="text-[14px] font-medium text-[#f8faff] tracking-[-0.21px] leading-[21px]">17,000</span>
            <span className="text-[14px] font-medium text-[#f8faff] tracking-[-0.21px] leading-[21px]">원</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function NotionMock({ imageAsset }: { imageAsset: string }) {
  return (
    <div className="flex flex-col gap-[20px] w-full">
      {/* Tabs */}
      <div className="bg-[#1b1f2a] border border-[#1b1f2a] rounded-[16px] p-2">
        <div className="flex gap-1 h-10 items-center">
          <div className="flex-1 h-10 flex items-center justify-center rounded-[12px]">
            <span className="text-[14px] font-medium text-[#a9b1c1] tracking-[-0.21px] leading-[21px] whitespace-nowrap">
              직접 작성하기
            </span>
          </div>
          <div className="flex-1 h-10 flex items-center justify-center bg-[#3d82f5] rounded-[12px]">
            <span className="text-[14px] font-bold text-[#f8faff] leading-[21px] whitespace-nowrap">
              노션 임베드하기
            </span>
          </div>
        </div>
      </div>

      {/* 노션 링크 input */}
      <div className="flex gap-2 items-end w-full">
        <div className="flex-1 flex flex-col gap-2">
          <span className="text-[14px] font-medium text-[#e9ecf2] tracking-[-0.21px] leading-[21px]">
            노션 링크*
          </span>
          <div className="bg-[#0b0e14] border border-[#1b1f2a] h-[52px] flex items-center px-4 rounded-[16px]">
            <span className="text-[14px] font-medium text-[#e9ecf2] tracking-[-0.21px] leading-[21px] truncate">
              https://time-shrine-949.notion.site/2540f1f571ca80c3...
            </span>
          </div>
        </div>
        <div className="bg-[#3d82f5] h-[52px] flex items-center px-4 rounded-[16px] shrink-0">
          <span className="text-[12px] font-medium text-[#f8faff] tracking-[-0.18px] leading-[18px] whitespace-nowrap">
            확인
          </span>
        </div>
      </div>

      {/* Notion preview card */}
      <div className="rounded-[16px] overflow-hidden w-full">
        {/* Notion header bar */}
        <div className="bg-[#1b1f2a] flex items-center gap-2 px-4 py-3">
          <div className="size-5 rounded-sm bg-white/10 flex items-center justify-center overflow-hidden shrink-0">
            <img
              src={imageAsset}
              alt=""
              className="size-full object-cover"
            />
          </div>
          <span className="text-[12px] text-[#b0b0b5] leading-[18px]">
            This section is an independent external Notion document.
          </span>
        </div>
        {/* Notion page preview */}
        <div className="bg-[#f7f6f3] p-5 flex flex-col gap-4">
          <div className="text-2xl">🏫</div>
          <div>
            <p className="text-[#37352f] text-[22px] font-bold leading-tight mb-3">
              노션으로 온라인 교실을 운영해볼까요?
            </p>
            <div className="bg-[#f0eeeb] rounded-md px-3 py-2 flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-[#9b9a97]">▣</span>
                <span className="text-[13px] text-[#37352f]">온라인 교실 템플릿</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-[#e8c547]">💰</span>
                <span className="text-[13px] text-[#37352f]">32,000원</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-[#9b9a97]">🏫</span>
                <span className="text-[13px] text-[#37352f]">학교</span>
              </div>
            </div>
          </div>
          {/* Tablet screenshot */}
          <div className="rounded-xl overflow-hidden mt-2">
            <img
              src="/images/features-card3.png"
              alt="notion preview"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureBadge({ number }: { number: string }) {
  return (
    <div className="inline-grid place-items-start relative" style={{ gridTemplateColumns: "max-content", gridTemplateRows: "max-content" }}>
      <div className="col-start-1 row-start-1 size-7 flex items-center justify-center">
        <div className="-rotate-90">
          <img src="/icons/features/diamond.svg" alt="" className="size-7 block" />
        </div>
      </div>
      <span className="col-start-1 row-start-1 font-bold text-[18px] text-white leading-[26px] tracking-[-0.27px] ml-[9px] mt-0 whitespace-nowrap self-center">
        {number}
      </span>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="w-full py-36">
      <div className="max-w-[1360px] mx-auto px-10">
        <div className="flex gap-10 items-start">
          {/* Left sticky heading */}
          <div className="sticky top-24 w-[370px] shrink-0">
            <h2 className="text-[#fefefe] text-[48px] font-black leading-[72px] tracking-[-1.2px]">
              가장 쉽고
              <br />
              편리한 교육 환경
            </h2>
          </div>

          {/* Right scrollable feature rows */}
          <div className="flex flex-col gap-[52px] flex-1">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-10 items-center justify-center w-full">
                {/* Mock UI card */}
                <div className="relative shrink-0">
                  <div className="w-[540px] h-[696px] bg-[#0b0e14] border-[8px] border-black rounded-3xl overflow-hidden p-5 flex flex-col">
                    {feature.mock === "product" && <ProductMock />}
                    {feature.mock !== "product" && (
                      <NotionMock
                        imageAsset={
                          feature.mock === "notion"
                            ? "/images/features-card2.png"
                            : feature.mock === "notion2"
                            ? "/images/features-card3.png"
                            : "/images/features-card4.png"
                        }
                      />
                    )}
                  </div>
                  {/* Border overlay */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-[#a9b6c2] pointer-events-none" />
                </div>

                {/* Feature description */}
                <div className="w-[370px] flex flex-col gap-5 shrink-0">
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
    </section>
  );
}
