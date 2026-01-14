import { Award, Shield } from "lucide-react";
import { useThemeContext } from "@/app/contexts/ThemeContext";

export default function HeroImage() {
  const { darkMode, theme, mounted } = useThemeContext();

  return (
    <div
      className={`relative ${mounted ? "animate-slideInRight" : "opacity-0"}`}
      style={{ animationDelay: "0.3s" }}
    >
      <div className="relative">
        {/* Main Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="/images/right1.jpeg"
            alt="Streç Film Rulolar"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        {/* Floating Card - Experience */}
        <div
          className={`absolute -bottom-6 -left-6 p-6 rounded-2xl shadow-2xl glass-card ${
            darkMode
              ? "bg-zinc-900/80 border border-zinc-800"
              : "bg-white/90"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
              <Award className="text-white" size={28} />
            </div>
            <div>
              <div className={`text-3xl font-bold ${theme.text}`}>15+</div>
              <div className={`text-sm ${theme.textMuted}`}>Yıllık Deneyim</div>
            </div>
          </div>
        </div>

        {/* Floating Card - Certified */}
        <div
          className={`absolute -top-4 -right-4 p-4 rounded-xl shadow-2xl glass-card ${
            darkMode
              ? "bg-zinc-900/80 border border-zinc-800"
              : "bg-white/90"
          }`}
        >
          <div className="flex items-center gap-3">
            <Shield className="text-green-500" size={24} />
            <span className={`font-semibold ${theme.text}`}>
              ISO Sertifikalı
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
