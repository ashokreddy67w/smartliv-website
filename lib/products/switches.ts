// lib/products/switches.ts

export interface SwitchProduct {
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

export const switches: SwitchProduct[] = [
  // ============================================
  // SMART TOUCH SWITCHES
  // ============================================
  {
    id: 1,
    slug: "1-gang-touch-switch",
    name: "1-Gang Touch Switch",
    category: "Smart Touch Switches",
    categorySlug: "switches",
    description: "Premium tempered glass smart touch switch with single gang control. Features responsive capacitive touch technology and elegant design for modern homes.",
    image: "/images/products/switches/1-gang-touch-switch/black.webp",
    gallery: [
      "/images/products/switches/1-gang-touch-switch/black.webp",
      "/images/products/switches/1-gang-touch-switch/white.webp",
      "/images/products/switches/1-gang-touch-switch/gold.webp",
      "/images/products/switches/1-gang-touch-switch/green.webp",
      "/images/products/switches/1-gang-touch-switch/midnight.webp"
    ],
    colours: ["black", "white", "gold", "green", "midnight"],
    features: [
      "Tempered Glass Panel",
      "Capacitive Touch Technology",
      "Smart Home Automation Ready",
      "Premium Finish",
      "Energy Efficient",
      "Easy Installation"
    ],
    specifications: {
      material: "Tempered Glass",
      technology: "Capacitive Touch",
      connectivity: "Smart Home Compatible",
      warranty: "Manufacturer Warranty",
      voltage: "220-240V AC",
      frequency: "50-60Hz",
      gang: "1-Gang"
    }
  },
  {
    id: 2,
    slug: "2-gang-touch-switch",
    name: "2-Gang Touch Switch",
    category: "Smart Touch Switches",
    categorySlug: "switches",
    description: "Premium tempered glass smart touch switch with dual gang control. Perfect for controlling two separate lighting circuits with style and sophistication.",
    image: "/images/products/switches/2-switchs-touch-switchs/black.webp",
    gallery: [
      "/images/products/switches/2-switchs-touch-switchs/black.webp",
      "/images/products/switches/2-switchs-touch-switchs/white.webp",
      "/images/products/switches/2-switchs-touch-switchs/gold.webp",
      "/images/products/switches/2-switchs-touch-switchs/green.webp",
      "/images/products/switches/2-switchs-touch-switchs/midnight.webp"
    ],
    colours: ["black", "white", "gold", "green", "midnight"],
    features: [
      "Tempered Glass Panel",
      "Capacitive Touch Technology",
      "Dual Gang Control",
      "Smart Home Automation Ready",
      "Premium Finish",
      "Energy Efficient"
    ],
    specifications: {
      material: "Tempered Glass",
      technology: "Capacitive Touch",
      connectivity: "Smart Home Compatible",
      warranty: "Manufacturer Warranty",
      voltage: "220-240V AC",
      frequency: "50-60Hz",
      gang: "2-Gang"
    }
  },
  {
    id: 3,
    slug: "5-gang-touch-switch",
    name: "5-Gang Touch Switch",
    category: "Smart Touch Switches",
    categorySlug: "switches",
    description: "Premium tempered glass smart touch switch with five gang control. Ideal for comprehensive lighting management in larger spaces and multi-circuit setups.",
    image: "/images/products/switches/5-gang-touch-switch/black.webp",
    gallery: [
      "/images/products/switches/5-gang-touch-switch/black.webp",
      "/images/products/switches/5-gang-touch-switch/white.webp",
      "/images/products/switches/5-gang-touch-switch/gold.webp",
      "/images/products/switches/5-gang-touch-switch/green.webp",
      "/images/products/switches/5-gang-touch-switch/midnight.webp"
    ],
    colours: ["black", "white", "gold", "green", "midnight"],
    features: [
      "Tempered Glass Panel",
      "Capacitive Touch Technology",
      "Five Gang Control",
      "Smart Home Automation Ready",
      "Premium Finish",
      "Energy Efficient"
    ],
    specifications: {
      material: "Tempered Glass",
      technology: "Capacitive Touch",
      connectivity: "Smart Home Compatible",
      warranty: "Manufacturer Warranty",
      voltage: "220-240V AC",
      frequency: "50-60Hz",
      gang: "5-Gang"
    }
  },
  {
    id: 4,
    slug: "6-gang-touch-switch",
    name: "6-Gang Touch Switch",
    category: "Smart Touch Switches",
    categorySlug: "switches",
    description: "Premium tempered glass smart touch switch with six gang control. Advanced multi-circuit control for sophisticated lighting setups and large spaces.",
    image: "/images/products/switches/6-gang-touch-switch/black.webp",
    gallery: [
      "/images/products/switches/6-gang-touch-switch/black.webp",
      "/images/products/switches/6-gang-touch-switch/white.webp",
      "/images/products/switches/6-gang-touch-switch/gold.webp",
      "/images/products/switches/6-gang-touch-switch/green.webp",
      "/images/products/switches/6-gang-touch-switch/midnight.webp"
    ],
    colours: ["black", "white", "gold", "green", "midnight"],
    features: [
      "Tempered Glass Panel",
      "Capacitive Touch Technology",
      "Six Gang Control",
      "Smart Home Automation Ready",
      "Premium Finish",
      "Energy Efficient"
    ],
    specifications: {
      material: "Tempered Glass",
      technology: "Capacitive Touch",
      connectivity: "Smart Home Compatible",
      warranty: "Manufacturer Warranty",
      voltage: "220-240V AC",
      frequency: "50-60Hz",
      gang: "6-Gang"
    }
  },
  {
    id: 5,
    slug: "8-gang-touch-switch",
    name: "8-Gang Touch Switch",
    category: "Smart Touch Switches",
    categorySlug: "switches",
    description: "Premium tempered glass smart touch switch with eight gang control. Ultimate solution for comprehensive lighting and device management in large installations.",
    image: "/images/products/switches/8-gang-touch-switch/black.webp",
    gallery: [
      "/images/products/switches/8-gang-touch-switch/black.webp",
      "/images/products/switches/8-gang-touch-switch/white.webp",
      "/images/products/switches/8-gang-touch-switch/gold.webp",
      "/images/products/switches/8-gang-touch-switch/green.webp",
      "/images/products/switches/8-gang-touch-switch/midnight.webp"
    ],
    colours: ["black", "white", "gold", "green", "midnight"],
    features: [
      "Tempered Glass Panel",
      "Capacitive Touch Technology",
      "Eight Gang Control",
      "Smart Home Automation Ready",
      "Premium Finish",
      "Energy Efficient"
    ],
    specifications: {
      material: "Tempered Glass",
      technology: "Capacitive Touch",
      connectivity: "Smart Home Compatible",
      warranty: "Manufacturer Warranty",
      voltage: "220-240V AC",
      frequency: "50-60Hz",
      gang: "8-Gang"
    }
  },
  {
    id: 6,
    slug: "10-gang-touch-switch",
    name: "10-Gang Touch Switch",
    category: "Smart Touch Switches",
    categorySlug: "switches",
    description: "Premium tempered glass smart touch switch with ten gang control. Professional-grade multi-circuit control for complex installations and commercial applications.",
    image: "/images/products/switches/10-gang-touch-switch/black.webp",
    gallery: [
      "/images/products/switches/10-gang-touch-switch/black.webp",
      "/images/products/switches/10-gang-touch-switch/white.webp",
      "/images/products/switches/10-gang-touch-switch/gold.webp",
      "/images/products/switches/10-gang-touch-switch/green.webp",
      "/images/products/switches/10-gang-touch-switch/midnight.webp"
    ],
    colours: ["black", "white", "gold", "green", "midnight"],
    features: [
      "Tempered Glass Panel",
      "Capacitive Touch Technology",
      "Ten Gang Control",
      "Smart Home Automation Ready",
      "Premium Finish",
      "Energy Efficient"
    ],
    specifications: {
      material: "Tempered Glass",
      technology: "Capacitive Touch",
      connectivity: "Smart Home Compatible",
      warranty: "Manufacturer Warranty",
      voltage: "220-240V AC",
      frequency: "50-60Hz",
      gang: "10-Gang"
    }
  },

  // ============================================
  // SCENE SWITCHES
  // ============================================
  {
    id: 7,
    slug: "16-button-scene-switch",
    name: "16 Button Scene Switch",
    category: "Smart Touch Switches",
    categorySlug: "switches",
    description: "Advanced scene switch with 16 programmable buttons. Create and activate custom lighting scenes with one-touch control for the perfect ambiance.",
    image: "/images/products/switches/16-button-scene-switch/black.webp",
    gallery: [
      "/images/products/switches/16-button-scene-switch/black.webp",
      "/images/products/switches/16-button-scene-switch/white.webp",
      "/images/products/switches/16-button-scene-switch/gold.webp",
      "/images/products/switches/16-button-scene-switch/midnight.webp",
      "/images/products/switches/16-button-scene-switch/silver.webp"
    ],
    colours: ["black", "white", "gold", "midnight","silver"],
    features: [
      "16 Programmable Buttons",
      "Custom Scene Creation",
      "One-Touch Activation",
      "Smart Home Integration",
      "Premium Design",
      "Easy Configuration"
    ],
    specifications: {
      material: "Premium Glass",
      technology: "Smart Scene Control",
      connectivity: "Smart Home Compatible",
      warranty: "Manufacturer Warranty",
      power: "Low Power Consumption",
      mounting: "Wall Mountable",
      buttons: "16 Programmable"
    }
  },
  {
    id: 8,
    slug: "20-button-scene-switch",
    name: "20 Button Scene Switch",
    category: "Smart Touch Switches",
    categorySlug: "switches",
    description: "Professional scene controller with 20 programmable buttons. Perfect for complex lighting scenes and multi-room configurations with comprehensive control.",
    image: "/images/products/switches/20-button-scene-switch/black.webp",
    gallery: [
      "/images/products/switches/20-button-scene-switch/black.webp",
      "/images/products/switches/20-button-scene-switch/white.webp",
      "/images/products/switches/20-button-scene-switch/gold.webp",
      "/images/products/switches/20-button-scene-switch/green.webp",  
      "/images/products/switches/20-button-scene-switch/midnight.webp",
      "/images/products/switches/20-button-scene-switch/silver.webp"
    ],
    colours: ["black", "white", "gold","green", "midnight", "silver"],
    features: [
      "20 Programmable Buttons",
      "Custom Scene Creation",
      "One-Touch Activation",
      "Smart Home Integration",
      "Premium Design",
      "Advanced Configuration"
    ],
    specifications: {
      material: "Premium Glass",
      technology: "Smart Scene Control",
      connectivity: "Smart Home Compatible",
      warranty: "Manufacturer Warranty",
      power: "Low Power Consumption",
      mounting: "Wall Mountable",
      buttons: "20 Programmable"
    }
  }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get a switch product by its slug
 */
export function getSwitchBySlug(slug: string): SwitchProduct | undefined {
  return switches.find(switchProduct => switchProduct.slug === slug);
}

/**
 * Get a switch product by its id
 */
export function getSwitchById(id: number): SwitchProduct | undefined {
  return switches.find(switchProduct => switchProduct.id === id);
}

/**
 * Get all switch products by category
 */
export function getSwitchesByCategory(categorySlug: string): SwitchProduct[] {
  return switches.filter(switchProduct => switchProduct.categorySlug === categorySlug);
}

/**
 * Get switch products with a specific colour
 */
export function getSwitchesByColour(colour: string): SwitchProduct[] {
  return switches.filter(switchProduct => 
    switchProduct.colours.some(c => c.toLowerCase() === colour.toLowerCase())
  );
}

/**
 * Get all unique colours available across switches
 */
export function getSwitchColours(): string[] {
  const colourSet = new Set<string>();
  switches.forEach(switchProduct => {
    switchProduct.colours.forEach(colour => colourSet.add(colour));
  });
  return Array.from(colourSet);
}

/**
 * Get switches with a specific feature
 */
export function getSwitchesByFeature(feature: string): SwitchProduct[] {
  return switches.filter(switchProduct =>
    switchProduct.features.some(f => f.toLowerCase().includes(feature.toLowerCase()))
  );
}

/**
 * Get switch count by gang
 */
export function getSwitchCountByGang(): Record<string, number> {
  const gangCount: Record<string, number> = {};
  switches.forEach(switchProduct => {
    if (switchProduct.specifications.gang) {
      const gang = switchProduct.specifications.gang;
      gangCount[gang] = (gangCount[gang] || 0) + 1;
    }
  });
  return gangCount;
}

/**
 * Get featured switches (first 4 for showcase)
 */
export function getFeaturedSwitches(limit: number = 4): SwitchProduct[] {
  return switches.slice(0, limit);
}

/**
 * Search switches by name or description
 */
export function searchSwitches(query: string): SwitchProduct[] {
  const searchTerm = query.toLowerCase();
  return switches.filter(switchProduct =>
    switchProduct.name.toLowerCase().includes(searchTerm) ||
    switchProduct.description.toLowerCase().includes(searchTerm) ||
    switchProduct.category.toLowerCase().includes(searchTerm)
  );
}