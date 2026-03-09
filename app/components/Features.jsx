"use client";

import { Grid3X3, Globe, BadgePercent, Award } from "lucide-react";
import { features } from "../data";
import { useThemeContext } from "../contexts/ThemeContext";

const icons = {
  0: <Grid3X3 size={28} />,
  1: <Globe size={28} />,
  2: <BadgePercent size={28} />,
  3: <Award size={28} />,
};

export default function Features() {
  const { darkMode, theme } = useThemeContext();
  return (
    <section className={`py-32 ${theme.bgAlt} relative`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              className={`group relative p-8 rounded-lg transition-all duration-300 card-hover ${
                darkMode
                  ? "bg-[#161616] border border-[#2a2825] hover:border-[#c4a265]"
                  : "bg-white border border-[#e8e5df] hover:border-[#9a7740]"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-lg border flex items-center justify-center mb-6 ${
                  darkMode
                    ? "border-[#2a2825] text-[#c4a265]"
                    : "border-[#e8e5df] text-[#9a7740]"
                }`}
              >
                {icons[i]}
              </div>
              <h3
                className={`font-display text-lg font-semibold mb-2 ${theme.text}`}
              >
                {item.title}
              </h3>
              <p className={theme.textMuted}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
