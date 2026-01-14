"use client";

import { useThemeContext } from "@/app/contexts/ThemeContext";

export default function ProductHero() {
  const { darkMode, theme } = useThemeContext();

  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-violet-600/10" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
              darkMode
                ? "bg-blue-500/10 text-blue-400"
                : "bg-blue-50 text-blue-600"
            }`}
          >
            ÜRÜN KATALOĞU
          </span>
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${theme.text}`}
          >
            Premium Streç Film
            <span className="text-gradient block mt-2">Çözümleri</span>
          </h1>
          <p
            className={`text-lg sm:text-xl max-w-2xl mx-auto ${theme.textMuted}`}
          >
            Endüstri ve gıda sektörü için yenilikçi, esnek ve güçlü koruma
            sağlayan streç film ürünlerimizi keşfedin.
          </p>
        </div>
      </div>
    </section>
  );
}
