import { useThemeContext } from "@/app/contexts/ThemeContext";

export default function HeroBadge() {
  const { darkMode } = useThemeContext();

  return (
    <div
      className={`inline-flex items-center gap-3 px-4 py-2 rounded-[4px] mb-8 ${
        darkMode
          ? "bg-[#c4a265]/10 border border-[#c4a265]/20"
          : "bg-[#9a7740]/8 border border-[#9a7740]/15"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          darkMode ? "bg-[#c4a265]" : "bg-[#9a7740]"
        }`}
      />
      <span
        className={`text-sm font-semibold tracking-wide ${
          darkMode ? "text-[#c4a265]" : "text-[#9a7740]"
        }`}
      >
        Global İhracat & Toptan Tedarik Partneri
      </span>
    </div>
  );
}
