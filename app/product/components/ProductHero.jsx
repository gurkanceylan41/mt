"use client";

import { useThemeContext } from "@/app/contexts/ThemeContext";

export default function ProductHero() {
  const { darkMode, theme } = useThemeContext();

  return (
    <section className={`pt-32 pb-16 relative ${theme.bg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <span className={`badge mb-4 ${darkMode ? "badge-dark" : "badge-light"}`}>
            ÜRÜN KATALOĞU
          </span>
          <h1 className={`font-display text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 ${theme.text}`}>
            Premium Streç Film
            <span className={`block mt-2 ${theme.accent}`}>Çözümleri</span>
          </h1>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${theme.textMuted}`}>
            Endüstri ve gıda sektörü için yenilikçi, esnek ve güçlü koruma
            sağlayan streç film ürünlerimizi keşfedin.
          </p>
        </div>
      </div>
    </section>
  );
}
