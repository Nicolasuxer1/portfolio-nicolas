import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "dropi",
    title: "Dropi — Product Design Challenge",
    description:
      "Redesigning brand activation for a multilateral logistics platform in LATAM. Moving activation rate from <20% to 45% through experience design and communication strategy — without changing the core product architecture.",
    status: "done",
    coverImage: "/dropi/cover.webp",
    context: "",
    role: "",
    features: [],
  },
  {
    id: "client-portal",
    title: "Client Portal SaaS Platform",
    description:
      "The Client Portal is a secure web platform that allows distributors and clients to access product information, request quotations, and retrieve account-related documents such as invoices and manuals.",
    status: "in-progress",
    coverImage: "/images/client-portal-cover.png",
    context:
          `
      Currently, distributor interactions with Greenspec rely heavily on email, creating friction, slower response times, and limited visibility across requests.

      The Client Portal centralizes these processes into a single platform, enabling distributors to browse products, request quotes, and access their history without manual communication.

      This shift improves transparency, reduces operational workload, and lays the foundation for scalable B2B commerce.
      `,
    role: "Led the Product Experience of a B2B Client Portal, defining the product structure, navigation, and design system from the ground up. Worked closely with stakeholders to align user needs, business goals, and technical constraints, delivering features iteratively (authentication, dashboard, and core modules) while ensuring scalability and consistency across the platform.",
    features: [
      {
        id: "navegation-model",
        title: "Mental model of navigation",
        description:
            "Greenspec needed to introduce a B2B client portal inside an existing website without disrupting how users already navigated the platform. This was a challenge because the existing website had a complex navigation structure and a lot of pages. We needed to create a new mental model of navigation for the B2B client portal.",
        status: "done",
        sections: [
          {
            type: "highlight",
            content:
              "Users were non-technical (people over 50) and had already invested time learning the existing navigation, changing it would introduce unnecessary friction.",
          },
          {
            type: "list",
            title: "Problem statement",
            items: [
              "User familiarity (existing website navigation already learned)",
              "Product needs (introducing operational modules: Quotes, Orders, Invoices) ",
              "Technical constraints (small dev team, need for scalable solutions)",
            ],
          },
          {
            type: "image",
            src: "/images/client-portal-feat-1.png",
            caption: "We explored three quick prototyping approaches: Using a existed UI, I made a fully separate portal, a full sidebar integration, and a conditional sidebar (appear only when the user is logged in). Each introduced trade-offs between usability, complexity, and development cost.",
          },
          {
            type: "text",
            title: "Technical considerations",
            content:
              "Limited development resources made a full portal rebuild impractical it would increase complexity, slow down delivery, and add long-term maintenance overhead. The solution needed to be incremental, non-disruptive, and compatible with the existing architecture.",
          },
          {
            type: "text",
            title: "Solution",
            content:
              "Introduce portal functionality as a lightweight, persistent layer without disrupting the existing navigation system. ",
          },
          {
            type: "image",
            src: "/images/client-portal-feat-1-1.png",
            caption: "The final solution introduces a hybrid navigation model: the top navbar remains unchanged to preserve existing user familiarity, while a minimal, icon-only sidebar provides access to portal features. The sidebar stays collapsed by default and expands on hover, allowing users to navigate operational modules like Dashboard, Quotes, Orders, and Invoices without disrupting their established workflow.",
          },
          {
            type: "text",
            title: "Responsive adaptation",
            content:
              "On mobile, the navigation adapts to a bottom bar pattern with 4–5 primary actions, giving direct access to core portal modules like Dashboard, Quotes, Orders, Invoices, and Account. Website navigation is moved into the hamburger menu, separating concerns between browsing and operational tasks. ",
          },
          {
            type: "image",
            src: "/images/client-portal-feat-1-1.png",
            caption: "The final solution introduces a hybrid navigation model: the top navbar remains unchanged to preserve existing user familiarity, while a minimal, icon-only sidebar provides access to portal features. The sidebar stays collapsed by default and expands on hover, allowing users to navigate operational modules like Dashboard, Quotes, Orders, and Invoices without disrupting their established workflow.",
          },
          {
            type: "metrics",
            items: [
              { label: "Navegation disruption", value: "0 relearning required" },
              { label: "Implementation", value: "3 weeks faster" },
              { label: "Cognitive load", value: "Reduced by 60%" },
            ],
          },
          {
            type: "quote",
            content:
              "This new way of navigating was easy to get used to; I don't feel like I'm in two different places, and I can see everything in one place.",
            attribution: "Greenhouse distributor, usability test",
          },
          
        ],
      },
      {
        id: "alert-system",
        title: "Alert & Notification System",
        description:
          "A tiered alert system that separates informational updates from actionable warnings and critical failures, with configurable thresholds per sensor per zone.",
        status: "to-do",
        sections: [
          {
            type: "text",
            title: "The problem",
            content:
              "The existing alert mechanism sent every sensor deviation as an identical email notification. Alert fatigue was severe — operators had stopped opening notifications entirely, missing genuine failures.",
          },
          {
            type: "highlight",
            content:
              "When everything is urgent, nothing is. Alert fatigue is a design problem, not a user problem.",
          },
          {
            type: "text",
            title: "The solution",
            content:
              "A three-tier alert model (info / warning / critical) with visual and audio differentiation in-app. Critical alerts are persistent and require manual acknowledgment. Warning alerts are batched hourly. Info updates are passively logged.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&q=80",
            caption: "Tiered notifications reduce alert fatigue",
          },
          {
            type: "text",
            title: "Key decisions",
            content:
              "Push notifications were requested early. We held them for v2 because configuring per-device thresholds for push required backend infrastructure not yet built. The in-app system shipped first and validated the tier model before investing in push delivery.",
          },
          {
            type: "metrics",
            items: [
              { label: "Critical alert acknowledgment", value: "94%" },
              { label: "Previous acknowledgment rate", value: "<30%" },
              { label: "Time to first response", value: "↓ 68%" },
            ],
          },
        ],
      },
      {
        id: "control-commands",
        title: "Actuator Control Interface",
        description:
          "A command panel for controlling greenhouse actuators — ventilation, irrigation, heating — directly from the dashboard, with confirmation flows for high-impact actions.",
        status: "to-do",
        sections: [
          {
            type: "text",
            title: "The problem",
            content:
              "Operators needed to trigger actuator commands but the only mechanism was a backend admin panel accessible only to engineers. Any operational adjustment required a Slack message to the dev team.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1600&q=80",
            caption: "Operator controls with safe confirmation flows",
          },
          {
            type: "text",
            title: "The solution",
            content:
              "An operator-facing control panel with clearly labeled actuator groups, real-time feedback on command execution, and a two-step confirmation for actions that affect multiple zones simultaneously.",
          },
          {
            type: "text",
            title: "Key decisions",
            content:
              "Destructive or wide-impact commands (e.g. full ventilation open across all zones) required engineering to define safe limits before we could expose them in UI. We shipped single-zone controls in v1 and gated multi-zone behind a permission role.",
          },
          {
            type: "text",
            title: "Outcome",
            content:
              "Reduced engineering interruptions for operational commands from ~12 per day to near zero within two weeks of rollout.",
          },
        ],
      },
      {
        id: "design-system",
        title: "Component System & Design Tokens",
        description:
          "A foundational design system built from scratch: semantic color tokens, a sensor-state color language, and a reusable component library aligned to the engineering stack.",
        status: "to-do",
        sections: [
          {
            type: "text",
            title: "The problem",
            content:
              "Without a design system, every new screen was designed independently. Components were inconsistent, handoff documentation was incomplete, and engineers were making visual decisions that should have been resolved at the design level.",
          },
          {
            type: "text",
            title: "The solution",
            content:
              "A token-based design system in Figma with a semantic color layer (status colors, surface hierarchy, typography scale) and a component library that maps 1:1 to the React component structure used by engineering.",
          },
          {
            type: "text",
            title: "Key decisions",
            content:
              "IoT products use color semantically — red means danger everywhere, not branding. We separated the sensor-state palette (fixed, never used for decoration) from the brand palette. This prevented any future design decision from accidentally depleting the meaning of alert colors.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1600&q=80",
            caption: "Tokenized components created a shared visual language",
          },
          {
            type: "text",
            title: "Outcome",
            content:
              "New screen design time dropped by approximately 60% after the system was established. Engineering reported significantly fewer clarification questions per sprint.",
          },
        ],
      },
    ],
  },
  {
    id: "kanut-project",
    title: "Kanut — Greenhouse Software Manager",
    description:
      "A SaaS platform designed to help greenhouse operators monitor, manage, and automate their production environments through real-time data and control systems.",
    status: "done",
    coverImage: "/images/client-portal-cover.png",
    context:
      `Greenspec needed to evolve from a fragmented set of tools into a unified platform where operators could monitor environmental variables (temperature, humidity, CO₂, light), control greenhouse systems remotely, and access operational data in real time.

      The existing experience was fragmented across tools, difficult to understand, and not aligned with user mental models. Additionally, most users were non-technical operators, making clarity and usability critical.`,
    role: "UX/UI Designer at Greenspec (2025 – Present). Led end-to-end product design, defined information architecture, built component logic and UI system, designed core dashboards and interaction patterns, and worked closely with developers in an agile environment.",
    features: [
      {
        id: "navigation-system",
        title: "Navigation System & Information Architecture Redesign",
        description:
          "A layered navigation model that introduced portal functionality without disrupting existing user mental models keeping the top navbar intact and adding a minimal sidebar for operational features.",
        status: "done",
        sections: [
          {
            type: "text",
            title: "Context",
            content:
              "Kanut had evolved into a powerful system connecting sensors, devices, and controls across greenhouse operations. However, its structure had grown organically, resulting in a fragmented experience where users struggled to locate data, navigate between modules, and execute actions efficiently.",
          },
          {
            type: "highlight",
            content:
              "68% of operational actions were still performed manually due to lack of clear system structure. Operators spent up to 60% of their time navigating between tools instead of acting on data.",
          },
          {
            type: "text",
            title: "User Insight",
            content:
              "Through interviews and observation sessions with expert users, a key pattern emerged: even highly technical users felt constrained by the system. Navigation was not aligned with their mental model of greenhouse operations, forcing them to adapt to the tool instead of the tool adapting to them.",
          },
          {
            type: "quote",
            content:
              "Sometimes I just need to compare two variables, but I have to go through too many menus.",
          },
          {
            type: "text",
            title: "Problem",
            content:
              "The core issue was not the lack of functionality, but the lack of structure. Information was dispersed, entry points were unclear, and there was no consistent way to move between monitoring, control, and analysis tasks.",
          },
          {
            type: "text",
            title: "Business Impact",
            content:
              "This fragmentation directly affected operational efficiency. Slower access to critical data meant delayed decisions, increased manual work, and higher dependency on experienced users. This created scalability risks for Greenspec as they aimed to expand the platform.",
          },
          {
            type: "text",
            title: "Solution",
            content:
              "Instead of redesigning the entire system, I introduced a layered navigation model that separates concerns while preserving user familiarity. The solution combines an unchanged top navigation for global context with a new operational layer designed specifically for real-time decision making.",
          },
          {
            type: "image",
            src: "/images/client-portal-feat-1-1.png",
            caption: "Layered navigation model separating website navigation from operational workflows",
          },
          {
            type: "text",
            title: "Design Decisions",
            content:
              "Several key decisions shaped the solution. First, preserving the existing top navigation reduced relearning costs for returning users. Second, introducing a persistent sidebar created a dedicated operational space without interfering with browsing behavior. Third, avoiding nested navigation ensured fast access and reduced cognitive load during critical tasks.",
          },
          {
            type: "grid",
            items: [
              {
                title: "Preserve Familiarity",
                description: "Maintained existing navigation to avoid disrupting learned behaviors",
              },
              {
                title: "Separate Contexts",
                description: "Website navigation vs operational workflows clearly divided",
              },
              {
                title: "Reduce Cognitive Load",
                description: "Flat structure with no deep nesting",
              },
            ],
          },
          {
            type: "text",
            title: "Interaction Model",
            content:
              "The sidebar was designed to remain collapsed by default, showing only icons to reduce visual noise. On hover, it expands temporarily, allowing access to labels without permanently occupying space. This interaction balances discoverability and efficiency.",
          },
          {
            type: "image",
            src: "/images/projects/kanut/sidebar-interaction.png",
            caption: "Collapsed sidebar expanding on hover to optimize space and clarity",
          },
          {
            type: "text",
            title: "Responsive Adaptation",
            content:
              "On mobile, the navigation system shifts from structural separation to positional clarity. A bottom navigation bar handles operational features, while the top navigation retains global access. This ensures usability without overloading limited screen space.",
          },
          {
            type: "image",
            src: "/images/projects/kanut/mobile-navigation.png",
            caption: "Mobile navigation separates contexts by position instead of structure",
          },
          {
            type: "text",
            title: "Outcome",
            content:
              "The redesigned navigation significantly improved task efficiency and reduced friction. Users were able to locate key modules faster, navigate with more confidence, and complete workflows with fewer steps.",
          },
          {
            type: "metrics",
            items: [
              { label: "Task success rate", value: "93%" },
              { label: "Time improvement", value: "42% faster" },
              { label: "Navigation errors", value: "-35%" },
            ],
          },
          {
            type: "text",
            title: "Key Insight",
            content:
              "The problem was not adding more features, but structuring access to them. By aligning navigation with how users think about their work, the system shifted from being a tool they had to learn to one that supports how they operate.",
          },
        ],
      },
      {
        id: "sensor-dashboard",
        title: "Sensor Monitoring Dashboard",
        description:
          "A status-driven dashboard where each sensor is represented as a card with visual hierarchy based on system state — Normal, Warning, or Critical — enabling fast scanning and instant issue identification.",
        status: "iteration",
        sections: [
          {
            type: "text",
            title: "The problem",
            content:
              "Operators were managing greenhouse data through spreadsheets, disconnected alerts, and multiple tools. There was no unified way to understand system status at a glance.",
          },
          {
            type: "highlight",
            content:
              "When there is no single view of system state, operators lose time switching tools — and critical issues go unnoticed.",
          },
          {
            type: "text",
            title: "The solution",
            content:
              "A status-driven dashboard where each sensor is represented as a card. Visual hierarchy is based on system state: Normal, Warning, or Critical. Users can scan all zones quickly, identify issues instantly, and drill down only when necessary.",
          },
          {
            type: "list",
            title: "Key decisions",
            items: [
              "Prioritized status over charts for the primary view",
              "Moved historical data to secondary screens",
              "Designed for fast scanning, not deep analysis",
            ],
          },
          {
            type: "list",
            title: "Outcome",
            items: [
              "Faster anomaly detection",
              "Reduced time to identify critical issues",
              "Improved operational awareness across all zones",
            ],
          },
        ],
      },
      {
        id: "alert-system",
        title: "Alert System",
        description:
          "A tiered alert model that separates informational updates from actionable warnings and critical failures, eliminating alert fatigue and improving operator response to real issues.",
        status: "to-do",
        sections: [
          {
            type: "text",
            title: "The problem",
            content:
              "The previous alert system sent identical notifications for all events, regardless of severity. This generated alert fatigue — operators had stopped opening notifications entirely, missing genuine failures.",
          },
          {
            type: "highlight",
            content:
              "When everything is urgent, nothing is. Alert fatigue is a design problem, not a user problem.",
          },
          {
            type: "text",
            title: "The solution",
            content:
              "A three-tier alert model: Info (passive logging), Warning (batched notifications), and Critical (persistent, requires manual acknowledgment). Each tier has distinct visual and behavioral treatment to reinforce its severity.",
          },
          {
            type: "list",
            title: "Key decisions",
            items: [
              "Delay push notifications until system maturity",
              "Focus first on in-app clarity",
              "Prioritize signal over volume",
            ],
          },
          {
            type: "list",
            title: "Outcome",
            items: [
              "Increased alert engagement",
              "Reduced notification noise",
              "Improved response to critical events",
            ],
          },
          {
            type: "list",
            title: "Design principles",
            items: [
              "Clarity over complexity",
              "Status-driven decision making",
              "Progressive disclosure",
              "Respect for existing user behavior",
            ],
          },
          {
            type: "highlight",
            content:
              "Designing Kanut was not about creating new interfaces — it was about translating complex systems into decisions that operators can understand instantly. The challenge wasn't the data — it was making it actionable.",
          },
        ],
      },
    ],
  },
];
