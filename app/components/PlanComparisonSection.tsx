function CheckIcon() {
  return (
    <div className="size-6 rounded-full bg-[#3d82f5] flex items-center justify-center shrink-0">
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 6.5L5 9.5L11 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function Divider({ highlight }: { highlight?: boolean }) {
  return <div className={`h-px w-full ${highlight ? "bg-[#2a2f3d]" : "bg-[#1b1f2a]"}`} />;
}

function ColDivider() {
  return <div className="w-px h-8 bg-[#2a2f3d] shrink-0" />;
}

type CellValue = "check" | "dash" | string;

interface Row {
  feature: string;
  premium: CellValue;
  enterprise: CellValue;
  isSubtext?: boolean;
}

const rows: Row[] = [
  { feature: "카드 수수료", premium: "2.9%", enterprise: "2.9%" },
  {
    feature: "결제 & 리포트 등 알림톡 발송",
    premium: "카카오 알림톡 발송 400건 / 월\n* 초과시, 건당 50원(VAT별도)",
    enterprise: "카카오 알림톡 발송 무제한\n* 무료",
    isSubtext: true,
  },
  {
    feature: "PDF & 영상 다운로드, 캡쳐, 녹화 방지",
    premium: "활성화 유저 100명 / 월\n* 초과시, 유저당 150원(VAT별도)",
    enterprise: "활성화 유저 무제한\n* 무료",
    isSubtext: true,
  },
  {
    feature: "PDF & 영상 파일 용량",
    premium: "용량 500GB / 월\n* 초과시, 1GB당 30원(VAT별도)",
    enterprise: "용량 무제한\n* 무료",
    isSubtext: true,
  },
  { feature: "영상 화질", premium: "FHD (1080p)", enterprise: "FHD (1080p)" },
  { feature: "1:1 전담 매니저 배정", premium: "check", enterprise: "check" },
  { feature: "전용 도메인 연결", premium: "check", enterprise: "check" },
  { feature: "전용 결제 모듈", premium: "check", enterprise: "check" },
  { feature: "교육운영 AI", premium: "check", enterprise: "check" },
  { feature: "출결 & 진도율 관리", premium: "check", enterprise: "check" },
  { feature: "수강생 유입/전환 데이터", premium: "check", enterprise: "check" },
  { feature: "교재 발주 및 배송 지원", premium: "dash", enterprise: "check" },
  { feature: "맞춤형 디자인", premium: "dash", enterprise: "check" },
  { feature: "맞춤형 기능", premium: "dash", enterprise: "check" },
];

function Cell({ value, isSubtext }: { value: CellValue; isSubtext?: boolean }) {
  if (value === "check") return <CheckIcon />;

  if (value === "dash") {
    return (
      <span className="text-[#f8faff] text-[14px] font-medium leading-[21px] tracking-[-0.21px]">
        -
      </span>
    );
  }

  if (isSubtext && value.includes("\n")) {
    const [main, sub] = value.split("\n");
    return (
      <div className="text-center">
        <p className="text-[#f8faff] text-[14px] font-medium leading-[21px] tracking-[-0.21px]">{main}</p>
        <p className="text-[#f8faff] text-[12px] font-medium leading-[18px] tracking-[-0.18px]">{sub}</p>
      </div>
    );
  }

  return (
    <span className="text-[#f8faff] text-[14px] font-medium leading-[21px] tracking-[-0.21px] text-center">
      {value}
    </span>
  );
}

// Index of the divider that should be highlighted (before the Enterprise-only section)
const HIGHLIGHT_DIVIDER_BEFORE = 11; // before row index 11

export default function PlanComparisonSection() {
  return (
    <section className="flex flex-col gap-[52px] items-center py-[144px]">
      <h2 className="text-[#f8faff] text-[28px] font-bold leading-9 tracking-[-0.42px] text-center">
        플랜 비교
      </h2>

      <div className="w-[1360px]">
        {/* Header row */}
        <div className="bg-[#0f1219] flex h-[80px] items-center rounded-2xl mb-5">
          <div className="flex flex-1 h-full items-center justify-center px-8">
            <span className="text-white text-[14px] font-bold leading-[21px]">핵심 기능</span>
          </div>
          <ColDivider />
          <div className="flex flex-1 flex-col h-full items-center justify-center px-8">
            <span className="text-white text-[16px] font-bold leading-6 tracking-[-0.24px] whitespace-nowrap">
              Premium Plan
            </span>
          </div>
          <ColDivider />
          <div className="flex flex-1 flex-col h-full items-center justify-center px-2">
            <span className="text-white text-[16px] font-bold leading-6 tracking-[-0.24px] whitespace-nowrap">
              Enterprise Plan
            </span>
          </div>
        </div>

        {/* Data rows */}
        <div className="flex flex-col gap-2">
          {rows.map((row, i) => (
            <div key={row.feature}>
              {i === HIGHLIGHT_DIVIDER_BEFORE && <Divider highlight />}
              <div className="flex items-center justify-between w-full">
                {/* Feature */}
                <div className="flex flex-1 h-[52px] items-center justify-center px-8">
                  <span className="text-[#f8faff] text-[14px] font-medium leading-[21px] tracking-[-0.21px] whitespace-nowrap">
                    {row.feature}
                  </span>
                </div>
                {/* Premium */}
                <div className="flex flex-1 h-[52px] items-center justify-center px-8">
                  <Cell value={row.premium} isSubtext={row.isSubtext} />
                </div>
                {/* Enterprise */}
                <div className="flex flex-1 h-[52px] items-center justify-center px-2">
                  <Cell value={row.enterprise} isSubtext={row.isSubtext} />
                </div>
              </div>
              {i < rows.length - 1 && i !== HIGHLIGHT_DIVIDER_BEFORE - 1 && <Divider />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
