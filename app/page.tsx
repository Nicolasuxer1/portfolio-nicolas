import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SectionBlock from "@/components/ui/SectionBlock";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <main>
        {/* ── Hero ───────────────────────────────────── */}
        <Hero />

        {/* ── Selected Work ──────────────────────────── */}
        <section id="work" className="mx-auto max-w-4xl px-6 pb-28 pt-28">
          <SectionBlock title="Selected Work">
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-2xl font-semibold leading-snug tracking-tight text-text-primary sm:text-3xl">
                  Case studies that{" "}
                  <span className="italic text-accent">show the thinking.</span>
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-secondary">
                  Not just what was built — but why those decisions were made,
                  what was traded off, and what shipped.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </SectionBlock>
        </section>

        {/* ── About ──────────────────────────────────── */}
        <section id="about" className="mx-auto max-w-4xl px-6 pb-28">
          <AboutSection />
        </section>

        {/* ── Experience ─────────────────────────────── */}
        <section id="experience" className="mx-auto max-w-4xl px-6 pb-28">
          <ExperienceSection />
        </section>

        {/* ── Contact ────────────────────────────────── */}
        <section id="contact" className="mx-auto max-w-4xl px-6 pb-28">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </>
  );
}
