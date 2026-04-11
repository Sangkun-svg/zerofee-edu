const imgTossIcon =
  "http://localhost:3845/assets/241e7e2851339c2d114aa748a7a39d87d8026b89.png";
const imgTossMask =
  "http://localhost:3845/assets/6b998ac512734b8b922fc7e80e1699f2ff1adf06.png";

type FeeRow = {
  label: string;
  normal: string;
  affiliate: string;
  savings: string;
};

const feeRows: FeeRow[] = [
  { label: "카드결제", normal: "3.4%", affiliate: "2.9%", savings: "0.5%" },
  { label: "간편결제", normal: "3.4%", affiliate: "2.9%", savings: "0.5%" },
  { label: "가상계좌", normal: "400원", affiliate: "270원", savings: "130원" },
  { label: "해외결제", normal: "5.0%", affiliate: "4.6%", savings: "0.4%" },
];

function ArrowDown() {
  return (
    <svg
      width="8"
      height="7"
      viewBox="0 0 8 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M4 6.5L0.535898 0.75L7.4641 0.75L4 6.5Z" fill="#3d82f5" />
    </svg>
  );
}

export default function TossPaymentsFeeSection() {
  return (
    <section className="w-full bg-[#0b0e14] py-36">
      <div className="max-w-[1440px] mx-auto px-10 flex items-center justify-between">
        {/* 좌측: 토스페이먼츠 로고 + 제휴 문구 */}
        <div className="flex flex-col gap-5 shrink-0">
          {/* 토스페이먼츠 로고 */}
          <div className="h-[52px] flex items-center gap-3">
            <div className="relative h-[41px] w-[47px] overflow-hidden">
              <img
                src={imgTossIcon}
                alt=""
                className="absolute h-full max-w-none"
                style={{ width: "527%" }}
              />
            </div>
            <div
              className="h-[52px] w-[198px] bg-white"
              style={{
                maskImage: `url('${imgTossMask}')`,
                WebkitMaskImage: `url('${imgTossMask}')`,
                maskSize: "100% auto",
                maskRepeat: "no-repeat",
                maskPosition: "center",
              }}
            />
          </div>

          {/* 제휴 문구 */}
          <div className="flex flex-col gap-2">
            <div className="text-[#f8faff] text-[28px] font-bold leading-[36px] tracking-[-0.42px]">
              <p>제로피에듀는</p>
              <p>토스페이먼츠 공식 제휴사입니다</p>
            </div>
            <p className="text-[#f8faff] text-[14px] font-medium leading-[21px] tracking-[-0.21px]">
              * 영중소(매출) 구간에 따라 수수료가 더 낮아질 수 있습니다.
            </p>
          </div>
        </div>

        {/* 우측: 수수료 비교 테이블 */}
        <div className="flex flex-col gap-5 w-[900px]">
          {/* 헤더 행 */}
          <div className="bg-[#0f1219] flex h-[80px] items-center rounded-[16px]">
            <div className="flex h-full items-center justify-center w-[300px]">
              <span className="text-[#a9b1c1] text-[14px] font-bold leading-[21px] whitespace-nowrap">
                결제방법
              </span>
            </div>
            <div className="h-8 w-px bg-[#2a2f3a]" />
            <div className="flex h-full items-center justify-center w-[300px]">
              <span className="text-[#a9b1c1] text-[14px] font-bold leading-[21px] whitespace-nowrap">
                일반계약
              </span>
            </div>
            <div className="h-8 w-px bg-[#2a2f3a]" />
            <div className="flex h-full items-center justify-center w-[300px] rounded-r-[16px]">
              <span className="text-[#f8faff] text-[14px] font-bold leading-[21px] whitespace-nowrap">
                제휴계약
              </span>
            </div>
          </div>

          {/* 데이터 행 */}
          <div className="flex flex-col">
            {feeRows.map((row, i) => (
              <div key={row.label}>
                <div className="flex items-center w-full">
                  {/* 결제방법 */}
                  <div className="flex h-[52px] items-center justify-center w-[300px]">
                    <span className="text-[#a9b1c1] text-[14px] font-medium leading-[21px] tracking-[-0.21px] whitespace-nowrap">
                      {row.label}
                    </span>
                  </div>
                  {/* 일반계약 */}
                  <div className="flex h-[52px] items-center justify-center w-[300px]">
                    <span className="text-[#a9b1c1] text-[14px] font-medium leading-[21px] tracking-[-0.21px] whitespace-nowrap">
                      {row.normal}
                    </span>
                  </div>
                  {/* 제휴계약 */}
                  <div className="flex gap-1 h-[52px] items-center justify-center w-[300px]">
                    <span className="text-[#f8faff] text-[14px] font-bold leading-[21px] whitespace-nowrap">
                      {row.affiliate}
                    </span>
                    <div className="flex items-center">
                      <span className="text-[#3d82f5] text-[14px] font-medium leading-[21px] tracking-[-0.21px]">
                        (
                      </span>
                      <span className="text-[#3d82f5] text-[14px] font-medium leading-[21px] tracking-[-0.21px] w-[36px]">
                        {row.savings}
                      </span>
                      <ArrowDown />
                      <span className="text-[#3d82f5] text-[14px] font-medium leading-[21px] tracking-[-0.21px]">
                        )
                      </span>
                    </div>
                  </div>
                </div>
                {i < feeRows.length - 1 && (
                  <div className="h-px w-full bg-[#1b1f2a]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
