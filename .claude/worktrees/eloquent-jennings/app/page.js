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
import { useThemeContext } from "./contexts/ThemeContext";

export default function Home() {
  const { darkMode, theme, mounted } = useThemeContext();
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
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
      <Navbar scrolled={scrolled} />

      <Hero mousePosition={mousePosition} heroRef={heroRef} />

      <Features />

      <Products />

      <About />

      <Testimonials />

      <CTA />

      <Contact />

      <Footer />
    </div>
  );
}
