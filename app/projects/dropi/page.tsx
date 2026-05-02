"use client";

import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

/* ─── Sub-components ────────────────────────────────────────────────────── */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-2 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
      {children}
    </h2>
  );
}

function SectionSubtitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base font-medium text-text-muted">{children}</p>
  );
}

function Divider() {
  return <hr className="border-border" />;
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border-l-4 bg-surface p-5 text-sm leading-relaxed text-text-secondary" style={{ borderColor: "#ff6f00" }}>
      {children}
    </div>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-surface">
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-muted">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border last:border-0 odd:bg-canvas even:bg-surface/40">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-text-secondary">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MomentHeader({ number, label, question }: { number: string; label: string; question: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className="rounded-full px-3 py-1 text-xs font-bold text-white" style={{ background: "#ff6f00" }}>
          Moment {number}
        </span>
        <span className="text-base font-semibold text-text-primary">{label}</span>
      </div>
      <p className="text-sm italic text-text-muted">
        <span className="font-medium not-italic text-text-secondary">Key question: </span>{question}
      </p>
    </div>
  );
}

function BeforeAfter({ before, after }: { before: string; after: string }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="rounded-xl border border-border bg-surface p-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-muted">Before</p>
        <p className="text-sm leading-relaxed text-text-secondary">{before}</p>
      </div>
      <div className="rounded-xl border p-4" style={{ borderColor: "rgba(255,111,0,0.4)", background: "rgba(255,111,0,0.04)" }}>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: "#ff6f00" }}>After</p>
        <p className="text-sm leading-relaxed text-text-secondary">{after}</p>
      </div>
    </div>
  );
}

function StatBlock({ stat, description, source }: { stat: string; description: string; source: string }) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-5">
      <p className="text-2xl font-bold" style={{ color: "#ff6f00" }}>{stat}</p>
      <p className="text-sm leading-relaxed text-text-secondary">{description}</p>
      <p className="text-xs text-text-muted">Source: {source}</p>
    </div>
  );
}

type CarouselPhase = "before" | "after";

type CarouselSlide = {
  src: string;
  phase: CarouselPhase;
};

function PhaseTag({ phase }: { phase: CarouselPhase }) {
  const isBefore = phase === "before";
  return (
    <span
      className="inline-flex items-center rounded-[4px] px-3 py-1 text-xs font-semibold uppercase tracking-wide"
      style={
        isBefore
          ? {
              color: "rgb(254 226 226)",
              backgroundColor: "rgb(127 29 29)",
              border: "1px solid rgb(248 113 113)",
            }
          : {
              color: "rgb(209 250 229)",
              backgroundColor: "rgb(6 78 59)",
              border: "1px solid rgb(52 211 153)",
            }
      }
    >
      {isBefore ? "Before" : "After"}
    </span>
  );
}

function Carousel({ slides, interval = 4000 }: { slides: CarouselSlide[]; interval?: number }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval);
    return () => clearInterval(id);
  }, [paused, slides.length, interval]);

  const current = slides[index];

  return (
    <div className="flex flex-col gap-3">
      <div
        className="relative overflow-hidden rounded-xl border border-border bg-black"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="absolute left-3 top-3 z-10">
          <PhaseTag phase={current.phase} />
        </div>
        <img
          src={current.src}
          alt={`Slide ${index + 1}`}
          className="w-full object-contain"
          style={{ maxHeight: 520 }}
        />
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
          aria-label="Previous"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
          aria-label="Next"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
        </button>
      </div>
      <div className="flex items-center justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            title={slide.phase === "before" ? "Before" : "After"}
            className="h-1.5 shrink-0 rounded-[4px] transition-[width,background-color] duration-200"
            style={{
              width: i === index ? 20 : 6,
              backgroundColor:
                i === index ? "#ff6f00" : "rgb(var(--text-secondary))",
            }}
            aria-label={`Go to slide ${i + 1} (${slide.phase})`}
          />
        ))}
      </div>
    </div>
  );
}

