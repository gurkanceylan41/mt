import { useThemeContext } from "@/app/contexts/ThemeContext";

export default function HeroHeadline() {
  const { theme } = useThemeContext();

  return (
    <>
      <h1
        className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8 ${theme.text}`}
      >
        Ambalajda
        <br />
        <span className="text-gradient">Yeni Nesil</span>
        <br />
        Çözümler
      </h1>

      <p
        className={`text-lg sm:text-xl leading-relaxed mb-10 max-w-xl ${theme.textMuted}`}
      >
        Premium kaliteli streç film ve ambalaj ürünleriyle işinizi bir üst
        seviyeye taşıyın.{" "}
        <span className={theme.text}>Hızlı teslimat</span> ve{" "}
        <span className={theme.text}>uygun fiyat</span> garantisi.
      </p>
    </>
  );
}
