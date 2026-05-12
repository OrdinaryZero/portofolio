import React, { useState, useRef, useEffect } from 'react';
import anime from 'animejs';
import { useLenis } from './hooks/useLenis';
import Navbar from './components/layout/Navbar';
import HeroSect from './sections/HeroSect';
import ArchiveSect from './sections/ArchiveSect';
import GithubSect from './sections/GithubSect';
import ContactSect from './sections/ContactSect';
import Footer from './components/layout/Footer';
import LoadingIntro from './components/layout/LoadingIntro';
import SectionTransition from './components/ui/SectionTransition';

function App() {
  const [introDone, setIntroDone] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const bgImageRef = useRef(null);

  const toggleTheme = () => setIsLightMode(!isLightMode);
  const heroCharRef = useRef(null); 

  // ... toggle theme dll

  // Update Smooth Scroll Hook
  useLenis((e) => {
    // Animasi Parallax Background Samar (Sudah ada)
    if (bgImageRef.current) {
      bgImageRef.current.style.transform = `translateY(${window.scrollY * 0.15}px)`;
    }

    // --- TAMBAHKAN PARALLAX UNTUK KARAKTER HERO ---
    // Pastikan karakter di HeroSect diberi ref={heroCharRef}
    if (heroCharRef.current && introDone) {
      // Bergerak perlahan ke atas (kecepatan 0.08)
      heroCharRef.current.style.transform = `translateY(${window.scrollY * -0.08}px) scale(1.1)`;
    }
  });

  useEffect(() => {
    // Toggling the 'light-mode' class on the body
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  // ANIMASI FOTO BERGERAK (Subtle Pan & Zoom)
  useEffect(() => {
    if (introDone && bgImageRef.current) {
      anime({
        targets: bgImageRef.current,
        translateX: [-30, 30],
        translateY: [-20, 20],
        scale: [1.1, 1.2],
        duration: 25000,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine'
      });
    }
  }, [introDone]);

  useLenis();

  return (
    <div className="relative min-h-screen transition-colors duration-500">
      {/* MANGA TEXTURE OVERLAY */}
      <div className="manga-texture"></div>

      {!introDone && <LoadingIntro onComplete={() => setIntroDone(true)} />}

      {/* BACKGROUND FOTO BERGERAK (SAMAR) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-10">
        <img 
          ref={bgImageRef}
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1920&grayscale=1" 
          alt="Atmosphere" 
          className="w-[130%] h-[130%] -top-[15%] absolute object-cover manga-image-filter"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-manga-bg via-transparent to-manga-bg"></div>
      </div>

      {introDone && (
        <div className="relative z-10">
          <Navbar isLightMode={isLightMode} toggleTheme={toggleTheme} />
          <main>
            <HeroSect />
            
            {/* Transisi masuk ke Archive */}
            <SectionTransition 
              episode="Episode 02" 
              title="The Archives" 
              kanji="作品集" 
            />
            <ArchiveSect />

            {/* Transisi masuk ke Github Logs */}
            <SectionTransition 
              episode="Episode 03" 
              title="Dev Logs" 
              kanji="記録" 
            />
            <GithubSect />

            {/* Transisi masuk ke Contact */}
            <SectionTransition 
              episode="Final Episode" 
              title="Transmission" 
              kanji="連絡" 
            />
            <ContactSect />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;