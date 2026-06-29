export interface SmartSecurityProduct {
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
}

export const smartSecurity: SmartSecurityProduct[] = [
  {
    id: 101,
    slug: "wifi-security-camera",
    name: "WiFi Security Camera",
    category: "Smart Security",
    categorySlug: "smart-security",
    image: "/images/security/wifi-security-camera.webp",
    description: "4MP AI WiFi security camera with intelligent monitoring.",
    colours: ["White"],
    features: [
      "4MP Resolution",
      "AI Human Detection",
      "Night Vision",
      "Motion Alerts",
      "Two-Way Audio",
      "Cloud + SD Storage",
    ],
    specifications: {
      resolution: "4MP",
      storage: "Cloud + SD Card",
      connectivity: "WiFi 2.4GHz",
      audio: "Two-Way Audio",
      vision: "IR Night Vision",
    },
  },

  {
    id: 102,
    slug: "smart-alarm-hub",
    name: "Smart Alarm Hub",
    category: "Smart Security",
    categorySlug: "smart-security",
    image: "/images/security/smart-alarm-hub.webp",
    description: "Central smart alarm hub supporting multiple wireless security devices.",
    colours: ["White"],
    features: [
      "WiFi Connectivity",
      "GSM Backup",
      "Siren Support",
      "Mobile App Control",
      "Real-Time Alerts",
      "Multiple Sensor Support",
    ],
    specifications: {
      connectivity: "WiFi + GSM",
      power: "AC Adapter + Battery Backup",
      app: "SmartLiv App",
      siren: "Built-in",
      sensors: "Up to 100 Devices",
    },
  },

  {
    id: 103,
    slug: "pir-motion-sensor",
    name: "PIR Motion Sensor",
    category: "Smart Security",
    categorySlug: "smart-security",
    image: "/images/security/pir-motion-sensor.webp",
    description: "Wireless PIR motion detector with intelligent human detection.",
    colours: ["White"],
    features: [
      "Motion Detection",
      "Wireless",
      "Low Power",
      "Wide Detection Angle",
      "Instant Alerts",
    ],
    specifications: {
      detection: "8-12m",
      angle: "110°",
      battery: "Long Life",
      connectivity: "Wireless RF",
    },
  },

  {
    id: 104,
    slug: "door-window-sensor",
    name: "Door & Window Sensor",
    category: "Smart Security",
    categorySlug: "smart-security",
    image: "/images/security/door-window-sensor.webp",
    description: "Magnetic contact sensor for doors and windows.",
    colours: ["White"],
    features: [
      "Open/Close Detection",
      "Wireless",
      "Instant Notification",
      "Battery Powered",
    ],
    specifications: {
      type: "Magnetic Contact",
      battery: "CR2032",
      connectivity: "Wireless RF",
      application: "Doors & Windows",
    },
  },

  {
  id: 105,
  slug: "gps-vehicle-tracker",
  name: "GPS Vehicle Tracker",
category: "Smart Security",
categorySlug: "smart-security",
  image: "/images/security/vehicletracking.webp",
  description: "Advanced real-time GPS vehicle tracking system with live monitoring and remote management.",
  colours: ["Black"],
  features: [
    "Real-Time GPS Tracking",
    "Live Location",
    "Route History",
    "Geo-Fencing",
    "Overspeed Alerts",
    "Mobile App Control",
    "ACC Status Monitoring",
    "Engine Cut-Off",
    "Trip Reports",
    "24/7 Monitoring"
  ],
  specifications: {
    network: "4G LTE",
    gps: "High Precision GPS",
    power: "9V-90V DC",
    connectivity: "4G + GPS",
    app: "Android & iOS",
    tracking: "Real-Time",
    history: "180 Days",
    alerts: "Geo-Fence, Overspeed, Power Cut, Ignition",
    installation: "Hardwired",
    accuracy: "< 5m",
    sim: "Nano SIM Supported"
  },
},

 {
  id: 106,
  slug: "glass-break-sensor",
  name: "Glass Break Sensor",
  category: "Smart Security",
  categorySlug: "smart-security",
  image: "/images/security/glass-break-sensor.webp",
  description: "Advanced wireless glass break sensor that instantly detects shattered glass and triggers security alerts.",
  colours: ["White"],
  features: [
    "Glass Break Detection",
    "Instant Alarm Trigger",
    "Wireless RF Connectivity",
    "High Sensitivity Microphone",
    "Tamper Protection",
    "Low Battery Alert",
    "Long Battery Life",
    "Smart Alarm Integration",
    "Real-Time Notifications",
    "Easy Installation"
  ],
  specifications: {
    detection: "Up to 8m",
    sensor: "Acoustic Glass Break Sensor",
    battery: "CR123A Lithium Battery",
    connectivity: "433MHz Wireless RF",
    frequency: "433MHz",
    operatingTemperature: "-10°C to 55°C",
    material: "ABS Plastic",
    led: "Status Indicator LED",
    installation: "Wall Mount",
    application: "Homes, Offices, Shops"
  },
},

  {
    id: 107,
    slug: "gsm-gate-controller",
    name: "GSM Gate Controller",
    category: "Smart Security",
    categorySlug: "smart-security",
    image: "/images/security/gsm-gate-controller.webp",
    description: "Remote GSM controller for gates, shutters and automation systems.",
    colours: ["Black"],
    features: [
      "SIM Based",
      "Remote Access",
      "Relay Output",
      "Mobile Control",
      "Long Range",
    ],
    specifications: {
      network: "2G/4G GSM",
      antenna: "External",
      relay: "1 Channel",
      power: "12V DC",
    },
  },

  {
    id: 108,
    slug: "smoke-detector",
    name: "Smoke Detector",
    category: "Smart Security",
    categorySlug: "smart-security",
    image: "/images/security/smoke-detector.webp",
    description: "Wireless smoke detector for early fire detection.",
    colours: ["White"],
    features: [
      "Smoke Detection",
      "Loud Alarm",
      "Wireless",
      "Battery Powered",
    ],
    specifications: {
      sensor: "Photoelectric",
      alarm: "85dB",
      battery: "Long Life",
      connectivity: "Wireless RF",
    },
  },
];