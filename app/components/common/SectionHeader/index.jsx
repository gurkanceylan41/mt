import { useThemeContext } from "@/app/contexts/ThemeContext";
import Badge from "../Badge";

export default function SectionHeader({ badge, title, gradientText, subtitle }) {
  const { theme } = useThemeContext();

  return (
    <div className="section-header">
      {badge && <Badge>{badge}</Badge>}
      <h2 className={`section-title ${theme.text}`}>
        {title}
        {gradientText && <span className="text-gradient"> {gradientText}</span>}
      </h2>
      {subtitle && (
        <p className={`section-subtitle ${theme.textMuted}`}>{subtitle}</p>
      )}
    </div>
  );
}
