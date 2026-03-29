"use client";

import { motion, type Variants } from "framer-motion";
import SectionBlock from "@/components/ui/SectionBlock";

const experiences = [
  {
    company: "Greenspec",
    role: "Senior Product Designer",
    period: "2023 – Present",
    location: "Bogotá, Colombia · Remote",
    description:
      "Leading product design for a greenhouse automation platform used across South America. Designed a modular IoT dashboard that reduced operator error by 40%, built the component library from scratch, and worked directly with engineering to define API contracts for real-time sensor data.",
    tags: ["IoT", "SaaS", "Design System", "B2B"],
  },
  {
    company: "LinkTIC",
    role: "Product Designer",
    period: "2021 – 2023",
    location: "Bogotá, Colombia",
    description:
      "Owned the design system for a suite of government-grade enterprise tools serving 10k+ public employees. Standardised 80+ components across 6 product teams, established design-to-dev handoff conventions, and ran usability testing cycles that directly shaped roadmap priorities.",
    tags: ["Enterprise", "Design System", "Government", "Accessibility"],
  },
  {
    company: "Vorse",
    role: "UI/UX Designer",
    period: "2020 – 2021",
    location: "Remote",
    description:
      "Designed end-to-end flows for early-stage SaaS products across fintech and logistics verticals. Worked in fast 2-week cycles, validated concepts with guerrilla testing, and shipped high-fidelity prototypes directly to development.",
    tags: ["Startup", "Fintech", "Logistics", "Prototyping"],
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function ExperienceSection() {
  return (
    <SectionBlock title="Experience">
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold leading-snug tracking-tight text-text-primary sm:text-3xl">
          Where I&apos;ve built{" "}
          <span className="italic text-accent">things.</span>
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.company}
              variants={item}
              className="flex flex-col gap-4 border-t border-border py-8 sm:flex-row sm:gap-10"
            >
              {/* Left — company + meta */}
              <div className="flex shrink-0 flex-col gap-1 sm:w-44">
                <span className="text-sm font-semibold text-text-primary">
                  {exp.company}
                </span>
                <span className="text-xs text-text-secondary">{exp.role}</span>
                <span className="mt-1 text-xs text-text-muted">{exp.period}</span>
                <span className="text-xs text-text-muted">{exp.location}</span>
              </div>

              {/* Right — description + tags */}
              <div className="flex flex-col gap-4">
                <p className="text-sm leading-relaxed text-text-secondary">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Bottom border to close the last item */}
          <div className="border-t border-border" />
        </motion.div>
      </div>
    </SectionBlock>
  );
}
