// app/products/category/[slug]/page.tsx

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductsByCategory, getProductCategories } from '@/lib/products';
import { getCategoryBySlug } from '@/lib/products/categories';
import ProductGrid from '@/components/products/ProductGrid';
import { Reveal } from '@/components/ui/Motion';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all categories
export async function generateStaticParams() {
  const categories = getProductCategories();
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

// Generate metadata dynamically
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = params;
  const category = getCategoryBySlug(slug);
  
  // If category not found, return default metadata
  if (!category) {
    return {
      title: 'Category Not Found | SmartLiv',
      description: 'The requested product category could not be found.',
    };
  }

  const categoryTitle = category.title;
  const categoryDescription = category.description;

  return {
    title: `${categoryTitle} | SmartLiv`,
    description: categoryDescription,
    keywords: `${categoryTitle}, Smart Home Products, Home Automation, SmartLiv, ${categoryTitle} India, Smart Home Solutions`,
    openGraph: {
      title: `${categoryTitle} | SmartLiv`,
      description: categoryDescription,
      url: `https://smartliv.com/products/category/${slug}`,
      siteName: 'SmartLiv',
      images: [
        {
          url: category.image || '/images/og/category-og.jpg',
          width: 1200,
          height: 630,
          alt: `${categoryTitle} - SmartLiv Smart Home Products`,
        },
      ],
      locale: 'en_IN',
      type: 'website', // Changed to 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: `${categoryTitle} | SmartLiv`,
      description: categoryDescription,
      images: [category.image || '/images/og/category-og.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `https://smartliv.com/products/category/${slug}`,
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;
  
  const category = getCategoryBySlug(slug);
  const products = getProductsByCategory(slug);

  // Return 404 if category not found
  if (!category) {
    notFound();
  }

  const productCount = products.length;

  return (
    <main className="bg-black min-h-screen">
      {/* Page content */}
      <article className="relative">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12">
          <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-7xl mx-auto relative">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
              <a href="/" className="hover:text-green-400 transition-colors">Home</a>
              <span className="text-gray-600">/</span>
              <a href="/products" className="hover:text-green-400 transition-colors">Products</a>
              <span className="text-gray-600">/</span>
              <span className="text-white/70 font-medium" aria-current="page">
                {category.title}
              </span>
            </nav>

            <Reveal direction="up" delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-4">
                {category.title}
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
                {category.description}
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <div className="flex items-center gap-4 mt-6">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span>{productCount} {productCount === 1 ? 'Product' : 'Products'} Available</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Product Grid */}
        <section className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto">
            {productCount > 0 ? (
              <ProductGrid products={products} />
            ) : (
              <div className="text-center py-12">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-white text-lg font-medium mb-2">No Products Available</h3>
                  <p className="text-gray-400 text-sm">
                    Products in this category are currently being added. Please check back soon.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        <div className="h-8 sm:h-12 md:h-16" />
      </article>
    </main>
  );
}