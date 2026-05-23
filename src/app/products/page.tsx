import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "제품 소개",
};

export default function ProductsPage() {
  return (
    <main className="content-page">
      <section className="page-hero compact">
        <p className="eyebrow">products</p>
        <h1>제품은 작게 시작하고, 사용자의 흐름에 맞춰 다듬습니다.</h1>
        <p>
          현재 <span className="brand-word">sodajellyfactory</span>는 첫 번째
          서비스인 원두로를 준비하고 있습니다.
        </p>
      </section>

      <section className="product-list" aria-label="제품 목록">
        <article className="product-item">
          <div>
            <p className="status-pill">준비 중</p>
            <h2>원두로</h2>
          </div>
          <p>
            <span className="brand-word">sodajellyfactory</span>의 첫 번째
            서비스입니다. 자세한 서비스 소개와 출시 정보는 준비가 끝난 뒤 별도
            안내할 예정입니다.
          </p>
        </article>
      </section>
    </main>
  );
}
