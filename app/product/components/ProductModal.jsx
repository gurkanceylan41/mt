"use client";

import Link from "next/link";
import { X, CheckCircle } from "lucide-react";
import { useThemeContext } from "@/app/contexts/ThemeContext";

export default function ProductModal({ product, onClose }) {
  const { darkMode, theme } = useThemeContext();

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className={`relative max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-lg ${
        darkMode ? "bg-[#161616]" : "bg-white"
      }`}>
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 z-10 p-2 rounded-[6px] ${
            darkMode ? "bg-[#2a2825] text-[#f0ede8]" : "bg-[#f5f5f0] text-[#111111]"
          }`}
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 max-h-[90vh]">
          <div className="h-64 lg:h-[90vh] overflow-hidden">
            <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
          </div>

          <div className="p-8 overflow-y-auto max-h-[60vh] lg:max-h-[90vh]">
            {product.tag && (
              <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-[4px] mb-4 ${
                darkMode ? "bg-[#c4a265] text-[#0a0a0a]" : "bg-[#9a7740] text-white"
              }`}>
                {product.tag}
              </span>
            )}

            <h2 className={`font-display text-3xl font-semibold mb-4 ${theme.text}`}>{product.title}</h2>
            <p className={`mb-6 leading-relaxed ${theme.textMuted}`}>{product.description}</p>

            <div className="mb-6">
              <h4 className={`font-semibold mb-3 ${theme.text}`}>Teknik Özellikler</h4>
              <div className={`grid grid-cols-2 gap-4 p-4 rounded-lg ${darkMode ? "bg-[#111111]" : "bg-[#fafaf8]"}`}>
                {[
                  { label: "Genişlik", value: product.specs.width },
                  { label: "Uzunluk", value: product.specs.length },
                  { label: "Kalınlık", value: product.specs.thickness },
                  { label: "Renk", value: product.specs.color },
                ].map((spec, i) => (
                  <div key={i}>
                    <span className={`text-sm ${theme.textMuted}`}>{spec.label}</span>
                    <p className={`font-semibold ${theme.text}`}>{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className={`font-semibold mb-3 ${theme.text}`}>Özellikler</h4>
              <div className="space-y-2">
                {product.features.map((feature, idx) => (
                  <div key={idx} className={`flex items-center gap-2 ${theme.textMuted}`}>
                    <CheckCircle size={18} className={`flex-shrink-0 ${darkMode ? "text-[#c4a265]" : "text-[#9a7740]"}`} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/#iletisim"
              className={`block w-full py-4 rounded-[6px] font-semibold text-center transition-all duration-300 ${
                darkMode ? "bg-white text-[#111111] hover:bg-[#f0ede8]" : "bg-[#111111] text-white hover:bg-[#333333]"
              }`}
            >
              Bu Ürün İçin Teklif Al
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
