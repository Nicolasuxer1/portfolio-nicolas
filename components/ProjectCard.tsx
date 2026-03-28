import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";
import StatusBadge from "@/components/ui/StatusBadge";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group flex flex-col overflow-hidden rounded-xl bg-surface ring-1 ring-border transition-all duration-200 hover:bg-surface-raised hover:ring-border-strong"
    >
      {/* Square cover image */}
      <div className="relative aspect-square w-full overflow-hidden bg-surface-overlay">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Subtle gradient at bottom for text contrast */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-sm font-medium leading-snug text-text-primary transition-colors duration-200 group-hover:text-accent">
            {project.title}
          </h3>
          <StatusBadge status={project.status} className="shrink-0" />
        </div>
        <p className="line-clamp-2 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>
      </div>
    </Link>
  );
}
