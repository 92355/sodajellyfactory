import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "문의",
};

export default function ContactPage() {
  return (
    <main className="content-page">
      <section className="page-hero contact-hero">
        <p className="eyebrow">contact</p>
        <h1>궁금한 점은 이메일로 남겨 주세요.</h1>
        <p>
          서비스 준비 상황, 제품 문의, 정책 관련 문의는 아래 이메일로 연락할 수
          있습니다.
        </p>
        <a className="primary-action" href="mailto:sodajellyfactory@gmail.com">
          sodajellyfactory@gmail.com
        </a>
      </section>
    </main>
  );
}
