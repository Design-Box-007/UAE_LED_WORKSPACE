interface ISubFeature {
  subfeatureTitle?: string;
  title: string;
  description?: string;
  featurePoints?: string[];
}

interface IFeature {
  title: string;
  subTitle?: string;
  description: string;
  subfeatureTitle?: string;
  subfeatures: ISubFeature[];
  footer?: string;
}

interface IFooterContent {
  title: string;
  description: string[];
}

export interface IService {
  title: string;
  name: string; // optional, since only the first object uses it
  description: string[];
  image: string;
  features: IFeature[];
  ctaDescription?: string[];
  footerContent1?: IFooterContent;
  footerContent: IFooterContent;
}
