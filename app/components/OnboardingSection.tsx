import {Fragment} from "react";

const steps = [
  {
    number: "①",
    title: "데모 확인",
    description: "* 운영하게 될 플랫폼의\n디자인 및 기능을 미리 확인합니다.",
  },
  {
    number: "②",
    title: "도입 상담",
    description: "* 운영 규모에 맞는 플랜과 비용\n데이터 이전 등에 대해 상담합니다.",
  },
  {
    number: "③",
    title: "계약 절차",
    description: "* 상담을 통해 합의된 조건에 따라\n전자계약 및 카드등록을 진행합니다.",
  },
  {
    number: "④",
    title: "온보딩 지원",
    description: "* 강의 등록, 결제 모듈 세팅 등\n운영에 필요한 내용을 지원합니다.",
  },
  {
    number: "⑤",
    title: "운영 시작",
    description: "* 1:1 전담 매니저가 배정되어\n플랫폼의 지속적인 성장을 함께합니다.",
  },
];

function ArrowRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M13.3333 5L20 12M20 12L13.3333 19M20 12L4 12" stroke="#E9ECF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M5 13.3333L12 20M12 20L19 13.3333M12 20L12 4" stroke="#E9ECF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function StepCircle({ step }: { step: typeof steps[0] }) {
  return (
    <div className="flex flex-col items-center justify-center gap-[8px] size-[208px] rounded-full border border-[var(--gray-100)] bg-[var(--gray-50)] text-center shrink-0">
      <div className="text-[#fefefe] text-[18px] font-bold leading-[26px] tracking-[-0.27px]">
        <p className="mb-0">{step.number}</p>
        <p>{step.title}</p>
      </div>
      <p className="text-[#a9b1c1] text-[10px] font-medium leading-[16px] tracking-[-0.15px] whitespace-pre-line">
        {step.description}
      </p>
    </div>
  );
}

export default function OnboardingSection() {
  return (
    <section className="flex flex-col items-center gap-8 md:gap-[52px] py-[104px] md:py-[144px] w-full">
      <h2 className="text-[#fefefe] text-[28px] font-bold leading-[36px] tracking-[-0.42px] text-center whitespace-nowrap">
        계약 및 도입 절차
      </h2>

      {/* 모바일: 세로 */}
      <div className="flex md:hidden flex-col items-center gap-4">
        {steps.map((step, i) => (
          <Fragment key={step.number}>
            <StepCircle step={step} />
            {i < steps.length - 1 && <ArrowDown />}
          </Fragment>
        ))}
      </div>

      {/* 데스크탑: 가로 */}
      <div className="hidden md:flex items-center justify-center gap-[28px] w-full max-w-[1440px] px-10 flex-wrap">
        {steps.map((step, i) => (
          <Fragment key={step.number}>
            <StepCircle step={step} />
            {i < steps.length - 1 && <ArrowRight />}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
