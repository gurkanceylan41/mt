"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { navLinks } from "../data";
import { useThemeContext } from "../contexts/ThemeContext";

export default function Footer() {
  const { darkMode } = useThemeContext();
  const productLinks = [
    "Oyuncaklar",
    "Çocuk Koruma",
    "Ambalaj & Streç",
    "Ev & Mutfak",
    "Tekstil Ürünleri",
    "Kırtasiye & Ofis",
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="/logo.jpeg"
                alt="Merkez Tedarik"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-[#8a8580] text-sm leading-relaxed mb-6">
              15 yılı aşkın deneyimimizle 50+ ülkeye ihracat yapan güvenilir
              toptan tedarik partneriniz.
            </p>
            <div className="flex gap-3">
              {["LinkedIn", "Twitter", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-[6px] border border-[#2a2825] hover:border-[#c4a265] flex items-center justify-center transition-colors text-[#8a8580] hover:text-[#c4a265]"
                >
                  <span className="text-xs font-bold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Hızlı Linkler</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#8a8580] hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-6">Ürün Grupları</h4>
            <ul className="space-y-3">
              {productLinks.map((product) => (
                <li key={product}>
                  <a
                    href="#urunler"
                    className="text-[#8a8580] hover:text-white transition-colors"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[#8a8580]">
                <Phone size={18} className="text-[#c4a265]" />
                <span>+90 555 123 45 67</span>
              </li>
              <li className="flex items-center gap-3 text-[#8a8580]">
                <Mail size={18} className="text-[#c4a265]" />
                <span>info@merkeztedarik.com</span>
              </li>
              <li className="flex items-start gap-3 text-[#8a8580]">
                <MapPin
                  size={18}
                  className="text-[#c4a265] flex-shrink-0 mt-1"
                />
                <span>
                  Organize Sanayi Bölgesi
                  <br />
                  İstanbul, Türkiye
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2a2825] mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#6b6560] text-sm">
            &copy; {new Date().getFullYear()} Merkez Tedarik. Tüm hakları
            saklıdır.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-[#6b6560] hover:text-white transition-colors"
            >
              Gizlilik Politikası
            </a>
            <a
              href="#"
              className="text-[#6b6560] hover:text-white transition-colors"
            >
              Kullanım Koşulları
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
