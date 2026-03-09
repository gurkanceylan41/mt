"use client";

import { Truck, Shield, Package } from "lucide-react";
import { useThemeContext } from "@/app/contexts/ThemeContext";

const features = [
  {
    icon: Truck,
    title: "Hızlı Teslimat",
    description: "Türkiye genelinde hızlı ve güvenli teslimat",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Shield,
    title: "Kalite Garantisi",
    description: "Sertifikalı ve test edilmiş ürünler",
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Package,
    title: "Özel Üretim",
    description: "İhtiyaçlarınıza özel boyut ve kalınlık",
    gradient: "from-violet-500 to-violet-600",
  },
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
              <div
                key={i}
                className={`text-center p-8 rounded-2xl ${
                  darkMode ? "bg-zinc-800/50" : "bg-zinc-50"
                }`}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center`}
                >
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${theme.text}`}>
                  {feature.title}
                </h3>
                <p className={theme.textMuted}>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
