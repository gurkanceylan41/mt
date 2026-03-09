"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../data";
import { useThemeContext } from "../contexts/ThemeContext";

export default function Testimonials() {
  const { darkMode, theme } = useThemeContext();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`py-32 ${theme.bg} relative`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={`badge mb-4 ${darkMode ? "badge-dark" : "badge-light"}`}
          >
            MÜŞTERİ YORUMLARI
          </span>
          <h2 className={`section-title ${theme.text}`}>
            Müşterilerimiz
            <span className={theme.accent}> Ne Diyor?</span>
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div
            className={`p-10 sm:p-12 rounded-lg border ${
              darkMode
                ? "bg-[#161616] border-[#2a2825]"
                : "bg-white border-[#e8e5df]"
            }`}
          >
            {/* Stars */}
            <div className="flex items-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className="fill-amber-400 text-amber-400"
                />
              ))}
            </div>

            {/* Testimonial Content */}
            <div className="relative h-48 sm:h-40">
              {testimonials.map((testimonial, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-all duration-700 ${
                    i === activeTestimonial
                      ? "opacity-100 translate-x-0"
                      : i < activeTestimonial
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                  }`}
                >
                  <blockquote
                    className={`font-display text-xl sm:text-2xl leading-relaxed mb-8 ${theme.text}`}
                  >
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold ${
                        darkMode
                          ? "bg-[#c4a265] text-[#0a0a0a]"
                          : "bg-[#9a7740] text-white"
                      }`}
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className={`font-semibold ${theme.text}`}>
                        {testimonial.name}
                      </p>
                      <p className={`text-sm ${theme.textMuted}`}>
                        {testimonial.role} · {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div
              className={`flex items-center justify-between mt-8 pt-8 border-t ${theme.border}`}
            >
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeTestimonial
                        ? `w-8 ${darkMode ? "bg-[#c4a265]" : "bg-[#9a7740]"}`
                        : `w-1.5 ${
                            darkMode ? "bg-[#2a2825]" : "bg-[#e8e5df]"
                          }`
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setActiveTestimonial(
                      (prev) =>
                        (prev - 1 + testimonials.length) % testimonials.length
                    )
                  }
                  className={`p-3 rounded-[6px] transition-all ${
                    darkMode
                      ? "border border-[#2a2825] text-[#f0ede8] hover:border-[#c4a265]"
                      : "border border-[#e8e5df] text-[#111111] hover:border-[#9a7740]"
                  }`}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() =>
                    setActiveTestimonial(
                      (prev) => (prev + 1) % testimonials.length
                    )
                  }
                  className={`p-3 rounded-[6px] transition-all ${
                    darkMode
                      ? "border border-[#2a2825] text-[#f0ede8] hover:border-[#c4a265]"
                      : "border border-[#e8e5df] text-[#111111] hover:border-[#9a7740]"
                  }`}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
