"use client";

import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-violet-700" />
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Projeniz İçin
          <br />
          Hemen Teklif Alın
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Uzman ekibimiz sizin için en uygun çözümü bulmak için hazır. Ücretsiz
          danışmanlık ve rekabetçi fiyatlar için hemen iletişime geçin.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#iletisim"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-all hover:scale-105 shadow-lg"
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
