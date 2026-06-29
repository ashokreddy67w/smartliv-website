// components/products/ProductDetails.tsx

'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  Download, 
  MessageCircle,
  Check,
  ChevronDown,
  ChevronUp,
  X
} from 'lucide-react';
import type { Product } from '@/lib/products';
import { getRelatedProducts } from '@/lib/products';
import ProductCard from './ProductCard';
import { Reveal } from '@/components/ui/Motion';

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [selectedColour, setSelectedColour] = useState(product.colours[0] || '');
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState<'features' | 'specifications'>('features');
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  const relatedProducts = getRelatedProducts(product.id, 4);

  // Safe gallery fallback
  const gallery = product.gallery ?? [product.image];

  // Get colour-specific image
  const getColourImage = (colour: string) => {
    const colourSlug = colour.toLowerCase();
    const basePath = product.image.substring(0, product.image.lastIndexOf('/') + 1);
    return `${basePath}${colourSlug}.webp`;
  };

  // Handle colour change
  const handleColourChange = (colour: string) => {
    setSelectedColour(colour);
    const colourImage = getColourImage(colour);
    const galleryIndex = gallery.findIndex(img => 
      img.includes(colour.toLowerCase())
    );
    setSelectedImage(galleryIndex >= 0 ? galleryIndex : 0);
  };

  // Handle share
  const handleShare = async () => {
    const url = window.location.href;
    const title = `Check out ${product.name} from SmartLiv`;
    
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch (error) {
        console.log('Share cancelled');
      }
    } else {
      navigator.clipboard.writeText(url);
      setIsShareOpen(true);
      setTimeout(() => setIsShareOpen(false), 3000);
    }
  };

  // Handle WhatsApp enquiry
  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in the ${product.name} from SmartLiv. Can you provide more information?`;
    const url = `https://wa.me/919248123456?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Handle brochure download
  const handleDownloadBrochure = () => {
    // In production, this would download a PDF
    alert('Brochure download will be available soon.');
  };

  // Sticky CTA visibility
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('product-hero')?.offsetHeight || 0;
      setIsStickyVisible(window.scrollY > heroHeight - 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation for gallery
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isGalleryOpen) {
        if (e.key === 'ArrowRight') {
          setSelectedImage((prev) => (prev + 1) % gallery.length);
        } else if (e.key === 'ArrowLeft') {
          setSelectedImage((prev) => (prev - 1 + gallery.length) % gallery.length);
        } else if (e.key === 'Escape') {
          setIsGalleryOpen(false);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isGalleryOpen, gallery.length]);

  return (
    <>
      <article className="relative">
        {/* Breadcrumb */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-4 sm:pt-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-green-400 transition-colors">
                Home
              </Link>
            </li>
            <span className="text-gray-600">/</span>
            <li>
              <Link href="/products" className="hover:text-green-400 transition-colors">
                Products
              </Link>
            </li>
            <span className="text-gray-600">/</span>
            <li>
              <Link 
                href={`/products/category/${product.categorySlug}`} 
                className="hover:text-green-400 transition-colors"
              >
                {product.category}
              </Link>
            </li>
            <span className="text-gray-600">/</span>
            <li className="text-white/70 font-medium" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>

        {/* Product Hero */}
        <section id="product-hero" className="px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 pb-8 sm:pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Image Gallery */}
              <Reveal direction="left" delay={0.1}>
                <div className="space-y-4">
                  {/* Main Image */}
                  <motion.div 
                    className="relative aspect-square rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/10 cursor-pointer group"
                    whileHover={{ scale: 1.01 }}
                    onClick={() => setIsGalleryOpen(true)}
                  >
                    <Image
                      src={gallery[selectedImage] || product.image}
                      alt={`${product.name} - ${selectedColour} colour`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                        Click to enlarge
                      </div>
                    </div>
                  </motion.div>

                  {/* Thumbnail Gallery */}
                  {gallery.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {gallery.map((image, index) => (
                        <motion.button
                          key={index}
                          className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-colors ${
                            selectedImage === index 
                              ? 'border-green-500' 
                              : 'border-white/10 hover:border-white/30'
                          }`}
                          onClick={() => setSelectedImage(index)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={`View image ${index + 1}`}
                        >
                          <Image
                            src={image}
                            alt={`${product.name} view ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="96px"
                          />
                        </motion.button>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>

              {/* Product Info */}
              <Reveal direction="right" delay={0.2}>
                <div className="space-y-6">
                  {/* Category */}
                  <div className="flex items-center gap-2">
                    <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-green-400 text-xs sm:text-sm font-medium">
                      {product.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1]">
                    {product.name}
                  </h1>

                  {/* Description */}
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    {product.description}
                  </p>

                  {/* Colours */}
                  {product.colours.length > 0 && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-400 mb-2">
                        Colour
                      </h3>
                      <div className="flex gap-3 flex-wrap">
                        {product.colours.map((colour) => (
                          <motion.button
                            key={colour}
                            className={`relative w-10 h-10 rounded-full border-2 transition-all ${
                              selectedColour === colour 
                                ? 'border-green-500 scale-110' 
                                : 'border-white/20 hover:border-white/50'
                            }`}
                            style={{ 
                              backgroundColor: colour === 'midnight' ? '#1a1a2e' : colour 
                            }}
                            onClick={() => handleColourChange(colour)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label={`Select ${colour} colour`}
                          >
                            {selectedColour === colour && (
                              <Check className="absolute inset-0 m-auto w-4 h-4 text-white drop-shadow-lg" />
                            )}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    <button
                      onClick={handleWhatsApp}
                      className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Enquire Now
                    </button>
                    <button
                      onClick={handleDownloadBrochure}
                      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-medium transition-colors border border-white/10"
                    >
                      <Download className="w-4 h-4" />
                      Download Brochure
                    </button>
                    <button
                      onClick={handleShare}
                      className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-full font-medium transition-colors border border-white/10"
                    >
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                  </div>

                  {/* Share confirmation */}
                  <AnimatePresence>
                    {isShareOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-2 rounded-lg text-sm"
                      >
                        Link copied to clipboard!
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Features & Specifications Tabs */}
        <section className="px-4 sm:px-6 md:px-8 py-8 sm:py-12">
          <div className="max-w-7xl mx-auto">
            <div className="border-b border-white/10">
              <div className="flex gap-6">
                <button
                  className={`pb-3 text-sm font-medium transition-colors relative ${
                    activeTab === 'features' 
                      ? 'text-white' 
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                  onClick={() => setActiveTab('features')}
                >
                  Features
                  {activeTab === 'features' && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500"
                    />
                  )}
                </button>
                <button
                  className={`pb-3 text-sm font-medium transition-colors relative ${
                    activeTab === 'specifications' 
                      ? 'text-white' 
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                  onClick={() => setActiveTab('specifications')}
                >
                  Specifications
                  {activeTab === 'specifications' && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500"
                    />
                  )}
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'features' && (
                <motion.div
                  key="features"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6"
                >
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'specifications' && (
                <motion.div
                  key="specifications"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="pt-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center p-3 border-b border-white/5">
                        <span className="text-gray-400 text-sm capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="text-white text-sm font-medium text-right">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="px-4 sm:px-6 md:px-8 py-8 sm:py-12">
            <div className="max-w-7xl mx-auto">
              <Reveal direction="up" delay={0.1}>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
                  Related Products
                </h2>
              </Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Reveal key={relatedProduct.id} direction="up" delay={0.1}>
                    <ProductCard product={relatedProduct} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Sticky Mobile CTA */}
        <AnimatePresence>
          {isStickyVisible && (
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 sm:hidden"
            >
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">{product.name}</p>
                  <p className="text-gray-400 text-xs">{product.category}</p>
                </div>
                <button
                  onClick={handleWhatsApp}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap"
                >
                  Enquire Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Full Screen Gallery Modal */}
        <AnimatePresence>
          {isGalleryOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
              onClick={() => setIsGalleryOpen(false)}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors p-2"
                onClick={() => setIsGalleryOpen(false)}
                aria-label="Close gallery"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="relative max-w-5xl w-full max-h-[90vh]">
                <div className="relative aspect-square w-full">
                  <Image
                    src={gallery[selectedImage] || product.image}
                    alt={`${product.name} - full view`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 80vw"
                    quality={95}
                  />
                </div>

                {/* Navigation */}
                {gallery.length > 1 && (
                  <>
                    <button
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage((prev) => (prev - 1 + gallery.length) % gallery.length);
                      }}
                      aria-label="Previous image"
                    >
                      <ArrowLeft className="w-6 h-6" />
                    </button>
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage((prev) => (prev + 1) % gallery.length);
                      }}
                      aria-label="Next image"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Image counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full">
                  {selectedImage + 1} / {gallery.length}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </>
  );
};

export default ProductDetails;