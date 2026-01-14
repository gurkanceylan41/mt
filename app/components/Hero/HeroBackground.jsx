import { useThemeContext } from "@/app/contexts/ThemeContext";

export default function HeroBackground({ mousePosition }) {
  const { darkMode } = useThemeContext();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full blur-[120px] opacity-30"
        style={{
          background: darkMode
            ? "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
          top: `${20 + mousePosition.y * 10}%`,
          left: `${10 + mousePosition.x * 10}%`,
          transition: "top 0.5s ease-out, left 0.5s ease-out",
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-20"
        style={{
          background: darkMode
            ? "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
          bottom: `${10 + mousePosition.y * 5}%`,
          right: `${5 + mousePosition.x * 5}%`,
          transition: "bottom 0.5s ease-out, right 0.5s ease-out",
        }}
      />

      {/* Grid Pattern */}
      <div
        className={`absolute inset-0 ${
          darkMode ? "opacity-[0.02]" : "opacity-[0.03]"
        }`}
        style={{
          backgroundImage: `linear-gradient(${
            darkMode ? "#fff" : "#000"
          } 1px, transparent 1px), linear-gradient(90deg, ${
            darkMode ? "#fff" : "#000"
          } 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Floating Elements */}
      <div
        className="absolute w-24 h-24 rounded-2xl border border-blue-500/20 animate-float"
        style={{ top: "15%", right: "10%", animationDelay: "0s" }}
      />
      <div
        className="absolute w-16 h-16 rounded-full border border-violet-500/20 animate-float"
        style={{ top: "60%", right: "25%", animationDelay: "1s" }}
      />
      <div
        className="absolute w-20 h-20 rounded-xl border border-blue-500/10 animate-float"
        style={{ bottom: "20%", left: "8%", animationDelay: "2s" }}
      />
    </div>
  );
}
