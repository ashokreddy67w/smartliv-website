// components/products/ProductGrid.tsx (Enhanced with more control)

'use client';

import { memo } from 'react';
import { Product } from '@/lib/products';
import ProductCard from './ProductCard';
import { StaggerChildren, StaggerItem } from '@/components/ui/Motion';

interface ProductGridProps {
  products: Product[];
  className?: string;
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
    largeDesktop?: number;
  };
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  staggerDelay?: number;
  showEmptyState?: boolean;
  emptyStateMessage?: string;
}

const ProductGrid = memo(({ 
  products, 
  className = '',
  columns = { mobile: 2, tablet: 3, desktop: 4, largeDesktop: 5 },
  gap = 'md',
  staggerDelay = 0.06,
  showEmptyState = true,
  emptyStateMessage = 'No products are available in this category at the moment.'
}: ProductGridProps) => {
  // If no products, show empty state
  if (!products || products.length === 0) {
    if (!showEmptyState) return null;
    
    return (
      <div className="text-center py-12 sm:py-16 md:py-20">
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
          <h3 className="text-white text-lg font-medium mb-2">No Products Found</h3>
          <p className="text-gray-400 text-sm">{emptyStateMessage}</p>
        </div>
      </div>
    );
  }

  // Build grid columns based on props
  const getCols = () => {
    const mobile = columns.mobile || 2;
    const tablet = columns.tablet || 3;
    const desktop = columns.desktop || 4;
    const largeDesktop = columns.largeDesktop || desktop;

    return `
      grid-cols-${mobile}
      sm:grid-cols-${Math.min(tablet, 3)}
      lg:grid-cols-${Math.min(desktop, 4)}
      xl:grid-cols-${Math.min(largeDesktop, 5)}
    `;
  };

  // Gap sizes
  const gapSizes = {
    sm: 'gap-3 sm:gap-4',
    md: 'gap-4 sm:gap-5 md:gap-6',
    lg: 'gap-5 sm:gap-6 md:gap-7',
    xl: 'gap-6 sm:gap-7 md:gap-8'
  };

  return (
    <StaggerChildren
      className={`grid ${getCols()} ${gapSizes[gap] || gapSizes.md} ${className}`}
      staggerDelay={staggerDelay}
    >
      {products.map((product, index) => (
        <StaggerItem key={product.id} className="h-full">
          <ProductCard 
            product={product} 
            priority={index === 0}
          />
        </StaggerItem>
      ))}
    </StaggerChildren>
  );
});

ProductGrid.displayName = 'ProductGrid';

export default ProductGrid;