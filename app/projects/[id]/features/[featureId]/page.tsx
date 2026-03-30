import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import FeatureSectionRenderer from "@/components/FeatureSectionRenderer";
import StatusBadge from "@/components/ui/StatusBadge";

type Props = {
  params: { id: string; featureId: string };
};

export function generateStaticParams() {
  return projects.flatMap((project) =>
    project.features.map((feature) => ({
      id: project.id,
      featureId: feature.id,
    }))
  );
}

export function generateMetadata({ params }: Props) {
  const project = projects.find((p) => p.id === params.id);
  const feature = project?.features.find((f) => f.id === params.featureId);
  if (!project || !feature) return {};
  return {
    title: `${feature.title} — ${project.title} — Nicolás Vargas`,
    description: feature.description,
  };
}

export default function FeaturePage({ params }: Props) {
  const project = projects.find((p) => p.id === params.id);
  const feature = project?.features.find((f) => f.id === params.featureId);
  if (!project || !feature) notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 pb-32 pt-28">
      <div className="flex flex-col gap-20">

        {/* Back link */}
        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-text-primary"
        >
          ← {project.title}
        </Link>

        {/* Header */}
        <header className="flex flex-col gap-5 border-b border-border pb-10">
          <div className="flex flex-wrap items-start gap-3">
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
              {feature.title}
            </h1>
            <StatusBadge status={feature.status} className="mt-2.5 shrink-0" />
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-text-secondary">
            {feature.description}
          </p>
        </header>

        {feature.sections.map((section, index) => (
          <FeatureSectionRenderer
            key={`${feature.id}-${section.type}-${index}`}
            section={section}
          />
        ))}

      </div>
    </main>
  );
}
