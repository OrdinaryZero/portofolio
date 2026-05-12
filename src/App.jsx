import React, { useState, useRef, useEffect } from 'react';
import anime from 'animejs';

import { useLenis } from './hooks/useLenis';

import LoadingIntro from './components/layout/LoadingIntro';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import SectionTransition from './components/ui/SectionTransition';

import HeroSect from './sections/HeroSect';
import AboutSect from './sections/AboutSect'; 
import ArchiveSect from './sections/ArchiveSect';
import GithubSect from './sections/GithubSect';
import ContactSect from './sections/ContactSect';

import myBg from './assets/bg.jpg';

function App() {
  const [introDone, setIntroDone] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  const bgImageRef = useRef(null);

  const toggleTheme = () => setIsLightMode(!isLightMode);

  useEffect(() => {
    document.body.className = isLightMode ? 'light-mode' : '';
  }, [isLightMode]);

  useEffect(() => {
    if (introDone) {
      anime({
        targets: bgImageRef.current,
        translateX: [-30, 30],
        translateY: [-20, 20],
        scale: [1.1, 1.15],
        duration: 15000,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine',
      });

      anime({
        targets: '.social-link-floating',
        translateY: () => anime.random(-5, 5),
        duration: () => anime.random(2000, 4000),
        delay: anime.stagger(200),
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine',
      });
    }
  }, [introDone]);

  const onLoadingComplete = () => {
    document.body.style.overflow = '';

    const tl = anime.timeline({
      easing: 'easeOutQuart',
    });

    tl
      .add({
        targets: '.navbar-main',
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 800,
      })

      .add({
        targets: '.hero-left-cascade',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(150),
        duration: 800,
      }, '-=400')

      .add({
        targets: '.blur-char',
        opacity: [0, 1],
        filter: ['blur(15px)', 'blur(0px)'],
        translateY: [20, 0],
        delay: anime.stagger(40),
        duration: 1000,
      }, '-=600')

      .add({
        targets: '.hero-character',
        opacity: [0, 1],
        scale: [1.05, 1.1],
        duration: 1200,
      }, '-=800')

      .add({
        targets: '.storyboard-card',
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 800,
        easing: 'easeOutBack',
      }, '-=800');

    tl.complete = () => setIntroDone(true);
  };

  useLenis();

  return (
    <div className="relative min-h-screen transition-colors duration-500">
      <div className="noise-bg"></div>

      {!introDone && (
        <LoadingIntro onComplete={onLoadingComplete} />
      )}

      {/* BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-10">
        <img
          ref={bgImageRef}
          src={myBg}
          alt="Ambient Background"
          className="w-[120%] h-[120%] absolute object-cover manga-image-filter will-change-transform"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-manga-bg via-transparent to-manga-bg"></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10">
        <Navbar
          isLightMode={isLightMode}
          toggleTheme={toggleTheme}
        />

        <main>
          {/* 1. HERO */}
          <HeroSect />
          {/* h-0 digunakan agar container ini tidak memakan ruang (tidak memenggal bg) */}
          <div className="relative w-full h-0 flex items-center justify-center z-30 pointer-events-none">
            
            {/* Garis 1 (Putih) - Dengan Shadow Tajam agar terlihat melayang */}
            <div className="absolute w-[150%] bg-manga-accent text-manga-bg py-4 transform rotate-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,1)] z-10 border-y border-black/10">
              <div className="marquee-container w-full">
                <div className="marquee-content font-display font-bold text-xs md:text-base tracking-[0.3em] uppercase whitespace-nowrap">
                  CREATIVE THINKER // HIGHLY ADAPTABLE // PROBLEM SOLVER // TECH ENTHUSIAST // CONTINUOUS LEARNER // DETAIL ORIENTED // CREATIVE THINKER // HIGHLY ADAPTABLE //
                </div>
              </div>
            </div>

            {/* Garis 2 (Hitam) - Melintang di atas garis putih */}
            <div className="absolute w-[150%] bg-manga-bg text-manga-accent py-4 border-y-2 border-manga-accent transform -rotate-2 shadow-[0_45px_70px_-20px_rgba(0,0,0,1)] z-20">
              <div className="marquee-container w-full">
                <div 
                  className="marquee-content font-display font-bold text-xs md:text-base tracking-[0.3em] uppercase whitespace-nowrap"
                  style={{ animationDirection: 'reverse', animationDuration: '25s' }}
                >
                  SYSTEM ARCHITECT // FRONTEND DEVELOPER // BACKEND ENGINEER // UI/UX ENTHUSIAST // CYBERSECURITY LEARNER // SYSTEM ARCHITECT // FRONTEND DEVELOPER //
                </div>
              </div>
            </div>
            
          </div>
          

          {/* 2. ABOUT ME SECTION */}
          <SectionTransition
            episode="Chapter 01"
            title="The Architect"
            kanji="自己紹介"
          />
          <AboutSect />

          {/* 3. TECH ARSENAL / GITHUB SECTION */}
          <GithubSect />

          {/* ========================================================== */}
          {/* X-SHAPED POLICE LINE (PINDAH KE BAWAH ARSENAL & NYAMBUNG)  */}
          {/* ========================================================== */}
          {/* h-0 digunakan agar container ini tidak memakan ruang (tidak memenggal bg) */}
          <div className="relative w-full h-0 flex items-center justify-center z-30 pointer-events-none">
            
            {/* Garis 1 (Putih) - Dengan Shadow Tajam agar terlihat melayang */}
            <div className="absolute w-[150%] bg-manga-accent text-manga-bg py-4 transform rotate-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,1)] z-10 border-y border-black/10">
              <div className="marquee-container w-full">
                <div className="marquee-content font-display font-bold text-xs md:text-base tracking-[0.3em] uppercase whitespace-nowrap">
                  CREATIVE THINKER // HIGHLY ADAPTABLE // PROBLEM SOLVER // TECH ENTHUSIAST // CONTINUOUS LEARNER // DETAIL ORIENTED // CREATIVE THINKER // HIGHLY ADAPTABLE //
                </div>
              </div>
            </div>

            {/* Garis 2 (Hitam) - Melintang di atas garis putih */}
            <div className="absolute w-[150%] bg-manga-bg text-manga-accent py-4 border-y-2 border-manga-accent transform -rotate-2 shadow-[0_45px_70px_-20px_rgba(0,0,0,1)] z-20">
              <div className="marquee-container w-full">
                <div 
                  className="marquee-content font-display font-bold text-xs md:text-base tracking-[0.3em] uppercase whitespace-nowrap"
                  style={{ animationDirection: 'reverse', animationDuration: '25s' }}
                >
                  SYSTEM ARCHITECT // FRONTEND DEVELOPER // BACKEND ENGINEER // UI/UX ENTHUSIAST // CYBERSECURITY LEARNER // SYSTEM ARCHITECT // FRONTEND DEVELOPER //
                </div>
              </div>
            </div>
            
          </div>
          {/* ========================================================== */}

          {/* 4. ARCHIVE SECTION */}
          <SectionTransition
            episode="Chapter 02"
            title="The Archives"
            kanji="作品集"
          />
          <ArchiveSect />

          {/* 5. CONTACT SECTION */}
          <SectionTransition
            episode="Final Chapter"
            title="Transmission"
            kanji="連絡"
          />
          <ContactSect />
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
}

export default App;