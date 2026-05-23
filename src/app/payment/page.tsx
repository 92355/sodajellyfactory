import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "결제 정책 안내",
};

export default function PaymentPage() {
  return (
    <main className="content-page">
      <section className="page-hero">
        <p className="eyebrow">payment</p>
        <h1>결제 정책 안내</h1>
        <p>
          현재 <span className="brand-word">sodajellyfactory</span> 사이트에는
          결제 기능이 없습니다. 향후 유료 기능이 제공될 경우 결제 방식, 청구
          기준, 영수증 안내를 별도로 고지합니다.
        </p>
      </section>

      <section className="policy-section">
        <h2>결제 수단</h2>
        <p>
          정식 서비스에서 사용할 결제 수단과 결제대행사는 아직 확정되지
          않았습니다.
        </p>
      </section>
      <section className="policy-section">
        <h2>청구 기준</h2>
        <p>
          단건 결제, 구독 결제, 무료 체험 등 과금 방식이 결정되면 사용자가 결제
          전 확인할 수 있도록 명확히 표시합니다.
        </p>
      </section>
      <section className="policy-section">
        <h2>결제 문의</h2>
        <p>
          결제 관련 문의는{" "}
          <a href="mailto:sodajellyfactory@gmail.com">
            sodajellyfactory@gmail.com
          </a>
          으로 받을 예정입니다.
        </p>
      </section>
    </main>
  );
}
