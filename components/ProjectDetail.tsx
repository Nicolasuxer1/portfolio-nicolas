"use client";

import { motion } from "framer-motion";
import type { Project } from "@/types";
import SectionBlock from "@/components/ui/SectionBlock";
import StatusBadge from "@/components/ui/StatusBadge";
import FeatureCard from "@/components/FeatureCard";

type Props = {
  project: Project;
};

const page = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const section = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const featureList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function ProjectDetail({ project }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-6 pb-32 pt-28">
      <motion.div
        variants={page}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-20"
      >
        {/* Header */}
        <motion.header
          variants={section}
          className="flex flex-col gap-5 border-b border-border pb-10"
        >
          <div className="flex flex-wrap items-start gap-3">
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
              {project.title}
            </h1>
            <StatusBadge status={project.status} className="mt-2.5 shrink-0" />
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-text-secondary">
            {project.description}
          </p>
        </motion.header>

        {/* Context */}
        <motion.div variants={section}>
          <SectionBlock title="Context">
            <p className="max-w-2xl text-sm leading-relaxed text-text-secondary">
              {project.context}
            </p>
          </SectionBlock>
        </motion.div>

        {/* Role */}
        <motion.div variants={section}>
          <SectionBlock title="My Role">
            <p className="max-w-2xl text-sm leading-relaxed text-text-secondary">
              {project.role}
            </p>
          </SectionBlock>
        </motion.div>

        {/* Features */}
        <motion.div variants={section}>
          <SectionBlock title="Features">
            <motion.div
              variants={featureList}
              className="flex flex-col gap-4"
            >
              {project.features.map((feature) => (
                <FeatureCard
                  key={feature.id}
                  feature={feature}
                  projectId={project.id}
                />
              ))}
            </motion.div>
          </SectionBlock>
        </motion.div>
      </motion.div>
    </main>
  );
}
