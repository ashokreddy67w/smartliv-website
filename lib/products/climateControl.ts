// lib/products/climateControl.ts

export interface ClimateControlProduct {
  id: number;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  description: string;
  image: string;
  gallery: string[];
  colours: string[];
  features: string[];
  specifications: Record<string, string>;
}

export const climateControl: ClimateControlProduct[] = [
  // ============================================
  // CLIMATE CONTROL PRODUCTS
  // ============================================
  {
    id: 1,
    slug: "dual-fan-controller",
    name: "Dual Fan Controller",
    category: "Climate Control",
    categorySlug: "climate-control",
    description: "Smart dual fan controller for automated ventilation and cooling. Intelligent fan speed control for optimal airflow and energy efficiency in any space.",
    image: "/images/products/climate-control/black.webp",
    gallery: [
      "/images/products/climate-control/black.webp",
      "/images/products/climate-control/white.webp",
      "/images/products/climate-control/gold.webp",
      "/images/products/climate-control/midnight.webp",
      "/images/products/climate-control/green.webp"
    ],
    colours: ["black", "white", "gold", "midnight", "green"],
    features: [
      "Dual Fan Control",
      "Automated Operation",
      "Smart Home Integration",
      "Energy Efficient",
      "Premium Design",
      "Easy Installation",
      "Individual Speed Control",
      "Temperature Sensing"
    ],
    specifications: {
      material: "Premium Glass",
      technology: "Smart Fan Control",
      connectivity: "Smart Home Compatible",
      warranty: "Manufacturer Warranty",
      voltage: "220-240V AC",
      control: "Dual Channel Independent Control",
      speed: "Variable Speed Control",
      automation: "Scheduling & Temperature Sensing",
      compatibility: "Ceiling Fans, Exhaust Fans",
      application: "Home, Office, Commercial"
    }
  }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get a climate control product by its slug
 */
export function getClimateControlBySlug(slug: string): ClimateControlProduct | undefined {
  return climateControl.find(product => product.slug === slug);
}

/**
 * Get a climate control product by its id
 */
export function getClimateControlById(id: number): ClimateControlProduct | undefined {
  return climateControl.find(product => product.id === id);
}

/**
 * Get all climate control products by category
 */
export function getClimateControlByCategory(categorySlug: string): ClimateControlProduct[] {
  return climateControl.filter(product => product.categorySlug === categorySlug);
}

/**
 * Get climate control products with a specific colour
 */
export function getClimateControlByColour(colour: string): ClimateControlProduct[] {
  return climateControl.filter(product => 
    product.colours.some(c => c.toLowerCase() === colour.toLowerCase())
  );
}

/**
 * Get all unique colours available across climate control products
 */
export function getClimateControlColours(): string[] {
  const colourSet = new Set<string>();
  climateControl.forEach(product => {
    product.colours.forEach(colour => colourSet.add(colour));
  });
  return Array.from(colourSet);
}

/**
 * Get climate control products with a specific feature
 */
export function getClimateControlByFeature(feature: string): ClimateControlProduct[] {
  return climateControl.filter(product =>
    product.features.some(f => f.toLowerCase().includes(feature.toLowerCase()))
  );
}

/**
 * Get fan controller products
 */
export function getFanControllers(): ClimateControlProduct[] {
  return climateControl.filter(product => 
    product.name.includes('Fan')
  );
}

/**
 * Get climate control products by control type
 */
export function getProductsByControlType(type: 'dual' | 'single' | 'multi'): ClimateControlProduct[] {
  return climateControl.filter(product => {
    if (type === 'dual') {
      return product.slug === 'dual-fan-controller';
    }
    return false;
  });
}

/**
 * Get featured climate control products
 */
export function getFeaturedClimateControl(limit: number = 1): ClimateControlProduct[] {
  return climateControl.slice(0, limit);
}

/**
 * Search climate control products by name or description
 */
export function searchClimateControl(query: string): ClimateControlProduct[] {
  const searchTerm = query.toLowerCase();
  return climateControl.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm) ||
    product.features.some(f => f.toLowerCase().includes(searchTerm))
  );
}

/**
 * Get climate control products by application
 */
export function getProductsByApplication(application: string): ClimateControlProduct[] {
  return climateControl.filter(product => {
    if (product.specifications.application) {
      return product.specifications.application.toLowerCase().includes(application.toLowerCase());
    }
    return false;
  });
}

/**
 * Get climate control products with temperature sensing
 */
export function getProductsWithTemperatureSensing(): ClimateControlProduct[] {
  return climateControl.filter(product =>
    product.features.some(f => f.includes('Temperature'))
  );
}