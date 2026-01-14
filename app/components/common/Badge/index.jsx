import { useThemeContext } from "@/app/contexts/ThemeContext";

export default function Badge({ children, className = "" }) {
  const { darkMode } = useThemeContext();

  return (
    <span
      className={`badge ${darkMode ? "badge-dark" : "badge-light"} ${className}`}
    >
      {children}
    </span>
  );
}
