"use client";

import { useState } from "react";
import { useThemeContext } from "../contexts/ThemeContext";
import { Navbar, Footer } from "../components";
import {
  ProductHero,
  CategoryFilter,
  ProductCard,
  ProductModal,
  ProductFeatures,
  ProductCTA,
} from "./components";
import { products } from "./data";

export default function ProductsPage() {
  const { theme } = useThemeContext();
  const [activeCategory, setActiveCategory] = useState("tumu");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts =
    activeCategory === "tumu"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className={`min-h-screen ${theme.bg}`}>
      <Navbar scrolled={true} />

      <ProductHero />

      <CategoryFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={setSelectedProduct}
              />
            ))}
          </div>
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <ProductFeatures />

      <ProductCTA />

      <Footer />
    </div>
  );
}
