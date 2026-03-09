"use client";

import { useThemeContext } from "@/app/contexts/ThemeContext";
import HeroBackground from "./HeroBackground";
import HeroBadge from "./HeroBadge";
import HeroHeadline from "./HeroHeadline";
import HeroCTA from "./HeroCTA";
import HeroStats from "./HeroStats";
import HeroImage from "./HeroImage";

export default function Hero({ mousePosition, heroRef }) {
  const { darkMode, mounted } = useThemeContext();

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
      <HeroBackground mousePosition={mousePosition} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={mounted ? "animate-fadeUp" : "opacity-0"}>
            <HeroBadge />
            <HeroHeadline />
            <HeroCTA />
            <HeroStats />
          </div>

          {/* Right Content - Hero Image */}
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
