"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

/* ─── Design token ───────────────────────────────────────────────────────── */

const BLUE = "#2872f8";

/* ─── Sub-components ─────────────────────────────────────────────────────── */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-2 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
      {children}
    </h2>
  );
}

function SectionSubtitle({ children }: { children: React.ReactNode }) {
  return <p className="text-base font-medium text-text-muted">{children}</p>;
}

function Divider() {
  return <hr className="border-border" />;
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-lg border-l-4 bg-surface p-5 text-sm leading-relaxed text-text-secondary"
      style={{ borderColor: BLUE }}
    >
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
              <th
                key={h}
                className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-muted"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-border last:border-0 odd:bg-canvas even:bg-surface/40"
            >
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

function StatBlock({ stat, description }: { stat: string; description: string }) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-5">
      <p className="text-3xl font-bold" style={{ color: BLUE }}>
        {stat}
      </p>
      <p className="text-sm leading-relaxed text-text-secondary">{description}</p>
    </div>
  );
}

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      className="border-l-2 pl-4 text-sm italic leading-relaxed text-text-secondary"
      style={{ borderColor: `${BLUE}55` }}
    >
      {children}
    </blockquote>
  );
}

function PillarTag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="rounded-full px-3 py-1 text-xs font-bold text-white"
      style={{ background: BLUE }}
    >
      {children}
    </span>
  );
}

function BlueBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl border p-6"
      style={{
        borderColor: `rgba(40,114,248,0.3)`,
        background: `rgba(40,114,248,0.06)`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Animations ─────────────────────────────────────────────────────────── */

const fade: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function KanutPage() {
  return (
    <main className="min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pb-20 pt-28"
        style={{
          background:
            "linear-gradient(160deg, #020b1a 0%, #071b3e 50%, #090909 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 40%, #2872f8, transparent)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-8"
          >
            <motion.div variants={fade}>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white/80"
              >
                ← Back
              </Link>
            </motion.div>

            <motion.div variants={fade} className="flex flex-wrap items-center gap-3">
              <span
                className="rounded-full px-3 py-1 text-xs font-semibold tracking-wide text-white"
                style={{ background: BLUE }}
              >
                IoT Platform Redesign
              </span>
              <span className="text-xs text-white/40">
                Greenspec · 3 months · Shipped
              </span>
            </motion.div>

            <motion.div variants={fade}>
              <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                How I turned a data viewer<br />
                into a workspace operators<br />
                actually own.
              </h1>
              <p className="mt-4 text-lg text-white/50">
                A system redesign for Kanut — agricultural IoT monitoring platform at Greenspec
              </p>
            </motion.div>

            <motion.div
              variants={fade}
              className="flex flex-wrap gap-6 border-t border-white/10 pt-6 text-sm text-white/50"
            >
              <div>
                <span className="mb-1 block text-xs uppercase tracking-wider text-white/30">
                  Role
                </span>
                Product Designer (End-to-End)
              </div>
              <div>
                <span className="mb-1 block text-xs uppercase tracking-wider text-white/30">
                  Duration
                </span>
                3 months
              </div>
              <div>
                <span className="mb-1 block text-xs uppercase tracking-wider text-white/30">
                  Scope
                </span>
                Research · IA · UX · Design System
              </div>
              <div>
                <span className="mb-1 block text-xs uppercase tracking-wider text-white/30">
                  Status
                </span>
                Shipped
              </div>
            </motion.div>

            <motion.div variants={fade}>
              <BlueBox>
                <p className="text-2xl font-semibold leading-snug text-white sm:text-3xl">
                  Operators had all the data they needed.{" "}
                  <span style={{ color: BLUE }}>
                    They were still losing 1.5 hours per shift.
                  </span>
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  68% of routine actions still executed manually. 1 in 3
                  technicians unable to trace alerts back to their cause in time.
                  The information existed. It just wasn&apos;t actionable. This is
                  the redesign that changed that.
                </p>
              </BlueBox>
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

          {/* Headline numbers */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <div>
              <SectionTitle>The headline numbers</SectionTitle>
              <SectionSubtitle>60-day post-launch results</SectionSubtitle>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <StatBlock
                stat="−42%"
                description="time on critical tasks. None of this came from a new feature."
              />
              <StatBlock
                stat="87%"
                description="of operators using the new dashboard weekly."
              />
              <StatBlock
                stat="64%"
                description="of users configuring automations without support."
              />
            </div>
            <Callout>
              None of these numbers came from a new feature. They came from
              organizing the same information into a structure that matched how
              operators actually work.
            </Callout>
            <Divider />
          </motion.section>

          {/* 01 — The real problem */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <div>
              <SectionTitle>
                01 · The real problem wasn&apos;t the data. It was the structure.
              </SectionTitle>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                The obvious story was &ldquo;Kanut needs better dashboards.&rdquo; That
                would have been wrong. Discovery sessions with Carlos Bustamante
                — ingeniero agrícola and Kanut&apos;s most advanced user — surfaced
                something different.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                From research — Carlos Bustamante, Kanut power user
              </p>
              <Quote>
                &ldquo;Sometimes I just need to compare two variables, but I have to
                go through too many menus to get there.&rdquo;
              </Quote>
              <Quote>
                &ldquo;It&apos;s hard to know where to generate charts. It isn&apos;t
                intuitive.&rdquo;
              </Quote>
              <Quote>
                &ldquo;I lose so much time each day on manual actions — I&apos;d love
                to automate some processes.&rdquo;
              </Quote>
            </div>
            <Callout>
              Each of those was a{" "}
              <strong>structural complaint disguised as a UI complaint.</strong>{" "}
              The pattern was the same: the system was rigid where the operation
              was fluid. Its information architecture mirrored the backend, not
              the operator&apos;s mental model.
            </Callout>
            <Divider />
          </motion.section>

          {/* 02 — The reframe */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <div>
              <SectionTitle>02 · The reframe that unlocked everything</SectionTitle>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Most agricultural monitoring tools — including Kanut&apos;s
                pre-redesign self — answer a question the operator never asked:{" "}
                <em>&ldquo;What does the platform want to show you today?&rdquo;</em>
              </p>
            </div>
            <BlueBox>
              <p className="text-center text-xl font-semibold text-white sm:text-2xl">
                What if Kanut wasn&apos;t a data viewer, but a workspace?
              </p>
              <p className="mt-3 text-center text-sm text-white/50">
                A data viewer presents what the platform thinks you need. A
                workspace lets you build what you need.
              </p>
            </BlueBox>
            <p className="text-sm leading-relaxed text-text-secondary">
              That distinction sounds small. It changes every architectural
              decision downstream. This single shift led to a redesign organized
              around three system-level principles:
            </p>
            <Table
              headers={["Principle", "What it means in practice"]}
              rows={[
                [
                  "Modularity",
                  "Every module follows the same predictable structure. Learn one, you've learned them all.",
                ],
                [
                  "Composability",
                  "Operators build their own dashboards from drag-and-drop blocks. The product adapts to the operation, not vice versa.",
                ],
                [
                  "Transparency",
                  "Every automation, every rule, every action has a natural-language explanation. No magic. No black boxes.",
                ],
              ]}
            />
            <Callout>
              Everything that follows — the navigation, the dashboard, the
              automation builder, the post-launch metrics — is a downstream
              consequence of these three principles.
            </Callout>
            <Divider />
          </motion.section>

          {/* 03 — IA */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <div>
              <SectionTitle>
                03 · Information architecture as the real design
              </SectionTitle>
            </div>
            <BlueBox>
              <p className="text-base font-semibold italic text-white">
                &ldquo;If the user doesn&apos;t know where the information lives, no
                visual design will save them.&rdquo;
              </p>
            </BlueBox>
            <p className="text-sm leading-relaxed text-text-secondary">
              Before any pixel was placed in Figma, I rebuilt the information
              architecture. The old structure had data scattered across menus
              that mapped to backend logic. The new structure organized
              everything around two axes:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-surface p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
                  Old structure
                </p>
                <p className="text-sm leading-relaxed text-text-secondary">
                  Data scattered across menus mapped to the backend. Each module
                  had its own internal logic with no repeatable pattern.
                  Operators re-learned every section.
                </p>
              </div>
              <div
                className="rounded-xl border p-5"
                style={{
                  borderColor: `rgba(40,114,248,0.4)`,
                  background: `rgba(40,114,248,0.04)`,
                }}
              >
                <p
                  className="mb-2 text-xs font-semibold uppercase tracking-wider"
                  style={{ color: BLUE }}
                >
                  New structure
                </p>
                <p className="text-sm leading-relaxed text-text-secondary">
                  Two axes:{" "}
                  <strong className="text-text-primary">Workspace</strong> (the
                  things you do) and{" "}
                  <strong className="text-text-primary">Modules</strong> (the
                  systems you manage). Every module follows the same internal
                  template: Overview → Inputs &amp; Data → Manual Controls →
                  Automation → History → Settings.
                </p>
              </div>
            </div>
            <Callout>
              <strong>The repetition is the strategy.</strong> Once an operator
              learns the pattern of one module, they&apos;ve learned all of them.
              Predictability becomes a feature in itself — and it&apos;s the unlock
              for every metric this project later moved.
            </Callout>
            <Divider />
          </motion.section>

          {/* 04 — Three pillars */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <div>
              <SectionTitle>04 · The system in three pillars</SectionTitle>
            </div>

            {/* Pillar 1 */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <PillarTag>Pillar 1</PillarTag>
                <span className="text-base font-semibold text-text-primary">
                  Navigation that adapts to your operation
                </span>
              </div>
              <p className="text-sm leading-relaxed text-text-secondary">
                The sidebar isn&apos;t a list of links. It&apos;s a configurable
                navigation surface. A heating-heavy operation surfaces heating
                modules first. An operator with no lighting system simply hides
                it. New users see only what their farm actually uses — no dead
                ends, no irrelevant menus, no learned-helplessness from a system
                that&apos;s louder than the work.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {(
                  [
                    ["Collapsed", "Icons only — minimal footprint while working"],
                    ["Expanded", "Full module list — explore what's available"],
                    [
                      "Edit mode",
                      "Visibility checkboxes — each operator's own configuration",
                    ],
                  ] as [string, string][]
                ).map(([label, desc]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-border bg-surface p-4"
                  >
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-text-muted">
                      {label}
                    </p>
                    <p className="text-xs leading-relaxed text-text-secondary">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
              <Callout>
                The product reshaped itself around the operator instead of
                asking the operator to reshape themselves around the product.
                That&apos;s the modularity principle made visible.
              </Callout>
            </div>

            <Divider />

            {/* Pillar 2 */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <PillarTag>Pillar 2</PillarTag>
                <span className="text-base font-semibold text-text-primary">
                  A dashboard that&apos;s actually theirs
                </span>
              </div>
              <p className="text-sm leading-relaxed text-text-secondary">
                The dashboard is the daily landing surface. Its job isn&apos;t to
                show &ldquo;everything.&rdquo; Its job is to show what{" "}
                <em>this specific operator</em> needs to see this morning.
              </p>
              <Table
                headers={["Feature", "What it does"]}
                rows={[
                  [
                    "Shortcuts row",
                    "Direct access to the alerts, controls, and modules each user uses most",
                  ],
                  [
                    "Active alerts table",
                    "Sortable, filterable, with one-click links to the linked automation rules",
                  ],
                  [
                    "Tabbed dashboards",
                    "Operators build and save multiple dashboards, switch between them in one click",
                  ],
                  [
                    "Drag-and-drop blocks",
                    "Every widget can be moved, resized, named, or hidden",
                  ],
                ]}
              />
              <Callout>
                A senior agronomist builds a &ldquo;morning checks&rdquo; dashboard. A
                maintenance tech builds a &ldquo;today&apos;s alerts&rdquo; dashboard. Same
                product.{" "}
                <strong>Different workspaces.</strong> This is what
                composability looks like in production.
              </Callout>
            </div>

            <Divider />

            {/* Pillar 3 */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <PillarTag>Pillar 3</PillarTag>
                <span className="text-base font-semibold text-text-primary">
                  Automation, made readable
                </span>
              </div>
              <p className="text-sm leading-relaxed text-text-secondary">
                The most-validated finding from research was the appetite for
                automation. The risk: making it accessible without making it
                dumb. The Formula Builder has three layers:
              </p>
              <div className="flex flex-col gap-3">
                <div className="rounded-xl border border-border bg-surface p-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Layer 1 — Preset templates
                  </p>
                  <p className="text-sm italic text-text-secondary">
                    &ldquo;if soil moisture &lt; X, turn on irrigation&rdquo;
                  </p>
                  <p className="mt-1 text-xs text-text-muted">
                    Common patterns, no formula knowledge required
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-surface p-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Layer 2 — Manual formulas
                  </p>
                  <code className="block rounded bg-canvas px-3 py-2 font-mono text-xs leading-relaxed text-text-secondary">
                    [Waterflow Rate] ÷ [Soil Moisture G1P05]
                    <br />
                    IF([Rain Accumulation] &gt; 5, &quot;Irrigation OFF&quot;, &quot;Irrigation ON&quot;)
                  </code>
                </div>
                <div
                  className="rounded-xl border p-5"
                  style={{
                    borderColor: `rgba(40,114,248,0.4)`,
                    background: `rgba(40,114,248,0.04)`,
                  }}
                >
                  <p
                    className="mb-2 text-xs font-semibold uppercase tracking-wider"
                    style={{ color: BLUE }}
                  >
                    Layer 3 — Natural-language preview ← the unlock
                  </p>
                  <p className="text-sm italic text-text-secondary">
                    &ldquo;Compare water level with soil moisture. If irrigation is
                    proportional to soil conditions, adjust temperature. If
                    accumulated rainfall is below 5mm, turn irrigation on or off
                    accordingly.&rdquo;
                  </p>
                </div>
              </div>
              <Callout>
                That third layer is where the systems thinking pays off. A
                junior operator can read what a senior built, audit the logic,
                modify it without breaking it. Automation stops being personal
                scripts and becomes{" "}
                <strong>shareable institutional knowledge</strong>. That&apos;s the
                transparency principle.
              </Callout>
            </div>

            <Divider />
          </motion.section>

          {/* 05 — Weather as module */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <div>
              <SectionTitle>
                05 · One decision worth pausing on: weather as a module, not a
                widget
              </SectionTitle>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-surface p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
                  The standard approach
                </p>
                <p className="text-sm leading-relaxed text-text-secondary">
                  A small icon in the header. A temperature reading. A forecast
                  you click to dismiss. Decorative.
                </p>
              </div>
              <div
                className="rounded-xl border p-5"
                style={{
                  borderColor: `rgba(40,114,248,0.4)`,
                  background: `rgba(40,114,248,0.04)`,
                }}
              >
                <p
                  className="mb-2 text-xs font-semibold uppercase tracking-wider"
                  style={{ color: BLUE }}
                >
                  The decision
                </p>
                <p className="text-sm leading-relaxed text-text-secondary">
                  A full module — Overview, History, Configuration tabs. Same
                  structure as every other module. Operators don&apos;t{" "}
                  <em>look at</em> weather; they make decisions based on it.
                </p>
              </div>
            </div>
            <Callout>
              <strong>Widgets are decorative. Modules are operational.</strong>{" "}
              Treating weather as a first-class module signals — to the user, to
              the team, to anyone reading the design — that environmental data
              is operational data. This kind of decision doesn&apos;t show up in
              usability metrics, but shows up everywhere else: in how the
              product is talked about, in what gets built next.
            </Callout>
            <Divider />
          </motion.section>

          {/* 06 — Decisions consciously made */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <div>
              <SectionTitle>
                06 · Decisions that were consciously made (and rejected)
              </SectionTitle>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                The hardest part of senior product design isn&apos;t choosing the
                right answer — it&apos;s defending why the alternatives were
                rejected.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {(
                [
                  {
                    decision:
                      "Standardize all modules into the same six-section structure",
                    alternative:
                      "Let each module's structure follow its functional needs (heating has different concerns than lighting).",
                    why: "Operators move between modules constantly. A heating tech and an irrigation tech need to share the same mental model. Predictability across modules is worth more than perfect optimization within any single module.",
                  },
                  {
                    decision:
                      "Drag-and-drop dashboards with no template-locked options",
                    alternative:
                      "Pre-built dashboard templates that users could pick from.",
                    why: "Templates encode someone else's mental model. Research was clear — users wanted control, not curated defaults. Starting from blank teaches the system better than starting from a template the user has to deconstruct.",
                  },
                  {
                    decision: "Natural-language preview for automation",
                    alternative:
                      "A graphical block-based automation builder (like Zapier).",
                    why: "Block builders look easier in demos but break down at the level of complexity agricultural automation actually requires. Formulas + natural-language layer give power users precision and give junior users a way to read and audit.",
                  },
                  {
                    decision: "Treat weather as a module, not a widget",
                    alternative: "A header-bar weather widget.",
                    why: "Widgets are decorative. Modules are operational. The signal of 'first-class operational data' was worth more than the screen real-estate saved.",
                  },
                ] as { decision: string; alternative: string; why: string }[]
              ).map((item) => (
                <div
                  key={item.decision}
                  className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-5"
                >
                  <p className="text-sm font-semibold italic text-text-primary">
                    &ldquo;{item.decision}&rdquo;
                  </p>
                  <div>
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-text-muted">
                      Alternative rejected
                    </p>
                    <p className="text-sm text-text-secondary">
                      {item.alternative}
                    </p>
                  </div>
                  <div>
                    <p
                      className="mb-1 text-xs font-medium uppercase tracking-wider"
                      style={{ color: BLUE }}
                    >
                      Why rejected
                    </p>
                    <p className="text-sm text-text-secondary">{item.why}</p>
                  </div>
                </div>
              ))}
            </div>
            <Divider />
          </motion.section>

          {/* 07 — Validation */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <div>
              <SectionTitle>
                07 · How I knew it was working — before launch
              </SectionTitle>
            </div>
            <Table
              headers={["Validation setup", ""]}
              rows={[
                ["Participants", "10 expert users"],
                ["Format", "Moderated remote sessions, 25 min each"],
                [
                  "Tasks tested",
                  "(1) Build a personalized dashboard · (2) Create a real automation with field data · (3) Resolve a field alert",
                ],
                ["Range completed", "100%"],
                ["Task success rate", "80%"],
                ["Time vs. baseline", "42% faster"],
              ]}
            />
            <BlueBox>
              <p className="text-base font-semibold text-white">
                The qualitative signal mattered as much as the speed
                improvement.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Multiple participants said variations of the same thing:{" "}
                <em className="text-white/80">
                  &ldquo;this feels like my system now.&rdquo;
                </em>{" "}
                The redesign hadn&apos;t just shortened task time. It had shifted
                the user&apos;s relationship with the product from &ldquo;tool I use&rdquo; to
                &ldquo;workspace I own.&rdquo; That&apos;s the difference between a UI
                redesign and a system redesign.
              </p>
            </BlueBox>
            <Divider />
          </motion.section>

          {/* 08 — Production data */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <div>
              <SectionTitle>08 · 60 days later, the production data</SectionTitle>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Validation testing predicted the direction. Production data
                confirmed it — and one number went further than projected.
              </p>
            </div>
            <Table
              headers={["Hypothesis", "Target", "Actual"]}
              rows={[
                ["Modular IA reduces task time", "−30%", "−42% ✓"],
                [
                  "Customizable dashboards drive recurring use",
                  "70% weekly",
                  "87% ✓",
                ],
                [
                  "Natural-language preview enables self-service",
                  "50% of users",
                  "64% ✓",
                ],
                [
                  "Predictable structure reduces support load",
                  "−25% tickets",
                  "−40% ✓",
                ],
              ]}
            />
            <Callout>
              The number I cared about most was the{" "}
              <strong>
                64% of users configuring automations without support
              </strong>
              . That figure validated the entire systems thesis. Engineering
              hours that used to go into one-off automation requests now go into
              building new modules.{" "}
              <strong>That&apos;s not a UX win. That&apos;s an organizational one.</strong>
            </Callout>
            <Divider />
          </motion.section>

          {/* 09 — 3.5 hours */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <div>
              <SectionTitle>
                09 · The 3.5 hours per operator per week
              </SectionTitle>
            </div>
            <BlueBox>
              <p className="text-3xl font-bold" style={{ color: BLUE }}>
                ~3.5 hrs / operator / week
              </p>
              <p className="mt-2 text-sm text-white/50">
                Recovered from the 42% reduction in critical task time.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Across an operation with 20 technicians, that&apos;s a{" "}
                <strong className="text-white/80">
                  full work-week of capacity recovered every week.
                </strong>{" "}
                Without changing the data layer. Without changing the hardware.
                Without changing the business model. The leverage came from
                organizing the same information into a system that matched how
                operators actually work.
              </p>
            </BlueBox>
            <Divider />
          </motion.section>

          {/* 10 — What I'd do differently */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <div>
              <SectionTitle>10 · What I&apos;d do differently</SectionTitle>
            </div>
            <div className="flex flex-col gap-4">
              {(
                [
                  {
                    title: "Push for AI-assisted UI ideation from week one",
                    body: "Some of the most useful component variations came late, after I'd already shipped a v1 of the design system. Earlier exploration with AI as an ideation partner — not a substitute for design judgment — would have surfaced layout patterns sooner.",
                  },
                  {
                    title: "Ship a leaner v1 and iterate",
                    body: "The temptation in a 3-month engagement is to deliver a complete system. The better strategy is to ship the core navigation and dashboard early, learn from real production behavior, and let v2 be informed by data instead of theory.",
                  },
                  {
                    title:
                      "Run technical workshops with engineering at the start, not the middle",
                    body: "The complexity of what Kanut actually processes — sensor cadence, data volumes, automation execution — is non-trivial. Front-loading that technical understanding through structured workshops would have saved several iterations.",
                  },
                ] as { title: string; body: string }[]
              ).map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-5"
                >
                  <p className="font-semibold text-text-primary">{item.title}</p>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
            <Divider />
          </motion.section>

          {/* 11 — What this project is really about */}
          <motion.section variants={fade} className="flex flex-col gap-6">
            <div>
              <SectionTitle>
                11 · What this project is really about
              </SectionTitle>
            </div>
            <BlueBox>
              <p className="text-xl font-semibold leading-snug text-white sm:text-2xl">
                &ldquo;The most impactful design decision I made wasn&apos;t a screen. It
                was the structure underneath the screens.&rdquo;
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Strip away the agricultural domain, the IoT context, the
                specific UI patterns, and what&apos;s left is a single
                methodological argument: the information architecture
                restructure is what made every metric in this case study
                possible. The screens are downstream consequences of getting
                the structure right.
              </p>
            </BlueBox>
            <p className="text-sm leading-relaxed text-text-secondary">
              That&apos;s the systems thinking I bring to product design — the lens
              I&apos;d apply to any product where the surface symptom is &ldquo;the UI is
              confusing&rdquo; but the actual cause is &ldquo;the structure doesn&apos;t match
              how the work happens.&rdquo;
            </p>
            <p className="text-sm leading-relaxed text-text-secondary">
              Kanut had the data. It just needed the structure to turn data into
              decisions.{" "}
              <strong className="text-text-primary">
                That structure is what I built.
              </strong>
            </p>
          </motion.section>

          {/* Footer */}
          <motion.footer
            variants={fade}
            className="flex flex-col items-start gap-2 border-t border-border pt-10 text-sm text-text-muted"
          >
            <p className="font-medium text-text-secondary">
              Nicolás Vargas — Product Designer
            </p>
            <p>Kanut · Greenspec · 3-month engagement</p>
          </motion.footer>
        </motion.div>
      </div>
    </main>
  );
}
