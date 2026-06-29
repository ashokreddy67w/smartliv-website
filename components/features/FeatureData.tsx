// components/features/featureData.tsx
import {
  Lightbulb,
  Fingerprint,
  Video,
  Camera,
  Phone,
  Film,
  Thermometer,
  Palette,
  Mic,
  Shield,
  Smartphone,
  RefreshCw,
  Car,
  Activity,
  LayoutDashboard,
} from 'lucide-react';

export interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const featureData: Feature[] = [
  {
    id: 'lighting',
    icon: <Lightbulb size={28} strokeWidth={1.5} />,
    title: 'Smart Lighting',
    description: 'Control every light from anywhere with scenes, schedules, dimming, and mood lighting.',
  },
  {
    id: 'switches',
    icon: <Lightbulb size={28} strokeWidth={1.5} />,
    title: 'Smart Touch Switches',
    description: 'Premium glass touch switches with luxury finishes and instant response.',
  },
  {
    id: 'locks',
    icon: <Fingerprint size={28} strokeWidth={1.5} />,
    title: 'Digital Door Locks',
    description: 'Fingerprint, PIN, Face Recognition, RFID, and App Unlock for ultimate security.',
  },
  {
    id: 'doorphone',
    icon: <Phone size={28} strokeWidth={1.5} />,
    title: 'Video Door Phone',
    description: 'See visitors, talk remotely, unlock doors, and receive mobile notifications.',
  },
  {
    id: 'cctv',
    icon: <Camera size={28} strokeWidth={1.5} />,
    title: 'CCTV Surveillance',
    description: 'AI Cameras with Live View, Motion Detection, Night Vision, and Cloud Recording.',
  },
  {
    id: 'theater',
    icon: <Film size={28} strokeWidth={1.5} />,
    title: 'Home Theater',
    description: 'Cinema experience with one-touch movie scenes and premium audio integration.',
  },
  {
    id: 'climate',
    icon: <Thermometer size={28} strokeWidth={1.5} />,
    title: 'Climate Control',
    description: 'Smart AC with temperature automation and energy optimization for comfort.',
  },
  {
    id: 'rgb',
    icon: <Palette size={28} strokeWidth={1.5} />,
    title: 'RGB Lighting',
    description: 'Ambient lighting with scenes, music sync, and millions of colors.',
  },
  {
    id: 'voice',
    icon: <Mic size={28} strokeWidth={1.5} />,
    title: 'Voice Control',
    description: 'Google Assistant and Amazon Alexa for hands-free automation.',
  },
  {
    id: 'security',
    icon: <Shield size={28} strokeWidth={1.5} />,
    title: 'Security Automation',
    description: 'Motion sensors, door sensors, siren, and instant notifications.',
  },
  {
    id: 'app',
    icon: <Smartphone size={28} strokeWidth={1.5} />,
    title: 'Mobile App',
    description: 'Control your entire home from anywhere in real-time.',
  },

  {
    id: 'gate',
    icon: <Car size={28} strokeWidth={1.5} />,
    title: 'Gate Automation',
    description: 'Smart gate control with access management and remote operation.',
  },
  {
    id: 'energy',
    icon: <Activity size={28} strokeWidth={1.5} />,
    title: 'Energy Monitoring',
    description: 'Track and optimize your home energy consumption in real-time.',
  },
  {
    id: 'scenes',
    icon: <LayoutDashboard size={28} strokeWidth={1.5} />,
    title: 'Scene Automation',
    description: 'Create custom scenes that control multiple devices with one touch.',
  },
  {
    id: 'retrofit',
    icon: <RefreshCw size={28} strokeWidth={1.5} />,
    title: 'Retrofit Automation',
    description: 'Upgrade your existing home with smart automation without major renovations.',
  },
];