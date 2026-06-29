// components/products/ProductCard.tsx (Enhanced with 3D Tilt)

'use client';

import { memo, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

const ProductCard = memo(({ product, priority = false }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // 3D Tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [8, -8]), { 
    stiffness: 200, 
    damping: 30 
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-8, 8]), { 
    stiffness: 200, 
    damping: 30 
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <Link
      href={`/products/${product.slug}`}
      className="block h-full group focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded-2xl"
      aria-label={`View ${product.name}`}
    >
      <motion.div
        ref={cardRef}
        className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 transition-all duration-500 shadow-2xl"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          y: -6,
          transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
        }}
      >
        {/* Image Container */}
        <div className="relative w-full aspect-square overflow-hidden bg-[#0a0a0a]">
          <Image
            src={product.image}
            alt={`${product.name} - SmartLiv premium smart home product`}
            fill
            className={`object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority={priority}
            loading={priority ? 'eager' : 'lazy'}
            quality={85}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-[#0a0a0a]/20 to-transparent" />

          {/* Category Badge */}
          <motion.div 
            className="absolute top-3 left-3 sm:top-4 sm:left-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="inline-block px-2.5 py-1 sm:px-3 sm:py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-white text-[10px] sm:text-xs font-medium tracking-wide">
              {product.category}
            </span>
          </motion.div>

          {/* Colour Dots */}
          {product.colours && product.colours.length > 0 && (
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex gap-1.5">
              {product.colours.slice(0, 4).map((colour) => (
                <div
                  key={colour}
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border border-white/20 shadow-lg transition-transform hover:scale-125"
                  style={{ 
                    backgroundColor: colour === 'midnight' ? '#1a1a2e' : colour 
                  }}
                  title={colour}
                  aria-label={`${colour} colour option`}
                />
              ))}
              {product.colours.length > 4 && (
                <span className="text-[8px] sm:text-[10px] text-white/60 flex items-center ml-1">
                  +{product.colours.length - 4}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 md:p-6 space-y-2">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-sm sm:text-base md:text-lg font-medium text-white group-hover:text-green-400 transition-colors duration-300 line-clamp-1">
              {product.name}
            </h3>
          </div>

          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-2 min-h-[2.5rem]">
            {product.description}
          </p>

          {/* Features Preview */}
          {product.features && product.features.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {product.features.slice(0, 2).map((feature) => (
                <span 
                  key={feature}
                  className="text-[8px] sm:text-[9px] text-gray-500 bg-white/5 px-2 py-0.5 rounded-full border border-white/5"
                >
                  {feature}
                </span>
              ))}
              {product.features.length > 2 && (
                <span className="text-[8px] sm:text-[9px] text-gray-500">
                  +{product.features.length - 2}
                </span>
              )}
            </div>
          )}

          <div className="flex items-center justify-between pt-2">
            <span className="text-[10px] sm:text-xs text-gray-500">
              {product.specifications?.technology || 'Smart Device'}
            </span>
            <motion.div
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:bg-green-500/20 group-hover:border-green-500/50 transition-all duration-300"
              animate={{
                x: isHovered ? 3 : 0,
                scale: isHovered ? 1.05 : 1
              }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight 
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors duration-300 ${
                  isHovered ? 'text-green-400' : 'text-white/70'
                }`}
              />
            </motion.div>
          </div>
        </div>

        {/* Hover Border Glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{
            boxShadow: isHovered 
              ? 'inset 0 0 0 2px rgba(34, 197, 94, 0.4), 0 0 30px rgba(34, 197, 94, 0.1)'
              : 'inset 0 0 0 1px rgba(255, 255, 255, 0.05)'
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Subtle Glow */}
        <motion.div
          className="absolute -inset-0.5 rounded-2xl pointer-events-none"
          animate={{
            opacity: isHovered ? 1 : 0,
            boxShadow: isHovered 
              ? '0 0 40px rgba(34, 197, 94, 0.12), 0 0 80px rgba(34, 197, 94, 0.04)'
              : 'none'
          }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </Link>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;