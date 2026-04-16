import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  other: {
    "naver-site-verification": "22fa6d23964b1a681b277babfdb92dc7e7f49d0e",
  },
  title: "제로피에듀",
  description:
    "VOD 인강 수강, AI 수강생 관리, 결제 알림톡 자동화까지 제로피에듀에서 한 번에 완성하세요. 온라인 학원, 인강 플랫폼, AI 교육, 학원 자동화 솔루션 제로피에듀",
  icons: {
    icon: "/images/zerofee-favicon.png",
  },
  openGraph: {
    title: "제로피에듀",
    siteName: "제로피에듀",
    description:
      "VOD 인강 수강, AI 수강생 관리, 결제 알림톡 자동화까지 제로피에듀에서 한 번에 완성하세요. 온라인 학원, 인강 플랫폼, AI 교육, 학원 자동화 솔루션 제로피에듀",
    type: "website",
    images: [{ url: "/images/zerofee-edu-og.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "제로피에듀",
    description:
      "VOD 인강 수강, AI 수강생 관리, 결제 알림톡 자동화까지 제로피에듀에서 한 번에 완성하세요. 온라인 학원, 인강 플랫폼, AI 교육, 학원 자동화 솔루션 제로피에듀",
    images: ["/images/zerofee-edu-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-7HYQPRP75Y" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7HYQPRP75Y');
        `}</Script>
      </body>
    </html>
  );
}
