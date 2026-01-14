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
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                activeCategory === cat.key
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                  : darkMode
                  ? "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
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
