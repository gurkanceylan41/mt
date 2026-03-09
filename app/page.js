"use client";

import { useState, useEffect } from "react";
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
  const { theme } = useThemeContext();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${theme.bg} overflow-x-hidden`}
    >
      <Navbar scrolled={scrolled} />
      <Hero />
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
