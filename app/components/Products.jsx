"use client";

import { ArrowRight, Package, Building2 } from "lucide-react";
import Link from "next/link";
import { useThemeContext } from "../contexts/ThemeContext";

const categories = [
  {
    id: "oyuncaklar",
    title: "Oyuncaklar",
    subtitle: "Çocuklar için Güvenli & Eğlenceli",
    description:
      "CE sertifikalı, güvenlik standartlarına uygun ithal oyuncaklar. Eğitici oyuncaklardan peluşlara geniş ürün yelpazesi.",
    image:
      "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=800&h=600&fit=crop",
    icon: "🧸",
    color: "from-pink-500 to-rose-500",
    stats: { products: 150, brands: 25 },
    featured: true,
  },
  {
    id: "cocuk-guvenlik",
    title: "Çocuk Koruma Malzemeleri",
    subtitle: "Güvenlik Her Şeyden Önce",
    description:
      "Bebek güvenlik kilitleri, köşe koruyucular, parmak koruyucular ve priz koruma ürünleri.",
    image: "/products/koruma/3.jpg",
    icon: "🛡️",
    color: "from-emerald-500 to-teal-500",
    stats: { products: 102, brands: 2 },
    featured: true,
  },
  {
    id: "strec-film",
    title: "Streç Filmler",
    subtitle: "Endüstriyel & Gıda Ambalaj",
    description:
      "Makine tipi, el tipi ve gıda sertifikalı streç filmler. Yüksek kalite ve ekonomik fiyatlar.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    icon: "📦",
    color: "from-blue-500 to-indigo-500",
    stats: { products: 8, brands: 1 },
    featured: true,
  },
  {
    id: "ambalaj",
    title: "Ambalaj Malzemeleri",
    subtitle: "Profesyonel Paketleme Çözümleri",
    description:
      "Karton kutular, balonlu naylon, kraft kağıt ve paketleme malzemeleri.",
    image:
      "https://images.unsplash.com/photo-1607166452427-7e4477079cb9?w=800&h=600&fit=crop",
    icon: "🎁",
    color: "from-amber-500 to-orange-500",
    stats: { products: 120, brands: 20 },
    featured: false,
  },
  {
    id: "ev-mutfak",
    title: "Ev & Mutfak Ürünleri",
    subtitle: "Pratik Yaşam Çözümleri",
    description:
      "Mutfak organizatörleri, saklama kapları ve ev düzenleme ürünleri.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
    icon: "🏠",
    color: "from-cyan-500 to-blue-500",
    stats: { products: 200, brands: 30 },
    featured: false,
  },
  {
    id: "tekstil",
    title: "Tekstil Ürünleri",
    subtitle: "Kaliteli Kumaş & Aksesuarlar",
    description:
      "İthal kumaşlar, ev tekstili, havlu setleri ve tekstil aksesuarları.",
    image:
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=600&fit=crop",
    icon: "🧵",
    color: "from-violet-500 to-purple-500",
    stats: { products: 180, brands: 35 },
    featured: false,
  },
];

export default function Products() {
  const { darkMode, theme } = useThemeContext();

  return (
    <section id="urunler" className={`py-32 ${theme.bg} relative`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={`badge mb-4 ${darkMode ? "badge-dark" : "badge-light"}`}
          >
            ÜRÜN KATALOĞU
          </span>
          <h2 className={`section-title ${theme.text}`}>
            Ürün
            <span className={theme.accent}> Kategorilerimiz</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme.textMuted}`}>
            8 farklı kategoride binlerce ürün ile toptan ve ihracat
            ihtiyaçlarınızı karşılıyoruz
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <Link href={`/catalog/${category.id}`} key={category.id}>
              <div
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] ${
                  darkMode
                    ? "bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10"
                    : "bg-white border border-gray-200"
                } hover:shadow-2xl h-full`}
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
                      darkMode
                        ? "from-gray-900 via-gray-900/50"
                        : "from-black/60 via-black/20"
                    } to-transparent`}
                  />
                  {/* Icon Badge */}
                  <div
                    className={`absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center text-xl bg-gradient-to-br ${category.color} shadow-lg`}
                  >
                    {category.icon}
                  </div>
                  {/* Featured Badge */}
                  {category.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-semibold">
                      Öne Çıkan
                    </div>
                  )}
                  {/* Title on Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {category.title}
                    </h3>
                    <p className="text-white/80 text-sm">{category.subtitle}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p
                    className={`text-sm mb-4 line-clamp-2 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {category.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Package
                        className={`w-4 h-4 ${
                          darkMode ? "text-[#c4a265]" : "text-[#9a7740]"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        <strong>{category.stats.products}</strong> Ürün
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2
                        className={`w-4 h-4 ${
                          darkMode ? "text-[#c4a265]" : "text-[#9a7740]"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        <strong>{category.stats.brands}</strong> Marka
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div
                    className={`flex items-center justify-between pt-4 border-t ${
                      darkMode ? "border-white/10" : "border-gray-100"
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
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center p-12 rounded-2xl border ${
            darkMode
              ? "bg-[#111111] border-[#2a2825]"
              : "bg-[#fafaf8] border-[#e8e5df]"
          }`}
        >
          <h3
            className={`font-display text-2xl sm:text-3xl font-semibold mb-4 ${theme.text}`}
          >
            Tüm Ürünlerimizi Keşfedin
          </h3>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${theme.textMuted}`}>
            8 kategoride 1000+ ürün ile toptan ve ihracat ihtiyaçlarınız için
            tam katalog
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/catalog"
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 group ${
                darkMode
                  ? "bg-white text-[#111111] hover:bg-[#f0ede8]"
                  : "bg-[#111111] text-white hover:bg-[#333333]"
              }`}
            >
              <span>Tüm Kataloğu Görüntüle</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/#iletisim"
              className={`btn-outline ${
                darkMode ? "btn-outline-dark" : "btn-outline-light"
              }`}
            >
              Fiyat Teklifi Al
            </Link>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { num: "1000+", label: "Ürün Çeşidi" },
            { num: "50+", label: "İhracat Ülkesi" },
            { num: "8", label: "Kategori" },
            { num: "15+", label: "Yıl Deneyim" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className={`font-display text-4xl font-semibold mb-2 ${theme.accent}`}
              >
                {stat.num}
              </div>
              <div className={theme.textMuted}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
