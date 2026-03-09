"use client";

import { useThemeContext } from "@/app/contexts/ThemeContext";
import Link from "next/link";
import { ArrowRight, Package, Building2 } from "lucide-react";

export default function CategoryCard({ category, index }) {
  const { darkMode, theme } = useThemeContext();

  return (
    <Link href={`/catalog/${category.id}`}>
      <div
        className={`group relative overflow-hidden rounded-lg transition-all duration-500 hover:scale-[1.02] ${
          darkMode
            ? "bg-[#161616] border border-[#2a2825] hover:border-[#c4a265]"
            : "bg-white border border-[#e8e5df] hover:border-[#9a7740]"
        } hover:shadow-xl`}
        style={{
          animationDelay: `${index * 100}ms`,
        }}
      >
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t ${
              darkMode ? "from-[#161616] via-[#161616]/50" : "from-black/60 via-black/20"
            } to-transparent`}
          />
          {/* Icon Badge */}
          <div
            className={`absolute top-4 left-4 w-12 h-12 rounded-lg flex items-center justify-center text-xl shadow-lg ${
              darkMode
                ? "bg-[#1a1a1a] border border-[#2a2825]"
                : "bg-white border border-[#e8e5df]"
            }`}
          >
            {category.icon}
          </div>
          {/* Featured Badge */}
          {category.featured && (
            <div
              className={`absolute top-4 right-4 px-3 py-1 rounded-[4px] text-xs font-semibold ${
                darkMode
                  ? "bg-[#c4a265] text-[#0a0a0a]"
                  : "bg-[#9a7740] text-white"
              }`}
            >
              Öne Çıkan
            </div>
          )}
          {/* Title on Image */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white mb-1">{category.title}</h3>
            <p className="text-white/80 text-sm">{category.subtitle}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <p
            className={`text-sm mb-4 line-clamp-2 ${theme.textMuted}`}
          >
            {category.description}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Package
                className={`w-4 h-4 ${darkMode ? "text-[#c4a265]" : "text-[#9a7740]"}`}
              />
              <span className={`text-sm ${theme.text}`}>
                <strong>{category.stats.products}</strong> Ürün
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Building2
                className={`w-4 h-4 ${darkMode ? "text-[#c4a265]" : "text-[#9a7740]"}`}
              />
              <span className={`text-sm ${theme.text}`}>
                <strong>{category.stats.brands}</strong> Marka
              </span>
            </div>
          </div>

          {/* CTA */}
          <div
            className={`flex items-center justify-between pt-4 border-t ${
              darkMode ? "border-[#2a2825]" : "border-[#e8e5df]"
            }`}
          >
            <span
              className={`text-sm font-medium ${
                darkMode ? "text-[#c4a265]" : "text-[#9a7740]"
              }`}
            >
              Ürünleri İncele
            </span>
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 ${
                darkMode
                  ? "bg-[#c4a265]/20 text-[#c4a265] group-hover:bg-[#c4a265]/30"
                  : "bg-[#9a7740]/10 text-[#9a7740] group-hover:bg-[#9a7740]/20"
              }`}
            >
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
