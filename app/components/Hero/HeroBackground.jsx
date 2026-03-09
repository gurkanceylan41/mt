import { useThemeContext } from "@/app/contexts/ThemeContext";

export default function HeroBackground() {
  const { darkMode } = useThemeContext();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className={`absolute inset-0 ${
          darkMode ? "opacity-[0.03]" : "opacity-[0.04]"
        }`}
        style={{
          backgroundImage: `linear-gradient(${
            darkMode ? "#fff" : "#000"
          } 1px, transparent 1px), linear-gradient(90deg, ${
            darkMode ? "#fff" : "#000"
          } 1px, transparent 1px)`,
          backgroundSize: "120px 120px",
        }}
      />
    </div>
  );
}
