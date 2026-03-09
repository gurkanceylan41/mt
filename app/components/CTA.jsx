"use client";

import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-32 relative bg-[#111111]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
          Projeniz İçin
          <br />
          Hemen Teklif Alın
        </h2>
        <p className="text-xl text-[#8a8580] mb-10 max-w-2xl mx-auto">
          Uzman ekibimiz sizin için en uygun çözümü bulmak için hazır. Ücretsiz
          danışmanlık ve rekabetçi fiyatlar için hemen iletişime geçin.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#iletisim"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#111111] rounded-[6px] font-semibold hover:bg-[#f0ede8] transition-all duration-300"
          >
            <span>Ücretsiz Teklif Al</span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
