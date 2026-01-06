"use client";

import { Award, Shield, ArrowRight, Play } from "lucide-react";
import { stats } from "../data";

export default function Hero({
  darkMode,
  theme,
  mounted,
  mousePosition,
  heroRef,
}) {
  return (
    <section
      id="anasayfa"
      ref={heroRef}
      className={`relative min-h-screen flex items-center overflow-hidden ${
        darkMode
          ? "bg-gradient-to-br from-[#0a0a0f] via-[#0f0f18] to-[#0a0a0f]"
          : "bg-gradient-to-br from-[#f8fafc] via-white to-[#f1f5f9]"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full blur-[120px] opacity-30"
          style={{
            background: darkMode
              ? "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
            top: `${20 + mousePosition.y * 10}%`,
            left: `${10 + mousePosition.x * 10}%`,
            transition: "top 0.5s ease-out, left 0.5s ease-out",
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-20"
          style={{
            background: darkMode
              ? "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
            bottom: `${10 + mousePosition.y * 5}%`,
            right: `${5 + mousePosition.x * 5}%`,
            transition: "bottom 0.5s ease-out, right 0.5s ease-out",
          }}
        />

        {/* Grid Pattern */}
        <div
          className={`absolute inset-0 ${
            darkMode ? "opacity-[0.02]" : "opacity-[0.03]"
          }`}
          style={{
            backgroundImage: `linear-gradient(${
              darkMode ? "#fff" : "#000"
            } 1px, transparent 1px), linear-gradient(90deg, ${
              darkMode ? "#fff" : "#000"
            } 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />

        {/* Floating Elements */}
        <div
          className="absolute w-24 h-24 rounded-2xl border border-blue-500/20 animate-float"
          style={{ top: "15%", right: "10%", animationDelay: "0s" }}
        />
        <div
          className="absolute w-16 h-16 rounded-full border border-violet-500/20 animate-float"
          style={{ top: "60%", right: "25%", animationDelay: "1s" }}
        />
        <div
          className="absolute w-20 h-20 rounded-xl border border-blue-500/10 animate-float"
          style={{ bottom: "20%", left: "8%", animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={mounted ? "animate-fadeUp" : "opacity-0"}>
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 ${
                darkMode
                  ? "bg-blue-500/10 border border-blue-500/20"
                  : "bg-blue-50 border border-blue-100"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span
                className={`text-sm font-semibold ${
                  darkMode ? "text-blue-400" : "text-blue-600"
                }`}
              >
                Türkiye&apos;nin Lider Ambalaj Tedarikçisi
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8 ${theme.text}`}
            >
              Ambalajda
              <br />
              <span className="text-gradient">Yeni Nesil</span>
              <br />
              Çözümler
            </h1>

            {/* Description */}
            <p
              className={`text-lg sm:text-xl leading-relaxed mb-10 max-w-xl ${theme.textMuted}`}
            >
              Premium kaliteli streç film ve ambalaj ürünleriyle işinizi bir üst
              seviyeye taşıyın.{" "}
              <span className={theme.text}>Hızlı teslimat</span> ve{" "}
              <span className={theme.text}>uygun fiyat</span> garantisi.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-16">
              <a
                href="#urunler"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold btn-primary"
              >
                <span>Ürünleri Keşfet</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#iletisim"
                className={`group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold border-2 transition-all duration-300 ${
                  darkMode
                    ? "border-zinc-700 text-white hover:bg-zinc-800"
                    : "border-zinc-200 text-zinc-900 hover:bg-zinc-50"
                }`}
              >
                <Play size={18} className="text-blue-500" />
                <span>Nasıl Çalışır?</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={mounted ? "animate-fadeUp" : "opacity-0"}
                  style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                >
                  <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">
                    {stat.number}
                    {stat.suffix}
                  </div>
                  <div className={`text-sm font-medium ${theme.textMuted}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div
            className={`relative ${
              mounted ? "animate-slideInRight" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/right1.jpeg"
                  alt="Streç Film Rulolar"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Floating Card - Experience */}
              <div
                className={`absolute -bottom-6 -left-6 p-6 rounded-2xl shadow-2xl glass-card ${
                  darkMode
                    ? "bg-zinc-900/80 border border-zinc-800"
                    : "bg-white/90"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                    <Award className="text-white" size={28} />
                  </div>
                  <div>
                    <div className={`text-3xl font-bold ${theme.text}`}>
                      15+
                    </div>
                    <div className={`text-sm ${theme.textMuted}`}>
                      Yıllık Deneyim
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card - Certified */}
              <div
                className={`absolute -top-4 -right-4 p-4 rounded-xl shadow-2xl glass-card ${
                  darkMode
                    ? "bg-zinc-900/80 border border-zinc-800"
                    : "bg-white/90"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Shield className="text-green-500" size={24} />
                  <span className={`font-semibold ${theme.text}`}>
                    ISO Sertifikalı
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
    </section>
  );
}
