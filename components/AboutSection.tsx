"use client";

import { motion } from "framer-motion";
import SectionBlock from "@/components/ui/SectionBlock";

const pillars = [
  {
    num: "01",
    title: "Strategic thinking",
    desc: "I connect business goals to user needs before touching a frame. Design decisions are never arbitrary.",
  },
  {
    num: "02",
    title: "Systems over screens",
    desc: "I build scalable component libraries and design tokens, not one-off layouts that don't survive the next sprint.",
  },
  {
    num: "03",
    title: "Developer fluency",
    desc: "Solid HTML, CSS, JavaScript and React foundations. I write specs that eliminate back-and-forth and ship faster.",
  },
  {
    num: "04",
    title: "Research-driven decisions",
    desc: "Interviews, usability tests, hypothesis validation — I let real users challenge my assumptions before they become code.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function AboutSection() {
  return (
    <SectionBlock title="About">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 gap-12 md:grid-cols-2"
      >
        {/* Left — text */}
        <motion.div variants={item} className="flex flex-col gap-5">
          <h2 className="text-2xl font-semibold leading-snug tracking-tight text-text-primary sm:text-3xl">
            I design products,{" "}
            <span className="italic text-accent">not screens.</span>
          </h2>
          <p className="text-sm leading-relaxed text-text-secondary">
            I work at the intersection of product, design, and engineering —
            helping teams turn complex SaaS problems into scalable systems. My
            approach combines strategic thinking, design systems, and frontend
            awareness to reduce friction and ship faster.
          </p>
          <p className="text-sm leading-relaxed text-text-secondary">
            With over 4 years designing B2B platforms — from IoT dashboards for
            the agricultural industry to government-grade enterprise tools — I&apos;ve
            learned that great design isn&apos;t about beautiful interfaces. It&apos;s
            about reducing cognitive load, aligning with engineering constraints,
            and making sure the business goal is met.
          </p>
        </motion.div>

        {/* Right — pillars */}
        <motion.div variants={container} className="flex flex-col">
          {pillars.map((p) => (
            <motion.div
              key={p.num}
              variants={item}
              className="flex items-start gap-4 border-b border-border py-4 first:border-t"
            >
              <span className="mt-0.5 shrink-0 text-xs font-medium text-accent/60">
                {p.num}
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium text-text-primary">{p.title}</span>
                <span className="text-sm leading-relaxed text-text-muted">{p.desc}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionBlock>
  );
}
