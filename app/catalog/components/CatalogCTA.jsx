"use client";

import { useThemeContext } from "@/app/contexts/ThemeContext";
import Link from "next/link";
import { Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";

export default function CatalogCTA() {
  const { darkMode, theme } = useThemeContext();

  return (
    <section className={`py-20 ${theme.bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`relative overflow-hidden rounded-lg p-8 sm:p-12 lg:p-16 ${
            darkMode
              ? "bg-[#161616] border border-[#2a2825]"
              : "bg-[#fafaf8] border border-[#e8e5df]"
          }`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, ${darkMode ? "#c4a265" : "#9a7740"} 1px, transparent 0)`,
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          <div className="relative z-10 text-center">
            <span
              className={`badge mb-6 ${darkMode ? "badge-dark" : "badge-light"}`}
            >
              İLETİŞİM
            </span>

            <h2
              className={`font-display text-3xl sm:text-4xl font-semibold mb-4 ${theme.text}`}
            >
              Toptan Tedarik İçin{" "}
              <span className={theme.accent}>Teklif Alın</span>
            </h2>
            <p
              className={`text-lg max-w-2xl mx-auto mb-10 ${theme.textMuted}`}
            >
              İhtiyacınız olan ürünler için özel fiyat teklifi almak ister misiniz?
              Uzman ekibimiz size en uygun çözümü sunmak için hazır.
            </p>

            {/* Contact Options */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#iletisim"
                className={`inline-flex items-center gap-3 px-8 py-4 rounded-[6px] font-semibold transition-all duration-300 group ${
                  darkMode
                    ? "bg-white text-[#111111] hover:bg-[#f0ede8]"
                    : "bg-[#111111] text-white hover:bg-[#333333]"
                }`}
              >
                <MessageCircle className="w-5 h-5" />
                <span>İletişim Formu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+905551234567"
                className={`inline-flex items-center gap-3 px-8 py-4 rounded-[6px] font-semibold border transition-all ${
                  darkMode
                    ? "border-[#2a2825] text-[#f0ede8] hover:border-[#c4a265]"
                    : "border-[#e8e5df] text-[#111111] hover:border-[#9a7740]"
                }`}
              >
                <Phone className="w-5 h-5" />
                +90 555 123 45 67
              </a>
              <a
                href="mailto:info@merkeztedarik.com"
                className={`inline-flex items-center gap-3 px-8 py-4 rounded-[6px] font-semibold border transition-all ${
                  darkMode
                    ? "border-[#2a2825] text-[#f0ede8] hover:border-[#c4a265]"
                    : "border-[#e8e5df] text-[#111111] hover:border-[#9a7740]"
                }`}
              >
                <Mail className="w-5 h-5" />
                E-posta Gönder
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
