import { useThemeContext } from "@/app/contexts/ThemeContext";

export default function HeroHeadline() {
  const { theme } = useThemeContext();

  return (
    <>
      <h1
        className={`font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-semibold leading-[0.95] tracking-tight mb-8 ${theme.text}`}
      >
        Toptan
        <br />
        <span className={theme.accent}>Tedarik &</span>
        <br />
        İhracat
      </h1>

      <p
        className={`text-lg sm:text-xl leading-relaxed mb-10 max-w-xl ${theme.textMuted}`}
      >
        Oyuncaktan elektroniğe, ambalajdan tekstile 8 farklı kategoride
        binlerce ürün.{" "}
        <span className={theme.text}>Global ihracat</span> ve{" "}
        <span className={theme.text}>toptan satış</span> çözümleri.
      </p>
    </>
  );
}
