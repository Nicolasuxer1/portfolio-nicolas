"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Hero() {
  return (
    <div className="relative overflow-hidden">

      {/* ── Layer 0: Gradient orbs ───────────────────────────────────────
          High opacity at center, fully transparent at edges via radial-gradient.
          blur() diffuses each orb into a soft ambient glow.
          Three different drift durations prevent the pattern from repeating.
      ─────────────────────────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {/* Orb 1 — violet/indigo, top-right */}
        <div
          className="animate-orb-1 absolute"
          style={{
            top: "-30%",
            right: "-10%",
            width: "70vw",
            height: "80vh",
            background:
              "radial-gradient(ellipse at center, rgba(70, 33, 255, 0.55) 30%, rgba(70, 43, 208, 0.15) 70%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Orb 2 — deep blue, bottom-left */}
        <div
          className="animate-orb-2 absolute"
          style={{
            bottom: "-20%",
            left: "-10%",
            width: "60vw",
            height: "65vh",
            background:
              "radial-gradient(ellipse at center, rgba(50, 90, 210, 0.45) 0%, rgba(50, 90, 210, 0.12) 70%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Orb 3 — violet, upper-left — tertiary warmth */}
        <div
          className="animate-orb-3 absolute"
          style={{
            top: "5%",
            left: "-8%",
            width: "45vw",
            height: "55vh",
            background:
              "radial-gradient(ellipse at center, rgba(140, 60, 200, 0.35) 20%, rgba(140, 60, 200, 0.08) 40%, transparent 70%)",
            filter: "blur(72px)",
          }}
        />
      </div>

      {/* ── Layer 1: Thin noise-reduction overlay ───────────────────────
          Light veil to keep the canvas dark and text contrast safe.
          bg-canvas/40 = rgba(8,8,9, 0.40) — lets orbs breathe through.
      ─────────────────────────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 bg-canvas/40" aria-hidden />

      {/* ── Layer 2: Content ─────────────────────────────────────────── */}
      <section className="relative z-10 mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 pb-24 pt-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-8"
        >
          {/* Available pill */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1.5 text-xs font-medium text-text-secondary backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
              OPEN TO WORK
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="max-w-2xl text-balance text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl"
          >
            Design that{" "}
            <span className="italic text-accent">ships, </span>
            not just
            <br />impresses.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="max-w-xl text-base leading-relaxed text-text-secondary"
          >
            I&apos;m Nicolás Vargas — a Product Designer focused on SaaS B2B. I design
            systems, collaborate closely with developers, and turn complex product
            problems into interfaces that actually get used.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-md bg-text-primary px-4 py-2.5 text-sm font-medium text-canvas transition-opacity hover:opacity-80"
            >
              View Case Studies
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-md px-4 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-nav-hover hover:text-text-primary"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
