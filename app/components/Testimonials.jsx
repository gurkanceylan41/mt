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
    <section className={`py-24 ${theme.bg} relative overflow-hidden`}>
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-0 left-0 w-96 h-96 rounded-full blur-[150px] ${
            darkMode ? "bg-blue-500/10" : "bg-blue-500/5"
          }`}
        />
        <div
          className={`absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[150px] ${
            darkMode ? "bg-violet-500/10" : "bg-violet-500/5"
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
              darkMode
                ? "bg-blue-500/10 text-blue-400"
                : "bg-blue-50 text-blue-600"
            }`}
          >
            MÜŞTERİ YORUMLARI
          </span>
          <h2 className={`text-4xl sm:text-5xl font-bold ${theme.text}`}>
            Müşterilerimiz
            <span className="text-gradient"> Ne Diyor?</span>
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div
            className={`p-10 sm:p-12 rounded-3xl ${
              darkMode
                ? "bg-zinc-900/50 border border-zinc-800"
                : "bg-white shadow-xl shadow-zinc-200/50"
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
                    className={`text-xl sm:text-2xl leading-relaxed mb-8 ${theme.text}`}
                  >
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold`}
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className={`font-bold ${theme.text}`}>
                        {testimonial.name}
                      </p>
                      <p className={`text-sm ${theme.textMuted}`}>
                        {testimonial.role} • {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeTestimonial
                        ? "w-8 bg-blue-500"
                        : `w-2 ${darkMode ? "bg-zinc-700" : "bg-zinc-300"}`
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
                  className={`p-3 rounded-full transition-all ${
                    darkMode
                      ? "bg-zinc-800 hover:bg-zinc-700 text-white"
                      : "bg-zinc-100 hover:bg-zinc-200 text-zinc-700"
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
                  className={`p-3 rounded-full transition-all ${
                    darkMode
                      ? "bg-zinc-800 hover:bg-zinc-700 text-white"
                      : "bg-zinc-100 hover:bg-zinc-200 text-zinc-700"
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
