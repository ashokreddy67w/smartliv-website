// app/products/category/[slug]/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getCategoryBySlug, getCategorySlugs } from "@/lib/products/categories";
import { getProductsByCategory } from "@/lib/products";

import ProductGrid from "@/components/products/ProductGrid";
import { Reveal } from "@/components/ui/Motion";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getCategorySlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Category Not Found | SmartLiv",
    };
  }

  return {
    title: `${category.title} | SmartLiv`,
    description: category.description,

    keywords: [
      category.title,
      "Smart Home",
      "Home Automation",
      "Smart Switches",
      "SmartLiv",
      "India",
    ],

    alternates: {
      canonical: `https://smartliv.in/products/category/${slug}`,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: `${category.title} | SmartLiv`,
      description: category.description,
      url: `https://smartliv.in/products/category/${slug}`,
      siteName: "SmartLiv",
      images: [
        {
          url: category.image,
          width: 1200,
          height: 630,
          alt: category.title,
        },
      ],
      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${category.title} | SmartLiv`,
      description: category.description,
      images: [category.image],
    },
  };
}

export default async function CategoryPage({
  params,
}: Props) {
  // Await params before using it
  const { slug } = await params;

  // Debug logs
  console.log("=== Category Page Debug ===");
  console.log("1. Slug from params:", slug);

  const category = getCategoryBySlug(slug);

  console.log("2. Category found:", category?.title || "NOT FOUND");

  // Check if category exists before getting products
  if (!category) {
    console.log("3. Category not found, returning 404");
    notFound();
  }

  const products = getProductsByCategory(slug);

  console.log(`4. Products found for "${slug}":`, products.length);
  console.log("5. Product names:", products.map(p => p.name));
  console.log("=== End Debug ===");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.title,
    description: category.description,
    url: `https://smartliv.in/products/category/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <main className="min-h-screen bg-black">
        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent" />
          <div className="max-w-7xl mx-auto px-6 relative">
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-green-400">
                Home
              </Link>
              <span>/</span>
              <Link href="/products" className="hover:text-green-400">
                Products
              </Link>
              <span>/</span>
              <span className="text-white">
                {category.title}
              </span>
            </nav>

            <Reveal>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                {category.title}
              </h1>
              <p className="max-w-3xl text-gray-400 text-lg leading-8">
                {category.description}
              </p>
              <div className="mt-8 flex items-center gap-2 text-green-400">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span>
                  {products.length} Products Available
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-28">
          {products.length > 0 ? (
            <ProductGrid products={products} />
          ) : (
            <div className="py-32 text-center">
              <h2 className="text-3xl text-white mb-4">
                Products Coming Soon
              </h2>
              <p className="text-gray-500 max-w-lg mx-auto">
                We are adding premium SmartLiv products to this category.
                Please check back soon.
              </p>
            </div>
          )}
        </section>
      </main>
    </>
  );
}