function DemoBlock({ title, description, src, height }: { title: string; description: string; src: string; height: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setIsFullscreen(false);
    } else {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true));
      document.addEventListener("fullscreenchange", () => {
        if (!document.fullscreenElement) setIsFullscreen(false);
      }, { once: true });
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-text-primary">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-text-secondary">{description}</p>
        </div>
        <button
          onClick={toggleFullscreen}
          className="flex shrink-0 items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-medium text-text-secondary transition-colors hover:border-border-strong hover:text-text-primary"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isFullscreen ? (
              <>
                <path d="M8 3v3a2 2 0 0 1-2 2H3" /><path d="M21 8h-3a2 2 0 0 1-2-2V3" />
                <path d="M3 16h3a2 2 0 0 1 2 2v3" /><path d="M16 21v-3a2 2 0 0 1 2-2h3" />
              </>
            ) : (
              <>
                <path d="M3 7V3h4" /><path d="M17 3h4v4" /><path d="M21 17v4h-4" /><path d="M7 21H3v-4" />
              </>
            )}
          </svg>
          {isFullscreen ? "Salir" : "Pantalla completa"}
        </button>
      </div>
      <div ref={containerRef} className="overflow-hidden rounded-xl bg-black">
        <iframe
          src={src}
          width="100%"
          height={height}
          style={{ border: "none", display: "block" }}
          title={title}
          allowFullScreen
        />
      </div>
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */

