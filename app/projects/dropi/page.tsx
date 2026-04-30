"use client";

import { useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

/* ─── Sub-components ────────────────────────────────────────────────────── */

function SectionNum({ n }: { n: string }) {
  return (
    <span className="mb-3 block font-mono text-xs font-medium tracking-widest" style={{ color: "#ff6f00" }}>
      {n}
    </span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
      {children}
    </h2>
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

function InsightCard({ n, title, insight, implication }: { n: string; title: string; insight: string; implication: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <div className="mb-3 flex items-start gap-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: "#ff6f00" }}>
          {n}
        </span>
        <p className="text-sm font-medium leading-snug text-text-primary">{title}</p>
      </div>
      <p className="mb-2 text-sm leading-relaxed text-text-secondary">{insight}</p>
      <p className="text-xs leading-relaxed text-text-muted">→ {implication}</p>
    </div>
  );
}

function MomentCard({ number, label, children }: { number: string; label: string; children: React.ReactNode }) {
  return (
    <div className="relative rounded-xl border border-border bg-surface p-6">
      <div className="mb-1 flex items-center gap-3">
        <span className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-white" style={{ background: "#ff6f00" }}>
          Momento {number}
        </span>
        <span className="text-sm font-semibold text-text-primary">{label}</span>
      </div>
      <div className="mt-3 text-sm leading-relaxed text-text-secondary">{children}</div>
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
                Dropi —<br />Transforming Brand Activation
              </h1>
            </motion.div>

            <motion.div variants={fade} className="flex flex-wrap gap-6 border-t border-white/10 pt-6 text-sm text-white/50">
              <div><span className="block text-white/30 text-xs uppercase tracking-wider mb-1">Role</span>Senior Product Designer (End-to-End)</div>
              <div><span className="block text-white/30 text-xs uppercase tracking-wider mb-1">Duration</span>4 days</div>
              <div><span className="block text-white/30 text-xs uppercase tracking-wider mb-1">Scope</span>Research · Strategy · UX · Measurement</div>
              <div><span className="block text-white/30 text-xs uppercase tracking-wider mb-1">Status</span>Completed challenge</div>
            </motion.div>

            <motion.div variants={fade}>
              <div className="rounded-xl border p-6" style={{ borderColor: "rgba(255,111,0,0.3)", background: "rgba(255,111,0,0.06)" }}>
                <p className="text-2xl font-semibold leading-snug text-white sm:text-3xl">
                  Of every 100 brands that registered on Dropi,{" "}
                  <span style={{ color: "#ff6f00" }}>fewer than 20 ever became active.</span>
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  An 80%+ loss of potential ecosystem value — not from a product that doesn&apos;t work, but from an experience that fails to communicate why it matters. This case study documents how I approached that problem.
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

          {/* 01 · Ecosystem */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <div>
              <SectionNum n="01" />
              <SectionTitle>Understanding the Ecosystem</SectionTitle>
              <p className="text-sm leading-relaxed text-text-secondary">
                Dropi is a multilateral logistics platform connecting four types of participants in a single ecosystem.
              </p>
            </div>
            <Table
              headers={["Participant", "Role"]}
              rows={[
                ["Suppliers", "Provide verified product inventory"],
                ["Brands & Entrepreneurs", "Build their business, manage their catalog"],
                ["Dropshippers", "Resell without owning inventory"],
                ["Carriers", "Execute logistics and delivery"],
              ]}
            />
            <Callout>
              <strong>The critical insight — the dependency chain:</strong>
              <br /><br />
              No active brands → no catalog → no dropshippers → no logistics volume → no carrier network.
              <br /><br />
              Brand activation isn&apos;t one feature among many. It&apos;s the first link in the entire chain of value.
            </Callout>
            <Divider />
          </motion.section>

          {/* 02 · Role */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <div>
              <SectionNum n="02" />
              <SectionTitle>My Role and Constraints</SectionTitle>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-surface p-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: "#ff6f00" }}>What I owned</p>
                <ul className="flex flex-col gap-2 text-sm text-text-secondary">
                  {["End-to-end product strategy: research through solution design", "All UX decisions: onboarding flow, activation strategy, communication sequencing", "Stakeholder artifacts: documentation, rationale, handoff specs"].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-0.5 shrink-0 text-xs" style={{ color: "#ff6f00" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-surface p-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted">What I explicitly did NOT own</p>
                <ul className="flex flex-col gap-2 text-sm text-text-secondary">
                  {["Backend logic or data architecture", "The existing business model or pricing", "Product catalog structure or carrier integrations"].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-0.5 shrink-0 text-xs text-text-muted">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-text-secondary">
              The constraints shaped every decision. The goal was to dramatically improve activation without requiring engineering-heavy changes — which meant the leverage had to come from experience design, narrative reframing, and communication strategy.
            </p>
            <Divider />
          </motion.section>

          {/* 03 · Research */}
          <motion.section variants={fade} className="flex flex-col gap-8">
            <div>
              <SectionNum n="03" />
              <SectionTitle>The Research</SectionTitle>
              <p className="text-sm leading-relaxed text-text-secondary">
                With a 4-day timeline, I built the analysis from three sources in parallel: funnel decomposition, competitive benchmarking, and first-principles reasoning using the 5 Whys framework.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-base font-semibold text-text-primary">The Activation Funnel</h3>
              <p className="text-sm text-text-secondary">The largest single drop — ~37% of all users — happens between onboarding and catalog configuration.</p>
              <Table
                headers={["Stage", "Users", "Conversion", "Primary Drop Cause"]}
                rows={[
                  ["Discovery / Visit", "100%", "—", "Entry point"],
                  ["Account Registration", "100%", "~65%", "Too many fields, no progress indicator"],
                  ["Initial Onboarding", "~65%", "~40%", "No immediate value shown"],
                  ["Profile / Catalog Setup", "~40%", "~25%", "High friction: products, prices, logistics with no guidance"],
                  ["First Sale / Activation", "~25%", "<20%", "No 'first success' mechanism or incentive to complete"],
                ]}
              />
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-base font-semibold text-text-primary">5 Whys — Root Cause Analysis</h3>
              <div className="flex flex-col gap-2">
                {[
                  ["Why do less than 20% of brands activate?", "The process from registration to first real use is long, confusing, and offers no perceived reward."],
                  ["Why is it confusing with no reward?", "Onboarding isn't designed to show immediate value or guide users toward an early success."],
                  ["Why doesn't onboarding show immediate value?", "It's centered on platform configuration, not on the business outcomes the user is trying to achieve."],
                  ["Why is it centered on configuration instead of outcomes?", "It was built from the platform's perspective, not the user's."],
                  ["Root cause →", "The absence of a user research process that defined the 'aha moment' and specific quick wins for each brand profile. The platform was designed inside-out."],
                ].map(([q, a], i) => (
                  <div key={i} className={`rounded-lg p-4 ${i === 4 ? "border text-text-primary" : "bg-surface text-text-secondary"} text-sm`} style={i === 4 ? { borderColor: "#ff6f00", background: "rgba(255,111,0,0.05)" } : {}}>
                    <p className={`font-medium ${i === 4 ? "" : "text-text-primary"} mb-1`}>{q}</p>
                    <p className="leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-base font-semibold text-text-primary">Three User Profiles, One Generic Onboarding</h3>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Profile A", title: "The Digital Entrepreneur", age: "25–35", goal: "Generate income quickly with minimal upfront investment", friction: "Doesn't understand the difference between being a brand and being a dropshipper" },
                  { label: "Profile B", title: "The Established Brand", age: "30–50", goal: "Expand distribution channels without growing the sales team", friction: "Catalog migration is complex, no support for moving existing inventory" },
                  { label: "Profile C", title: "The Content Creator", age: "18–30", goal: "Monetize their community with products", friction: "Doesn't understand logistics operations, needs extreme simplicity" },
                ].map((p) => (
                  <div key={p.label} className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-4 text-sm">
                    <span className="w-fit rounded-full px-2 py-0.5 text-xs font-semibold text-white" style={{ background: "#ff6f00" }}>{p.label}</span>
                    <p className="font-medium text-text-primary">{p.title}</p>
                    <p className="text-xs text-text-muted">{p.age} years old</p>
                    <p className="text-text-secondary"><span className="font-medium text-text-primary">Goal:</span> {p.goal}</p>
                    <p className="text-text-secondary"><span className="font-medium text-text-primary">Friction:</span> {p.friction}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-base font-semibold text-text-primary">Competitive Benchmark</h3>
              <Table
                headers={["Platform", "Guided Onboarding", "Time to First Value", "Education", "Personalization"]}
                rows={[
                  ["Shopify", "⭐⭐⭐⭐⭐", "< 30 min", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐"],
                  ["Tiendanube", "⭐⭐⭐⭐", "< 45 min", "⭐⭐⭐⭐", "⭐⭐⭐"],
                  ["Mercado Shops", "⭐⭐⭐", "< 1 hour", "⭐⭐⭐", "⭐⭐⭐"],
                  ["WooCommerce", "⭐⭐", "> 2 hours", "⭐⭐", "⭐⭐"],
                  ["Dropi (current)", "⭐⭐", "> 2 hours", "⭐⭐", "⭐"],
                ]}
              />
              <p className="text-sm leading-relaxed text-text-secondary">
                <strong className="text-text-primary">Dropi&apos;s unique position:</strong> No competitor offers a fully integrated ecosystem where uploading a product means immediate visibility to an active network of dropshippers. This differentiator exists in the product. It simply isn&apos;t communicated during onboarding at all.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-base font-semibold text-text-primary">The Current Emotional Arc</h3>
              <div className="flex flex-wrap items-center gap-2 rounded-xl border border-border bg-surface p-5">
                {[
                  ["😊", "Curious"],
                  ["😐", "Neutral"],
                  ["😕", "Confused"],
                  ["😤", "Frustrated"],
                  ["😔", "Exhausted"],
                  ["😞", "Abandons"],
                ].map(([emoji, label], i, arr) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className="flex flex-col items-center gap-1 text-sm">
                      <span className="text-xl">{emoji}</span>
                      <span className="text-xs text-text-muted">{label}</span>
                    </div>
                    {i < arr.length - 1 && <span className="text-text-muted">→</span>}
                  </div>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-text-secondary">
                The platform forces users to confront six sequential steps — including complex logistics configuration — before they&apos;ve understood why any of it matters. The emotional cost arrives before the value does.
              </p>
            </div>
            <Divider />
          </motion.section>

          {/* 04 · Insights */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <div>
              <SectionNum n="04" />
              <SectionTitle>The Six Insights That Shaped the Strategy</SectionTitle>
              <p className="text-sm leading-relaxed text-text-secondary">
                Every design decision in this project traces back to one of these six insights. They&apos;re not observations — they&apos;re strategic anchors.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <InsightCard n="I1" title="The 'Aha Moment' has never been defined or designed" insight="Brands that activate do so despite the process, not because of it. Without a defined moment of value, any UX improvement is blind optimization." implication="Define the aha moment as: the first dropshipper requesting to sell your product — make it happen within 24 hours of registration." />
              <InsightCard n="I2" title="Friction is more perceived than real" insight="The configuration process isn't objectively harder than competitors, but it feels harder because no narrative connects the steps to an outcome." implication="Reframe every onboarding step as a concrete benefit, not a technical requirement." />
              <InsightCard n="I3" title="Three profiles need three onboarding paths" insight="A digital entrepreneur seeking their first income has completely different motivations than an established brand seeking a new distribution channel." implication="Divergent onboarding from the first question: profile type determines narrative, success metrics, and quick wins." />
              <InsightCard n="I4" title="The ecosystem differentiator is never communicated" insight="No competitor offers what Dropi offers. This should be the narrative center of onboarding, powered by real network data visible from the first login." implication="Show how many active dropshippers would see the brand's product — live, from the onboarding screen." />
              <InsightCard n="I5" title="The post-registration window is completely wasted" insight="The first 7 days after registration are critical. Platforms with 50%+ activation rates send up to 12 personalized communications in this window." implication="Design a 7-day activation sequence: email + push + WhatsApp, personalized by profile." />
              <InsightCard n="I6" title="Quick wins are the most effective activation catalyst" insight="Platforms with activation rates above 50% share one pattern: a first small-but-meaningful success within 15 minutes." implication="Build a simplified 'first product in 5 minutes' flow with immediate visibility status in the dropshipper network." />
            </div>
            <Divider />
          </motion.section>

          {/* 05 · Strategy */}
          <motion.section variants={fade} className="flex flex-col gap-8">
            <div>
              <SectionNum n="05" />
              <SectionTitle>The Strategy</SectionTitle>
            </div>

            <Callout>
              <strong>The central reframe: Activation ≠ full configuration.</strong>
              <br /><br />
              The existing flow assumed a brand needed to be fully configured before they were &quot;active.&quot; The new definition: <strong>active means ready to receive value, not ready to operate everything.</strong>
              <br /><br />
              With that principle, the activation journey splits into three temporally distinct moments, each triggered by a real business event.
            </Callout>

            <div className="flex flex-col gap-4">
              <MomentCard number="1" label="Minimum Viable Activation">
                <p className="mb-3">The user sees only two steps. Steps 3–6 don&apos;t exist yet on their screen — simply not rendered. This eliminates the anxiety of a long list.</p>
                <ul className="flex flex-col gap-2">
                  <li><strong className="text-text-primary">Step 1 — Create your warehouse.</strong> Same data, completely different frame: &quot;Your dispatch point — where your products will ship from.&quot; Carrier guide format fields are moved out entirely.</li>
                  <li className="mt-2"><strong className="text-text-primary">Step 2 — Upload your first product.</strong> Required fields only: name, photo, price, suggested price, category, description. A form completable in under 5 minutes.</li>
                </ul>
              </MomentCard>

              <MomentCard number="2" label="The Aha Moment">
                <p className="mb-3">Immediately after saving the first product, a real-data message appears inline on the dashboard:</p>
                <div className="rounded-lg border p-4 text-sm italic" style={{ borderColor: "rgba(255,111,0,0.3)", background: "rgba(255,111,0,0.05)", color: "#ff6f00" }}>
                  &quot;Your product is now visible to Dropi&apos;s dropshippers. Right now, there are 1,847 active dropshippers selling products in the Sportswear category.&quot;
                </div>
                <p className="mt-3">That number is not decorative. It&apos;s the first moment the user viscerally understands why they&apos;re here. The checklist shows 100% and labels it &quot;Your account is active.&quot;</p>
              </MomentCard>

              <MomentCard number="3" label="Operational Activation (Triggered by First Order)">
                <p className="mb-3">When the first order arrives, steps 3 and 4 appear for the first time. The user isn&apos;t completing them in the abstract — they&apos;re completing them to dispatch a real order that already exists.</p>
                <ul className="flex flex-col gap-1">
                  <li><strong className="text-text-primary">Step 3</strong> — Configure dispatch and pickup: carrier selection makes sense now because there are packages to pick up.</li>
                  <li><strong className="text-text-primary">Step 4</strong> — Manage your orders: has context now because there&apos;s a customer waiting.</li>
                  <li><strong className="text-text-primary">Step 5</strong> — Receive your earnings: activated after the first confirmed dispatch.</li>
                </ul>
              </MomentCard>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-base font-semibold text-text-primary">Dropi Academy — A Parallel Program, Not a Checklist Item</h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                In the current experience, &quot;Register for Dropi Academy&quot; is step 6 of the activation checklist, framing education as a requirement. The redesign removes it from the checklist and converts it into an autonomous email marketing program.
              </p>
              <div className="grid gap-2 sm:grid-cols-4">
                {[
                  ["Day 0", "Welcome email — what Dropi Academy is"],
                  ["Day 1", "First module based on the product category uploaded"],
                  ["Day 4", "Reminder if email wasn't opened (different subject, shorter)"],
                  ["Completion", "Featured placement in dropshipper catalog + early carrier access"],
                ].map(([day, desc]) => (
                  <div key={day} className="rounded-lg border border-border bg-surface p-3 text-xs">
                    <p className="mb-1 font-semibold" style={{ color: "#ff6f00" }}>{day}</p>
                    <p className="text-text-secondary">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-base font-semibold text-text-primary">The 7-Day Abandonment Recovery Sequence</h3>
              <div className="flex flex-col gap-3">
                {[
                  { time: "T+2 hours", channel: "WhatsApp", tone: "Direct", message: "\"Hi [name], you're one step away from activating your brand on Dropi. It'll take less than 5 minutes. Continue here →\"" },
                  { time: "T+24 hours", channel: "Email", tone: "Context-driven", message: "How many dropshippers searched for products in their category that day. Real urgency, not manufactured." },
                  { time: "T+3 days", channel: "WhatsApp", tone: "Invitation", message: "\"Do you have questions about setting up your first warehouse? Our team can help you in 10 minutes.\"" },
                  { time: "T+7 days+", channel: "Email (nurture)", tone: "Social proof", message: "Biweekly emails featuring success stories from similar brands in the Dropi ecosystem." },
                ].map((item) => (
                  <div key={item.time} className="flex gap-4 rounded-lg border border-border bg-surface p-4">
                    <div className="w-24 shrink-0">
                      <p className="text-xs font-semibold" style={{ color: "#ff6f00" }}>{item.time}</p>
                      <p className="mt-1 text-xs text-text-muted">{item.channel}</p>
                    </div>
                    <div className="text-sm">
                      <p className="mb-1 font-medium text-text-primary">{item.tone}</p>
                      <p className="text-text-secondary">{item.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Divider />
          </motion.section>

          {/* 06 · Live Demos */}
          <motion.section variants={fade} className="flex flex-col gap-10">
            <div>
              <SectionNum n="06" />
              <SectionTitle>Prototipos Interactivos</SectionTitle>
              <p className="text-sm leading-relaxed text-text-secondary">
                Prototipos funcionales en HTML — no son mockups estáticos. Explora el flujo completo de activación y el set de emails de re-engagement.
              </p>
            </div>

            <DemoBlock
              title="Flujo de Activación de Marca"
              description="Prototipo completo con 9 pantallas: selección de perfil, configuración de bodega, subida del primer producto, el momento aha y el panel de primeros pedidos."
              src="/dropi/Dropi%20Activaci%C3%B3n.html"
              height={750}
            />

            <DemoBlock
              title="Secuencia de Emails — 7 emails de activación"
              description="Set completo de email marketing para la secuencia de re-engagement post-registro: desde el email de bienvenida hasta la recuperación de usuarios que abandonaron el onboarding."
              src="/dropi/Dropi%20Email%20Set.html"
              height={750}
            />

            <Divider />
          </motion.section>

          {/* 07 · Decisions */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <div>
              <SectionNum n="07" />
              <SectionTitle>Decisions Made Consciously</SectionTitle>
              <p className="text-sm leading-relaxed text-text-secondary">
                Great design documents aren&apos;t just about what was built. They&apos;re about what was considered and rejected, and why the chosen path is defensible.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                {
                  decision: "Remove carriers from initial onboarding",
                  alternative: "Simplify the Guide Format section but keep it in the form.",
                  why: "A simplified carrier form is still a carrier form. It still requires the user to know which carriers they want before they have any orders, any logistics experience, or any reason to care. The cognitive cost isn't in the number of fields — it's in the concept.",
                },
                {
                  decision: "Only 2 steps visible initially (not 6 with lock icons)",
                  alternative: "Show all 6 steps, lock steps 3–6 with a visual lock and tooltip.",
                  why: "Locked steps are still visible steps. They still communicate \"you have 6 things to do.\" The anxiety they create isn't reduced by locking them — it's just delayed.",
                },
                {
                  decision: "Aha moment as inline state, not a modal popup",
                  alternative: "A full-screen celebration modal after saving the first product.",
                  why: "Modals interrupt. They're dismissed reflexively by users used to popups. The aha moment needs to feel like a natural progression of the dashboard, not an interruption.",
                },
                {
                  decision: "WhatsApp as primary re-engagement channel, not email",
                  alternative: "Email-first recovery sequence.",
                  why: "In Colombia and broader LATAM, WhatsApp open rates are consistently 5–10× higher than email. For a time-sensitive re-engagement at T+2 hours, the difference between 90% and 25% open rate is the difference between recovering 15% of lost users or recovering 3%.",
                },
              ].map((d) => (
                <div key={d.decision} className="rounded-xl border border-border bg-surface p-5">
                  <p className="mb-2 font-semibold text-text-primary">{d.decision}</p>
                  <p className="mb-3 text-xs text-text-muted"><span className="font-medium">Alternative considered:</span> {d.alternative}</p>
                  <p className="text-sm leading-relaxed text-text-secondary"><span className="font-medium text-text-primary">Why rejected:</span> {d.why}</p>
                </div>
              ))}
            </div>
            <Divider />
          </motion.section>

          {/* 08 · Measurement */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <div>
              <SectionNum n="08" />
              <SectionTitle>Hypothesis & Measurement Framework</SectionTitle>
              <p className="text-sm leading-relaxed text-text-secondary">
                Five testable hypotheses, each with a specific metric and validation method. These aren&apos;t projections — they&apos;re commitments to measurement.
              </p>
            </div>
            <Table
              headers={["#", "Hypothesis", "Metric", "Target", "Priority"]}
              rows={[
                ["H1", "Redesigned 5-min onboarding → activation rate rises from 20% to 40% in 90 days", "Funnel completion rate + % brands with ≥1 product in first 24h", "40% activation", "🔴 High"],
                ["H2", "Personalized onboarding by profile → time to first value drops 50%", "Time-to-first-value per segment, pre/post", "−50% TtFV", "🔴 High"],
                ["H3", "Showing live dropshipper count → higher completion rate", "A/B: completion rate with/without network metric", "+15% completion", "🟠 Medium"],
                ["H4", "7-day email/WhatsApp sequence → recover 15% of abandoned users", "Re-engagement rate: users who resume after sequence", "15% recovery", "🟠 Medium"],
                ["H5", "Dropi Academy as email program → lower early churn", "NPS at 30 days + churn rate during configuration stage", "NPS +20 pts", "🟡 Medium-low"],
              ]}
            />
            <Callout>
              <strong>The North Star:</strong> Move brand activation from &lt;20% to 45–55% in 6 months without changes to the core product architecture or business model.
            </Callout>
            <Divider />
          </motion.section>

          {/* 09 · Reflections */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <div>
              <SectionNum n="09" />
              <SectionTitle>What I&apos;d Do Differently</SectionTitle>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { title: "Run at least 3 user interviews before finalizing the strategy", body: "The research was built entirely from secondary sources. That's valuable, but it can't replace 30 minutes with a real entrepreneur who tried to register and stopped. One conversation often surfaces a friction point that no amount of analytical reasoning predicts." },
                { title: "Validate the aha moment concept with real data before designing the screen", body: "The hypothesis that seeing how many dropshippers are in your category is motivating enough to drive completion is well-reasoned but unvalidated. An unmoderated usability test with 5 users would tell us quickly whether the real number creates motivation or skepticism." },
                { title: "Map the 'Established Brand' (Profile B) activation journey separately", body: "This document focused primarily on Profile A because it represents the highest-volume segment. But Profile B — a brand migrating an existing catalog of 50+ products — has fundamentally different needs. The 'first product in 5 minutes' flow doesn't serve them." },
              ].map((r) => (
                <div key={r.title} className="rounded-xl border border-border bg-surface p-5">
                  <p className="mb-2 font-semibold text-text-primary">{r.title}</p>
                  <p className="text-sm leading-relaxed text-text-secondary">{r.body}</p>
                </div>
              ))}
            </div>
            <Divider />
          </motion.section>

          {/* 10 · What this demonstrates */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <div>
              <SectionNum n="10" />
              <SectionTitle>What This Project Demonstrates</SectionTitle>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Research before pixels", body: "The 6 insights and 5 hypotheses came before any screen was designed. The screens are a consequence of the analysis, not a parallel track." },
                { title: "Strategy from constraints", body: "The constraint of not changing backend logic forced a more creative solution: reframe the experience, not the product." },
                { title: "Anticipating the hard questions", body: "The 'pending order' state isn't a UX detail. It's an operational decision. Raising it in the design brief signals thinking past the happy path." },
                { title: "Designing for a business outcome", body: "The goal was never 'redesign the onboarding.' The goal was to move a number: activation rate from 20% to 45%. Every decision traces back to that number." },
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
            <p className="font-medium text-text-secondary">Nicolás Vargas — Senior Product Designer</p>
            <p>Cali, Colombia · April 2026</p>
          </motion.footer>

        </motion.div>
      </div>
    </main>
  );
}
