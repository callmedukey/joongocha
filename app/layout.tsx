import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/layout/Footer";

const Pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "K중고차수출",
  description:
    "K중고차수출은 중고차 해외 수출 전문 업체로, 한국 중고차의 수출 절차, 비용, 등 자세한 상담을 도와드리며, 전 세계 다양한 국가에 신속하게 중고차를 수출합니다.",
  keywords: [
    "중고차 수출",
    "중고차 해외 수출",
    "중고차 판매",
    "한국 중고차 수출",
    "해외 중고차 거래",
    "수출용 중고차",
    "중고차 수출업체",
    "한국 자동차 수출",
    "중고차 수출 상담",
    "중고차 수출 절차",
    "자동차 수출",
    "수출 자동차 매입",
    "중고차 딜러 수출",
    "해외 바이어 중고차",
    "중고차 수출 국가",
    "중고차 수출 비용",
    "중고차 수출 세금",
    "중고차 수출 전문 업체",
    "중고차 수출 가격 비교",
    "한국 중고차 시장",
    "중고차 수출 문의",
    "중고차 수출 서비스",
    "중고차 수출 서류",
    "중고차 수출 물류",
    "중고차 수출 비용 절감",
  ],
  openGraph: {
    images: "https://kexportcar.com/logo.png",
    type: "website",
    url: `https://kexportcar.com`,
    title: `K중고차수출`,
    description:
      "K중고차수출은 한국의 중고차를 전 세계로 수출하는 전문 업체입니다. 신속하고 신뢰할 수 있는 수출 절차를 통해 고객에게 최고의 서비스를 제공합니다.",
  },
  icons: { icon: "/favicon.ico" },
  other: {
    "naver-site-verification": "123",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${Pretendard.variable} antialiased break-keep isolate font-pretendard`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
