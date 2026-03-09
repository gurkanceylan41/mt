import { useThemeContext } from "@/app/contexts/ThemeContext";

export default function HeroBadge() {
  const { darkMode } = useThemeContext();

  return (
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
  );
}
