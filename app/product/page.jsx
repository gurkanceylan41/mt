"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Package,
  Truck,
  Shield,
  Phone,
  Mail,
  MapPin,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { Navbar } from "../components"; // Navbar'ı import et

// Ürün Verileri
const products = [
  {
    id: 1,
    title: "Makine Tipi Streç Film",
    slug: "makine-tipi-strec-film",
    category: "endustriyel",
    image: "/products/otomatik.jpg",
    shortDesc: "Otomatik makinelerle yapılan ambalajlama işleminde kullanılır.",
    description:
      "Ürünleri sıcak, soğuk, yağış, toz ve kir gibi dış etkenlerden korur. Dış yüzeyi parlak ve kaygan olan ürün, toz ve kir tutmaz. Paletlerin birbirine yapışmasını önler. Saydam, hafif ve ekonomiktir, her türlü hava koşullarına dayanıklıdır.",
    features: [
      "Otomatik makinelerle yapılan ambalajlama işleminde kullanılır",
      "Eni 50 cm'dir",
      "Rulo sarım uzunluğu min 750 metre, max 1500 metredir",
      "9 ile 50 micron arasında istenilen kalınlıkta üretilebilir",
      "İsteğe bağlı olarak renkli üretim yapılabilir",
    ],
    specs: {
      width: "50 cm",
      length: "750 - 1500 metre",
      thickness: "9 - 50 micron",
      color: "Şeffaf / İsteğe bağlı renkli",
    },
    tag: "En Çok Satan",
  },
  {
    id: 2,
    title: "El Tipi (Manuel) Streç Film",
    slug: "el-tipi-strec-film",
    category: "endustriyel",
    image: "/products/manuel.jpg",
    shortDesc: "Makine gerektirmeden sarma işlemlerinde kullanılır.",
    description:
      "El tipi streç film ruloları makine gerektirmeden sarma işlemlerinde kullanılmaktadır. Ürün makine rulolarından daha hafif ve kısadır ve kullanıcı için kullanım kolaylığı sağlar. Paletlerdeki kolilerin ve yüklerin dağılmasını engellemek için tasarlanmıştır.",
    features: [
      "Makine gerektirmeden kullanılır",
      "Hafif ve kolay taşınabilir",
      "Kullanıcı dostu ergonomik tasarım",
      "Nemden ve tozdan koruma sağlar",
      "İstenilen renk ve kalınlıkta üretilebilir",
    ],
    specs: {
      width: "Çeşitli genişlikler",
      length: "Talebe göre",
      thickness: "İsteğe bağlı",
      color: "Şeffaf / Renkli",
    },
    tag: "Popüler",
  },
  {
    id: 3,
    title: "Gıda Streç Film",
    slug: "gida-strec-film",
    category: "gida",
    image: "/products/gida-strec.jpg",
    shortDesc: "Gıda malzemelerinin paketlendiği her yerde kullanılır.",
    description:
      "Ayba Ambalaj Gıda Streç Film'i, Evler, Şarküteriler, Pastaneler, Restoranlar başta olmak üzere gıda malzemelerin paketlendiği her yerde kullanılır. Yüksek oksijen ve nemi tutarak gıda malzemelerin ömrünü önemli ölçüde uzatır.",
    features: [
      "Gıda güvenliği sertifikalı",
      "Yüksek oksijen ve nem bariyeri",
      "Buzdolabı ve açık alan kullanımı",
      "Sıcak ve soğuk gıdalarda koruma",
      "Geri dönüştürülebilir, çevre dostu",
    ],
    specs: {
      width: "Müşteri talebi doğrultusunda",
      length: "Müşteri talebi doğrultusunda",
      thickness: "8 - 12 micron",
      color: "Şeffaf",
    },
    tag: "Sertifikalı",
  },
];

const categories = [
  { key: "tumu", label: "Tüm Ürünler" },
  { key: "endustriyel", label: "Endüstriyel" },
  { key: "gida", label: "Gıda" },
];

