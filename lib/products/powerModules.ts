// lib/products/powerModules.ts

export interface PowerModuleProduct {
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

export const powerModules: PowerModuleProduct[] = [
  // ============================================
  // POWER MODULE PRODUCTS
  // ============================================
  {
    id: 1,
    slug: "usb-charging-module",
    name: "USB Charging Module",
    category: "Power Modules",
    categorySlug: "power-modules",
    description: "Smart USB charging module with fast charging capability. Convenient device charging with smart home integration and intelligent power management.",
    image: "/images/products/switches/usb-charging-module/black.webp",
    gallery: [  
      "/images/products/power/usb-charging-module/black.webp",
      "/images/products/power/usb-charging-module/white.webp",
      "/images/products/power/usb-charging-module/gold.webp",
      "/images/products/power/usb-charging-module/midnight.webp"
    ],
    colours: ["black", "white", "gold", "midnight"],
    features: [
      "Fast Charging Technology",
      "Dual USB Ports",
      "Smart Home Integration",
      "Energy Efficient",
      "Premium Design",
      "Easy Installation",
      "Device Protection",
      "Intelligent Power Management"
    ],
    specifications: {
      material: "Premium Glass",
      technology: "Smart USB Charging",
      connectivity: "Smart Home Compatible",
      warranty: "Manufacturer Warranty",
      voltage: "220-240V AC",
      output: "5V - 2.4A per Port",
      ports: "2 USB Ports",
      protection: "Overcurrent & Overvoltage Protection",
      charging: "Fast Charging Support",
      application: "Smartphones, Tablets, Devices"
    }
  },
  {
    id: 2,
    slug: "smart-3-pin-socket",
    name: "Smart 3 Pin Socket",
    category: "Power Modules",
    categorySlug: "power-modules",
    description: "Smart 3-pin socket with remote control and energy monitoring. Intelligent power management for any device with real-time consumption tracking.",
    image: "/images/products/switches/smart-3-pin-power-socket/black.webp",
    gallery: [
      "/images/products/switches/smart-3-pin-power-socket/black.webp",
      "/images/products/switches/smart-3-pin-power-socket/white.webp",
      "/images/products/switches/smart-3-pin-power-socket/gold.webp",
      "/images/products/switches/smart-3-pin-power-socket/midnight.webp" ,
      "/images/products/switches/smart-3-pin-power-socket/silver.webp"
    ],
   colours: ["black", "white", "gold", "midnight", "silver"],
    features: [
      "Remote Control",
      "Energy Monitoring",
      "Smart Home Integration",
      "Premium Design",
      "Easy Installation",
      "Device Protection",
      "Scheduling Capability",
      "Real-time Consumption Tracking"
    ],
    specifications: {
      material: "Premium Glass",
      technology: "Smart Power Management",
      connectivity: "Smart Home Compatible",
      warranty: "Manufacturer Warranty",
      voltage: "220-240V AC",
      amperage: "16A",
      protection: "Overcurrent & Surge Protection",
      monitoring: "Real-time Energy Monitoring",
      control: "Remote On/Off Control",
      scheduling: "Automated Scheduling",
      application: "Appliances, Electronics, Devices"
    }
  }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get a power module product by its slug
 */
export function getPowerModuleBySlug(slug: string): PowerModuleProduct | undefined {
  return powerModules.find(product => product.slug === slug);
}

/**
 * Get a power module product by its id
 */
export function getPowerModuleById(id: number): PowerModuleProduct | undefined {
  return powerModules.find(product => product.id === id);
}

/**
 * Get all power module products by category
 */
export function getPowerModulesByCategory(categorySlug: string): PowerModuleProduct[] {
  return powerModules.filter(product => product.categorySlug === categorySlug);
}

/**
 * Get power module products with a specific colour
 */
export function getPowerModulesByColour(colour: string): PowerModuleProduct[] {
  return powerModules.filter(product => 
    product.colours.some(c => c.toLowerCase() === colour.toLowerCase())
  );
}

/**
 * Get all unique colours available across power module products
 */
export function getPowerModuleColours(): string[] {
  const colourSet = new Set<string>();
  powerModules.forEach(product => {
    product.colours.forEach(colour => colourSet.add(colour));
  });
  return Array.from(colourSet);
}

/**
 * Get power module products with a specific feature
 */
export function getPowerModulesByFeature(feature: string): PowerModuleProduct[] {
  return powerModules.filter(product =>
    product.features.some(f => f.toLowerCase().includes(feature.toLowerCase()))
  );
}

/**
 * Get USB charging modules
 */
export function getUSBChargingModules(): PowerModuleProduct[] {
  return powerModules.filter(product => 
    product.slug === 'usb-charging-module'
  );
}

/**
 * Get smart socket products
 */
export function getSmartSockets(): PowerModuleProduct[] {
  return powerModules.filter(product => 
    product.slug === 'smart-3-pin-socket'
  );
}

/**
 * Get power modules with energy monitoring
 */
export function getPowerModulesWithMonitoring(): PowerModuleProduct[] {
  return powerModules.filter(product =>
    product.features.some(f => f.includes('Energy Monitoring'))
  );
}

/**
 * Get power modules with remote control
 */
export function getPowerModulesWithRemoteControl(): PowerModuleProduct[] {
  return powerModules.filter(product =>
    product.features.some(f => f.includes('Remote Control'))
  );
}

/**
 * Get featured power modules (first 2 for showcase)
 */
export function getFeaturedPowerModules(limit: number = 2): PowerModuleProduct[] {
  return powerModules.slice(0, limit);
}

/**
 * Search power module products by name or description
 */
export function searchPowerModules(query: string): PowerModuleProduct[] {
  const searchTerm = query.toLowerCase();
  return powerModules.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm) ||
    product.features.some(f => f.toLowerCase().includes(searchTerm))
  );
}

/**
 * Get power modules by amperage rating
 */
export function getPowerModulesByAmperage(amperage: string): PowerModuleProduct[] {
  return powerModules.filter(product => {
    if (product.specifications.amperage) {
      return product.specifications.amperage.includes(amperage);
    }
    return false;
  });
}

/**
 * Get power modules with scheduling capability
 */
export function getPowerModulesWithScheduling(): PowerModuleProduct[] {
  return powerModules.filter(product =>
    product.features.some(f => f.includes('Scheduling'))
  );
}