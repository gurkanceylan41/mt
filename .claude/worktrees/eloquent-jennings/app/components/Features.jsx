"use client";

import { Package, Truck, Shield, Award } from "lucide-react";
import { features } from "../data";
import { useThemeContext } from "../contexts/ThemeContext";

const icons = {
  0: <Package size={28} />,
  1: <Truck size={28} />,
  2: <Shield size={28} />,
  3: <Award size={28} />,
};

export default function Features() {
  const { darkMode, theme } = useThemeContext();
  return (
    <section className={`py-24 ${theme.bgAlt} relative`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              className={`group relative p-8 rounded-2xl transition-all duration-500 hover-lift card-shine ${
                darkMode
                  ? "bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700"
                  : "bg-white border border-zinc-100 hover:border-zinc-200 shadow-sm hover:shadow-xl"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {icons[i]}
              </div>
              <h3 className={`text-lg font-bold mb-2 ${theme.text}`}>
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
