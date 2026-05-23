import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보 처리방침 안내",
};

export default function PrivacyPage() {
  return (
    <main className="content-page">
      <PolicyHero
        eyebrow="privacy"
        title="개인정보 처리방침 안내"
        description="이 문서는 서비스 정식 운영 전 안내이며, 실제 개인정보 처리방침은 서비스 출시 시점의 수집 항목과 운영 방식에 맞춰 확정됩니다."
      />
      <PolicySection title="수집 예정 정보">
        <p>
          현재 사이트는 문의를 위해 이메일 링크만 제공합니다. 별도 입력 폼이나
          회원가입 기능은 제공하지 않습니다.
        </p>
      </PolicySection>
      <PolicySection title="이용 목적">
        <p>
          향후 개인정보를 수집하는 기능이 추가될 경우, 문의 응대, 서비스 제공,
          결제 처리, 운영 공지 등 명확한 목적 범위 안에서만 이용합니다.
        </p>
      </PolicySection>
      <PolicySection title="보관 및 파기">
        <p>
          정식 서비스 운영 전까지 구체적인 보관 기간은 확정되지 않았습니다. 출시
          전 실제 수집 항목에 맞춰 보관 기간과 파기 기준을 명시하겠습니다.
        </p>
      </PolicySection>
    </main>
  );
}

function PolicyHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-hero">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="policy-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
