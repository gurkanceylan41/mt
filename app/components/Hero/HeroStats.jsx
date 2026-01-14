import { useThemeContext } from "@/app/contexts/ThemeContext";
import { stats } from "@/app/data";

export default function HeroStats() {
  const { theme, mounted } = useThemeContext();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
      {stats.map((stat, i) => (
        <div
          key={i}
          className={mounted ? "animate-fadeUp" : "opacity-0"}
          style={{ animationDelay: `${0.3 + i * 0.1}s` }}
        >
          <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">
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
