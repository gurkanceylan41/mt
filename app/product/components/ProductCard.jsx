"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { useThemeContext } from "@/app/contexts/ThemeContext";

export default function ProductCard({ product, onViewDetails }) {
  const { darkMode, theme } = useThemeContext();

  return (
    <div
      className={`group rounded-lg overflow-hidden transition-all duration-300 card-hover ${
        darkMode
          ? "bg-[#161616] border border-[#2a2825] hover:border-[#c4a265]"
          : "bg-white border border-[#e8e5df] hover:border-[#9a7740]"
      }`}
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-fit group-hover:scale-105 transition-transform duration-500"
        />
        {product.tag && (
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 text-xs font-semibold rounded-[4px] ${
              darkMode ? "bg-[#c4a265] text-[#0a0a0a]" : "bg-[#9a7740] text-white"
            }`}>
              {product.tag}
            </span>
          </div>
        )}
      </div>

      <div className="p-8">
        <h3 className={`font-display text-2xl font-semibold mb-3 ${theme.text}`}>
          {product.title}
        </h3>
        <p className={`mb-6 leading-relaxed ${theme.textMuted}`}>
          {product.shortDesc}
        </p>

        <div className="space-y-2 mb-6">
          {product.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className={`flex items-center gap-2 text-sm ${theme.textMuted}`}>
              <CheckCircle size={16} className={darkMode ? "text-[#c4a265]" : "text-[#9a7740]"} />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => onViewDetails(product)}
            className={`flex-1 py-3 rounded-[6px] font-semibold transition-all duration-300 ${
              darkMode ? "bg-white text-[#111111] hover:bg-[#f0ede8]" : "bg-[#111111] text-white hover:bg-[#333333]"
            }`}
          >
            Detayları Gör
          </button>
          <Link
            href="/#iletisim"
            className={`px-6 py-3 rounded-[6px] font-semibold border ${
              darkMode ? "border-[#2a2825] text-[#f0ede8] hover:border-[#c4a265]" : "border-[#e8e5df] text-[#111111] hover:border-[#9a7740]"
            }`}
          >
            Teklif Al
          </Link>
        </div>
      </div>
    </div>
  );
}
