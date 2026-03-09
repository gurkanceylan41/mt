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
    bg: darkMode ? "bg-[#0a0a0a]" : "bg-[#ffffff]",
    bgAlt: darkMode ? "bg-[#111111]" : "bg-[#fafaf8]",
    bgCard: darkMode ? "bg-[#161616]" : "bg-[#ffffff]",
    text: darkMode ? "text-[#f0ede8]" : "text-[#111111]",
    textMuted: darkMode ? "text-[#8a8580]" : "text-[#6b6b6b]",
    accent: darkMode ? "text-[#c4a265]" : "text-[#9a7740]",
    accentBg: darkMode ? "bg-[#c4a265]" : "bg-[#9a7740]",
    accentHex: darkMode ? "#c4a265" : "#9a7740",
    border: darkMode ? "border-[#2a2825]" : "border-[#e8e5df]",
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
