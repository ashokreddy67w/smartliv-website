export interface GateMotorProduct {
  id: number;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  image: string;
  description: string;
  colours: string[];
  features: string[];
  specifications: Record<string, string>;
  gallery: string[];
}

export const gateMotors: GateMotorProduct[] = [
  {
    id: 201,
    slug: "sliding-gate-motor",
    name: "Sliding Gate Motor",
    category: "Gate Motors",
    categorySlug: "gate-motors",
    image: "/images/products/gate-motors/sliding-gate-motor.webp",
    gallery: [
      "/images/products/gate-motors/sliding-gate-motor.webp",
    ],
    description: "Heavy-duty automatic sliding gate motor.",
    colours: ["Black"],
    features: [
      "Remote Control",
      "Smartphone Control",
      "Obstacle Detection",
      "Auto Close"
    ],
    specifications: {
      Voltage: "230V",
      Motor: "800W",
      Capacity: "800kg",
      Warranty: "2 Years"
    }
  },

  {
    id: 202,
    slug: "swing-gate-motor",
    name: "Swing Gate Motor",
    category: "Gate Motors",
    categorySlug: "gate-motors",
    image: "/images/products/gate-motors/swing-gate-motor.webp",
    gallery: [
      "/images/products/gate-motors/swing-gate-motor.webp"
    ],
    description: "Automatic swing gate motor for residential and commercial entrances.",
    colours: ["Black"],
    features: [
      "Dual Gate Support",
      "Remote Control",
      "Obstacle Detection",
      "Auto Close"
    ],
    specifications: {
      Voltage: "230V",
      Motor: "300W",
      Capacity: "400kg per Gate",
      Warranty: "2 Years"
    }
  },

  {
    id: 203,
    slug: "boom-barrier-motor",
    name: "Boom Barrier Motor",
    category: "Gate Motors",
    categorySlug: "gate-motors",
    image: "/images/products/gate-motors/boom-barrier-motor.webp",
    gallery: [
      "/images/products/gate-motors/boom-barrier-motor.webp"
    ],
    description: "Automatic boom barrier for parking, apartments and commercial premises.",
    colours: ["Yellow"],
    features: [
      "Fast Opening",
      "Remote Control",
      "Loop Detector Support",
      "Heavy Duty"
    ],
    specifications: {
      Voltage: "230V",
      BoomLength: "3m - 6m",
      OpeningTime: "3-6 Seconds",
      Warranty: "2 Years"
    }
  },

  {
    id: 204,
    slug: "sliding-gate-kit",
    name: "Sliding Gate Automation Kit",
    category: "Gate Motors",
    categorySlug: "gate-motors",
    image: "/images/products/gate-motors/sliding-gate-kit.webp",
    gallery: [
      "/images/products/gate-motors/sliding-gate-kit.webp"
    ],
    description: "Complete sliding gate automation kit with motor and accessories.",
    colours: ["Black"],
    features: [
      "Motor",
      "Remote Controls",
      "Rack Gear",
      "Safety Sensors"
    ],
    specifications: {
      Voltage: "230V",
      Capacity: "1000kg",
      Accessories: "Complete Kit",
      Warranty: "2 Years"
    }
  },

  {
    id: 205,
    slug: "swing-gate-roller-motor",
    name: "Swing Gate Roller Motor",
    category: "Gate Motors",
    categorySlug: "gate-motors",
    image: "/images/products/gate-motors/swing-gate-roller-motor.webp",
    gallery: [
      "/images/products/gate-motors/swing-gate-roller-motor.webp"
    ],
    description: "Automatic swing gate roller motor for smooth and reliable gate operation.",
    colours: ["Black"],
    features: [
      "Heavy Duty Motor",
      "Dual Gate Support",
      "Remote Control",
      "Obstacle Detection",
      "Auto Close",
      "Weather Resistant"
    ],
    specifications: {
      Voltage: "230V",
      Motor: "600W",
      Capacity: "600kg per Gate",
      Protection: "IP54",
      Warranty: "2 Years"
    }
  },

  {
    id: 206,
    slug: "cantilever-gate-motor",
    name: "Cantilever Gate Motor",
    category: "Gate Motors",
    categorySlug: "gate-motors",
    image: "/images/products/gate-motors/cantilever-gate-motor.webp",
    gallery: [
      "/images/products/gate-motors/cantilever-gate-motor.webp"
    ],
    description: "Heavy-duty cantilever gate motor for industrial and commercial sliding gates.",
    colours: ["Black"],
    features: [
      "Heavy Duty",
      "Remote Control",
      "Smartphone Control",
      "Obstacle Detection",
      "Auto Close",
      "Industrial Grade"
    ],
    specifications: {
      Voltage: "230V",
      Motor: "1000W",
      Capacity: "1500kg",
      Protection: "IP54",
      Warranty: "2 Years"
    }
  }
];