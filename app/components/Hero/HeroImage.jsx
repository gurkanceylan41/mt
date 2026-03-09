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
        <div className="relative rounded-lg overflow-hidden">
          <img
            src="/images/right1.jpeg"
            alt="Streç Film Rulolar"
            className="w-full h-auto"
          />
        </div>

        {/* Floating Card - Experience */}
        <div
          className={`absolute -bottom-6 -left-6 p-6 rounded-lg shadow-lg border ${
            darkMode
              ? "bg-[#161616] border-[#2a2825]"
              : "bg-white border-[#e8e5df]"
          }`}
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-14 h-14 rounded-lg flex items-center justify-center ${
                darkMode ? "bg-[#c4a265]" : "bg-[#9a7740]"
              }`}
            >
              <Award className="text-white" size={28} />
            </div>
            <div>
              <div
                className={`font-display text-3xl font-semibold ${theme.text}`}
              >
                15+
              </div>
              <div className={`text-sm ${theme.textMuted}`}>
                Yıllık Deneyim
              </div>
            </div>
          </div>
        </div>

        {/* Floating Card - Certified */}
        <div
          className={`absolute -top-4 -right-4 p-4 rounded-lg shadow-lg border ${
            darkMode
              ? "bg-[#161616] border-[#2a2825]"
              : "bg-white border-[#e8e5df]"
          }`}
        >
          <div className="flex items-center gap-3">
            <Shield className={theme.accent} size={24} />
            <span className={`font-semibold ${theme.text}`}>
              ISO Sertifikalı
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
