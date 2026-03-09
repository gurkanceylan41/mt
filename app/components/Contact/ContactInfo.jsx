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
      <span className={`badge mb-6 ${darkMode ? "badge-dark" : "badge-light"}`}>
        İLETİŞİM
      </span>

      <h2 className={`section-title ${theme.text}`}>
        Size Nasıl
        <span className={theme.accent}> Yardımcı Olabiliriz?</span>
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
            className={`group flex items-start gap-5 p-6 rounded-lg border transition-all duration-300 ${
              darkMode
                ? "bg-[#161616] border-[#2a2825] hover:border-[#c4a265]"
                : "bg-white border-[#e8e5df] hover:border-[#9a7740]"
            }`}
          >
            <div
              className={`w-14 h-14 rounded-lg border flex items-center justify-center flex-shrink-0 ${
                darkMode
                  ? "border-[#2a2825] text-[#c4a265]"
                  : "border-[#e8e5df] text-[#9a7740]"
              }`}
            >
              {icons[i]}
            </div>
            <div>
              <h3 className={`font-semibold mb-1 ${theme.text}`}>
                {item.title}
              </h3>
              <p className={`font-medium ${theme.text}`}>{item.info}</p>
              <p className={theme.textMuted}>{item.subInfo}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
