'use client';
import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function Home() {
  const [language, setLanguage] = useState('id');

  return (
    <>
      <Navbar language={language} onLanguageChange={setLanguage} />
      <Header language={language} />
      <About language={language} />
      <Work language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </>
  );
}
