export interface DigitalLockProduct {
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

export const digitalLocks: DigitalLockProduct[] = [
  {
    id: 301,
    slug: "fingerprint-smart-door-lock",
    name: "Fingerprint Smart Door Lock",
    category: "Digital Locks",
    categorySlug: "digital-locks",
    image: "/images/products/DigitalLocks/FingerprintSmartDoorLock.webp",
    gallery: [
      "/images/products/DigitalLocks/FingerprintSmartDoorLock.webp"
    ],
    description:
      "Premium smart digital door lock with fingerprint recognition, PIN access, RFID card, mobile app control and mechanical key backup.",
    colours: ["Black"],
    features: [
      "Fingerprint Unlock",
      "PIN Code Access",
      "RFID Card",
      "Mobile App Control",
      "Remote Unlock",
      "Temporary Passcodes",
      "Auto Lock",
      "Tamper Alarm",
      "Low Battery Alert",
      "Mechanical Key Backup"
    ],
    specifications: {
      UnlockMethods: "Fingerprint, PIN, RFID, App, Key",
      FingerprintCapacity: "100 Users",
      PasswordCapacity: "100 PIN Codes",
      CardCapacity: "100 RFID Cards",
      Material: "Aluminium Alloy",
      Power: "4 × AA Batteries",
      EmergencyPower: "USB Type-C",
      Connectivity: "Wi-Fi / Bluetooth",
      MobileApp: "SmartLiv App",
      DoorThickness: "35–90 mm",
      Warranty: "2 Years"
    }
  },

  {
    id: 302,
    slug: "face-recognition-smart-door-lock",
    name: "Face Recognition Smart Door Lock",
    category: "Digital Locks",
    categorySlug: "digital-locks",
    image: "/images/products/DigitalLocks/FaceRecognitionSmartDoorLock.webp",
    gallery: [
      "/images/products/DigitalLocks/FaceRecognitionSmartDoorLock.webp"
    ],
    description:
      "AI face recognition smart lock with fingerprint, PIN, RFID card and mobile app control.",
    colours: ["Black"],
    features: [
      "3D Face Recognition",
      "Fingerprint Unlock",
      "PIN Code Access",
      "RFID Card",
      "WiFi App Control",
      "Remote Unlock",
      "Auto Lock",
      "Tamper Alarm"
    ],
    specifications: {
      UnlockMethods: "Face, Fingerprint, PIN, RFID, App, Key",
      FaceCapacity: "50 Users",
      FingerprintCapacity: "100 Users",
      Connectivity: "Wi-Fi",
      Power: "5000mAh Rechargeable Battery",
      EmergencyPower: "USB Type-C",
      Warranty: "2 Years"
    }
  },

  {
    id: 303,
    slug: "face-fingerprint-smart-door-lock",
    name: "Face + Fingerprint Smart Door Lock",
    category: "Digital Locks",
    categorySlug: "digital-locks",
    image: "/images/products/DigitalLocks/FaceFingerprintSmartDoorLock.webp",
    gallery: [
      "/images/products/DigitalLocks/FaceFingerprintSmartDoorLock.webp"
    ],
    description:
      "Premium smart lock combining AI face recognition and fingerprint security.",
    colours: ["Black"],
    features: [
      "Face Recognition",
      "Fingerprint Unlock",
      "PIN Code",
      "RFID Card",
      "Mobile App",
      "Remote Unlock",
      "Auto Lock",
      "Voice Prompt"
    ],
    specifications: {
      UnlockMethods: "Face, Fingerprint, PIN, RFID, App, Key",
      Connectivity: "Wi-Fi / Bluetooth",
      Battery: "Rechargeable",
      Material: "Aluminium Alloy",
      DoorThickness: "35–90 mm",
      Warranty: "2 Years"
    }
  },

 {
  id: 304,
  slug: "smart-door-lock",
  name: "Smart Door Lock",
  category: "Digital Locks",
  categorySlug: "digital-locks",
  image: "/images/products/DigitalLocks/SmartDoorLock.webp",
  gallery: [
    "/images/products/DigitalLocks/SmartDoorLock.webp"
  ],
  description:
    "Modern smart door lock with fingerprint, PIN, RFID card and mobile app access.",
  colours: ["Black"],
  features: [
    "Fingerprint Unlock",
    "PIN Code",
    "RFID Card",
    "Mobile App Control",
    "Auto Lock",
    "Remote Unlock",
    "Tamper Alarm",
    "Low Battery Alert"
  ],
  specifications: {
    UnlockMethods: "Fingerprint, PIN, RFID, App, Key",
    Connectivity: "Wi-Fi / Bluetooth",
    Material: "Aluminium Alloy",
    Power: "Rechargeable Battery",
    DoorThickness: "35–90 mm",
    Warranty: "2 Years"
  }
},

{
  id: 305,
  slug: "smart-hotel-lock",
  name: "Smart Hotel Lock",
  category: "Digital Locks",
  categorySlug: "digital-locks",
  image: "/images/products/DigitalLocks/smarthotellocks.webp",
  gallery: [
    "/images/products/DigitalLocks/smarthotellocks.webp"
  ],
  description:
    "Professional RFID hotel lock designed for hotels, resorts and serviced apartments.",
  colours: ["Black"],
  features: [
    "RFID Card Access",
    "Hotel Management Software",
    "Audit Trail",
    "Emergency Key",
    "Low Battery Alert",
    "High Security",
    "Guest Card Support",
    "Master Card Access"
  ],
  specifications: {
    UnlockMethods: "RFID Card, Mechanical Key",
    Material: "Stainless Steel",
    Power: "4 × AA Batteries",
    BatteryLife: "12 Months",
    DoorThickness: "35–80 mm",
    Warranty: "2 Years"
  }
},

{
  id: 306,
  slug: "core-smart-door-lock",
  name: "Core Smart Door Lock",
  category: "Digital Locks",
  categorySlug: "digital-locks",
  image: "/images/products/DigitalLocks/CoreSmartDoorLock.webp",
  gallery: [
    "/images/products/DigitalLocks/CoreSmartDoorLock.webp"
  ],
  description:
    "Reliable smart door lock with fingerprint, PIN, RFID and app-based access.",
  colours: ["Black"],
  features: [
    "Fingerprint Unlock",
    "PIN Code",
    "RFID Card",
    "Mobile App",
    "Auto Lock",
    "Temporary Passcodes",
    "Remote Unlock",
    "Mechanical Key Backup"
  ],
  specifications: {
    UnlockMethods: "Fingerprint, PIN, RFID, App, Key",
    FingerprintCapacity: "100 Users",
    Connectivity: "Wi-Fi / Bluetooth",
    Material: "Aluminium Alloy",
    EmergencyPower: "USB Type-C",
    Warranty: "2 Years"
  }
},
];