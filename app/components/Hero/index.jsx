"use client";

import { useThemeContext } from "@/app/contexts/ThemeContext";
import HeroBackground from "./HeroBackground";
import HeroBadge from "./HeroBadge";
import HeroHeadline from "./HeroHeadline";
import HeroCTA from "./HeroCTA";
import HeroStats from "./HeroStats";
import HeroImage from "./HeroImage";

export default function Hero() {
  const { theme, mounted } = useThemeContext();

  return (
    <section
      id="anasayfa"
      className={`relative min-h-screen flex items-center overflow-hidden ${theme.bg}`}
    >
      <HeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={mounted ? "animate-fadeUp" : "opacity-0"}>
            <HeroBadge />
            <HeroHeadline />
            <HeroCTA />
            <HeroStats />
          </div>

          <HeroImage />
        </div>
      </div>
    </section>
  );
}
