type Status =
  | "shipped"
  | "iteration"
  | "concept"
  | "live"
  | "in-progress"
  | "done";

type BadgeVars = { bg: string; text: string; dot: string };

const colorMap: Record<Status, BadgeVars> = {
  shipped:       { bg: "var(--badge-green-bg)",  text: "var(--badge-green-text)",  dot: "var(--badge-green-dot)"  },
  live:          { bg: "var(--badge-green-bg)",  text: "var(--badge-green-text)",  dot: "var(--badge-green-dot)"  },
  "in-progress": { bg: "var(--badge-blue-bg)",   text: "var(--badge-blue-text)",   dot: "var(--badge-blue-dot)"   },
  done:          { bg: "var(--badge-green-bg)",  text: "var(--badge-green-text)",  dot: "var(--badge-green-dot)"  },
  iteration:     { bg: "var(--badge-amber-bg)",  text: "var(--badge-amber-text)",  dot: "var(--badge-amber-dot)"  },
  concept:       { bg: "var(--badge-zinc-bg)",   text: "var(--badge-zinc-text)",   dot: "var(--badge-zinc-dot)"   },
};

const labels: Record<Status, string> = {
  shipped:       "SHIPPED",
  live:          "DONE",
  "in-progress": "IN PROGRESS",
  done:          "DONE",
  iteration:     "ITERATION",
  concept:       "CONCEPT",
};

type Props = {
  status: Status;
  className?: string;
};

export default function StatusBadge({ status, className = "" }: Props) {
  const { bg, text, dot } = colorMap[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium uppercase tracking-wide ${className}`}
      style={{ backgroundColor: bg, color: text }}
    >
      <span
        className="h-1.5 w-1.5 shrink-0 rounded-full animate-pulse-dot"
        style={{ backgroundColor: dot }}
      />
      {labels[status]}
    </span>
  );
}
