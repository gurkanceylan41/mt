"use client";

import Link from "next/link";
import { X, CheckCircle } from "lucide-react";
import { useThemeContext } from "@/app/contexts/ThemeContext";

export default function ProductModal({ product, onClose }) {
  const { darkMode, theme } = useThemeContext();

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={`relative max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-3xl ${
          darkMode ? "bg-zinc-900" : "bg-white"
        }`}
      >
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 z-10 p-2 rounded-full ${
            darkMode ? "bg-zinc-800 text-white" : "bg-zinc-100"
          }`}
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 max-h-[90vh]">
          <div className="h-64 lg:h-[90vh] bg-gradient-to-br from-zinc-100 to-zinc-200 overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8 overflow-y-auto max-h-[60vh] lg:max-h-[90vh]">
            {product.tag && (
              <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full mb-4">
                {product.tag}
              </span>
            )}

            <h2 className={`text-3xl font-bold mb-4 ${theme.text}`}>
              {product.title}
            </h2>

            <p className={`mb-6 leading-relaxed ${theme.textMuted}`}>
              {product.description}
            </p>

            <div className="mb-6">
              <h4 className={`font-bold mb-3 ${theme.text}`}>
                Teknik Özellikler
              </h4>
              <div
                className={`grid grid-cols-2 gap-4 p-4 rounded-xl ${
                  darkMode ? "bg-zinc-800" : "bg-zinc-50"
                }`}
              >
                <div>
                  <span className={`text-sm ${theme.textMuted}`}>Genişlik</span>
                  <p className={`font-semibold ${theme.text}`}>
                    {product.specs.width}
                  </p>
                </div>
                <div>
                  <span className={`text-sm ${theme.textMuted}`}>Uzunluk</span>
                  <p className={`font-semibold ${theme.text}`}>
                    {product.specs.length}
                  </p>
                </div>
                <div>
                  <span className={`text-sm ${theme.textMuted}`}>Kalınlık</span>
                  <p className={`font-semibold ${theme.text}`}>
                    {product.specs.thickness}
                  </p>
                </div>
                <div>
                  <span className={`text-sm ${theme.textMuted}`}>Renk</span>
                  <p className={`font-semibold ${theme.text}`}>
                    {product.specs.color}
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h4 className={`font-bold mb-3 ${theme.text}`}>Özellikler</h4>
              <div className="space-y-2">
                {product.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-2 ${theme.textMuted}`}
                  >
                    <CheckCircle
                      size={18}
                      className="text-blue-500 flex-shrink-0"
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/#iletisim"
              className="block w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold text-center hover:shadow-lg transition-all"
            >
              Bu Ürün İçin Teklif Al
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
