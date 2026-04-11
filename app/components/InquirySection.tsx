"use client";

import { useState } from "react";

type Plan = "premium" | "enterprise";
type ContactMethod = "kakao" | "email" | "phone" | "sms";

function RadioCircle({ selected }: { selected: boolean }) {
  return (
    <div
      className={`size-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
        selected
          ? "border-[#3d82f5] bg-[#3d82f5]"
          : "border-[#2a2f3d] bg-transparent"
      }`}
    >
      {selected && <div className="size-2.5 rounded-full bg-white" />}
    </div>
  );
}

export default function InquirySection() {
  const [plan, setPlan] = useState<Plan>("premium");
  const [contactMethod, setContactMethod] = useState<ContactMethod>("kakao");
  const [agreed, setAgreed] = useState(false);

  return (
    <section
      id="contact"
      className="flex gap-5 items-start justify-center px-[280px] py-[144px]"
    >
      {/* 왼쪽: 텍스트 */}
      <div className="flex flex-1 flex-col gap-2 items-start pt-8">
        <p className="text-[#f8faff] text-[28px] font-bold leading-9 tracking-[-0.42px]">
          가장 쉽고 편리한 교육 환경 준비
        </p>
        <div>
          <p className="text-[#f8faff] text-[28px] font-bold leading-9 tracking-[-0.42px]">
            상담을 신청해주시면
          </p>
          <p className="text-[#f8faff] text-[28px] font-bold leading-9 tracking-[-0.42px]">
            1영업일 이내로 답변드리겠습니다
          </p>
        </div>
      </div>

      {/* 오른쪽: 폼 카드 */}
      <div className="backdrop-blur-[10px] bg-[#0f1219] border border-[#1b1f2a] flex flex-1 flex-col gap-[52px] items-start p-8 rounded-[32px]">
        {/* 필드 그룹 */}
        <div className="flex flex-col gap-5 items-start w-full">

          {/* 관심 플랜 */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="text-[#f8faff] text-[14px] font-medium leading-[21px] tracking-[-0.21px]">
              관심 플랜*
            </p>
            <div className="flex gap-5 items-start w-full">
              <button
                type="button"
                onClick={() => setPlan("premium")}
                className="flex gap-2 items-center"
              >
                <RadioCircle selected={plan === "premium"} />
                <span className="text-[#f8faff] text-[14px] font-medium leading-[21px] tracking-[-0.21px] whitespace-nowrap">
                  Premium Plan
                </span>
              </button>
              <button
                type="button"
                onClick={() => setPlan("enterprise")}
                className="flex gap-2 items-center"
              >
                <RadioCircle selected={plan === "enterprise"} />
                <span className="text-[#f8faff] text-[14px] font-medium leading-[21px] tracking-[-0.21px] whitespace-nowrap">
                  Enterprise Plan
                </span>
              </button>
            </div>
          </div>

          {/* 학원/기관명 + 담당자 성함 */}
          <div className="flex gap-5 items-start w-full">
            <div className="flex flex-1 flex-col gap-2 items-start">
              <label className="text-[#f8faff] text-[14px] font-medium leading-[21px] tracking-[-0.21px] whitespace-nowrap">
                학원 / 기관명*
              </label>
              <input
                type="text"
                placeholder="학원 / 기관명을 입력해주세요."
                className="bg-[#0b0e14] border border-[#1b1f2a] h-[52px] w-full px-4 rounded-2xl text-[#f8faff] text-[14px] font-medium leading-[21px] tracking-[-0.21px] placeholder-[#a9b1c1] outline-none focus:border-[#3d82f5] transition-colors"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2 items-start">
              <label className="text-[#f8faff] text-[14px] font-medium leading-[21px] tracking-[-0.21px] whitespace-nowrap">
                담당자 성함*
              </label>
              <input
                type="text"
                placeholder="성함을 입력해주세요."
                className="bg-[#0b0e14] border border-[#1b1f2a] h-[52px] w-full px-4 rounded-2xl text-[#f8faff] text-[14px] font-medium leading-[21px] tracking-[-0.21px] placeholder-[#a9b1c1] outline-none focus:border-[#3d82f5] transition-colors"
              />
            </div>
          </div>

          {/* 이메일 + 연락처 */}
          <div className="flex gap-5 items-start w-full">
            <div className="flex flex-1 flex-col gap-2 items-start">
              <label className="text-[#f8faff] text-[14px] font-medium leading-[21px] tracking-[-0.21px] whitespace-nowrap">
                이메일*
              </label>
              <input
                type="email"
                placeholder="이메일을 입력해주세요."
                className="bg-[#0b0e14] border border-[#1b1f2a] h-[52px] w-full px-4 rounded-2xl text-[#f8faff] text-[14px] font-medium leading-[21px] tracking-[-0.21px] placeholder-[#a9b1c1] outline-none focus:border-[#3d82f5] transition-colors"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2 items-start">
              <label className="text-[#f8faff] text-[14px] font-medium leading-[21px] tracking-[-0.21px] whitespace-nowrap">
                연락처*
              </label>
              <input
                type="tel"
                placeholder="연락처를 입력해주세요."
                className="bg-[#0b0e14] border border-[#1b1f2a] h-[52px] w-full px-4 rounded-2xl text-[#f8faff] text-[14px] font-medium leading-[21px] tracking-[-0.21px] placeholder-[#a9b1c1] outline-none focus:border-[#3d82f5] transition-colors"
              />
            </div>
          </div>

          {/* 연락 방법 */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="text-[#f8faff] text-[14px] font-medium leading-[21px] tracking-[-0.21px]">
              연락 방법*
            </p>
            <div className="flex gap-5 items-start w-full">
              {(
                [
                  { value: "kakao", label: "카카오톡" },
                  { value: "email", label: "이메일" },
                  { value: "phone", label: "전화" },
                  { value: "sms", label: "문자" },
                ] as { value: ContactMethod; label: string }[]
              ).map(({ value, label }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setContactMethod(value)}
                  className="flex flex-1 gap-2 items-center"
                >
                  <RadioCircle selected={contactMethod === value} />
                  <span className="text-[#f8faff] text-[14px] font-medium leading-[21px] tracking-[-0.21px] whitespace-nowrap">
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 추가 내용 */}
          <div className="flex flex-col gap-2 items-start w-full">
            <label className="text-[#f8faff] text-[14px] font-medium leading-[21px] tracking-[-0.21px]">
              추가 내용(선택)
            </label>
            <textarea
              placeholder="궁금하신 사항을 작성해주시면 해당 내용을 중심으로 상담 도와드리겠습니다."
              className="bg-[#0b0e14] border border-[#1b1f2a] h-[160px] w-full px-4 py-[14px] rounded-2xl text-[#f8faff] text-[14px] font-medium leading-[21px] tracking-[-0.21px] placeholder-[#a9b1c1] outline-none focus:border-[#3d82f5] transition-colors resize-none"
            />
          </div>

          {/* 개인정보 동의 */}
          <div className="flex items-center justify-between w-full">
            <button
              type="button"
              onClick={() => setAgreed(!agreed)}
              className="flex gap-2 items-center"
            >
              <div
                className={`flex items-center justify-center p-0.5 rounded-[8px] size-6 transition-colors ${
                  agreed ? "bg-[#3e00bb]" : "bg-[#1b1f2a]"
                }`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 8L6.5 11.5L13 5"
                    stroke={agreed ? "white" : "#2a2f3d"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-[#f8faff] text-[14px] font-medium leading-[21px] tracking-[-0.14px] whitespace-nowrap">
                개인정보 수집 및 이용 동의
              </span>
            </button>
            <button
              type="button"
              className="text-[#a9b1c1] text-[14px] font-medium leading-[21px] tracking-[-0.14px] whitespace-nowrap hover:text-[#f8faff] transition-colors"
            >
              보기
            </button>
          </div>
        </div>

        {/* 제출 버튼 */}
        <button
          type="submit"
          className="flex gap-1 h-[52px] items-center justify-center px-6 rounded-[32px] border border-white bg-gradient-to-r from-[#3d82f5] to-[#0360ef] w-full hover:opacity-90 transition-opacity"
        >
          {/* graduation-cap icon */}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2L1 5.5L8 9L15 5.5L8 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 7.5V11C4 11 5.5 13 8 13C10.5 13 12 11 12 11V7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 5.5V9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="text-[#f8faff] text-[14px] font-bold leading-[21px] whitespace-nowrap">
            도입 상담 신청하기
          </span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 3L11 8L6 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
