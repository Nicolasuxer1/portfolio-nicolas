"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import type { Feature } from "@/types";
import StatusBadge from "@/components/ui/StatusBadge";

type Props = {
  feature: Feature;
  projectId: string;
};

const MotionLink = motion(Link);

const card: Variants = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function FeatureCard({ feature, projectId }: Props) {
  return (
    <MotionLink
      href={`/projects/${projectId}/features/${feature.id}`}
      variants={card}
      className="group flex items-start justify-between gap-4 rounded-xl bg-surface px-5 py-4 ring-1 ring-border transition-all duration-200 hover:bg-surface-raised hover:ring-border-strong"
    >
      <div className="flex min-w-0 flex-col gap-1.5">
        <h3 className="text-sm font-medium text-text-primary transition-colors duration-200 group-hover:text-accent">
          {feature.title}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-text-secondary">
          {feature.description}
        </p>
      </div>

      <div className="shrink-0 pt-0.5">
        <StatusBadge status={feature.status} />
      </div>
    </MotionLink>
  );
}
