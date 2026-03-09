"use client";

import { useState } from "react";
import { useThemeContext } from "@/app/contexts/ThemeContext";
import CategoryCard from "./CategoryCard";
import { Search, SlidersHorizontal } from "lucide-react";

export default function CatalogGrid({ categories }) {
  const { darkMode, theme } = useThemeContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [showFeatured, setShowFeatured] = useState(false);

  const filteredCategories = categories.filter((cat) => {
    const matchesSearch =
      cat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFeatured = showFeatured ? cat.featured : true;
    return matchesSearch && matchesFeatured;
  });

  return (
    <section className={`py-20 ${theme.bgAlt}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span
            className={`badge mb-4 ${darkMode ? "badge-dark" : "badge-light"}`}
          >
            KATEGORİLER
          </span>
          <h2
            className={`font-display text-3xl sm:text-4xl font-semibold mb-4 ${theme.text}`}
          >
            Ürün <span className={theme.accent}>Kategorileri</span>
          </h2>
          <p className={`text-lg ${theme.textMuted}`}>
            İhtiyacınıza uygun kategoriyi seçin ve ürünleri keşfedin
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 max-w-2xl mx-auto">
          {/* Search */}
          <div className="relative flex-1">
            <Search
              className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.textMuted}`}
            />
            <input
              type="text"
              placeholder="Kategori ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-12 pr-4 py-3 rounded-lg outline-none transition-all ${
                darkMode
                  ? "bg-[#161616] border border-[#2a2825] text-[#f0ede8] placeholder-[#6b6560] focus:border-[#c4a265]"
                  : "bg-white border border-[#e8e5df] text-[#111111] placeholder-[#8a8580] focus:border-[#9a7740]"
              }`}
            />
          </div>

          {/* Featured Filter */}
          <button
            onClick={() => setShowFeatured(!showFeatured)}
            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              showFeatured
                ? darkMode
                  ? "bg-[#c4a265] text-[#0a0a0a]"
                  : "bg-[#9a7740] text-white"
                : darkMode
                ? "bg-[#161616] border border-[#2a2825] text-[#f0ede8] hover:border-[#c4a265]"
                : "bg-white border border-[#e8e5df] text-[#111111] hover:border-[#9a7740]"
            }`}
          >
            <SlidersHorizontal className="w-5 h-5" />
            <span>Öne Çıkanlar</span>
          </button>
        </div>

        {/* Categories Grid */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCategories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        ) : (
          <div
            className={`text-center py-16 rounded-lg ${
              darkMode ? "bg-[#161616] border border-[#2a2825]" : "bg-white border border-[#e8e5df]"
            }`}
          >
            <p className={`text-lg ${theme.textMuted}`}>
              Aramanızla eşleşen kategori bulunamadı.
            </p>
          </div>
        )}

        {/* Results Count */}
        <div className="mt-8 text-center">
          <p className={`text-sm ${theme.textMuted}`}>
            {filteredCategories.length} kategori gösteriliyor
          </p>
        </div>
      </div>
    </section>
  );
}
