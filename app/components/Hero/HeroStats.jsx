import { useThemeContext } from "@/app/contexts/ThemeContext";
import { stats } from "@/app/data";

export default function HeroStats() {
  const { theme, mounted } = useThemeContext();

  return (
    <div className="flex flex-wrap gap-0">
      {stats.map((stat, i) => (
        <div
          key={i}
          className={`pr-8 ${
            i < stats.length - 1 ? `mr-8 border-r ${theme.border}` : ""
          } ${mounted ? "animate-fadeUp" : "opacity-0"}`}
          style={{ animationDelay: `${0.3 + i * 0.1}s` }}
        >
          <div
            className={`font-display text-3xl sm:text-4xl font-semibold mb-1 ${theme.accent}`}
          >
            {stat.number}
            {stat.suffix}
          </div>
          <div className={`text-sm font-medium ${theme.textMuted}`}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
