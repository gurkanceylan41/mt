import { ArrowRight } from "lucide-react";
import { useThemeContext } from "@/app/contexts/ThemeContext";

export default function HeroCTA() {
  const { darkMode } = useThemeContext();

  return (
    <div className="flex flex-wrap gap-4 mb-16">
      <a
        href="/product"
        className={`group inline-flex items-center gap-3 px-8 py-4 rounded-[6px] font-semibold transition-all duration-300 ${
          darkMode
            ? "bg-white text-[#111111] hover:bg-[#f0ede8]"
            : "bg-[#111111] text-white hover:bg-[#333333]"
        }`}
      >
        <span>Ürünleri Keşfet</span>
        <ArrowRight
          size={18}
          className="group-hover:translate-x-1 transition-transform"
        />
      </a>
    </div>
  );
}
