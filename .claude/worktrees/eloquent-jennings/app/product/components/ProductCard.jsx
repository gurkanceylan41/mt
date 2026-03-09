"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { useThemeContext } from "@/app/contexts/ThemeContext";

export default function ProductCard({ product, onViewDetails }) {
  const { darkMode, theme } = useThemeContext();

  return (
    <div
      className={`group rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
        darkMode
          ? "bg-zinc-900/50 border border-zinc-800"
          : "bg-white shadow-xl"
      }`}
    >
      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-fit group-hover:scale-110 transition-transform duration-700"
        />
        {product.tag && (
          <div className="absolute top-4 left-4">
            <span className="px-4 py-2 bg-blue-500 text-white text-sm font-bold rounded-full">
              {product.tag}
            </span>
          </div>
        )}
      </div>

      <div className="p-8">
        <h3 className={`text-2xl font-bold mb-3 ${theme.text}`}>
          {product.title}
        </h3>
        <p className={`mb-6 leading-relaxed ${theme.textMuted}`}>
          {product.shortDesc}
        </p>

        <div className="space-y-2 mb-6">
          {product.features.slice(0, 3).map((feature, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-2 text-sm ${theme.textMuted}`}
            >
              <CheckCircle size={16} className="text-blue-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => onViewDetails(product)}
            className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            Detayları Gör
          </button>
          <Link
            href="/#iletisim"
            className={`px-6 py-3 rounded-xl font-semibold border-2 ${
              darkMode
                ? "border-zinc-700 text-white"
                : "border-zinc-200 text-zinc-900"
            }`}
          >
            Teklif Al
          </Link>
        </div>
      </div>
    </div>
  );
}
