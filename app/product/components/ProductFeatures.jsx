"use client";

import { Truck, Shield, Package } from "lucide-react";
import { useThemeContext } from "@/app/contexts/ThemeContext";

const features = [
  { icon: Truck, title: "Hızlı Teslimat", description: "Türkiye genelinde hızlı ve güvenli teslimat" },
  { icon: Shield, title: "Kalite Garantisi", description: "Sertifikalı ve test edilmiş ürünler" },
  { icon: Package, title: "Özel Üretim", description: "İhtiyaçlarınıza özel boyut ve kalınlık" },
];

export default function ProductFeatures() {
  const { darkMode, theme } = useThemeContext();

  return (
    <section className={`py-16 ${theme.bgAlt}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className={`text-center p-8 rounded-lg border ${
                darkMode ? "bg-[#161616] border-[#2a2825]" : "bg-white border-[#e8e5df]"
              }`}>
                <div className={`w-16 h-16 mx-auto mb-4 rounded-lg border flex items-center justify-center ${
                  darkMode ? "border-[#2a2825] text-[#c4a265]" : "border-[#e8e5df] text-[#9a7740]"
                }`}>
                  <Icon size={32} />
                </div>
                <h3 className={`font-display text-xl font-semibold mb-2 ${theme.text}`}>{feature.title}</h3>
                <p className={theme.textMuted}>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
