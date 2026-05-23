"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import type { PointerEvent } from "react";

const values = [
  {
    title: "말랑한 접근",
    body: "처음부터 딱딱하게 굳히지 않고, 사용자와 상황에 맞춰 유연하게 개선합니다.",
    metric: "flex",
  },
  {
    title: "선명한 전달",
    body: "복잡한 문제를 가볍게 넘기지 않고, 이해하기 쉬운 제품 경험으로 정리합니다.",
    metric: "clear",
  },
  {
    title: "청량한 아이디어",
    body: "작지만 기억에 남는 상호작용과 산뜻한 흐름을 제품 안에 담습니다.",
    metric: "fresh",
  },
];

const fadeUp = {
  hidden: { y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function LandingPage() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 120, damping: 18, mass: 0.35 });
  const smoothY = useSpring(pointerY, { stiffness: 120, damping: 18, mass: 0.35 });
  const rotateY = useTransform(smoothX, [-1, 1], [-12, 12]);
  const rotateX = useTransform(smoothY, [-1, 1], [10, -10]);
  const jellyX = useTransform(smoothX, [-1, 1], [-18, 18]);
  const jellyY = useTransform(smoothY, [-1, 1], [-14, 14]);
  const shineX = useTransform(smoothX, [-1, 1], [22, -22]);
  const bubbleX = useTransform(smoothX, [-1, 1], [18, -18]);
  const bubbleY = useTransform(smoothY, [-1, 1], [14, -14]);
  const floatTransition = {
    duration: 5.2,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut" as const,
  };
  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    pointerX.set((x - 0.5) * 2);
    pointerY.set((y - 0.5) * 2);
  };
  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <main>
      <section className="hero-section">
        <motion.div
          className="hero-visual"
          aria-hidden="true"
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          initial={{ scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ rotateX, rotateY }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="hero-bubble bubble-one"
            style={{ x: bubbleX, y: bubbleY }}
            animate={{ scale: [1, 1.08] }}
            transition={floatTransition}
          />
          <motion.span
            className="hero-bubble bubble-two"
            style={{ x: bubbleY, y: bubbleX }}
            animate={{ scale: [1.04, 0.94] }}
            transition={floatTransition}
          />
          <motion.span
            className="hero-bubble bubble-three"
            style={{ x: bubbleX, y: bubbleY }}
            animate={{ scale: [0.96, 1.08] }}
            transition={floatTransition}
          />
          <motion.div
            className="jelly-stage"
            style={{ x: jellyX, y: jellyY }}
            animate={{ scale: [1, 1.025] }}
            transition={floatTransition}
          >
            <motion.svg
              className="main-jelly"
              viewBox="0 0 620 420"
              role="img"
              aria-label="파란 소다 젤리"
            >
              <defs>
                <linearGradient id="jellyBody" x1="0.18" x2="0.82" y1="0.08" y2="0.9">
                  <stop offset="0" stopColor="#cbf7ff" />
                  <stop offset="0.42" stopColor="#65d6ff" />
                  <stop offset="1" stopColor="#1aa8ee" />
                </linearGradient>
                <radialGradient id="jellyLight" cx="0.36" cy="0.22" r="0.72">
                  <stop offset="0" stopColor="#ffffff" stopOpacity="0.94" />
                  <stop offset="0.22" stopColor="#d9fbff" stopOpacity="0.7" />
                  <stop offset="1" stopColor="#4fc8ff" stopOpacity="0" />
                </radialGradient>
                <filter id="jellyShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="26" stdDeviation="20" floodColor="#0685bd" floodOpacity="0.22" />
                </filter>
              </defs>
              <path
                className="jelly-base"
                d="M102 322C92 258 120 116 202 92c36-11 63 4 82 22 28-30 78-34 116-8 22-14 56-17 88-2 62 29 85 149 67 218-12 43-430 45-453 0Z"
                fill="url(#jellyBody)"
                filter="url(#jellyShadow)"
              />
              <path
                d="M117 309C111 247 139 134 206 112c36-12 61 7 77 25 28-31 78-31 112-5 25-18 59-18 87-1 47 29 68 125 52 178-37 17-368 17-417 0Z"
                fill="url(#jellyLight)"
                opacity="0.8"
              />
              <motion.g style={{ x: shineX }}>
                <path
                  d="M154 286c-24-38-5-133 38-155 21-10 42 7 32 29-16 33-39 63-35 118 2 28-21 31-35 8Z"
                  fill="#ffffff"
                  opacity="0.64"
                />
                <path
                  d="M442 280c9-68-12-112-39-142-18-21 8-44 34-26 48 33 67 132 52 173-9 25-51 25-47-5Z"
                  fill="#ffffff"
                  opacity="0.38"
                />
                <ellipse cx="246" cy="120" rx="30" ry="10" fill="#ffffff" opacity="0.6" transform="rotate(-12 246 120)" />
              </motion.g>
              <g className="jelly-dots">
                <circle cx="266" cy="228" r="24" />
                <circle cx="338" cy="221" r="21" />
                <circle cx="314" cy="274" r="22" />
                <circle cx="225" cy="285" r="18" />
                <circle cx="382" cy="278" r="17" />
                <circle cx="288" cy="184" r="13" />
                <circle cx="362" cy="166" r="16" />
                <circle cx="250" cy="165" r="9" />
              </g>
              <path
                d="M102 322C92 258 120 116 202 92c36-11 63 4 82 22 28-30 78-34 116-8 22-14 56-17 88-2 62 29 85 149 67 218-12 43-430 45-453 0Z"
                fill="none"
                stroke="#079eed"
                strokeWidth="14"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            soft digital product studio
          </motion.p>
          <motion.h1 variants={fadeUp}>
            말랑하게 만들고
            <br />
            선명하게 전달하며
            <br />
            청량한 아이디어를 냅니다.
          </motion.h1>
          <motion.p className="hero-description" variants={fadeUp}>
            <span className="brand-word">sodajellyfactory</span>는 아직 작은
            실험실에 가깝지만, 사용자에게 필요한 디지털 제품을 가볍고 유연하게
            만들어 가고 있습니다.
          </motion.p>
          <motion.div className="hero-actions" variants={fadeUp}>
            <Link className="primary-action" href="/products">
              준비 중인 제품 보기
            </Link>
            <Link className="secondary-action" href="/privacy">
              정책 안내 확인
            </Link>
          </motion.div>
        </motion.div>
        <div className="scroll-cue" aria-hidden="true">
          <span />
          <strong>Scroll</strong>
        </div>
      </section>

      <motion.section
        className="section-panel"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.28 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div className="section-heading" variants={fadeUp}>
          <p className="eyebrow">what we make</p>
          <h2>작게 시작해 또렷하게 완성합니다.</h2>
        </motion.div>
        <div className="value-grid">
          {values.map((value) => (
            <motion.article
              className="value-card"
              key={value.title}
              variants={fadeUp}
              whileHover={{ y: -8, rotate: -0.6 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
            >
              <span className="value-chip">{value.metric}</span>
              <h3>{value.title}</h3>
              <p>{value.body}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="split-section feature-strip"
        initial={{ y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div>
          <p className="eyebrow">first service</p>
          <h2>첫 번째 서비스, 원두로를 준비하고 있습니다.</h2>
        </div>
        <p>
          원두로는 <span className="brand-word">sodajellyfactory</span>가 준비
          중인 첫 서비스입니다. 브랜드의 중심은 청량하고 유연한 제품 제작에
          두고, 원두로는 출시 전 단계의 첫 결과물로 짧게 소개합니다.
        </p>
      </motion.section>
    </main>
  );
}
