export interface SolutionDetail {
  id: string;
  title: string;
  subtitle: string;
  advantages: string[];
  image: string;
  options?: {
    title: string;
    description?: string;
  }[];
  technologies?: {
    name: string;
    advantages: string[];
    bestUsedIn: string[];
  }[];
}

export interface SolutionCategory {
  name: string;
  mainTitle: string;
  mainDescription: string;
  solutions: SolutionDetail[];
  serviceCoverage: {
    title: string;
    locations: string[];
  };
  closingStatement: {
    title: string;
    description: string;
    cta: string;
  };
}
