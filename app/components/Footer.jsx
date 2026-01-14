"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { navLinks } from "../data";
import { useThemeContext } from "../contexts/ThemeContext";

export default function Footer() {
  const { darkMode } = useThemeContext();
  const productLinks = [
    "Makina Streç Film",
    "El Streç Film",
    "Pre Streç Film",
    "Gıda Streç Film",
    "Renkli Streç Film",
  ];

  return (
    <footer
      className={`${darkMode ? "bg-[#08080c]" : "bg-zinc-900"} text-white`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center font-bold text-lg">
                MT
              </div>
              <div>
                <h3 className="font-bold text-lg">MERKEZ TEDARİK</h3>
                <p className="text-sm text-zinc-500">Ambalaj Çözümleri</p>
              </div>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              15 yılı aşkın deneyimimizle Türkiye&apos;nin en güvenilir ambalaj
              tedarikçisiyiz.
            </p>
            <div className="flex gap-3">
              {["LinkedIn", "Twitter", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-zinc-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                >
                  <span className="text-xs font-bold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6">Hızlı Linkler</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-6">Ürün Grupları</h4>
            <ul className="space-y-3">
              {productLinks.map((product) => (
                <li key={product}>
                  <a
                    href="#urunler"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-zinc-400">
                <Phone size={18} className="text-blue-500" />
                <span>+90 555 123 45 67</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Mail size={18} className="text-blue-500" />
                <span>info@merkeztedarik.com</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <MapPin
                  size={18}
                  className="text-blue-500 flex-shrink-0 mt-1"
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
        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Merkez Tedarik. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              Gizlilik Politikası
            </a>
            <a
              href="#"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              Kullanım Koşulları
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
