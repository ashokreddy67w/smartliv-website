// lib/products/smartLighting.ts

export interface SmartLightingProduct {
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

export const smartLighting: SmartLightingProduct[] = [
  // ============================================
  // SMART LIGHTING PRODUCTS
  // ============================================
  {
    id: 1,
    slug: "lighting-controller",
    name: "Lighting Controller",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    description: "Advanced lighting controller for comprehensive light management. Perfect for sophisticated lighting installations with precise control and automation.",
    image: "/images/products/switches/lighting-controller/black.webp",
    gallery: [
      "/images/products/switches/lighting-controller/black.webp",
   "/images/products/switches/lighting-controller/green.webp",
   "/images/products/switches/lighting-controller/white.webp",
   "/images/products/switches/lighting-controller/gold.webp",
    ],
    colours: ["black", "white", "gold", "midnight"],
    features: [
      "Advanced Light Management",
      "Custom Scene Creation",
      "Smart Home Integration",
      "Energy Efficient",
      "Professional Design",
      "Easy Configuration"
    ],
    specifications: {
      material: "Premium Glass",
      technology: "Smart Lighting Control",
      connectivity: "Smart Home Compatible",
      warranty: "Manufacturer Warranty",
      voltage: "220-240V AC",
      dimming: "Smooth Dimming Control",
      automation: "Scheduling & Scenes",
      compatibility: "LED, CFL, Incandescent"
    }
  },
  {
    id: 2,
    slug: "rgb-lighting-controller",
    name: "RGB Lighting Controller",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    description: "Smart RGB lighting controller for dynamic color control. Create stunning lighting effects with millions of colors for any mood or occasion.",
    image: "/images/products/switches/rgb-lighting-controller/black.webp",
    gallery: [
     "/images/products/switches/rgb-lighting-controller/black.webp",
      "/images/products/switches/rgb-lighting-controller/green.webp",
       "/images/products/switches/rgb-lighting-controller/white.webp",
        "/images/products/switches/rgb-lighting-controller/midnight.webp",
         "/images/products/switches/rgb-lighting-controller/gold.webp",
    ],
    colours: ["black", "white", "green", "midnight","gold"],
    features: [
      "Millions of Colors",
      "Dynamic Lighting Effects",
      "Smart Home Integration",
      "Custom Scene Creation",
      "Premium Design",
      "Energy Efficient"
    ],
    specifications: {
      material: "Premium Glass",
      technology: "RGB LED Control",
      connectivity: "Smart Home Compatible",
      warranty: "Manufacturer Warranty",
      voltage: "220-240V AC",
      colors: "16.8 Million Colors",
      effects: "Dynamic & Static Modes",
      compatibility: "RGB LED Strips & Fixtures"
    }
  },
  {
    id: 3,
    slug: "home-theatre-dimmer",
    name: "Home Theatre Dimmer",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    description: "Specialized dimmer for home theatre applications. Create the perfect cinematic lighting atmosphere with smooth, flicker-free dimming.",
    image: "/images/products/switches/home-theatre-dimmer/black.webp",
    gallery: [
      "/images/products/switches/home-theatre-dimmer/black.webp",
      "/images/products/switches/home-theatre-dimmer/white.webp",
      "/images/products/switches/home-theatre-dimmer/gold.webp",
      "/images/products/switches/home-theatre-dimmer/midnight.png"
    ],
    colours: ["black", "white", "gold", "midnight"],
    features: [
      "Cinematic Dimming",
      "Smooth Fade Effects",
      "Smart Home Integration",
      "Custom Scene Creation",
      "Premium Design",
      "Energy Efficient"
    ],
    specifications: {
      material: "Premium Glass",
      technology: "Smart Dimming Control",
      connectivity: "Smart Home Compatible",
      warranty: "Manufacturer Warranty",
      voltage: "220-240V AC",
      dimming: "Smooth Cinema Dimming",
      fade: "Adjustable Fade Times",
      compatibility: "LED, CFL, Incandescent",
      application: "Home Theatre, Media Rooms"
    }
  },
  {
    id: 4,
    slug: "6-zone-dimmer",
    name: "6 Zone Dimmer",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    description: "Professional 6-zone dimmer for multi-room lighting control. Independent dimming for different zones with centralized smart management.",
    image: "/images/products/switches/6-zone-dimmer-controller/black.webp",
    gallery: [
    "/images/products/switches/6-zone-dimmer-controller/black.webp",
      "/images/products/switches/6-zone-dimmer-controller/white.webp",
      "/images/products/switches/6-zone-dimmer-controller/green.webp",
      "/images/products/switches/6-zone-dimmer-controller/midnight.webp",
        "/images/products/switches/6-zone-dimmer-controller/gold.webp",
    ],
    colours: ["black", "white", "gold", "green", "midnight"],
    features: [
      "6 Independent Zones",
      "Multi-Room Control",
      "Smart Home Integration",
      "Custom Scene Creation",
      "Professional Design",
      "Energy Efficient"
    ],
    specifications: {
      material: "Premium Glass",
      technology: "Multi-Zone Dimming",
      connectivity: "Smart Home Compatible",
      warranty: "Manufacturer Warranty",
      voltage: "220-240V AC",
      zones: "6 Independent Zones",
      control: "Individual Zone Control",
      automation: "Scheduling & Scenes",
      compatibility: "LED, CFL, Incandescent"
    }
  }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get a smart lighting product by its slug
 */
export function getSmartLightingBySlug(slug: string): SmartLightingProduct | undefined {
  return smartLighting.find(product => product.slug === slug);
}

/**
 * Get a smart lighting product by its id
 */
export function getSmartLightingById(id: number): SmartLightingProduct | undefined {
  return smartLighting.find(product => product.id === id);
}

/**
 * Get all smart lighting products by category
 */
export function getSmartLightingByCategory(categorySlug: string): SmartLightingProduct[] {
  return smartLighting.filter(product => product.categorySlug === categorySlug);
}

/**
 * Get smart lighting products with a specific colour
 */
export function getSmartLightingByColour(colour: string): SmartLightingProduct[] {
  return smartLighting.filter(product => 
    product.colours.some(c => c.toLowerCase() === colour.toLowerCase())
  );
}

/**
 * Get all unique colours available across smart lighting products
 */
export function getSmartLightingColours(): string[] {
  const colourSet = new Set<string>();
  smartLighting.forEach(product => {
    product.colours.forEach(colour => colourSet.add(colour));
  });
  return Array.from(colourSet);
}

/**
 * Get smart lighting products with a specific feature
 */
export function getSmartLightingByFeature(feature: string): SmartLightingProduct[] {
  return smartLighting.filter(product =>
    product.features.some(f => f.toLowerCase().includes(feature.toLowerCase()))
  );
}

/**
 * Get dimmer products only
 */
export function getDimmerProducts(): SmartLightingProduct[] {
  return smartLighting.filter(product => 
    product.name.includes('Dimmer') || 
    product.name.includes('Zone')
  );
}

/**
 * Get controller products only
 */
export function getControllerProducts(): SmartLightingProduct[] {
  return smartLighting.filter(product => 
    product.name.includes('Controller') || 
    product.name.includes('RGB')
  );
}

/**
 * Get products by dimming type
 */
export function getProductsByDimmingType(type: 'cinema' | 'standard' | 'zone'): SmartLightingProduct[] {
  return smartLighting.filter(product => {
    if (type === 'cinema') {
      return product.slug === 'home-theatre-dimmer';
    } else if (type === 'zone') {
      return product.slug === '6-zone-dimmer';
    } else {
      return product.slug === 'lighting-controller';
    }
  });
}

/**
 * Get featured smart lighting products (first 2 for showcase)
 */
export function getFeaturedSmartLighting(limit: number = 2): SmartLightingProduct[] {
  return smartLighting.slice(0, limit);
}

/**
 * Search smart lighting products by name or description
 */
export function searchSmartLighting(query: string): SmartLightingProduct[] {
  const searchTerm = query.toLowerCase();
  return smartLighting.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm) ||
    product.features.some(f => f.toLowerCase().includes(searchTerm))
  );
}

/**
 * Get smart lighting products by zone count
 */
export function getProductsByZoneCount(): Record<string, number> {
  const zoneMap: Record<string, number> = {};
  smartLighting.forEach(product => {
    if (product.specifications.zones) {
      const zones = product.specifications.zones;
      zoneMap[zones] = (zoneMap[zones] || 0) + 1;
    }
  });
  return zoneMap;
}

/**
 * Get smart lighting products with RGB capability
 */
export function getRGBProducts(): SmartLightingProduct[] {
  return smartLighting.filter(product => 
    product.slug === 'rgb-lighting-controller'
  );
}