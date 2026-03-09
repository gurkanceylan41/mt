import { useThemeContext } from "@/app/contexts/ThemeContext";

export default function Card({ children, className = "", hover = false }) {
  const { darkMode } = useThemeContext();

  return (
    <div
      className={`card ${darkMode ? "card-dark" : "card-light"} ${
        hover ? "card-hover" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
