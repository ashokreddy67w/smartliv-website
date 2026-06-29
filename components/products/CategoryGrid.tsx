// components/products/CategoryGrid.tsx (Using StaggerChildren)

'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { categories } from '@/lib/products/categories';
import CategoryCard from './CategoryCard';
import { Reveal, StaggerChildren, StaggerItem } from '@/components/ui/Motion';

const CategoryGrid = memo(() => {
  // Get total product count for display
  const totalProducts = categories.reduce((sum, cat) => sum + cat.productCount, 0);
  const categoriesWithProducts = categories.filter((cat) => cat.productCount > 0).length;

  return (
    <section className="w-full bg-[#050505] py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
          {/* Small Label */}
          <Reveal
            direction="up"
            delay={0.1}
            className="flex items-center justify-center gap-3 mb-4 sm:mb-5"
          >
            <div className="w-8 h-px bg-gradient-to-r from-green-500 to-transparent" />
            <span className="text-green-500 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase">
              Our Products
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-green-500 to-transparent" />
          </Reveal>

          {/* Large Title */}
          <Reveal
            direction="up"
            delay={0.2}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-4 sm:mb-6"
          >
            Explore{' '}
            <span className="bg-gradient-to-r from-green-400 via-green-500 to-emerald-600 bg-clip-text text-transparent">
              SmartLiv Ecosystem
            </span>
          </Reveal>

          {/* Subtitle */}
          <Reveal
            direction="up"
            delay={0.3}
            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Discover our complete collection of premium smart home solutions,
            meticulously crafted for the modern lifestyle.
          </Reveal>

          {/* Stats */}
          <Reveal
            direction="up"
            delay={0.4}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-6"
          >
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-gray-400 text-sm">
                <span className="text-white font-semibold">{categories.length}</span>{' '}
                Categories
              </span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-gray-400 text-sm">
                <span className="text-white font-semibold">{totalProducts}</span>{' '}
                Products
              </span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-gray-400 text-sm">
                <span className="text-white font-semibold">
                  {categoriesWithProducts}
                </span>{' '}
                Active Categories
              </span>
            </motion.div>
          </Reveal>
        </div>

        {/* Categories Grid with Stagger Animation */}
        <StaggerChildren
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7 md:gap-8"
          staggerDelay={0.08}
        >
          {categories.map((category, index) => (
            <StaggerItem key={category.id} className="h-full">
              <CategoryCard category={category} priority={index === 0} />
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Bottom Decorative Element */}
        <motion.div
          className="mt-16 sm:mt-20 md:mt-24 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
});

CategoryGrid.displayName = 'CategoryGrid';

export default CategoryGrid;