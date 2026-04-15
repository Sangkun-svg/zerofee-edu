import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "제로피 - 수수료 0% 판매 상점",
  description:
    "디지털 상품부터 링크페이지까지 수수료 0%, 판매 금액 그대로 크리에이터의 수익이 됩니다. 지금 제로피에서 무료 결제창을 만드세요.",
  icons: {
    icon: "/zerofee-favicon.png",
  },
  openGraph: {
    title: "제로피 - 수수료 0% 판매 상점",
    siteName: "제로피",
    description:
      "디지털 상품부터 링크페이지까지 수수료 0%, 판매 금액 그대로 크리에이터의 수익이 됩니다. 지금 제로피에서 무료 결제창을 만드세요.",
    type: "website",
    images: [{ url: "/zerofee-edu-og.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "제로피 - 수수료 0% 판매 상점",
    description:
      "디지털 상품부터 링크페이지까지 수수료 0%, 판매 금액 그대로 크리에이터의 수익이 됩니다. 지금 제로피에서 무료 결제창을 만드세요.",
    images: ["/zerofee-edu-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
