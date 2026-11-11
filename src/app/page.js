"use client";

import { useCallback, useSyncExternalStore } from "react";
import { copy } from "@/data/portfolio";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function getPreference(key, fallback) {
  if (sessionPreferences[key]) return sessionPreferences[key];
  try {
    const saved = localStorage.getItem(key);
    if (key === "theme" && (saved === "dark" || saved === "light"))
      return saved;
    if (key === "language" && (saved === "id" || saved === "en")) return saved;
  } catch {
    /* Preferences still work when browser storage is unavailable. */
  }
  return key === "theme" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : fallback;
}

function applyPreferences() {
  const theme = getPreference("theme", "light");
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
  document.documentElement.lang = getPreference("language", "id");
}

function subscribe(callback) {
  const update = () => {
    applyPreferences();
    callback();
  };
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  window.addEventListener("storage", update);
  window.addEventListener("portfolio-preference", update);
  media.addEventListener("change", update);
  return () => {
    window.removeEventListener("storage", update);
    window.removeEventListener("portfolio-preference", update);
    media.removeEventListener("change", update);
  };
}

function usePreference(key, fallback) {
  const snapshot = useCallback(
    () => getPreference(key, fallback),
    [key, fallback],
  );
  const serverSnapshot = useCallback(() => fallback, [fallback]);
  const value = useSyncExternalStore(subscribe, snapshot, serverSnapshot);
  const setValue = (next) => {
    try {
      localStorage.setItem(key, next);
      delete sessionPreferences[key];
    } catch {
      sessionPreferences[key] = next;
    }
    if (key === "theme") {
      document.documentElement.classList.toggle("dark", next === "dark");
      document.documentElement.style.colorScheme = next;
    } else document.documentElement.lang = next;
    window.dispatchEvent(new Event("portfolio-preference"));
  };
  return [value, setValue];
}

const sessionPreferences = {};

export default function Home() {
  const [language, setLanguage] = usePreference("language", "id");
  const [theme, setTheme] = usePreference("theme", "light");
  const text = copy[language];

  return (
    <>
      <a href="#main" className="skip-link">
        {text.skip}
      </a>
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        theme={theme}
        onThemeChange={setTheme}
      />
      <main id="main">
        <Header language={language} />
        <About language={language} />
        <Experience language={language} />
        <Work language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </>
  );
}
