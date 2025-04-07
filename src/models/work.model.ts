interface WorkKeyFeatureModel {
  icon: string;
  title: string;
  description: string;
}

export interface WorkModel {
  slug: string;
  title: string;
  href: string;
  images: string[];
  overview: string;
  keyFeatures: WorkKeyFeatureModel[];
  techStack: string[];
}
