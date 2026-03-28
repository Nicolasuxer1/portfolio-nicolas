type Props = {
  title: string;
  children: React.ReactNode;
};

export default function SectionBlock({ title, children }: Props) {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <h2 className="shrink-0 text-xs font-medium uppercase tracking-widest text-text-muted">
          {title}
        </h2>
        <div className="h-px w-full bg-border" />
      </div>
      <div>{children}</div>
    </section>
  );
}
