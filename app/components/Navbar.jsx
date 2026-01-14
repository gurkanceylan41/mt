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
              darkMode ? "bg-[#0a0a0f]/90" : "bg-white/90"
            } glass shadow-lg shadow-black/5`
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
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                MT
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-xl font-bold tracking-tight ${theme.text}`}>
                MERKEZ TEDARİK
              </h1>
              <p className={`text-xs font-medium ${theme.textMuted}`}>
                Premium Ambalaj Çözümleri
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((item, i) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-5 py-2.5 rounded-full font-medium transition-all duration-300 group ${
                  darkMode
                    ? "text-zinc-400 hover:text-white"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
                style={{
                  animationDelay: `${i * 0.1}s`,
                  opacity: mounted ? 1 : 0,
                }}
              >
                <span className="relative z-10">{item.name}</span>
                <span
                  className={`absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ${
                    darkMode ? "bg-white/5" : "bg-black/5"
                  }`}
                ></span>
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className={`relative p-3 rounded-full transition-all duration-300 group ${
                darkMode
                  ? "bg-zinc-800/50 hover:bg-zinc-700/50 text-yellow-400"
                  : "bg-zinc-100 hover:bg-zinc-200 text-zinc-700"
              }`}
            >
              <span className="relative z-10">
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </span>
            </button>

            <a
              href="#iletisim"
              className="hidden sm:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold text-sm btn-primary"
            >
              <span>Teklif Al</span>
              <ArrowUpRight size={16} />
            </a>

            <button
              className={`lg:hidden p-3 rounded-xl ${
                darkMode
                  ? "bg-zinc-800/50 text-white"
                  : "bg-zinc-100 text-zinc-700"
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
            <div className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-3 rounded-xl font-medium transition-all ${
                    darkMode
                      ? "text-zinc-300 hover:bg-zinc-800/50"
                      : "text-zinc-700 hover:bg-zinc-100"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#iletisim"
                className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold text-center"
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
