// lib/products/accessControl.ts

export interface AccessControlProduct {
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

export const accessControl: AccessControlProduct[] = [
  {
    id: 1,

    slug: "retrofit-automation",

    name: "Retrofit Automation",

    category: "Access Control",

    categorySlug: "access-control",

    description:
      "Smart retrofit automation module that converts existing electrical switches into smart switches without changing existing wiring. Control lights, fans and appliances remotely using the SmartLiv App or voice assistants.",

    image: "/images/products/access-control/retrofit-automation.webp",

    gallery: [
      "/images/products/access-control/retrofit-automation.webp"
    ],

    colours: [],

    features: [
      "No Rewiring Required",
      "Works with Existing Switches",
      "4 Channel Control",
      "Wi-Fi Connectivity",
      "SmartLiv App Control",
      "Google Assistant Support",
      "Amazon Alexa Support",
      "Remote ON/OFF",
      "Scheduling & Timer",
      "Scene Automation",
      "Energy Saving",
      "Easy Installation"
    ],

    specifications: {
      Connectivity: "Wi-Fi 2.4GHz",
      Control: "SmartLiv App",
      VoiceAssistant: "Google Assistant & Alexa",
      Channels: "4 Channel",
      InputVoltage: "100-240V AC",
      Frequency: "50/60Hz",
      Installation: "Behind Existing Switch",
      Material: "ABS Fire Resistant",
      OperatingTemperature: "-10°C to 50°C",
      Warranty: "2 Years"
    }
  }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getAccessControlBySlug(
  slug: string
): AccessControlProduct | undefined {
  return accessControl.find((product) => product.slug === slug);
}

export function getAccessControlById(
  id: number
): AccessControlProduct | undefined {
  return accessControl.find((product) => product.id === id);
}

export function getAccessControlByCategory(
  categorySlug: string
): AccessControlProduct[] {
  return accessControl.filter(
    (product) => product.categorySlug === categorySlug
  );
}

export function getAccessControlByColour(
  colour: string
): AccessControlProduct[] {
  return accessControl.filter((product) =>
    product.colours.some(
      (c) => c.toLowerCase() === colour.toLowerCase()
    )
  );
}

export function getAccessControlColours(): string[] {
  const colourSet = new Set<string>();

  accessControl.forEach((product) => {
    product.colours.forEach((colour) => colourSet.add(colour));
  });

  return Array.from(colourSet);
}

export function getAccessControlByFeature(
  feature: string
): AccessControlProduct[] {
  return accessControl.filter((product) =>
    product.features.some((f) =>
      f.toLowerCase().includes(feature.toLowerCase())
    )
  );
}

/**
 * Get Retrofit Automation Products
 */
export function getRetrofitAutomation(): AccessControlProduct[] {
  return accessControl.filter(
    (product) => product.slug === "retrofit-automation"
  );
}

/**
 * Featured Products
 */
export function getFeaturedAccessControl(
  limit: number = 1
): AccessControlProduct[] {
  return accessControl.slice(0, limit);
}

/**
 * Search Products
 */
export function searchAccessControl(
  query: string
): AccessControlProduct[] {
  const searchTerm = query.toLowerCase();

  return accessControl.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm) ||
      product.features.some((f) =>
        f.toLowerCase().includes(searchTerm)
      )
  );
}

/**
 * Get Wi-Fi Enabled Products
 */
export function getWifiProducts(): AccessControlProduct[] {
  return accessControl.filter(
    (product) =>
      product.specifications.Connectivity?.includes("Wi-Fi")
  );
}

/**
 * Get Voice Assistant Supported Products
 */
export function getVoiceAssistantProducts(): AccessControlProduct[] {
  return accessControl.filter(
    (product) =>
      product.features.some((f) =>
        f.includes("Google Assistant")
      ) ||
      product.features.some((f) =>
        f.includes("Amazon Alexa")
      )
  );
}

/**
 * Get SmartLiv App Compatible Products
 */
export function getSmartLivAppProducts(): AccessControlProduct[] {
  return accessControl.filter(
    (product) =>
      product.specifications.Control === "SmartLiv App"
  );
}