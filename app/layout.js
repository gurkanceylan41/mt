import "./globals.css";

export const metadata = {
  title: "Merkez Tedarik - Premium Ambalaj Çözümleri",
  description:
    "Türkiye'nin lider ambalaj tedarikçisi. Streç film, gıda ambalajı ve endüstriyel paketleme çözümleri.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
