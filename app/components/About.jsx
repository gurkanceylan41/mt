"use client";

import { ArrowRight, CheckCircle } from "lucide-react";

export default function About({ darkMode, theme }) {
  const aboutFeatures = [
    "ISO 9001 Kalite Yönetim Sistemi sertifikası",
    "Türkiye genelinde 24 saat içinde teslimat",
    "7/24 teknik destek ve müşteri hizmetleri",
    "Çevre dostu ve geri dönüştürülebilir ürünler",
  ];

  return (
    <section id="hakkimizda" className={`py-24 ${theme.bgAlt} relative`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="/images/left1.jpg"
                    alt="Üretim"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="/images/left2.jpg"
                    alt="Kalite"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="/images/left3.jpg"
                    alt="Depo"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="/images/left4.jpg"
                    alt="Teslimat"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div
              className={`absolute -bottom-8 left-1/2 -translate-x-1/2 p-6 rounded-2xl shadow-2xl glass-card ${
                darkMode
                  ? "bg-zinc-900/90 border border-zinc-800"
                  : "bg-white/95"
              }`}
            >
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">500+</div>
                  <div className={`text-sm ${theme.textMuted}`}>Müşteri</div>
                </div>
                <div className={`w-px h-12 ${theme.border}`} />
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">50K+</div>
                  <div className={`text-sm ${theme.textMuted}`}>Teslimat</div>
                </div>
                <div className={`w-px h-12 ${theme.border}`} />
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">%99</div>
                  <div className={`text-sm ${theme.textMuted}`}>Memnuniyet</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span
              className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 ${
                darkMode
                  ? "bg-blue-500/10 text-blue-400"
                  : "bg-blue-50 text-blue-600"
              }`}
            >
              HAKKIMIZDA
            </span>

            <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${theme.text}`}>
              15 Yıllık Güven ve
              <span className="text-gradient"> Kalite</span>
            </h2>

            <p className={`text-lg leading-relaxed mb-8 ${theme.textMuted}`}>
              Merkez Tedarik olarak 2009 yılından bu yana Türkiye&apos;nin dört
              bir yanına premium kaliteli ambalaj ürünleri sunuyoruz. Müşteri
              memnuniyetini ön planda tutan yaklaşımımız ve sürekli gelişen ürün
              yelpazemizle sektörün lider isimlerinden biri olduk.
            </p>

            <div className="space-y-4 mb-10">
              {aboutFeatures.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <span className={theme.text}>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#iletisim"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold btn-primary"
            >
              <span>Bizimle İletişime Geçin</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
