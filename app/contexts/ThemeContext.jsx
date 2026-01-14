"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme !== null) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  const theme = {
    bg: darkMode ? "bg-[#0a0a0f]" : "bg-[#fafafa]",
    bgAlt: darkMode ? "bg-[#12121a]" : "bg-white",
    bgCard: darkMode ? "bg-[#16161f]" : "bg-white",
    text: darkMode ? "text-[#e4e4e7]" : "text-[#18181b]",
    textMuted: darkMode ? "text-[#71717a]" : "text-[#52525b]",
    accent: "text-[#3b82f6]",
    accentBg: "bg-[#3b82f6]",
    border: darkMode ? "border-[#27272a]" : "border-[#e4e4e7]",
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, theme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
}