const fade: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function DropiPage() {
  return (
    <main className="min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pb-20 pt-28" style={{ background: "linear-gradient(160deg, #0f0a00 0%, #1a0d00 50%, #0a0a09 100%)" }}>
        <div className="pointer-events-none absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse 60% 50% at 70% 40%, #ff6f00, transparent)" }} />
        <div className="relative mx-auto max-w-4xl px-6">
          <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col gap-8">
            <motion.div variants={fade}>
              <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white/80">
                ← Back
              </Link>
            </motion.div>

            <motion.div variants={fade} className="flex flex-wrap items-center gap-3">
              <span className="rounded-full px-3 py-1 text-xs font-semibold tracking-wide text-white" style={{ background: "#ff6f00" }}>
                Product Design Challenge
              </span>
              <span className="text-xs text-white/40">April 2026 · 4 days</span>
            </motion.div>

            <motion.div variants={fade}>
              <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Activation is not<br />configuration.
              </h1>
              <p className="mt-4 text-lg text-white/50">A strategy to increase brand activation rates at Dropi</p>
            </motion.div>

            <motion.div variants={fade} className="flex flex-wrap gap-6 border-t border-white/10 pt-6 text-sm text-white/50">
              <div><span className="block text-white/30 text-xs uppercase tracking-wider mb-1">Role</span>Senior Product Designer (End-to-End)</div>
              <div><span className="block text-white/30 text-xs uppercase tracking-wider mb-1">Duration</span>4 days</div>
              <div><span className="block text-white/30 text-xs uppercase tracking-wider mb-1">Scope</span>Research · Strategy · UX · Measurement · Project Plan</div>
              <div><span className="block text-white/30 text-xs uppercase tracking-wider mb-1">Status</span>Completed challenge</div>
            </motion.div>

            <motion.div variants={fade}>
              <div className="rounded-xl border p-6" style={{ borderColor: "rgba(255,111,0,0.3)", background: "rgba(255,111,0,0.06)" }}>
                <p className="text-2xl font-semibold leading-snug text-white sm:text-3xl">
                  Of every 100 brands that registered on Dropi,{" "}
                  <span style={{ color: "#ff6f00" }}>fewer than 20 ever became active.</span>
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  An 80%+ loss of potential ecosystem value. Not from a product that doesn&apos;t work, but from an experience that fails to communicate why it matters. This case study documents how I approached that problem.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-4xl px-6 pb-32 pt-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-20"
        >

          {/* Before assuming causes, I had to live it. */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <div>
              <SectionTitle>Before assuming causes, I had to live it.</SectionTitle>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Before proposing anything, I went through the registration flow as a new brand. The frustration wasn&apos;t theoretical. It was structural.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-5">
              {[
                "Why does every step open a new tab? Am I outside the app?",
                "What does activation mean? Can't I start selling right now?",
                "I got the welcome email, but it doesn't feel like one. It's just plain text.",
              ].map((quote) => (
                <p key={quote} className="text-sm italic text-text-secondary">
                  &ldquo;{quote}&rdquo;
                </p>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["6", "main tasks"],
                ["45", "fields"],
                ["40–50 min", "to complete"],
                ["0", "perceived value"],
              ].map(([num, label]) => (
                <div key={label} className="flex flex-col gap-1 rounded-xl border border-border bg-surface p-4 text-center">
                  <span className="text-xl font-bold" style={{ color: "#ff6f00" }}>{num}</span>
                  <span className="text-xs text-text-muted">{label}</span>
                </div>
              ))}
            </div>
            <Divider />
          </motion.section>

          {/* The problem has a name. Two, actually. */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <div>
              <SectionTitle>The problem has a name. Two, actually.</SectionTitle>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-surface p-5">
                <p className="mb-2 text-sm font-bold text-text-primary">Onboarding</p>
                <p className="text-sm leading-relaxed text-text-secondary">
                  What happens in the first few minutes. Modals, preferences, welcome screen.{" "}
                  <strong className="text-text-primary">It exists, but it doesn&apos;t prepare the user for what comes next.</strong>
                </p>
              </div>
              <div className="rounded-xl border p-5" style={{ borderColor: "rgba(255,111,0,0.4)", background: "rgba(255,111,0,0.04)" }}>
                <p className="mb-2 text-sm font-bold text-text-primary">Activation</p>
                <p className="text-sm leading-relaxed text-text-secondary">
                  The real process: 6 steps, 45 fields, 40–50 minutes. Presented as one continuous task{" "}
                  <strong className="text-text-primary">when it should happen across 4 separate moments, each triggered by a real business event.</strong>
                </p>
              </div>
            </div>
            <Callout>
              Rethinking activation doesn&apos;t mean simplifying it. It means separating it at the right moment.
            </Callout>
            <Divider />
          </motion.section>

          {/* The story of every brand that never came back */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <div>
              <SectionTitle>The story of every brand that never came back</SectionTitle>
              <SectionSubtitle>Six steps. A steady emotional decline. Not a single moment of return.</SectionSubtitle>
            </div>
            <Table
              headers={["#", "Stage", "Action", "Thought", "State"]}
              rows={[
                ["1", "Discovery", "Sees an ad, arrives at Dropi with expectations", '"This sounds good, I want to start selling"', "😊 Hopeful"],
                ["2", "Registration + onboarding", "Completes preference modals", '"I guess at the end of this I can sell"', "😐 Neutral"],
                ["3", "Finds the checklist", "Sees 6 steps with no context for why", '"Do I have to do all of this before I can sell?"', "🫥 Shocked"],
                ["4", "Tries to complete", "Opens new tabs, fills 45 fields", '"When will I actually be able to sell?"', "😤 Frustrated"],
                ["5", "Abandons or pushes through", "Closes the session. Doesn't return", '"Maybe this isn\'t for me. Maybe another app"', "😞 Exhausted"],
                ["6", "Randomly checks email", "Dropi comes to mind again, but with no value", '"OK… that\'s it?"', "🫤 Disappointed"],
              ]}
            />
            <Callout>
              The problem isn&apos;t the user. It&apos;s that we ask for everything, all at once, before giving them anything in return.
            </Callout>
            <Divider />
          </motion.section>

          {/* The problem isn't the product */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <div>
              <SectionTitle>The problem isn&apos;t the product.</SectionTitle>
              <SectionSubtitle>It&apos;s when and how we ask the user to trust us.</SectionSubtitle>
            </div>
            <div className="rounded-xl border border-border bg-surface p-5">
              <p className="text-sm leading-relaxed text-text-secondary">
                Dropi&apos;s activation rate is below 20%. The SaaS average is 37.5%. The gap isn&apos;t in the features,{" "}
                <strong className="text-text-primary">it&apos;s in the time to first perceived value.</strong>
              </p>
            </div>
            <img
              src="/dropi/image1.jpg"
              alt="Drop-off funnel by stage"
              className="w-full rounded-xl border border-border"
            />
            <div className="grid gap-4 sm:grid-cols-3">
              <StatBlock
                stat="75%"
                description="of users abandon a product in the first week if onboarding doesn't meet their expectations."
                source="Nielsen Norman Group"
              />
              <StatBlock
                stat="3×"
                description="more likely to be retained: users who experience core value within 5 to 15 minutes vs. those who wait more than 30 minutes."
                source="Amplitude, via SaaSFactor"
              />
              <StatBlock
                stat="3×"
                description="more abandonment in products with a time to first value over 30 minutes vs. those that deliver it in under 10 minutes."
                source="Reforge, via SaaSFactor"
              />
            </div>
            <Divider />
          </motion.section>

          {/* What the platforms that actually activate users do well */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <div>
              <SectionTitle>What the platforms that actually activate users do well</SectionTitle>
            </div>
            <Table
              headers={["", "Shopify", "Tiendanube", "Dropi (current)"]}
              rows={[
                ["Steps before first value", "2", "3", "6"],
                ["Does step 1 generate visible value?", "✅", "✅", "❌"],
                ["Segmented post-registration communication?", "✅", "✅", "⚠️"],
                ["Quick win in under 15 min?", "✅", "⚠️", "❌"],
                ["Does the aha moment happen in the first session?", "✅", "✅", "❌"],
              ]}
            />
            <Divider />
          </motion.section>

          {/* The 4 moments intro */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <Callout>
              <strong>Activation is not configuration.</strong> It&apos;s giving the user a reason to stay before asking them to complete everything.
              <br /><br />
              That&apos;s why I split this strategy into <strong>4 moments</strong>, each activated with precise timing, responding to a real business event, not an arbitrary calendar.
            </Callout>
            <Divider />
          </motion.section>

          {/* Moment 1 */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <MomentHeader
              number="1"
              label="Personalized onboarding"
              question="How do I give the onboarding the brand's personality, so it doesn't feel like a generic sequence?"
            />
            <BeforeAfter
              before="Generic modal. No context, no visible consequence."
              after="3 questions + real-time preview. The brand comes to life before the first form."
            />
            <Carousel
              slides={[
                { src: "/dropi/momento1/m1.jpg", phase: "before" },
                { src: "/dropi/momento1/m2.jpg", phase: "before" },
                { src: "/dropi/momento1/m3.jgp.png", phase: "before" },
                { src: "/dropi/momento1/m4.jpg", phase: "before" },
                { src: "/dropi/momento1/m5.jpg", phase: "after" },
              ]}
            />
            <Divider />
          </motion.section>

          {/* Moment 2 */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <MomentHeader
              number="2"
              label="Warehouse + product"
              question="What are the minimum viable steps to give the user something in return as quickly as possible?"
            />
            <div className="rounded-lg border border-border bg-surface p-4 text-sm text-text-secondary">
              <span className="font-medium text-text-primary">Product decision: </span>
              Include Warehouse + Product <strong>inside</strong> the initial onboarding. The user goes from 6 isolated steps to 2 integrated steps before their first perceived value.
            </div>
            <BeforeAfter
              before="Warehouse and product lived in separate tabs, after onboarding, with no guidance."
              after="Activation no longer starts after registration. It's part of it."
            />
            <Carousel
              slides={[
                { src: "/dropi/momento2/m2.1.jpg", phase: "before" },
                { src: "/dropi/momento2/m2.2.jpg", phase: "before" },
                { src: "/dropi/momento2/m2.3.jpg", phase: "after" },
                { src: "/dropi/momento2/m2.4.jpg", phase: "after" },
              ]}
            />
            <Divider />
          </motion.section>

          {/* Moment 3 */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <MomentHeader
              number="3"
              label="Aha moment"
              question="When does the user first understand that Dropi is a real network, not just another platform?"
            />
            <div className="rounded-lg border border-border bg-surface p-4 text-sm text-text-secondary">
              <span className="font-medium text-text-primary">Product decision: </span>
              This moment is not decorative. It&apos;s the emotional anchor that justifies all the effort that came before, and reduces post-configuration abandonment.
            </div>
            <BeforeAfter
              before="The user completes 6 steps and receives no signal that anything changed. They don't know if anyone can see their products or whether the effort was worth it."
              after="Immediately after publishing their first product, they see in real time how many active dropshippers are in their category."
            />
            <img
              src="/dropi/momento3/m3.jpg"
              alt="Aha moment screen"
              className="w-full rounded-xl border border-border"
            />
            <Divider />
          </motion.section>

          {/* Moment 4 — In-platform */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <MomentHeader
              number="4"
              label="Re-engagement · In-platform triggers"
              question="When is the right moment to ask for what's still missing?"
            />
            <div className="rounded-lg border border-border bg-surface p-4 text-sm text-text-secondary">
              <span className="font-medium text-text-primary">Product decision: </span>
              The remaining steps don&apos;t appear until the user has a real reason to complete them.
            </div>
            <Table
              headers={["Trigger", "Unlocks"]}
              rows={[
                ["First order received", "Manage order and pickup"],
                ["First dispatch confirmed", "Bank account validation (earnings waiting)"],
              ]}
            />
            <img
              src="/dropi/momento4/m4.jpg"
              alt="First order notification"
              className="w-full rounded-xl border border-border"
            />
            <Divider />
          </motion.section>

          {/* Moment 4 — Email */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-full px-3 py-1 text-xs font-bold text-white" style={{ background: "#ff6f00" }}>
                  Moment 4
                </span>
                <span className="text-base font-semibold text-text-primary">Re-engagement · Email marketing</span>
              </div>
              <p className="text-sm text-text-secondary">
                <span className="font-medium text-text-primary">Goal: </span>Run a parallel email series that doesn&apos;t feel like spam.
              </p>
              <p className="mt-1 text-sm text-text-secondary">
                <span className="font-medium text-text-primary">How: </span>7 emails with triggers based on real user behavior, not an arbitrary calendar. Each email responds to a specific action or inaction by the user.
              </p>
            </div>
            <Table
              headers={["Email", "Trigger", "Timing"]}
              rows={[
                ["E1: Welcome", "Registration completed", "Day 0"],
                ["E2: Onboarding abandoned", "Onboarding incomplete", "+2 hours"],
                ["E3: Market opportunity", "No product published", "Day 1"],
                ["E4: Product visible", "First product published", "Event"],
                ["E5: Your first order!", "First order received", "Event (push + WhatsApp + email)"],
                ["E6: Success story", "Active brand with no second order", "Day 7"],
                ["E7: Human support", "No sustained activity", "Day 15"],
              ]}
            />
            <Divider />
          </motion.section>

          {/* Prototypes */}
          <motion.section variants={fade} className="flex flex-col gap-10">
            <div>
              <SectionTitle>Interactive prototypes</SectionTitle>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Functional HTML prototypes, not static mockups. Each demo is interactive and runs directly in the browser.
              </p>
            </div>

            <DemoBlock
              title="Brand Activation Flow"
              description="Complete prototype with 9 screens: profile selection, warehouse setup, first product upload, the aha moment, and the first order dashboard."
              src="/dropi/Dropi%20Activaci%C3%B3n.html"
              height={750}
            />

            <DemoBlock
              title="Email Sequence: 7 activation emails"
              description="Complete email marketing set for the post-registration re-engagement sequence: from the welcome email to recovering users who abandoned onboarding."
              src="/dropi/Dropi%20Email%20Set.html"
              height={750}
            />

            <Divider />
          </motion.section>

          {/* Impact Measurement */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <div>
              <SectionTitle>Impact Measurement Framework</SectionTitle>
              <div className="mt-3 inline-flex rounded-lg px-4 py-2 text-sm font-semibold text-white" style={{ background: "#ff6f00" }}>
                7-day activation: 20% today → 37.5% target in 6 months
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold text-text-primary">Activation timeline</h3>
              <Table
                headers={["Milestone", "Moment", "Key metric"]}
                rows={[
                  ["5 min", "Onboarding", "Completion rate >80% · Time to complete <5 min"],
                  ["15 min", "Warehouse + product", "Time to first value <15 min · % of users who publish a product"],
                  ["24 h", "Aha moment", "CTA click rate on the panel · % of users who return within 48h"],
                  ["7 days", "Re-engagement", "Email open rate · CTA click rate · Conversion rate"],
                ]}
              />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold text-text-primary">Funnel comparison: current vs. projected</h3>
              <Table
                headers={["Stage", "Current funnel", "Projected funnel"]}
                rows={[
                  ["Registration", "100%", "100%"],
                  ["Onboarding complete", "~65%", "~90%"],
                  ["First product published", "~40%", "~75%"],
                  ["Aha moment", "~25%", "~55%"],
                  ["Activation at 7 days", "<20%", "~37.5%"],
                ]}
              />
            </div>
            <Divider />
          </motion.section>

          {/* Project Leadership Plan */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <div>
              <SectionTitle>Project Leadership Plan</SectionTitle>
              <SectionSubtitle>3-month roadmap</SectionSubtitle>
            </div>
            <div className="flex flex-col gap-4">
              {[
                {
                  phase: "Phase 1",
                  label: "Foundations & quick win",
                  goal: "Validate hypotheses with minimal effort. Understand the user before touching a pixel.",
                  deliverables: "Research validation · Tracking plan · Prototype M1 · Prototype M2 · Usability tests",
                  moments: "M1 + M2",
                  teams: ["PM", "Product", "Dev", "Research", "Design"],
                  kpi: "Validated hypothesis + tracking live",
                },
                {
                  phase: "Phase 2",
                  label: "Integrated system",
                  goal: "Connect the full flow and start A/B Test against the current experience.",
                  deliverables: "Prototype M3 · Integration M1+M2+M3 · Real-time metrics dashboard · Front-end handoff · Email design",
                  moments: "M3",
                  teams: ["PM", "Product", "Front", "Back", "QA", "Marketing", "Design"],
                  kpi: "New flow in production + A/B Test running",
                },
                {
                  phase: "Phase 3",
                  label: "Re-engagement & iteration",
                  goal: "Close the system with event-based triggers and validate test results.",
                  deliverables: "Moment 4 (emails + push + WhatsApp) · Event triggers · A/B test analysis · Iteration by findings · Documentation",
                  moments: "M4",
                  teams: ["Product", "Marketing", "Back", "Research"],
                  kpi: "Activation measured vs. baseline + iteration plan",
                },
              ].map((p) => (
                <div key={p.phase} className="rounded-xl border border-border bg-surface p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-full px-2.5 py-0.5 text-xs font-bold text-white" style={{ background: "#ff6f00" }}>{p.phase}</span>
                    <span className="text-sm font-semibold text-text-primary">{p.label}</span>
                  </div>
                  <div className="grid gap-3 text-sm sm:grid-cols-2">
                    <div>
                      <p className="mb-1 text-xs font-medium uppercase tracking-wider text-text-muted">Goal</p>
                      <p className="text-text-secondary">{p.goal}</p>
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-medium uppercase tracking-wider text-text-muted">Deliverables</p>
                      <p className="text-text-secondary">{p.deliverables}</p>
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-medium uppercase tracking-wider text-text-muted">Moments</p>
                      <p className="text-text-secondary">{p.moments}</p>
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-medium uppercase tracking-wider text-text-muted">Teams</p>
                      <div className="flex flex-wrap gap-1">
                        {p.teams.map((t) => (
                          <span key={t} className="rounded px-2 py-0.5 text-xs text-white" style={{ background: "rgba(255,111,0,0.7)" }}>{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <p className="mb-1 text-xs font-medium uppercase tracking-wider text-text-muted">KPI</p>
                      <p className="text-text-secondary">{p.kpi}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Divider />
          </motion.section>

          {/* What this demonstrates */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <div>
              <SectionTitle>What this project demonstrates</SectionTitle>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Research before pixels", body: "The 5 Whys findings and competitive benchmarks defined the structure of the 4 moments. The screens are a consequence of the analysis, not the other way around." },
                { title: "Strategy from constraints", body: "Not touching business logic or backend infrastructure required a more creative solution: separate activation into real events instead of inventing new features." },
                { title: "Anticipating the hard questions", body: "The 'pending logistics configuration' state when a first order arrives without a carrier set up isn't a UX detail. It's an operational decision that requires alignment with engineering and business stakeholders." },
                { title: "Designing for a number", body: "The goal was never 'redesign the onboarding.' It was to move activation from 20% to 37.5%. Every decision traces back to that number." },
              ].map((item) => (
                <div key={item.title} className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-5">
                  <p className="font-semibold text-text-primary">{item.title}</p>
                  <p className="text-sm leading-relaxed text-text-secondary">{item.body}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Footer */}
          <motion.footer variants={fade} className="flex flex-col items-start gap-2 border-t border-border pt-10 text-sm text-text-muted">
            <p className="font-medium text-text-secondary">Nicolás Vargas Galindo, Senior Product Designer</p>
            <p>Cali, Colombia · April 2026</p>
          </motion.footer>

        </motion.div>
      </div>
    </main>
  );
}
