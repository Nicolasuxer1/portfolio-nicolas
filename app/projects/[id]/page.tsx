import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectDetail from "@/components/ProjectDetail";

type Props = {
  params: { id: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export function generateMetadata({ params }: Props) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return {};
  return {
    title: `${project.title} — Nicolás Vargas`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
