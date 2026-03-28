export type Feature = {
  id: string;
  title: string;
  description: string;
  status: "shipped" | "iteration" | "concept";
  problem: string;
  solution: string;
  decisions: string;
  outcome?: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  status: "live" | "in-progress" | "concept";
  coverImage: string;
  context: string;
  role: string;
  features: Feature[];
};
