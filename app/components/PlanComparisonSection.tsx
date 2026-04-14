function CheckIcon() {
  return (
    <div className="size-6 rounded-full bg-[#3d82f5] flex items-center justify-center shrink-0">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.77735 23.4818C0.445073 23.7033 3.89408e-07 23.4651 3.61952e-07 23.0657L-1.18954e-06 0.500004C-1.20853e-06 0.223862 0.223856 3.80631e-06 0.499999 3.79596e-06L23.5 2.93422e-06C23.7761 2.92388e-06 24 0.223861 24 0.500003L24 23.0657C24 23.4651 23.5549 23.7033 23.2226 23.4818L21.2773 22.1849C21.1094 22.0729 20.8906 22.0729 20.7226 22.1849L18.2773 23.8151C18.1094 23.9271 17.8906 23.9271 17.7226 23.8151L15.2773 22.1849C15.1094 22.0729 14.8906 22.0729 14.7226 22.1849L12.2773 23.8151C12.1094 23.9271 11.8906 23.9271 11.7226 23.8151L9.27735 22.1849C9.1094 22.0729 8.8906 22.0729 8.72265 22.1849L6.27735 23.8151C6.1094 23.9271 5.8906 23.9271 5.72265 23.8151L3.27735 22.1849C3.1094 22.0729 2.8906 22.0729 2.72265 22.1849L0.77735 23.4818Z" fill="#0360EF"/>
        <path d="M16.5 8.00013L14.1729 10.3959L10.8459 14L7.5 10.3959" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

function Cell({ value, isSubtext, mobile }: { value: CellValue; isSubtext?: boolean; mobile?: boolean }) {
  const textSm = mobile ? "text-[12px] leading-[18px] tracking-[-0.18px]" : "text-[14px] leading-[21px] tracking-[-0.21px]";
  if (value === "check") return <CheckIcon />;

  if (value === "dash") {
    return <span className={`text-[#f8faff] font-medium ${textSm}`}>-</span>;
  }

  if (isSubtext && value.includes("\n")) {
    const [main, sub] = value.split("\n");
    return (
      <div className="text-center">
        <p className={`text-[#f8faff] font-medium ${textSm}`}>{main}</p>
        <p className={`text-[#f8faff] font-medium ${mobile ? "text-[11px] leading-[16px]" : "text-[12px] leading-[18px]"} tracking-[-0.18px]`}>{sub}</p>
      </div>
    );
  }

  return (
    <span className={`text-[#f8faff] font-medium ${textSm} text-center`}>
      {value}
    </span>
  );
}

const HIGHLIGHT_DIVIDER_BEFORE = 11;

export default function PlanComparisonSection() {
  return (
    <section className="flex flex-col gap-8 md:gap-[52px] items-center py-[104px] md:py-[144px]">
      <h2 className="text-[#f8faff] text-[28px] font-bold leading-9 tracking-[-0.42px] text-center">
        플랜 비교
      </h2>

      {/* 모바일 */}
      <div className="flex md:hidden flex-col w-full px-5">
        <div className="bg-[#0f1219] flex h-[64px] items-center rounded-[16px] mb-5">
          <div className="flex flex-1 h-full items-center justify-center px-3">
            <span className="text-white text-[12px] font-bold leading-[18px] tracking-[0.18px] whitespace-nowrap">핵심 기능</span>
          </div>
          <ColDivider />
          <div className="flex flex-1 h-full items-center justify-center">
            <span className="text-white text-[12px] font-bold leading-[18px] tracking-[0.18px] whitespace-nowrap">Premium Plan</span>
          </div>
          <ColDivider />
          <div className="flex flex-1 h-full items-center justify-center">
            <span className="text-white text-[12px] font-bold leading-[18px] tracking-[0.18px] whitespace-nowrap">Enterprise Plan</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {rows.map((row, i) => (
            <div key={row.feature}>
              {i === HIGHLIGHT_DIVIDER_BEFORE && <Divider highlight />}
              <div className="flex items-center w-full">
                <div className="flex flex-1 min-h-[52px] items-center justify-center px-3">
                  <span className="text-[#f8faff] text-[11px] font-medium leading-[16px] tracking-[-0.18px] text-center">
                    {row.feature}
                  </span>
                </div>
                <div className="flex flex-1 min-h-[52px] items-center justify-center px-1">
                  <Cell value={row.premium} isSubtext={row.isSubtext} mobile />
                </div>
                <div className="flex flex-1 min-h-[52px] items-center justify-center px-1">
                  <Cell value={row.enterprise} isSubtext={row.isSubtext} mobile />
                </div>
              </div>
              {i < rows.length - 1 && i !== HIGHLIGHT_DIVIDER_BEFORE - 1 && <Divider />}
            </div>
          ))}
        </div>
      </div>

      {/* 데스크탑 */}
      <div className="hidden md:block w-full max-w-[1360px] px-10">
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

        <div className="flex flex-col gap-2">
          {rows.map((row, i) => (
            <div key={row.feature}>
              {i === HIGHLIGHT_DIVIDER_BEFORE && <Divider highlight />}
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-1 h-[52px] items-center justify-center px-8">
                  <span className="text-[#f8faff] text-[14px] font-medium leading-[21px] tracking-[-0.21px] whitespace-nowrap">
                    {row.feature}
                  </span>
                </div>
                <div className="flex flex-1 h-[52px] items-center justify-center px-8">
                  <Cell value={row.premium} isSubtext={row.isSubtext} />
                </div>
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