export default function ProductsPage() {
  const { darkMode, toggleDarkMode, theme, mounted } = useTheme();
  const [activeCategory, setActiveCategory] = useState("tumu");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts =
    activeCategory === "tumu"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className={`min-h-screen ${theme.bg}`}>
      {/* Navbar Component Kullanımı */}
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        theme={theme}
        scrolled={true}
        mounted={mounted}
      />

      {/* Hero Section */}
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

      {/* Category Filter */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-center gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                  activeCategory === cat.key
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                    : darkMode
                    ? "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
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
                      onClick={() => setSelectedProduct(product)}
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
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          />
          <div
            className={`relative max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-3xl ${
              darkMode ? "bg-zinc-900" : "bg-white"
            }`}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className={`absolute top-4 right-4 z-10 p-2 rounded-full ${
                darkMode ? "bg-zinc-800 text-white" : "bg-zinc-100"
              }`}
            >
              <X size={24} />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 max-h-[90vh]">
              <div className="h-64 lg:h-[90vh] bg-gradient-to-br from-zinc-100 to-zinc-200 overflow-hidden">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 overflow-y-auto max-h-[60vh] lg:max-h-[90vh]">
                {selectedProduct.tag && (
                  <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full mb-4">
                    {selectedProduct.tag}
                  </span>
                )}

                <h2 className={`text-3xl font-bold mb-4 ${theme.text}`}>
                  {selectedProduct.title}
                </h2>

                <p className={`mb-6 leading-relaxed ${theme.textMuted}`}>
                  {selectedProduct.description}
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
                      <span className={`text-sm ${theme.textMuted}`}>
                        Genişlik
                      </span>
                      <p className={`font-semibold ${theme.text}`}>
                        {selectedProduct.specs.width}
                      </p>
                    </div>
                    <div>
                      <span className={`text-sm ${theme.textMuted}`}>
                        Uzunluk
                      </span>
                      <p className={`font-semibold ${theme.text}`}>
                        {selectedProduct.specs.length}
                      </p>
                    </div>
                    <div>
                      <span className={`text-sm ${theme.textMuted}`}>
                        Kalınlık
                      </span>
                      <p className={`font-semibold ${theme.text}`}>
                        {selectedProduct.specs.thickness}
                      </p>
                    </div>
                    <div>
                      <span className={`text-sm ${theme.textMuted}`}>Renk</span>
                      <p className={`font-semibold ${theme.text}`}>
                        {selectedProduct.specs.color}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className={`font-bold mb-3 ${theme.text}`}>Özellikler</h4>
                  <div className="space-y-2">
                    {selectedProduct.features.map((feature, idx) => (
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
      )}

      {/* Features Section */}
      <section className={`py-16 ${theme.bgAlt}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className={`text-center p-8 rounded-2xl ${
                darkMode ? "bg-zinc-800/50" : "bg-zinc-50"
              }`}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <Truck className="text-white" size={32} />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${theme.text}`}>
                Hızlı Teslimat
              </h3>
              <p className={theme.textMuted}>
                Türkiye genelinde hızlı ve güvenli teslimat
              </p>
            </div>

            <div
              className={`text-center p-8 rounded-2xl ${
                darkMode ? "bg-zinc-800/50" : "bg-zinc-50"
              }`}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${theme.text}`}>
                Kalite Garantisi
              </h3>
              <p className={theme.textMuted}>
                Sertifikalı ve test edilmiş ürünler
              </p>
            </div>

            <div
              className={`text-center p-8 rounded-2xl ${
                darkMode ? "bg-zinc-800/50" : "bg-zinc-50"
              }`}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center">
                <Package className="text-white" size={32} />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${theme.text}`}>
                Özel Üretim
              </h3>
              <p className={theme.textMuted}>
                İhtiyaçlarınıza özel boyut ve kalınlık
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-violet-600 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Özel Fiyat Teklifi Alın
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            İhtiyaçlarınıza özel çözümler ve rekabetçi fiyatlar için bizimle
            iletişime geçin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#iletisim"
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:shadow-xl transition-all"
            >
              Teklif Al
            </Link>
            <a
              href="tel:+903382022222"
              className="px-8 py-4 bg-white/10 text-white rounded-full font-bold border border-white/20 hover:bg-white/20 transition-all flex items-center gap-2"
            >
              <Phone size={18} />
              +90 338 202 22 22
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={darkMode ? "bg-[#08080c]" : "bg-zinc-900"}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold">
                  AA
                </div>
                <span className="text-white font-bold">AYBA AMBALAJ</span>
              </div>
              <p className="text-zinc-400 text-sm">
                Esnek ve Güçlü Koruma
                <br />
                Endüstri ve Gıda için yenilikçi çözümler
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Ürünler</h4>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>Makine Tipi Streç Film</li>
                <li>El Tipi Streç Film</li>
                <li>Gıda Streç Film</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">İletişim</h4>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li className="flex items-center gap-2">
                  <Phone size={14} className="text-blue-500" />
                  +90 338 202 22 22
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={14} className="text-blue-500" />
                  info@aybaambalaj.com
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Adres</h4>
              <p className="text-zinc-400 text-sm flex items-start gap-2">
                <MapPin size={14} className="text-blue-500 mt-1" />
                Organize Sanayi Bölgesi
                <br />
                14. Cadde No:34
                <br />
                KARAMAN / TÜRKİYE
              </p>
            </div>
          </div>

          <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-500 text-sm">
            © {new Date().getFullYear()} Ayba Ambalaj. Tüm hakları saklıdır.
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .text-gradient {
          background: linear-gradient(
            135deg,
            #3b82f6 0%,
            #8b5cf6 50%,
            #3b82f6 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  );
}
