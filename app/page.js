"use client";

import { useState, useEffect, useRef } from "react";
import {
  Navbar,
  Hero,
  Features,
  Products,
  About,
  Testimonials,
  CTA,
  Contact,
  Footer,
} from "./components";
import { useTheme } from "./hooks/useTheme";

export default function Home() {
  const { darkMode, toggleDarkMode, theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${theme.bg} overflow-x-hidden`}
    >
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        theme={theme}
        scrolled={scrolled}
        mounted={mounted}
      />

      <Hero
        darkMode={darkMode}
        theme={theme}
        mounted={mounted}
        mousePosition={mousePosition}
        heroRef={heroRef}
      />

      <Features darkMode={darkMode} theme={theme} />

      <Products darkMode={darkMode} theme={theme} />

      <About darkMode={darkMode} theme={theme} />

      <Testimonials darkMode={darkMode} theme={theme} />

      <CTA />

      <Contact darkMode={darkMode} theme={theme} />

      <Footer darkMode={darkMode} />
    </div>
  );
}
