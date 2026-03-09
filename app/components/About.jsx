"use client";

import { ArrowRight, CheckCircle } from "lucide-react";
import { useThemeContext } from "../contexts/ThemeContext";

export default function About() {
  const { darkMode, theme } = useThemeContext();
  const aboutFeatures = [
    "8 farklı kategoride 1000+ ürün çeşidi",
    "50+ ülkeye ihracat deneyimi",
    "7/24 teknik destek ve müşteri hizmetleri",
    "ISO 9001 kalite sertifikalı ürünler",
  ];

  return (
    <section id="hakkimizda" className={`py-32 ${theme.bgAlt} relative`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/products/koruma/3.jpg"
                    alt="Çocuk Koruma"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/images/left2.jpg"
                    alt="Ambalaj"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/products/koruma/10.jpg"
                    alt="Güvenlik Ürünleri"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
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
              className={`absolute -bottom-8 left-1/2 -translate-x-1/2 p-6 rounded-lg shadow-lg border ${
                darkMode
                  ? "bg-[#161616] border-[#2a2825]"
                  : "bg-white border-[#e8e5df]"
              }`}
            >
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div
                    className={`font-display text-3xl font-semibold ${theme.accent}`}
                  >
                    500+
                  </div>
                  <div className={`text-sm ${theme.textMuted}`}>Müşteri</div>
                </div>
                <div className={`w-px h-12 ${theme.border}`} />
                <div className="text-center">
                  <div
                    className={`font-display text-3xl font-semibold ${theme.accent}`}
                  >
                    50K+
                  </div>
                  <div className={`text-sm ${theme.textMuted}`}>Teslimat</div>
                </div>
                <div className={`w-px h-12 ${theme.border}`} />
                <div className="text-center">
                  <div
                    className={`font-display text-3xl font-semibold ${theme.accent}`}
                  >
                    %99
                  </div>
                  <div className={`text-sm ${theme.textMuted}`}>Memnuniyet</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span
              className={`badge mb-6 ${darkMode ? "badge-dark" : "badge-light"}`}
            >
              HAKKIMIZDA
            </span>

            <h2 className={`section-title ${theme.text}`}>
              15 Yıllık Güven ve
              <span className={theme.accent}> Kalite</span>
            </h2>

            <p className={`text-lg leading-relaxed mb-8 ${theme.textMuted}`}>
              Merkez Tedarik olarak 2009 yılından bu yana oyuncak, çocuk güvenlik
              ürünleri, ambalaj, ev &amp; mutfak, tekstil, kırtasiye ve elektronik
              aksesuarlar dahil 8 kategoride toptan satış ve ihracat hizmeti
              sunuyoruz. 50&apos;den fazla ülkeye ihracat yapan güvenilir tedarik
              partneriniz.
            </p>

            <div className="space-y-4 mb-10">
              {aboutFeatures.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className={`flex-shrink-0 mt-0.5 ${
                      darkMode ? "text-[#c4a265]" : "text-[#9a7740]"
                    }`}
                  />
                  <span className={theme.text}>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#iletisim"
              className={`inline-flex items-center gap-3 btn-primary ${
                darkMode ? "btn-primary-dark" : "btn-primary-light"
              }`}
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
