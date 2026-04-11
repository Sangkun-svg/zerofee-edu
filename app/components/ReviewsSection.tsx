const reviews = [
  {
    id: 1,
    name: "장문 한상우 대표",
    tag: "#수학 입시 교육 강사",
    text: "그 동안 운영한 시스템은 사람의 손에 크게 의존하는 구조라 비효율적인 부분이 많았습니다. 지금까지 구축한 시스템을 자동화시켜 강의 서비스로 만들고 싶었지만, 회사에서 IT 직군이 없는 상황이었습니다.\n\n버블박스가 현재 구축된 시스템을 분석해 기획부터 디자인, 개발까지 알아서 진행해줬고, 그 동안 구축한 시스템을 완벽히 반영해 서비스를 만들어 줬습니다. 특히 대표님이 IT PM 출신이라 그런지 저희가 잘 모르는 부분까지 알아서 처리해주셨습니다.\n\n단순히 서비스를 완성시켜서 던져주는 외주가 아니라, 하나의 전문 팀으로 케어 받는 느낌을 매번 받았습니다. 저희가 미처 고려하지 못해서 놓친 기능도 먼저 알려주시고, 리소스가 남았다면서 무료로 처리해주셨습니다.",
    initials: "장",
  },
  {
    id: 2,
    name: "범작가 김범준 대표",
    tag: "#국어 입시 교육 강사",
    text: "노코더스와 함께하면서 제 도서 판매 사이트가 실시간 리뷰와 구매 현황까지 반영되는 멋진 플랫폼으로 완성됐습니다.\n\n유저들이 배송 정보를 쉽게 확인할 수 있는 시스템까지 구현해 주셔서 정말 만족스럽습니다. 처음부터 끝까지 세심하게 신경 써주신 덕분에 더 많은 독자들과 연결될 수 있었습니다.",
    initials: "범",
  },
  {
    id: 3,
    name: "누보영어 구하은 대표",
    tag: "#영어 입시 교육 강사",
    text: "처음엔 다른 업체에 꽤 큰 비용을 들여 홈페이지를 만들었는데, 결과물이 마음에 들지 않아 다시 제작을 고민하게 됐어요. 그때 주변 추천으로 노코더스를 알게 됐고, 포트폴리오를 보자마자 \"여기다\" 싶었습니다.\n\n이번엔 VOD 강의 판매랑 학생 관리 기능이 포함된 사이트였는데, 제가 원한 기능은 다 구현됐고, 추가 요청도 빠르게 반영해주셔서 너무 편했어요. 비용도 합리적이었고요.\n\n디자인은 막연하게 걱정했는데, 센스 있게 잘 잡아주셔서 따로 수정할 필요도 없었고, 무엇보다 '무한 수정'이라는 점이 정말 인상 깊었어요.",
    initials: "누",
  },
  {
    id: 4,
    name: "다정북스 김동우 대표",
    tag: "#수학 입시 교육 강사",
    text: "연락하고 지낸 수학 강사, 땅우 쌤이 자신의 사이트를 제로피에듀를 통해 만들었다고 알려주셨습니다. 땅우 쌤이 사이트가 필요하면 제로피에듀를 찾아보라고 해서 연락을 드렸습니다.\n\n직접 저희 사이트와 제품을 서치해서 레퍼런스를 공유해주면, 관련 이미지나 댓글, 후기, 설명 등을 디자이너님이 알아서 반영해주셔서 편했습니다.\n\n개발도 빠르게 작업해 필요한 사이트를 금방 만들어 주셨습니다. 오히려 저희가 개발에 필요한 정보를 맞춰서 준비하지 못할 정도였습니다.",
    initials: "다",
  },
];

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div className="flex flex-col gap-5 items-start p-5 bg-[#0f1219] border border-[#1b1f2a] rounded-2xl shrink-0 w-[540px]">
      {/* Header */}
      <div className="flex gap-3 items-center">
        <div className="size-10 rounded-2xl bg-[#1b1f2a] border border-[#2a2f3d] flex items-center justify-center shrink-0">
          <span className="text-[#f8faff] text-[13px] font-bold">{review.initials}</span>
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-[#f8faff] text-[16px] font-bold leading-6 tracking-[-0.4px]">
            {review.name}
          </p>
          <p className="text-[#a9b1c1] text-[12px] font-medium leading-4 tracking-[-0.3px]">
            {review.tag}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-5 items-end w-full">
        <p className="text-[#f8faff] text-[14px] font-medium leading-[21px] tracking-[-0.35px] whitespace-pre-wrap w-full">
          {review.text}
        </p>
        <button className="flex gap-1 items-center">
          <span className="text-[#a9b1c1] text-[14px] font-bold leading-[21px] tracking-[-0.35px]">
            상세 리뷰 보기
          </span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 5L12.5 10L7.5 15" stroke="#a9b1c1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  const doubled = [...reviews, ...reviews];

  return (
    <section className="flex flex-col gap-[52px] items-center py-[144px] overflow-hidden">
      <h2 className="text-[#f8faff] text-[28px] font-bold leading-9 tracking-[-0.42px] text-center shrink-0">
        학원 및 강사님 후기
      </h2>

      <div className="w-full overflow-hidden">
        <div className="flex gap-[9px] animate-marquee w-max">
          {doubled.map((review, i) => (
            <ReviewCard key={`${review.id}-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
