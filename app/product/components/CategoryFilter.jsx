"use client";

import { useThemeContext } from "@/app/contexts/ThemeContext";
import { categories } from "../data";

export default function CategoryFilter({ activeCategory, onCategoryChange }) {
  const { darkMode } = useThemeContext();

  return (
    <section className="pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-center gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => onCategoryChange(cat.key)}
              className={`px-6 py-3 rounded-[6px] font-semibold text-sm transition-all duration-300 ${
                activeCategory === cat.key
                  ? darkMode
                    ? "bg-white text-[#111111]"
                    : "bg-[#111111] text-white"
                  : darkMode
                  ? "border border-[#2a2825] text-[#8a8580] hover:border-[#c4a265]"
                  : "border border-[#e8e5df] text-[#6b6b6b] hover:border-[#9a7740]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
