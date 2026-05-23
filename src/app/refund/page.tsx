import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "환불 정책 안내",
};

export default function RefundPage() {
  return (
    <main className="content-page">
      <section className="page-hero">
        <p className="eyebrow">refund</p>
        <h1>환불 정책 안내</h1>
        <p>
          이 문서는 서비스 정식 운영 전 안내입니다. 실제 환불 기준은 판매 상품,
          결제 방식, 제공 범위가 확정된 뒤 구체적으로 고지됩니다.
        </p>
      </section>

      <section className="policy-section">
        <h2>기본 방향</h2>
        <p>
          결제 기능이 도입될 경우, 사용자가 결제 전 환불 가능 조건과 제한 사항을
          명확히 확인할 수 있도록 안내합니다.
        </p>
      </section>
      <section className="policy-section">
        <h2>환불 처리</h2>
        <p>
          환불 요청 채널, 처리 기간, 부분 환불 가능 여부는 실제 서비스 정책과
          결제대행사 기준에 맞춰 확정합니다.
        </p>
      </section>
      <section className="policy-section">
        <h2>문의</h2>
        <p>
          환불 관련 문의는{" "}
          <a href="mailto:sodajellyfactory@gmail.com">
            sodajellyfactory@gmail.com
          </a>
          으로 연락할 수 있습니다.
        </p>
      </section>
    </main>
  );
}
