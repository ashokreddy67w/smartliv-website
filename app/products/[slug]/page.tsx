// app/products/[slug]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/products";
import ProductDetails from "@/components/products/ProductDetails";
interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | SmartLiv",
    };
  }

  return {
    title: `${product.name} | SmartLiv`,
    description: product.description,
    keywords: [
      product.name,
      product.category,
      "Smart Home",
      "Home Automation",
      "SmartLiv",
      "India",
    ],
    openGraph: {
      title: `${product.name} | SmartLiv`,
      description: product.description,
      url: `https://smartliv.in/products/${slug}`,
      siteName: "SmartLiv",
      images: [
        {
          url: product.image,
          width: 1200,
          height: 1200,
          alt: product.name,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | SmartLiv`,
      description: product.description,
      images: [product.image],
    },
    alternates: {
      canonical: `https://smartliv.in/products/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black">
      <ProductDetails product={product} />
    </main>
  );
}