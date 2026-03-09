"use client";

import { useState, useEffect } from "react";
import { Navbar, Footer } from "@/app/components";
import { CatalogHero, CatalogGrid, CatalogCTA } from "./components";
import { catalogCategories } from "./data";
import { useThemeContext } from "@/app/contexts/ThemeContext";

export default function CatalogPage() {
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
    <div className={`min-h-screen transition-colors duration-500 ${theme.bg} overflow-x-hidden`}>
      <Navbar scrolled={scrolled} />
      <CatalogHero />
      <CatalogGrid categories={catalogCategories} />
      <CatalogCTA />
      <Footer />
    </div>
  );
}
