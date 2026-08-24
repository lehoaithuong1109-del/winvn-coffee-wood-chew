import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SEO from '../components/layout/SEO';
import { products, productCategories } from '../data/mockData';
import ProductCard from '../components/products/ProductCard';
import ProductModal from '../components/products/ProductModal';
import ProductsHero from '../components/products/ProductsHero';
import ProductLinesShowcase from '../components/products/ProductLinesShowcase';
import CraftProcessSection from '../components/products/CraftProcessSection';
import ProductsStorySection from '../components/products/ProductsStorySection';
import CatalogueSection from '../components/sections/CatalogueSection';
import { buildProductListSchema, buildBreadcrumbSchema } from '../data/schema';
import { cn } from '../lib/utils';

const categories = ['All', ...productCategories];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="bg-beige min-h-screen">
      <SEO
        title="Products - Natural Coffee Wood Chews | WINVN"
        description="Explore our full range of natural coffee wood dog chews: Basic, Gorilla, and Cotton & Hemp Rope combinations across 7 shapes. Available for OEM and wholesale."
        path="/products"
        schema={[
          buildProductListSchema(products),
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Products', path: '/products' }
          ])
        ]}
      />

      <ProductsHero />
      <ProductLinesShowcase />
      <CraftProcessSection />
      <ProductsStorySection />
      <CatalogueSection />

      <div id="catalog" className="section-container scroll-mt-24">
        <div className="space-y-4 max-w-xl mb-10">
          <span className="text-coffee font-bold tracking-[0.2em] uppercase text-xs">Browse All SKUs</span>
          <h2 className="text-3xl md:text-4xl font-header font-bold text-dark leading-tight">
            The Full Product Catalog
          </h2>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-bold transition-all duration-300",
                activeCategory === cat
                  ? "bg-accent-orange text-white shadow-lg"
                  : "bg-white text-dark/80 hover:bg-beige"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
