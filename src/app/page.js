'use client';
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function Home() {
  const [language, setLanguage] = useState('id');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''}`}>
      <div className='min-h-screen text-gray-900 transition-colors duration-500 bg-[radial-gradient(circle_at_top,_#ffffff_0%,_#f5f8ff_45%,_#edf3ff_100%)] dark:bg-[radial-gradient(circle_at_top,_#111827_0%,_#0a1020_45%,_#050814_100%)] dark:text-gray-100'>
        <Navbar
          language={language}
          onLanguageChange={setLanguage}
          theme={theme}
          onThemeChange={setTheme}
        />
        <Header language={language} />
        <About language={language} />
        <Work language={language} />
        <Contact language={language} />
        <Footer language={language} />
      </div>
    </div>
  );
}
