import type { Metadata } from "next";
import Link from "next/link";
import "@fontsource/bagel-fat-one";
import "@fontsource/ibm-plex-sans-kr/400.css";
import "@fontsource/ibm-plex-sans-kr/600.css";
import "@fontsource/ibm-plex-sans-kr/700.css";
import "./globals.css";

const navigation = [
  { href: "/", label: "홈" },
  { href: "/products", label: "제품" },
  { href: "/privacy", label: "개인정보" },
  { href: "/refund", label: "환불" },
  { href: "/payment", label: "결제" },
  { href: "/contact", label: "문의" },
];

export const metadata: Metadata = {
  title: {
    default: "sodajellyfactory",
    template: "%s | sodajellyfactory",
  },
  description:
    "말랑하게 만들고, 선명하게 전달하며, 청량한 아이디어를 내는 디지털 제품 스튜디오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <header className="site-header">
          <Link className="brand-link" href="/" aria-label="sodajellyfactory 홈">
            <span className="brand-mark" aria-hidden="true" />
            <span className="brand-word brand-word-logo">SODAJELLYFACTORY</span>
          </Link>
          <nav className="site-nav" aria-label="주요 메뉴">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <div>
            <strong className="brand-word brand-word-logo">SODAJELLYFACTORY</strong>
            <p>유연한 디지털 제품을 작게 만들고 선명하게 다듬습니다.</p>
          </div>
          <a href="mailto:sodajellyfactory@gmail.com">
            sodajellyfactory@gmail.com
          </a>
        </footer>
      </body>
    </html>
  );
}
