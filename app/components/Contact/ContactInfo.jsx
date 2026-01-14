"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { useThemeContext } from "@/app/contexts/ThemeContext";
import { contactInfo } from "@/app/data";

const icons = {
  0: <Phone size={24} />,
  1: <Mail size={24} />,
  2: <MapPin size={24} />,
};

export default function ContactInfo() {
  const { darkMode, theme } = useThemeContext();

  return (
    <div>
      <span
        className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 ${
          darkMode ? "bg-blue-500/10 text-blue-400" : "bg-blue-50 text-blue-600"
        }`}
      >
        İLETİŞİM
      </span>

      <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${theme.text}`}>
        Size Nasıl
        <span className="text-gradient"> Yardımcı Olabiliriz?</span>
      </h2>

      <p className={`text-lg leading-relaxed mb-12 ${theme.textMuted}`}>
        Sorularınız veya özel talepleriniz için bize ulaşın. Uzman ekibimiz en
        kısa sürede size dönüş yapacaktır.
      </p>

      <div className="space-y-6">
        {contactInfo.map((item, i) => (
          <a
            key={i}
            href={item.href}
            className={`group flex items-start gap-5 p-6 rounded-2xl transition-all duration-300 ${
              darkMode
                ? "bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/50"
                : "bg-white border border-zinc-100 hover:border-blue-200 shadow-sm hover:shadow-lg"
            }`}
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
              {icons[i]}
            </div>
            <div>
              <h3 className={`font-bold mb-1 ${theme.text}`}>{item.title}</h3>
              <p className={`font-medium ${theme.text}`}>{item.info}</p>
              <p className={theme.textMuted}>{item.subInfo}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
