export type Feature = {
  id: string;
  title: string;
  description: string;
  status: "shipped" | "iteration" | "concept";
  sections: FeatureSection[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  status: "done" | "in-progress" | "concept" | "live";
  coverImage: string;
  context: string;
  role: string;
  features: Feature[];
};

export type FeatureSection =
  | { type: "text"; title: string; content: string }
  | { type: "image"; src: string; caption?: string }
  | { type: "highlight"; content: string }
  | { type: "metrics"; items: { label: string; value: string }[] }
  | { type: "quote"; content: string; attribution?: string }
  | { type: "image-full"; src: string; caption?: string };
