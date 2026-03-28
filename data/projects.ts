import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "kanut",
    title: "Kanut — Greenhouse Automation Platform",
    description:
      "Designing a modular IoT dashboard system that translates real-time sensor data into operational decisions for greenhouse operators. Focused on system architecture, component logic, and clarity under complexity.",
    status: "live",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=75",
    context:
      "Greenspec needed a SaaS platform for greenhouse automation. The challenge: translating raw IoT sensor streams, alerts, and control commands into dashboards that greenhouse operators can actually act on — without an engineering degree. The product had no design foundation; I defined the entire UI architecture from scratch.",
    role: "UX/UI Designer at Greenspec (2025 – Present) · Netherlands, Remote. Led the full design process: discovery, information architecture, component system, and design-to-dev handoff. Sole designer on a product-focused team scaling from MVP to commercial launch.",
    features: [
      {
        id: "sensor-dashboard",
        title: "Sensor Monitoring Dashboard",
        description:
          "The primary operator interface: a real-time overview of all active sensors across greenhouse zones — temperature, humidity, CO₂, light intensity — with status-driven visual hierarchy.",
        status: "shipped",
        problem:
          "Operators were managing sensor data through raw spreadsheet exports and disconnected alerts. There was no unified view, making it impossible to spot anomalies across zones without switching between multiple tools.",
        solution:
          "A zoned dashboard with a card-per-sensor layout, where card state (normal, warning, critical) drives color and prominence. Operators see the full picture in one view and drill down only when a zone demands attention.",
        decisions:
          "We debated chart-first vs status-first layout. Charts are visually impressive but operators don't need historical context during routine monitoring — they need to know right now if something is wrong. Status-first won. Charts are accessible in a secondary detail view.",
        outcome:
          "Operators identified anomalies 3× faster in usability testing compared to the previous spreadsheet-based workflow. Critical alerts were noticed within 8 seconds on average.",
      },
      {
        id: "alert-system",
        title: "Alert & Notification System",
        description:
          "A tiered alert system that separates informational updates from actionable warnings and critical failures, with configurable thresholds per sensor per zone.",
        status: "shipped",
        problem:
          "The existing alert mechanism sent every sensor deviation as an identical email notification. Alert fatigue was severe — operators had stopped opening notifications entirely, missing genuine failures.",
        solution:
          "A three-tier alert model (info / warning / critical) with visual and audio differentiation in-app. Critical alerts are persistent and require manual acknowledgment. Warning alerts are batched hourly. Info updates are passively logged.",
        decisions:
          "Push notifications were requested early. We held them for v2 because configuring per-device thresholds for push required backend infrastructure not yet built. The in-app system shipped first and validated the tier model before investing in push delivery.",
        outcome:
          "Critical alert acknowledgment rate increased from under 30% to 94% in the first month after launch.",
      },
      {
        id: "control-commands",
        title: "Actuator Control Interface",
        description:
          "A command panel for controlling greenhouse actuators — ventilation, irrigation, heating — directly from the dashboard, with confirmation flows for high-impact actions.",
        status: "shipped",
        problem:
          "Operators needed to trigger actuator commands but the only mechanism was a backend admin panel accessible only to engineers. Any operational adjustment required a Slack message to the dev team.",
        solution:
          "An operator-facing control panel with clearly labeled actuator groups, real-time feedback on command execution, and a two-step confirmation for actions that affect multiple zones simultaneously.",
        decisions:
          "Destructive or wide-impact commands (e.g. full ventilation open across all zones) required engineering to define safe limits before we could expose them in UI. We shipped single-zone controls in v1 and gated multi-zone behind a permission role.",
        outcome:
          "Reduced engineering interruptions for operational commands from ~12 per day to near zero within two weeks of rollout.",
      },
      {
        id: "design-system",
        title: "Component System & Design Tokens",
        description:
          "A foundational design system built from scratch: semantic color tokens, a sensor-state color language, and a reusable component library aligned to the engineering stack.",
        status: "shipped",
        problem:
          "Without a design system, every new screen was designed independently. Components were inconsistent, handoff documentation was incomplete, and engineers were making visual decisions that should have been resolved at the design level.",
        solution:
          "A token-based design system in Figma with a semantic color layer (status colors, surface hierarchy, typography scale) and a component library that maps 1:1 to the React component structure used by engineering.",
        decisions:
          "IoT products use color semantically — red means danger everywhere, not branding. We separated the sensor-state palette (fixed, never used for decoration) from the brand palette. This prevented any future design decision from accidentally depleting the meaning of alert colors.",
        outcome:
          "New screen design time dropped by approximately 60% after the system was established. Engineering reported significantly fewer clarification questions per sprint.",
      },
    ],
  },
  {
    id: "linktic-design-system",
    title: "Enterprise Design System — LinkTIC",
    description:
      "Building and scaling a shared design system across multiple enterprise platforms with conflicting requirements, legacy codebases, and government-grade accessibility standards.",
    status: "live",
    coverImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=75",
    context:
      "LinkTIC delivers digital platforms for some of Colombia's largest public institutions — IDEAM, Acueducto de Bogotá, Findeter, Fiscalía, Positiva. Before this project, each client platform was designed and built in isolation, creating inconsistent experiences and massive rework with each new engagement.",
    role: "UX/UI Designer at LinkTIC (Nov 2021 – Dec 2024) · Colombia. Led the design system initiative from proposal to adoption across 5+ active client projects. Mentored junior designers and served as the design-to-engineering bridge in Scrum-based delivery cycles.",
    features: [
      {
        id: "token-foundation",
        title: "Design Token Architecture",
        description:
          "A semantic token system that separates primitive values from contextual usage, enabling theming across multiple client brands without duplicating components.",
        status: "shipped",
        problem:
          "Every client engagement started from scratch. Designers were copying and modifying components from previous projects by hand, introducing drift and errors. There was no source of truth.",
        solution:
          "A two-layer token model: primitives (raw values) and semantic tokens (contextual meaning). Each client brand overrides only the primitive layer — all semantic tokens and component logic remain shared.",
        decisions:
          "We debated building per-client component libraries vs a single shared system. Per-client was faster to start but would have multiplied maintenance. The shared system required upfront alignment across project leads, but paid off by the third engagement — new clients were deliverable in 40% less setup time.",
        outcome:
          "The token system was adopted across 5 active client projects within 6 months of launch. Rework from inconsistency dropped significantly across sprint reviews.",
      },
      {
        id: "component-library",
        title: "Shared Component Library",
        description:
          "A Figma component library of 80+ components — forms, tables, navigation, dashboards — with auto-layout, variant properties, and documented usage guidelines.",
        status: "shipped",
        problem:
          "Junior designers were rebuilding common UI patterns from scratch on each project, leading to visual inconsistency and slow delivery. There was no documentation on when to use which pattern.",
        solution:
          "A structured Figma library organized by domain (forms, data display, navigation, feedback) with component variants, interaction states, and usage notes embedded directly in the file.",
        decisions:
          "Documentation was written as embedded Figma annotations rather than a separate Notion wiki. This kept usage guidance visible at the point of design decision, not buried in a tool designers had to separately open.",
        outcome:
          "New project setup time dropped from approximately 2 weeks to 3 days. Junior designers reported significantly higher confidence in component decisions.",
      },
      {
        id: "accessibility",
        title: "WCAG 2.1 AA Compliance Layer",
        description:
          "A compliance audit and remediation process applied across all active client platforms, with WCAG 2.1 AA requirements built into the component system as non-negotiable defaults.",
        status: "shipped",
        problem:
          "Several client projects — particularly government platforms — had legal accessibility requirements that were being handled reactively, discovered during QA or client review rather than addressed in design.",
        solution:
          "Accessibility requirements were embedded into component documentation as design constraints: minimum contrast ratios, required focus states, touch target minimums, and keyboard navigation flows defined before any implementation.",
        decisions:
          "We made AA compliance the default rather than an option. Some designers pushed back on contrast requirements affecting brand colors. The decision was to either adjust the palette or create a compliant accent — never to ship below AA on a government-facing product.",
        outcome:
          "Zero accessibility rejections in the final government client audits that followed system adoption. Compliance review time dropped by approximately 70% because issues were caught at the design stage.",
      },
      {
        id: "handoff-process",
        title: "Developer Handoff Process",
        description:
          "A structured handoff workflow — annotations, redlines, component mapping — that reduced clarification cycles and gave engineers a clear implementation reference.",
        status: "iteration",
        problem:
          "Developers were making visual decisions at implementation time because specs were incomplete or ambiguous. This created gaps between designed and shipped experiences that had to be corrected in QA.",
        solution:
          "A standardized handoff checklist with required annotations per component type: spacing references, interactive states, edge cases, and responsive behavior. Each delivery includes a Figma prototype and a component-to-code mapping table.",
        decisions:
          "The first version of the process was too detailed — designers were spending more time on annotations than design. We trimmed the checklist to only the decisions that had historically caused back-and-forth, and moved obvious specs to the component documentation layer instead.",
      },
    ],
  },
];
