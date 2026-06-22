export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface ComparisonRow {
  feature: string;
  smartliv: boolean | string;
  traditional: boolean | string;
}

export interface ColorOption {
  name: string;
  hex: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ModuleSize {
  label: string;
  modules: number;
  description: string;
}

export interface EcosystemItem {
  name: string;
  icon: string;
  description: string;
}
