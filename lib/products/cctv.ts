export interface CCTVProduct {
  id: number;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  image: string;
  gallery: string[];
  description: string;
  colours: string[];
  features: string[];
  specifications: Record<string, string>;
}

export const cctv: CCTVProduct[] = [
  {
    id: 501,

    slug: "4mp-ai-ip-camera",

    name: "4MP AI IP Camera",

    category: "CCTV Surveillance",

    categorySlug: "cctv",

    image: "/images/products/cctv/4mp-ai-ip-camera.webp",

    gallery: [
      "/images/products/cctv/4mp-ai-ip-camera.webp"
    ],

    description:
      "Professional AI CCTV camera with crystal-clear video, night vision, motion detection, mobile monitoring and cloud recording.",

    colours: [
   
   
    ],

    features: [
      "4MP Resolution",
      "AI Human Detection",
      "Night Vision",
      "Motion Alerts",
      "Mobile Viewing",
      "Cloud Recording",
      "SD Card Recording",
      "Waterproof IP66",
      "Two-Way Audio",
      "Remote Monitoring"
    ],

    specifications: {
      Resolution: "4MP",
      Lens: "3.6mm",
      NightVision: "30m",
      Storage: "SD Card + Cloud",
      Connectivity: "Wi-Fi / Ethernet",
      App: "SmartLiv App",
      Weatherproof: "IP66",
      Power: "DC 12V",
      Warranty: "2 Years"
    }
  },
  {
  id: 502,

  slug: "5mp-ai-bullet-camera",

  name: "5MP AI Bullet Camera",

  category: "CCTV Surveillance",

  categorySlug: "cctv",

  image: "/images/products/cctv/5mp-ai-bullet-camera.webp",

  gallery: [
    "/images/products/cctv/5mp-ai-bullet-camera.webp"
  ],

  description:
    "High-performance 5MP AI bullet camera with ultra-clear imaging, smart human detection, color night vision and remote mobile monitoring.",

  colours: [],

  features: [
    "5MP Ultra HD Resolution",
    "AI Human & Vehicle Detection",
    "Color Night Vision",
    "Remote Mobile Viewing",
    "Motion Detection",
    "Waterproof IP67",
    "Micro SD Card Support",
    "Cloud Recording",
    "Wide Dynamic Range (WDR)",
    "24/7 Surveillance"
  ],

  specifications: {
    Resolution: "5MP",
    Lens: "3.6mm",
    NightVision: "40m Color Night Vision",
    Storage: "Micro SD + Cloud + NVR",
    Connectivity: "Ethernet",
    App: "SmartLiv App",
    Weatherproof: "IP67",
    Power: "DC 12V / PoE",
    Compression: "H.265+",
    Warranty: "2 Years"
  }
},
];