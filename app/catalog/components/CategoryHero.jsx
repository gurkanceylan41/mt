"use client";

import { useThemeContext } from "@/app/contexts/ThemeContext";
import Link from "next/link";
import { ArrowLeft, Package, Building2 } from "lucide-react";

export default function CategoryHero({ category }) {
  const { darkMode, theme } = useThemeContext();

  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover"
        />
        <div
          className={`absolute inset-0 ${
            darkMode
              ? "bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]/80"
              : "bg-gradient-to-r from-black/80 via-black/70 to-black/50"
          }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 w-full">
        {/* Back Link */}
        <Link
          href="/catalog"
          className={`inline-flex items-center gap-2 transition-colors mb-8 ${
            darkMode
              ? "text-[#c4a265] hover:text-[#d4b275]"
              : "text-white/80 hover:text-white"
          }`}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Tüm Kategoriler</span>
        </Link>

        <div className="max-w-2xl">
          {/* Icon & Badge */}
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`w-14 h-14 rounded-lg flex items-center justify-center text-2xl shadow-lg ${
                darkMode
                  ? "bg-[#161616] border border-[#2a2825]"
                  : "bg-white/20 backdrop-blur-sm"
              }`}
            >
              {category.icon}
            </div>
            {category.featured && (
              <span
                className={`px-4 py-2 rounded-[4px] text-sm font-semibold ${
                  darkMode
                    ? "bg-[#c4a265] text-[#0a0a0a]"
                    : "bg-[#9a7740] text-white"
                }`}
              >
                Öne Çıkan Kategori
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-white mb-4">
            {category.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-white/80 mb-6">{category.subtitle}</p>

          {/* Description */}
          <p className="text-white/60 mb-8 max-w-xl">{category.description}</p>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-4">
            <div
              className={`flex items-center gap-3 px-5 py-3 rounded-lg ${
                darkMode
                  ? "bg-[#161616]/80 border border-[#2a2825] backdrop-blur-sm"
                  : "bg-white/10 backdrop-blur-sm"
              }`}
            >
              <Package className={`w-5 h-5 ${darkMode ? "text-[#c4a265]" : "text-white"}`} />
              <div>
                <div className="text-2xl font-bold text-white">
                  {category.stats.products}+
                </div>
                <div className="text-sm text-white/60">Ürün</div>
              </div>
            </div>
            <div
              className={`flex items-center gap-3 px-5 py-3 rounded-lg ${
                darkMode
                  ? "bg-[#161616]/80 border border-[#2a2825] backdrop-blur-sm"
                  : "bg-white/10 backdrop-blur-sm"
              }`}
            >
              <Building2 className={`w-5 h-5 ${darkMode ? "text-[#c4a265]" : "text-white"}`} />
              <div>
                <div className="text-2xl font-bold text-white">
                  {category.stats.brands}+
                </div>
                <div className="text-sm text-white/60">Marka</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
