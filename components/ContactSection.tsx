"use client";

import { motion } from "framer-motion";
import SectionBlock from "@/components/ui/SectionBlock";

const item = {
  hidden: { opacity: 0, y: 12 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function ContactSection() {
  return (
    <SectionBlock title="Contact">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.1 }}
        className="flex flex-col gap-8"
      >
        <motion.h2
          variants={item}
          className="text-2xl font-semibold leading-snug tracking-tight text-text-primary sm:text-3xl"
        >
          Let&apos;s build something{" "}
          <span className="italic text-accent">worth using.</span>
        </motion.h2>

        <motion.div variants={item} className="flex flex-wrap items-center gap-3">
          <a
            href="mailto:vargas.dvisual@gmail.com"
            className="inline-flex items-center gap-2 rounded-md bg-text-primary px-4 py-2.5 text-sm font-medium text-canvas transition-opacity hover:opacity-80"
          >
            vargas.dvisual@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/nicolasvargas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md border border-border px-4 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-nav-hover hover:text-text-primary"
          >
            LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </SectionBlock>
  );
}
