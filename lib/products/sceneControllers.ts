// lib/products/sceneControllers.ts

export interface SceneControllerProduct {
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

export const sceneControllers: SceneControllerProduct[] = [
  // ============================================
  // SCENE CONTROLLERS
  // ============================================
  {
    id: 1,
    slug: "4-scene-controller",
    name: "4 Scene Controller",
    category: "Scene Controllers",
    categorySlug: "scene-controllers",
    description: "Compact scene controller with 4 programmable buttons. Ideal for simple scene management in smaller spaces with intuitive one-touch control.",
    image: "/images/products/scene-controllers/4-scene-controller/white.webp",
    gallery: [
      "/images/products/scene-controllers/4-scene-controller/white.webp",
      "/images/products/scene-controllers/4-scene-controller/black.webp",
      "/images/products/scene-controllers/4-scene-controller/gold.webp"
    ],
    colours: ["white", "black", "gold"],
    features: [
      "4 Programmable Buttons",
      "Custom Scene Creation",
      "One-Touch Activation",
      "Smart Home Integration",
      "Compact Design",
      "Easy Installation"
    ],
    specifications: {
      material: "Premium Glass",
      technology: "Smart Scene Control",
      connectivity: "Smart Home Compatible",
      warranty: "Manufacturer Warranty",
      power: "Low Power Consumption",
      mounting: "Wall Mountable",
      buttons: "4 Programmable",
      scenes: "Up to 4 Custom Scenes"
    }
  },
  {
    id: 2,
    slug: "9-scene-controller",
    name: "9 Scene Controller",
    category: "Scene Controllers",
    categorySlug: "scene-controllers",
    description: "Versatile scene controller with 9 programmable buttons. Perfect balance between functionality and simplicity for comprehensive scene management.",
    image: "/images/products/scene-controllers/9-scene-controller/white.webp",
    gallery: [
      "/images/products/scene-controllers/9-scene-controller/white.webp",
      "/images/products/scene-controllers/9-scene-controller/black.webp",
      "/images/products/scene-controllers/9-scene-controller/gold.webp",
      "/images/products/scene-controllers/9-scene-controller/midnight.webp"
    ],
    colours: ["white", "black", "gold", "midnight"],
    features: [
      "9 Programmable Buttons",
      "Custom Scene Creation",
      "One-Touch Activation",
      "Smart Home Integration",
      "Premium Design",
      "Versatile Configuration"
    ],
    specifications: {
      material: "Premium Glass",
      technology: "Smart Scene Control",
      connectivity: "Smart Home Compatible",
      warranty: "Manufacturer Warranty",
      power: "Low Power Consumption",
      mounting: "Wall Mountable",
      buttons: "9 Programmable",
      scenes: "Up to 9 Custom Scenes"
    }
  },
  {
    id: 3,
    slug: "16-key-scene-controller",
    name: "16 Key Scene Controller",
    category: "Scene Controllers",
    categorySlug: "scene-controllers",
    description: "Professional scene controller with 16 mechanical keys. Tactile feedback for precise scene control and activation in complex installations.",
    image: "/images/products/scene-controllers/16-key-scene-controller/black.webp",
    gallery: [
      "/images/products/scene-controllers/16-key-scene-controller/black.webp",
      "/images/products/scene-controllers/16-key-scene-controller/white.webp",
      "/images/products/scene-controllers/16-key-scene-controller/gold.webp",
      "/images/products/scene-controllers/16-key-scene-controller/midnight.webp"
    ],
    colours: ["black", "white", "gold", "midnight"],
    features: [
      "16 Mechanical Keys",
      "Custom Scene Creation",
      "Tactile Feedback",
      "Smart Home Integration",
      "Professional Design",
      "Advanced Configuration"
    ],
    specifications: {
      material: "Premium Plastic with Glass Finish",
      technology: "Mechanical Key Scene Control",
      connectivity: "Smart Home Compatible",
      warranty: "Manufacturer Warranty",
      power: "Low Power Consumption",
      mounting: "Wall Mountable",
      keys: "16 Mechanical Keys",
      feedback: "Tactile Response",
      scenes: "Up to 16 Custom Scenes"
    }
  },
  {
    id: 4,
    slug: "custom-icon-scene-controller",
    name: "Custom Icon Scene Controller",
    category: "Scene Controllers",
    categorySlug: "scene-controllers",
    description: "Premium scene controller with custom icon display. Personalize your scene control with custom icons and labels for intuitive scene management.",
    image: "/images/products/scene-controllers/custom-icon-scene-controller/black.webp",
    gallery: [
      "/images/products/scene-controllers/custom-icon-scene-controller/black.webp",
      "/images/products/scene-controllers/custom-icon-scene-controller/white.webp",
      "/images/products/scene-controllers/custom-icon-scene-controller/gold.webp",
      "/images/products/scene-controllers/custom-icon-scene-controller/midnight.webp"
    ],
    colours: ["black", "white", "gold", "midnight"],
    features: [
      "Custom Icon Display",
      "Personalized Labels",
      "Smart Home Integration",
      "Premium Design",
      "Easy Configuration",
      "Advanced Scene Control"
    ],
    specifications: {
      material: "Premium Glass",
      technology: "Smart Scene Control with Icons",
      connectivity: "Smart Home Compatible",
      warranty: "Manufacturer Warranty",
      power: "Low Power Consumption",
      mounting: "Wall Mountable",
      display: "Custom Icon Display",
      customization: "Personalized Labels & Icons",
      scenes: "Up to Custom Scenes"
    }
  }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get a scene controller product by its slug
 */
export function getSceneControllerBySlug(slug: string): SceneControllerProduct | undefined {
  return sceneControllers.find(product => product.slug === slug);
}

/**
 * Get a scene controller product by its id
 */
export function getSceneControllerById(id: number): SceneControllerProduct | undefined {
  return sceneControllers.find(product => product.id === id);
}

/**
 * Get all scene controller products by category
 */
export function getSceneControllersByCategory(categorySlug: string): SceneControllerProduct[] {
  return sceneControllers.filter(product => product.categorySlug === categorySlug);
}

/**
 * Get scene controller products with a specific colour
 */
export function getSceneControllersByColour(colour: string): SceneControllerProduct[] {
  return sceneControllers.filter(product => 
    product.colours.some(c => c.toLowerCase() === colour.toLowerCase())
  );
}

/**
 * Get all unique colours available across scene controllers
 */
export function getSceneControllerColours(): string[] {
  const colourSet = new Set<string>();
  sceneControllers.forEach(product => {
    product.colours.forEach(colour => colourSet.add(colour));
  });
  return Array.from(colourSet);
}

/**
 * Get scene controllers with a specific feature
 */
export function getSceneControllersByFeature(feature: string): SceneControllerProduct[] {
  return sceneControllers.filter(product =>
    product.features.some(f => f.toLowerCase().includes(feature.toLowerCase()))
  );
}

/**
 * Get scene controllers by button/key count
 */
export function getSceneControllersByCount(): Record<string, number> {
  const countMap: Record<string, number> = {};
  sceneControllers.forEach(product => {
    const buttons = product.specifications.buttons || product.specifications.keys;
    if (buttons) {
      countMap[buttons] = (countMap[buttons] || 0) + 1;
    }
  });
  return countMap;
}

/**
 * Get featured scene controllers (first 2 for showcase)
 */
export function getFeaturedSceneControllers(limit: number = 2): SceneControllerProduct[] {
  return sceneControllers.slice(0, limit);
}

/**
 * Search scene controllers by name or description
 */
export function searchSceneControllers(query: string): SceneControllerProduct[] {
  const searchTerm = query.toLowerCase();
  return sceneControllers.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm)
  );
}

/**
 * Get scene controllers with custom icons
 */
export function getCustomIconControllers(): SceneControllerProduct[] {
  return sceneControllers.filter(product => 
    product.slug === "custom-icon-scene-controller"
  );
}

/**
 * Get scene controllers by key type (mechanical or touch)
 */
export function getSceneControllersByKeyType(type: 'mechanical' | 'touch'): SceneControllerProduct[] {
  return sceneControllers.filter(product => {
    if (type === 'mechanical') {
      return product.name.includes('Key');
    } else {
      return !product.name.includes('Key');
    }
  });
}