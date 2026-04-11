import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "zerofee edu",
  description: "교육 결제 플랫폼 zerofee edu",
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
