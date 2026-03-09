"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Navbar, Footer } from "@/app/components";
import { CategoryHero, ProductGallery, CatalogCTA } from "../components";
import {
  getCategoryById,
  getProductsByCategory,
  toyProducts,
  safetyProducts,
  stretchFilmProducts,
  packagingProducts,
  homeProducts,
  textileProducts,
  stationeryProducts,
  electronicProducts,
} from "../data";
import { useThemeContext } from "@/app/contexts/ThemeContext";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

// Kategori ID'sine göre ürün listesini getir
const getProductsForCategory = (categoryId) => {
  switch (categoryId) {
    case "oyuncaklar":
      return toyProducts;
    case "cocuk-guvenlik":
      return safetyProducts;
    case "strec-film":
      return stretchFilmProducts;
    case "ambalaj":
      return packagingProducts;
    case "ev-mutfak":
      return homeProducts;
    case "tekstil":
      return textileProducts;
    case "kirtasiye":
      return stationeryProducts;
    case "elektronik-aksesuar":
      return electronicProducts;
    default:
      return [];
  }
};

export default function CategoryPage() {
  const params = useParams();
  const { slug } = params;
  const { theme } = useThemeContext();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const category = getCategoryById(slug);
  const products = getProductsForCategory(slug);

  // Kategori bulunamazsa
  if (!category) {
    return (
      <div className={`min-h-screen transition-colors duration-500 ${theme.bg} overflow-x-hidden`}>
        <Navbar scrolled={scrolled} />
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
          <AlertCircle className="w-16 h-16 text-amber-500 mb-4" />
          <h1 className={`text-2xl font-bold mb-2 ${theme.text}`}>
            Kategori Bulunamadı
          </h1>
          <p className={`mb-6 ${theme.textMuted}`}>
            Aradığınız kategori mevcut değil veya kaldırılmış olabilir.
          </p>
          <Link
            href="/catalog"
            className="px-6 py-3 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors"
          >
            Tüm Kategorilere Dön
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 ${theme.bg} overflow-x-hidden`}>
      <Navbar scrolled={scrolled} />
      <CategoryHero category={category} />
      <ProductGallery products={products} categoryTitle={category.title} />
      <CatalogCTA />
      <Footer />
    </div>
  );
}
