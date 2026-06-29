// components/products/CategoryCard.tsx (Enhanced with 3D Tilt)

'use client';

import { memo, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Category } from '@/lib/products/categories';

interface CategoryCardProps {
  category: Category;
  priority?: boolean;
}

const CategoryCard = memo(({ category, priority = false }: CategoryCardProps) => {
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
      href={`/products/category/${category.slug}`}
      className="block h-full group focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded-3xl"
      aria-label={`Explore ${category.title} - ${category.productCount} products available`}
    >
      <motion.div
        ref={cardRef}
        className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 transition-all duration-500 shadow-2xl"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          y: -8,
          transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
        }}
      >
        {/* Image Container */}
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#0a0a0a]">
          <Image
            src={category.image}
            alt={`${category.title} - SmartLiv premium smart home category`}
            fill
            className={`object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority={priority}
            loading={priority ? 'eager' : 'lazy'}
            quality={85}
          />

          {/* Glassmorphism Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/40 to-transparent backdrop-blur-[2px]" />
          
          {/* Green Glow Effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              opacity: isHovered ? 1 : 0,
              background: isHovered 
                ? 'radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.2), transparent 70%)'
                : 'radial-gradient(circle at 50% 50%, transparent, transparent)'
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Product Count Badge */}
          <motion.div
            className="absolute top-4 right-4 backdrop-blur-xl bg-black/60 border border-white/15 px-3.5 py-1.5 rounded-full shadow-lg"
            animate={{
              scale: isHovered ? 1.05 : 1
            }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-white text-xs sm:text-sm font-medium tracking-wide">
              {category.productCount} {category.productCount === 1 ? 'Product' : 'Products'}
            </span>
          </motion.div>

          {/* Category Title */}
          <motion.div 
            className="absolute bottom-4 left-4 right-16"
            animate={{
              y: isHovered ? -2 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-tight tracking-tight">
              {category.title}
            </h3>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-5 sm:p-6 space-y-3">
          <motion.p
            className="text-gray-400 text-sm leading-relaxed line-clamp-2 min-h-[2.5rem]"
            animate={{
              y: isHovered ? -2 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            {category.description}
          </motion.p>

          <motion.div
            className="flex items-center justify-end pt-1"
            animate={{
              x: isHovered ? 5 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-9 h-9 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:bg-green-500/20 group-hover:border-green-500/50 transition-all duration-300"
              animate={{
                backgroundColor: isHovered ? 'rgba(34, 197, 94, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                borderColor: isHovered ? 'rgba(34, 197, 94, 0.5)' : 'rgba(255, 255, 255, 0.1)'
              }}
            >
              <ArrowRight 
                className={`w-4 h-4 transition-colors duration-300 ${
                  isHovered ? 'text-green-400' : 'text-white/70'
                }`}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="h-[2px] bg-gradient-to-r from-green-500/40 to-transparent rounded-full"
            animate={{
              width: isHovered ? '40%' : '25%'
            }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Hover Border Glow */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          animate={{
            boxShadow: isHovered 
              ? 'inset 0 0 0 2px rgba(34, 197, 94, 0.5), 0 0 40px rgba(34, 197, 94, 0.15)'
              : 'inset 0 0 0 1px rgba(255, 255, 255, 0.05)'
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Outer Glow */}
        <motion.div
          className="absolute -inset-0.5 rounded-3xl pointer-events-none"
          animate={{
            opacity: isHovered ? 1 : 0,
            boxShadow: isHovered 
              ? '0 0 60px rgba(34, 197, 94, 0.2), 0 0 120px rgba(34, 197, 94, 0.08)'
              : 'none'
          }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </Link>
  );
});

CategoryCard.displayName = 'CategoryCard';

export default CategoryCard;