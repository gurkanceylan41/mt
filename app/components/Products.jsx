"use client";

import { ArrowRight, Package, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { useThemeContext } from "../contexts/ThemeContext";

export default function Products() {
  const { darkMode, theme } = useThemeContext();
  const productCategories = [
    {
      id: 1,
      icon: Package,
      title: "Makine Tipi Streç Film",
      description:
        "Yüksek hacimli sarma işlemleri için otomatik makine uyumlu çözümler",
      gradient: "from-blue-500 to-blue-600",
      tag: "En Çok Satan",
    },
    {
      id: 2,
      icon: Zap,
      title: "El Tipi Streç Film",
      description: "Manuel paketleme için ergonomik ve kullanıcı dostu tasarım",
      gradient: "from-violet-500 to-violet-600",
      tag: "Popüler",
    },
    {
      id: 3,
      icon: Shield,
      title: "Gıda Streç Film",
      description: "Gıda güvenliği sertifikalı, hijyenik paketleme çözümü",
      gradient: "from-emerald-500 to-emerald-600",
      tag: "Sertifikalı",
    },
  ];

  return (
    <section id="urunler" className={`py-24 ${theme.bg} relative`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
              darkMode
                ? "bg-blue-500/10 text-blue-400"
                : "bg-blue-50 text-blue-600"
            }`}
          >
            ÜRÜN KATALOĞU
          </span>
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${theme.text}`}>
            Premium Ambalaj
            <span className="text-gradient"> Çözümleri</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme.textMuted}`}>
            Endüstriyel ve gıda sektörüne özel, yüksek kaliteli ürünlerimizi
            keşfedin
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {productCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                  darkMode
                    ? "bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700"
                    : "bg-white border border-zinc-100 shadow-lg hover:shadow-2xl"
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Tag Badge */}
                {category.tag && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1.5 bg-blue-500 text-white text-xs font-bold rounded-full">
                      {category.tag}
                    </span>
                  </div>
                )}

                {/* Icon Section */}
                <div className="p-8">
                  <div
                    className={`w-16 h-16 mb-6 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500`}
                  >
                    <Icon className="text-white" size={32} />
                  </div>

                  <h3 className={`text-2xl font-bold mb-3 ${theme.text}`}>
                    {category.title}
                  </h3>
                  <p className={`mb-6 leading-relaxed ${theme.textMuted}`}>
                    {category.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div
                    className={`h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${category.gradient} rounded-full`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center p-12 rounded-3xl ${
            darkMode
              ? "bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 border border-zinc-800"
              : "bg-gradient-to-br from-zinc-50 to-white border border-zinc-100"
          }`}
        >
          <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${theme.text}`}>
            Tüm Ürünlerimizi Keşfedin
          </h3>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${theme.textMuted}`}>
            Detaylı teknik özellikler, fiyatlar ve stok bilgisi için ürün
            kataloğumuzu inceleyin
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/product"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all group"
            >
              <span>Tüm Ürünleri Görüntüle</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/#iletisim"
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 transition-all ${
                darkMode
                  ? "border-zinc-700 text-white hover:bg-zinc-800"
                  : "border-zinc-200 text-zinc-900 hover:bg-zinc-50"
              }`}
            >
              Fiyat Teklifi Al
            </Link>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className={`text-4xl font-bold mb-2 text-gradient`}>500+</div>
            <div className={theme.textMuted}>Mutlu Müşteri</div>
          </div>
          <div className="text-center">
            <div className={`text-4xl font-bold mb-2 text-gradient`}>10+</div>
            <div className={theme.textMuted}>Yıllık Deneyim</div>
          </div>
          <div className="text-center">
            <div className={`text-4xl font-bold mb-2 text-gradient`}>24/7</div>
            <div className={theme.textMuted}>Müşteri Desteği</div>
          </div>
          <div className="text-center">
            <div className={`text-4xl font-bold mb-2 text-gradient`}>%100</div>
            <div className={theme.textMuted}>Kalite Garantisi</div>
          </div>
        </div>
      </div>
    </section>
  );
}
