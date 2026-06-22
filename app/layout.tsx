import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmartLiv — Premium Smart Home Automation",
  description:
    "Transform your home with SmartLiv's premium smart switches and home automation systems. Luxury design meets intelligent control — crafted for modern Indian homes.",
  keywords: [
    "smart home",
    "home automation",
    "smart switches",
    "SmartLiv",
    "luxury smart switches",
    "touch switches",
    "home automation India",
    "premium switches",
    "smart home India",
  ],
  authors: [{ name: "SmartLiv Smart Home Automation" }],
  creator: "SmartLiv",
  publisher: "SmartLiv",
  metadataBase: new URL("https://smartliv.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://smartliv.in",
    title: "SmartLiv — Premium Smart Home Automation",
    description:
      "Luxury smart switches and home automation systems designed for modern homes. Intuitive. Elegant. Intelligent.",
    siteName: "SmartLiv",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SmartLiv Premium Smart Home Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartLiv — Premium Smart Home Automation",
    description:
      "Luxury smart switches and home automation systems designed for modern homes.",
    images: ["/images/og-image.jpg"],
    creator: "@smartliv",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SmartLiv Smart Home Automation",
  url: "https://smartliv.in",
  logo: "https://smartliv.in/images/logo.png",
  description:
    "Premium smart home switches and automation systems for modern homes.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "Andhra Pradesh",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: ["English", "Telugu", "Hindi"],
  },
  sameAs: [
    "https://instagram.com/smartliv",
    "https://facebook.com/smartliv",
    "https://youtube.com/@smartliv",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
