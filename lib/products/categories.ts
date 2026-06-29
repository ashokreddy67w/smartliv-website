// lib/products/categories.ts

export interface Category {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: "1",
    title: "Smart Touch Switches",
    slug: "switches",
    description:
      "Premium tempered glass smart touch switches with multi-gang control for luxury homes.",
    image: "/images/products/switches/10-gang-touch-switch/black.webp",
    productCount: 8
  },
  {
    id: "2",
    title: "Scene Controllers",
    slug: "scene-controllers",
    description:
      "Create and control personalized smart scenes with elegant scene controllers.",
    image: "/images/products/switches/20-button-scene-switch/black.webp",
    productCount: 5,
  },
  {
    id: "3",
    title: "Smart Lighting",
    slug: "smart-lighting",
    description:
      "Premium dimmers, RGB lighting controllers and intelligent lighting automation.",
    image: "/images/products/switches/home-theatre-dimmer/black.webp",
    productCount: 4,
  },
  {
    id: "4",
    title: "Climate Control",
    slug: "climate-control",
    description:
      "Smart fan and climate automation for modern homes.",
    image: "/images/products/climate-control/climate-control.webp",
    productCount: 1,
  },
  {
    id: "5",
    title: "Power Modules",
    slug: "power-modules",
    description:
      "Smart sockets, USB charging modules and intelligent power solutions.",
    image: "/images/products/switches/smart-3-pin-power-socket/black.webp",
    productCount: 2,
  },
  {
    id: "6",
    title: "Access Control",
    slug: "access-control",
    description:
      "Outdoor calling bells and smart access solutions.",
    image: "/images/products/access-control/retrofit-automation.webp",
    productCount: 1,
  },
  {
    id: "7",
    title: "Smart Security",
    slug: "smart-security",
    description:
      "Advanced home security and monitoring solutions.",
    image: "/images/security/smart-alarm-hub.webp",
    productCount: 8,
  },
 {
  id: "8",
  title: "Gate Motors",
  slug: "gate-motors",
  description:
    "Smart automatic gate motors with remote control, smartphone access, and reliable security for residential and commercial entrances.",
  image: "/images/products/gate-motors/sliding-gate-motor.webp",
  productCount: 6,
},
  {
    id: "9",
    title: "Digital Locks",
    slug: "digital-locks",
    description:
      "Fingerprint and smart digital lock solutions.",
    image: "/images/products/DigitalLocks/FingerprintSmartDoorLock.webp",
    productCount: 6,
  },
  {
    id: "10",
    title: "Video Door Phones",
    slug: "video-door-phones",
    description:
      "See and communicate with visitors from anywhere.",
    image: "/images/products/videoDoorPhones/7-inch-smart-video-door-phone.webp",
    productCount: 1,
  },
  {
    id: "11",
    title: "CCTV Surveillance",
    slug: "cctv",
    description:
      "24×7 intelligent surveillance for homes and businesses.",
    image: "/images/products/cctv/5mp-ai-bullet-camera.webp",
    productCount: 2,
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get a category by its slug
 */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug);
}

/**
 * Get a category by its id
 */
export function getCategoryById(id: string): Category | undefined {
  return categories.find(category => category.id === id);
}

/**
 * Get all category titles
 */
export function getCategoryTitles(): string[] {
  return categories.map(category => category.title);
}

/**
 * Get all category slugs
 */
export function getCategorySlugs(): string[] {
  return categories.map(category => category.slug);
}

/**
 * Get categories with products (productCount > 0)
 */
export function getCategoriesWithProducts(): Category[] {
  return categories.filter(category => category.productCount > 0);
}

/**
 * Get categories without products (productCount === 0)
 */
export function getCategoriesWithoutProducts(): Category[] {
  return categories.filter(category => category.productCount === 0);
}

/**
 * Get total product count across all categories
 */
export function getTotalProductCount(): number {
  return categories.reduce((total, category) => total + category.productCount, 0);
}

/**
 * Get featured categories (first 6 for showcase)
 */
export function getFeaturedCategories(limit: number = 6): Category[] {
  return categories.slice(0, limit);
}

/**
 * Search categories by title or description
 */
export function searchCategories(query: string): Category[] {
  const searchTerm = query.toLowerCase();
  return categories.filter(category =>
    category.title.toLowerCase().includes(searchTerm) ||
    category.description.toLowerCase().includes(searchTerm)
  );
}

/**
 * Get categories by product availability
 */
export function getCategoriesByAvailability(hasProducts: boolean = true): Category[] {
  return hasProducts ? getCategoriesWithProducts() : getCategoriesWithoutProducts();
}

/**
 * Get category statistics
 */
export function getCategoryStats() {
  return {
    totalCategories: categories.length,
    categoriesWithProducts: getCategoriesWithProducts().length,
    categoriesWithoutProducts: getCategoriesWithoutProducts().length,
    totalProducts: getTotalProductCount(),
    averageProductsPerCategory: Number((getTotalProductCount() / categories.length).toFixed(1))
  };
}