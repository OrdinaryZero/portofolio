import React, { useState, useEffect } from 'react';
import { useLenis } from './hooks/useLenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Navbar from './components/layout/Navbar';
import HeroSect from './sections/HeroSect';
import AboutSect from './sections/AboutSect';
import ProjectsSect from './sections/ProjectsSect';
import ContactSect from './sections/ContactSect';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useLenis();

  useEffect(() => {
    // Refresh ScrollTrigger after layout updates
    setTimeout(() => ScrollTrigger.refresh(), 100);
  }, []);

  return (
    <div className="bg-manga-white text-manga-black min-h-screen selection:bg-manga-crimson selection:text-manga-white font-sans">
      <Navbar />
      <main className="relative z-0 pt-20">
        <HeroSect />
        <AboutSect />
        <ProjectsSect />
        <ContactSect />
      </main>
      <footer className="py-12 border-t-4 border-manga-black text-center font-display text-2xl tracking-widest mt-20">
        © {new Date().getFullYear()} Aditya Febrian // TO BE CONTINUED...
      </footer>
    </div>
  );
}

export default App;