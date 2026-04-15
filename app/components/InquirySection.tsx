"use client";

import { useState } from "react";

type Plan = "premium" | "enterprise";
type ContactMethod = "kakao" | "email" | "phone";
type Status = "idle" | "loading" | "success" | "error";

function RadioCircle({ selected }: { selected: boolean }) {
  return (
    <div
      className={`size-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
        selected
          ? "border-[#3d82f5] bg-[#3d82f5]"
          : "border-[#2a2f3d] bg-[#5E677A]"
      }`}
    >
      <div className="size-3 rounded-full bg-white" />
    </div>
  );
}

const inputCls =
  "bg-[#0b0e14] border border-[#1b1f2a] h-[52px] w-full px-4 rounded-2xl text-[#f8faff] text-[14px] font-medium leading-[21px] tracking-[-0.21px] placeholder-[#a9b1c1] outline-none focus:border-[#3d82f5] transition-colors";
const labelCls =
  "text-[#f8faff] text-[14px] font-medium leading-[21px] tracking-[-0.21px] whitespace-nowrap";

export default function InquirySection() {
  const [plan, setPlan] = useState<Plan>("premium");
  const [contactMethod, setContactMethod] = useState<ContactMethod>("kakao");
  const [agreed, setAgreed] = useState(false);
  const [institution, setInstitution] = useState("");
  const [repName, setRepName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comments, setComments] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agreed) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, institution, representativeName: repName, email, phone, contactMethod, comments }),
      });
      if (!res.ok) { setStatus("error"); return; }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const planOptions: { value: Plan; label: string }[] = [
    { value: "premium", label: "Premium Plan" },
    { value: "enterprise", label: "Enterprise Plan" },
  ];

  const contactOptionsMobile: { value: ContactMethod; label: string }[] = [
    { value: "kakao", label: "카카오톡 / 문자" },
    { value: "email", label: "이메일" },
    { value: "phone", label: "전화" },
  ];

  const contactOptionsDesktop: { value: ContactMethod; label: string }[] = [
    { value: "kakao", label: "카카오톡 / 문자" },
    { value: "email", label: "이메일" },
    { value: "phone", label: "전화" },
  ];

  const submitButton = (
    <button
      type="submit"
      disabled={status === "loading" || status === "success"}
      className="btn-gradient btn-gradient-blue flex gap-1 h-[52px] items-center justify-center px-6 rounded-[32px] border border-white w-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {status === "loading" ? (
        <span className="text-[#f8faff] text-[14px] font-bold leading-[21px] whitespace-nowrap">신청 중...</span>
      ) : (
        <span className="text-[#f8faff] text-[14px] font-bold leading-[21px] whitespace-nowrap">도입 상담 신청하기</span>
      )}
    </button>
  );

  function FormFields({ vertical }: { vertical?: boolean }) {
    return (
      <div className="flex flex-col gap-5 items-start w-full">
        {/* 관심 플랜 */}
        <div className="flex flex-col gap-2 items-start w-full">
          <p className={labelCls}>관심 플랜*</p>
          <div className={`flex items-start w-full ${vertical ? "flex-col gap-3" : "gap-10"}`}>
            {planOptions.map(({ value, label }) => (
              <button key={value} type="button" onClick={() => setPlan(value)} className="flex gap-2 items-center">
                <RadioCircle selected={plan === value} />
                <span className={labelCls}>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 학원/기관명 + 담당자 */}
        <div className={`flex items-start w-full ${vertical ? "flex-col gap-5" : "gap-5"}`}>
          <div className="flex flex-1 flex-col gap-2 items-start w-full">
            <label className={labelCls}>학원 / 기관명*</label>
            <input type="text" value={institution} onChange={(e) => setInstitution(e.target.value)} placeholder="학원 / 기관명을 입력해주세요." required className={inputCls} />
          </div>
          <div className="flex flex-1 flex-col gap-2 items-start w-full">
            <label className={labelCls}>담당자 성함*</label>
            <input type="text" value={repName} onChange={(e) => setRepName(e.target.value)} placeholder="성함을 입력해주세요." required className={inputCls} />
          </div>
        </div>

        {/* 이메일 + 연락처 */}
        <div className={`flex items-start w-full ${vertical ? "flex-col gap-5" : "gap-5"}`}>
          <div className="flex flex-1 flex-col gap-2 items-start w-full">
            <label className={labelCls}>이메일*</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일을 입력해주세요." required className={inputCls} />
          </div>
          <div className="flex flex-1 flex-col gap-2 items-start w-full">
            <label className={labelCls}>연락처*</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="연락처를 입력해주세요." required className={inputCls} />
          </div>
        </div>

        {/* 연락 방법 */}
        <div className="flex flex-col gap-2 items-start w-full">
          <p className={labelCls}>연락 방법*</p>
          <div className={`flex items-start w-full ${vertical ? "flex-col gap-3" : "gap-5"}`}>
            {(vertical ? contactOptionsMobile : contactOptionsDesktop).map(({ value, label }) => (
              <button key={value} type="button" onClick={() => setContactMethod(value)} className="flex gap-2 items-center min-w-[137px]">
                <RadioCircle selected={contactMethod === value} />
                <span className={labelCls}>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 추가 내용 */}
        <div className="flex flex-col gap-2 items-start w-full">
          <label className={labelCls}>추가 내용(선택)</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="궁금하신 사항을 작성해주시면 해당 내용을 중심으로 상담 도와드리겠습니다."
            className="bg-[#0b0e14] border border-[#1b1f2a] h-[160px] w-full px-4 py-[14px] rounded-2xl text-[#f8faff] text-[14px] font-medium leading-[21px] tracking-[-0.21px] placeholder-[#5E677A)] outline-none focus:border-[#3d82f5] transition-colors resize-none"
          />
        </div>

        {/* 개인정보 동의 */}
        <div className="flex items-center justify-between w-full">
          <button type="button" onClick={() => setAgreed(!agreed)} className="flex gap-2 items-center">
            <div className={`flex items-center justify-center p-0.5 rounded-[8px] size-6 transition-colors ${agreed ? "bg-[#3d82f5]" : "bg-[#5E677A]"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M14 7L8.03374 13L6 10.9548" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[#f8faff] text-[14px] font-medium leading-[21px] tracking-[-0.14px] whitespace-nowrap">개인정보 수집 및 이용 동의</span>
          </button>
          <button type="button" className="text-[#a9b1c1] text-[14px] font-medium leading-[21px] tracking-[-0.14px] whitespace-nowrap hover:text-[#f8faff] transition-colors">보기</button>
        </div>

        {status === "success" && (
          <p className="text-[#3d82f5] text-[14px] font-medium w-full text-center">상담 신청이 완료되었습니다. 1영업일 이내로 연락드리겠습니다.</p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-[14px] font-medium w-full text-center">신청 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.</p>
        )}
      </div>
    );
  }

  return (
    <section id="contact" className="w-full">
      {/* 모바일 */}
      <div className="flex md:hidden flex-col gap-8 items-center px-5 py-[104px]">
        <div className="flex flex-col gap-2 items-start w-full">
          <p className="text-[#f8faff] text-[28px] font-bold leading-[36px] tracking-[-0.42px]">가장 쉽고 편리한 교육 환경 준비</p>
          <div>
            <p className="text-[#f8faff] text-[28px] font-bold leading-[36px] tracking-[-0.42px]">상담을 신청해주시면</p>
            <p className="text-[#f8faff] text-[28px] font-bold leading-[36px] tracking-[-0.42px]">1일 이내로 답변드리겠습니다</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="backdrop-blur-[10px] bg-[#0f1219] border border-[#1b1f2a] flex flex-col gap-[52px] items-start p-6 rounded-[16px] w-full">
          <FormFields vertical />
          {submitButton}
        </form>
      </div>

      {/* 데스크탑 */}
      <div className="hidden md:flex gap-5 items-start justify-center w-full max-w-[1360px] mx-auto px-10 py-[144px]">
        <div className="flex flex-1 flex-col gap-2 items-start pt-8">
          <p className="text-[#f8faff] text-[28px] font-bold leading-9 tracking-[-0.42px]">가장 쉽고 편리한 교육 환경 준비</p>
          <div>
            <p className="text-[#f8faff] text-[28px] font-bold leading-9 tracking-[-0.42px]">상담을 신청해주시면</p>
            <p className="text-[#f8faff] text-[28px] font-bold leading-9 tracking-[-0.42px]">1영업일 이내로 답변드리겠습니다</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="backdrop-blur-[10px] bg-[#0f1219] border border-[#1b1f2a] flex flex-1 flex-col gap-[52px] items-start p-8 rounded-[32px]">
          <FormFields />
          {submitButton}
        </form>
      </div>
    </section>
  );
}
