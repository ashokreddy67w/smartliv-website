import type { Metadata } from "next";
import CategoryGrid from "@/components/products/CategoryGrid";

export const metadata: Metadata = {
  title: "Smart Home Products | SmartLiv",
  description:
    "Explore SmartLiv's complete range of premium smart home products including touch switches, scene controllers, lighting, security, power modules and more.",
};

export default function ProductsPage() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <CategoryGrid />
    </main>
  );
}