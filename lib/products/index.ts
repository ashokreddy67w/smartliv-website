        // lib/products/index.ts

        import { switches, type SwitchProduct } from './switches';
        import { sceneControllers, type SceneControllerProduct } from './sceneControllers';
        import { smartLighting, type SmartLightingProduct } from './smartLighting';
        import { climateControl, type ClimateControlProduct } from './climateControl';
        import { powerModules, type PowerModuleProduct } from './powerModules';
        import { accessControl, type AccessControlProduct } from './accessControl';
        import { smartSecurity, type SmartSecurityProduct,} from "./smartSecurity";
        import {
          gateMotors,
          type GateMotorProduct,
        } from "./gateMotors";
        import {
          digitalLocks,
          type DigitalLockProduct,
        } from "./digitalLocks";
        import {
      videoDoorPhones,
      type VideoDoorPhoneProduct,
    } from "./videoDoorPhones";
    import {
  cctv,
  type CCTVProduct,
} from "./cctv";

export type Product =
  | SwitchProduct
  | SceneControllerProduct
  | SmartLightingProduct
  | ClimateControlProduct
  | PowerModuleProduct
  | AccessControlProduct
  | SmartSecurityProduct
  | GateMotorProduct
  | DigitalLockProduct
  | VideoDoorPhoneProduct
  | CCTVProduct;

        // Combine all products into a single array
        export const products: Product[] = [
          ...switches,
          ...sceneControllers,
          ...smartLighting,
          ...climateControl,
          ...powerModules,
          ...accessControl,
          ...smartSecurity,
          ...gateMotors,
          ...digitalLocks,
          ...videoDoorPhones,
          ...cctv,

        ];

        // ============================================
        // HELPER FUNCTIONS
        // ============================================

        /**
         * Get a product by its slug
         */
        export function getProductBySlug(slug: string): Product | undefined {
          return products.find(product => product.slug === slug);
        }

        /**
         * Get a product by its id
         */
        export function getProductById(id: number): Product | undefined {
          return products.find(product => product.id === id);
        }

        /**
         * Get all products by category slug
         */
        export function getProductsByCategory(categorySlug: string): Product[] {
          return products.filter(product => product.categorySlug === categorySlug);
        }

        /**
         * Get all unique product categories with counts
         */
        export function getProductCategories(): { name: string; slug: string; count: number }[] {
          const categoryMap = new Map<string, { name: string; slug: string; count: number }>();
          
          products.forEach(product => {
            const existing = categoryMap.get(product.categorySlug);
            if (existing) {
              existing.count++;
            } else {
              categoryMap.set(product.categorySlug, {
                name: product.category,
                slug: product.categorySlug,
                count: 1
              });
            }
          });
          
          return Array.from(categoryMap.values());
        }

        /**
         * Get related products based on category
         */
        export function getRelatedProducts(productId: number, limit: number = 4): Product[] {
          const product = getProductById(productId);
          if (!product) return [];
          
          return products
            .filter(p => p.categorySlug === product.categorySlug && p.id !== productId)
            .slice(0, limit);
        }

        /**
         * Get featured products (first 6 for showcase)
         */
        export function getFeaturedProducts(limit: number = 6): Product[] {
          return products.slice(0, limit);
        }

        /**
         * Search products by name, description, or category
         */
        export function searchProducts(query: string): Product[] {
          const searchTerm = query.toLowerCase().trim();
          if (!searchTerm) return [];
          
          return products.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.features.some(f => f.toLowerCase().includes(searchTerm))
          );
        }

        /**
         * Get products by colour
         */
        export function getProductsByColour(colour: string): Product[] {
          const searchColour = colour.toLowerCase();
          return products.filter(product =>
            product.colours.some(c => c.toLowerCase() === searchColour)
          );
        }

        /**
         * Get all unique colours across all products
         */
        export function getAllColours(): string[] {
          const colourSet = new Set<string>();
          products.forEach(product => {
            product.colours.forEach(colour => colourSet.add(colour));
          });
          return Array.from(colourSet);
        }

        /**
         * Get products by feature
         */
        export function getProductsByFeature(feature: string): Product[] {
          const searchFeature = feature.toLowerCase();
          return products.filter(product =>
            product.features.some(f => f.toLowerCase().includes(searchFeature))
          );
        }

        /**
         * Get product count by category
         */
        export function getProductCountByCategory(): Record<string, number> {
          const count: Record<string, number> = {};
          products.forEach(product => {
            count[product.categorySlug] = (count[product.categorySlug] || 0) + 1;
          });
          return count;
        }

        /**
         * Get total product count
         */
        export function getTotalProductCount(): number {
          return products.length;
        }

        /**
         * Get products with specifications filter
         */
        export function getProductsBySpecification(key: string, value: string): Product[] {
          const searchKey = key.toLowerCase();
          const searchValue = value.toLowerCase();
          return products.filter(product => {
            const specValue = product.specifications?.[searchKey];
            return specValue && specValue.toLowerCase().includes(searchValue);
          });
        }

        /**
         * Get latest products (sorted by id descending)
         */
        export function getLatestProducts(limit: number = 8): Product[] {
          return [...products].sort((a, b) => b.id - a.id).slice(0, limit);
        }

        /**
         * Get products by multiple categories
         */
        export function getProductsByCategories(categorySlugs: string[]): Product[] {
          return products.filter(product => categorySlugs.includes(product.categorySlug));
        }

        /**
         * Get product statistics
         */
        export function getProductStats() {
          const categories = getProductCategories();
          const totalProducts = getTotalProductCount();
          const totalCategories = categories.length;
          const colours = getAllColours();
          
          return {
            totalProducts,
            totalCategories,
            totalColours: colours.length,
            categories,
            colours,
            averageProductsPerCategory: Number((totalProducts / totalCategories).toFixed(1))
          };
        }

        // ============================================
        // EXPORT ALL PRODUCT TYPES AND DATA
        // ============================================
        // ============================================
        // EXPORT ALL PRODUCT TYPES AND DATA
        // ============================================

        export { switches } from "./switches";
        export { sceneControllers } from "./sceneControllers";
        export { smartLighting } from "./smartLighting";
        export { climateControl } from "./climateControl";
        export { powerModules } from "./powerModules";
        export { accessControl } from "./accessControl";
        export { smartSecurity } from "./smartSecurity";
        export { gateMotors } from "./gateMotors";
        export { digitalLocks } from "./digitalLocks";
        export { videoDoorPhones } from "./videoDoorPhones";
        export { cctv } from "./cctv";

        // Export types
        export type { SwitchProduct } from "./switches";
        export type { SceneControllerProduct } from "./sceneControllers";
        export type { SmartLightingProduct } from "./smartLighting";
        export type { ClimateControlProduct } from "./climateControl";
        export type { PowerModuleProduct } from "./powerModules";
        export type { AccessControlProduct } from "./accessControl";
        export type { SmartSecurityProduct } from "./smartSecurity";
        export type { GateMotorProduct } from "./gateMotors";
        export type { DigitalLockProduct } from "./digitalLocks";
        export type { VideoDoorPhoneProduct } from "./videoDoorPhones";
        export type { CCTVProduct } from "./cctv";