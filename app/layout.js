import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: "Merkez Tedarik - Premium Ambalaj Çözümleri",
  description:
    "Türkiye'nin lider ambalaj tedarikçisi. Streç film, gıda ambalajı ve endüstriyel paketleme çözümleri.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={`${inter.variable} ${cormorant.variable} ${inter.className}`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
