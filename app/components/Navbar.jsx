"use client";

import { useState } from "react";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks } from "../data";
import { useThemeContext } from "../contexts/ThemeContext";

export default function Navbar({ scrolled }) {
  const { darkMode, toggleDarkMode, theme, mounted } = useThemeContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? `${
              darkMode ? "bg-[#0a0a0a]/95" : "bg-white/95"
            } border-b ${theme.border} backdrop-blur-sm`
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className={`flex items-center gap-4 ${
              mounted ? "animate-slideInLeft" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpeg"
                alt="Merkez Tedarik"
                className="h-12 w-auto object-contain rounded-lg"
              />
              <span className={`font-display text-xl font-bold tracking-tight ${theme.text}`}>
                MERKEZ TEDARİK
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((item, i) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-5 py-2.5 font-medium transition-colors duration-300 ${
                  darkMode
                    ? "text-[#8a8580] hover:text-[#f0ede8]"
                    : "text-[#6b6b6b] hover:text-[#111111]"
                }`}
                style={{
                  opacity: mounted ? 1 : 0,
                  transition: `opacity 0.3s ${i * 0.1}s, color 0.3s`,
                }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className={`p-3 rounded-full transition-colors duration-300 ${
                darkMode
                  ? "text-[#c4a265] hover:bg-[#1a1a1a]"
                  : "text-[#6b6b6b] hover:bg-[#f5f5f0]"
              }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="#iletisim"
              className={`hidden sm:flex items-center gap-2 px-6 py-3 rounded-[6px] font-semibold text-sm transition-all duration-300 ${
                darkMode
                  ? "bg-white text-[#111111] hover:bg-[#f0ede8]"
                  : "bg-[#111111] text-white hover:bg-[#333333]"
              }`}
            >
              <span>Teklif Al</span>
              <ArrowUpRight size={16} />
            </a>

            <button
              className={`lg:hidden p-3 rounded-[6px] ${
                darkMode
                  ? "text-[#f0ede8] hover:bg-[#1a1a1a]"
                  : "text-[#111111] hover:bg-[#f5f5f0]"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden py-6 border-t ${theme.border} animate-fadeUp`}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-3 font-medium transition-colors ${
                    darkMode
                      ? "text-[#8a8580] hover:text-[#f0ede8]"
                      : "text-[#6b6b6b] hover:text-[#111111]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#iletisim"
                className={`mt-4 px-6 py-3 rounded-[6px] font-semibold text-center transition-all ${
                  darkMode
                    ? "bg-white text-[#111111]"
                    : "bg-[#111111] text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Teklif Al
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
