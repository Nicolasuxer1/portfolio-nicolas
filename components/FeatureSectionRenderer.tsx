import Image from "next/image";
import SectionBlock from "@/components/ui/SectionBlock";
import type { FeatureSection } from "@/types";

type Props = {
  section: FeatureSection;
};

export default function FeatureSectionRenderer({ section }: Props) {
  if (section.type === "text") {
    return (
      <SectionBlock title={section.title}>
        <p className="max-w-2xl text-sm leading-relaxed text-text-secondary">
          {section.content}
        </p>
      </SectionBlock>
    );
  }

  return (
    <section className="flex flex-col gap-3">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-surface-muted/40">
        <Image
          src={section.src}
          alt={section.caption ?? "Feature section image"}
          fill
          sizes="(min-width: 1024px) 896px, (min-width: 768px) 90vw, 100vw"
          className="object-cover"
        />
      </div>
      {section.caption && (
        <p className="text-sm leading-relaxed text-text-muted">{section.caption}</p>
      )}
    </section>
  );
}
