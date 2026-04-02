import Image from "next/image";
import SectionBlock from "@/components/ui/SectionBlock";
import type { FeatureSection } from "@/types";

type Props = {
  section: FeatureSection;
};

export default function FeatureSectionRenderer({ section }: Props) {
  // ── text ──────────────────────────────────────────────────────────────────
  if (section.type === "text") {
    return (
      <SectionBlock title={section.title}>
        <p className="max-w-2xl text-sm leading-relaxed text-text-secondary">
          {section.content}
        </p>
      </SectionBlock>
    );
  }

  // ── highlight ─────────────────────────────────────────────────────────────
  if (section.type === "highlight") {
    return (
      <div className="border-l-2 border-accent pl-5">
        <p className="text-base font-medium leading-relaxed text-text-primary">
          {section.content}
        </p>
      </div>
    );
  }

  // ── metrics ───────────────────────────────────────────────────────────────
  if (section.type === "metrics") {
    return (
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border sm:grid-cols-3">
        {section.items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col gap-1 bg-surface px-5 py-5"
          >
            <span className="text-2xl font-semibold tracking-tight text-text-primary">
              {item.value}
            </span>
            <span className="text-xs font-medium uppercase tracking-widest text-text-muted">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  // ── quote ─────────────────────────────────────────────────────────────────
  if (section.type === "quote") {
    return (
      <figure className="flex flex-col gap-4">
        <svg
          aria-hidden
          width="24"
          height="18"
          viewBox="0 0 24 18"
          fill="none"
          className="text-accent/50"
        >
          <path
            d="M0 18V10.8C0 7.8 .8 5.267 2.4 3.2 4 1.067 6.267 0 9.2 0L10 1.6C8.267 2.133 6.9 3.1 5.9 4.5 4.967 5.833 4.5 7.267 4.5 8.8H9V18H0ZM15 18V10.8C15 7.8 15.8 5.267 17.4 3.2 19 1.067 21.267 0 24.2 0L25 1.6C23.267 2.133 21.9 3.1 20.9 4.5 19.967 5.833 19.5 7.267 19.5 8.8H24V18H15Z"
            fill="currentColor"
          />
        </svg>
        <blockquote className="max-w-2xl text-base italic leading-relaxed text-text-secondary">
          {section.content}
        </blockquote>
        {section.attribution && (
          <figcaption className="text-xs font-medium uppercase tracking-widest text-text-muted">
            — {section.attribution}
          </figcaption>
        )}
      </figure>
    );
  }

  // ── list ──────────────────────────────────────────────────────────────────
  if (section.type === "list") {
    return (
      <SectionBlock title={section.title}>
        <ul className="flex flex-col gap-2.5">
          {section.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                aria-hidden
                className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
              <span className="text-sm leading-relaxed text-text-secondary">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </SectionBlock>
    );
  }

  // ── image-full ────────────────────────────────────────────────────────────
  if (section.type === "image-full") {
    return (
      <figure className="flex flex-col gap-3">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl border border-border">
          <Image
            src={section.src}
            alt={section.caption ?? "Feature image"}
            fill
            sizes="(min-width: 1024px) px, (min-width: 768px) 90vw, 100vw"
            className="object-cover"
          />
        </div>
        {section.caption && (
          <figcaption className="text-xs text-text-muted">
            {section.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  // ── image (16/9, contained) ───────────────────────────────────────────────
  return (
    <figure className="flex flex-col gap-3">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-surface/40">
        <Image
          src={section.src}
          alt={section.caption ?? "Feature section image"}
          fill
          sizes="(min-width: 1024px) 896px, (min-width: 768px) 90vw, 100vw"
          className="object-cover"
        />
      </div>
      {section.caption && (
        <figcaption className="text-sm text-text-muted">
          {section.caption}
        </figcaption>
      )}
    </figure>
  );
}
