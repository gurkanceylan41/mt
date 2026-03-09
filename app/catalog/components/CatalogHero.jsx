"use client";

import { useThemeContext } from "@/app/contexts/ThemeContext";
import { Package, Globe, TrendingUp, Shield } from "lucide-react";

const stats = [
  { icon: Package, value: "1000+", label: "Ürün Çeşidi" },
  { icon: Globe, value: "50+", label: "İhracat Ülkesi" },
  { icon: TrendingUp, value: "500+", label: "Mutlu Müşteri" },
  { icon: Shield, value: "100%", label: "Güvenli Ticaret" },
];

export default function CatalogHero() {
  const { darkMode, theme } = useThemeContext();

  return (
    <section className={`relative min-h-[70vh] flex items-center justify-center overflow-hidden ${theme.bg}`}>
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div
          className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl ${
            darkMode ? "bg-[#c4a265]/10" : "bg-[#9a7740]/10"
          }`}
        />
        <div
          className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl ${
            darkMode ? "bg-[#c4a265]/5" : "bg-[#9a7740]/5"
          }`}
        />
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(${darkMode ? "#fff" : "#000"} 1px, transparent 1px),
                            linear-gradient(90deg, ${darkMode ? "#fff" : "#000"} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-[4px] mb-8 ${
            darkMode
              ? "bg-[#c4a265]/10 border border-[#c4a265]/20"
              : "bg-[#9a7740]/10 border border-[#9a7740]/20"
          }`}
        >
          <Globe className={`w-4 h-4 ${darkMode ? "text-[#c4a265]" : "text-[#9a7740]"}`} />
          <span className={`text-sm font-semibold ${darkMode ? "text-[#c4a265]" : "text-[#9a7740]"}`}>
            Global İhracat & Toptan Tedarik
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight mb-6 ${theme.text}`}
        >
          Ürün{" "}
          <span className={theme.accent}>Kataloğu</span>
        </h1>

        <p
          className={`text-lg sm:text-xl max-w-3xl mx-auto mb-12 ${theme.textMuted}`}
        >
          Oyuncaklardan ambalaj malzemelerine, ev ürünlerinden elektronik aksesuarlara kadar
          8 kategoride 1000+ ürün ile toptan tedarik çözümleri sunuyoruz.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-[#161616] border border-[#2a2825] hover:border-[#c4a265]"
                  : "bg-white border border-[#e8e5df] hover:border-[#9a7740]"
              }`}
            >
              <stat.icon
                className={`w-7 h-7 mx-auto mb-3 transition-colors ${
                  darkMode ? "text-[#c4a265]" : "text-[#9a7740]"
                }`}
              />
              <div
                className={`font-display text-2xl md:text-3xl font-semibold mb-1 ${theme.text}`}
              >
                {stat.value}
              </div>
              <div className={`text-sm ${theme.textMuted}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
