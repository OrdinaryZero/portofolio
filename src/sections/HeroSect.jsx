import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import gsap from 'gsap';

const HeroSect = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  
  useEffect(() => {
    // Anime.js for text stagger (Manga reveal effect)
    if (textRef.current) {
      const text = textRef.current.innerText;
      textRef.current.innerHTML = text.split('').map(char => 
        `<span class="hero-char inline-block opacity-0 translate-y-10 ${char === ' ' ? 'w-4' : ''}">${char}</span>`
      ).join('');

      anime({
        targets: '.hero-char',
        translateY: [50, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1200,
        delay: anime.stagger(50, {start: 300})
      });
    }

    // GSAP Parallax Paneling
    gsap.to('.manga-sfx', {
      y: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex flex-col md:flex-row px-6 md:px-12 gap-6 pt-10 pb-20 clip-diagonal">
      
      {/* Left Panel - Image/Halftone */}
      <div className="manga-panel flex-1 min-h-[50vh] flex items-center justify-center overflow-hidden group">
        <div className="absolute inset-0 halftone-bg opacity-40"></div>
        <div className="absolute inset-0 speed-lines scale-150 group-hover:rotate-45 transition-transform duration-1000"></div>
        {/* Japanese Vertical Text */}
        <div className="absolute left-4 top-4 text-6xl md:text-8xl font-jp font-black text-manga-black opacity-10" style={{ writingMode: 'vertical-rl' }}>
          開発者
        </div>
        
        <div className="relative z-10 p-8 border-4 border-manga-black bg-manga-white shadow-manga rotate-[-2deg] group-hover:rotate-0 transition-transform">
          <h2 className="font-display text-5xl md:text-7xl text-manga-crimson">VOL. 1</h2>
          <p className="font-sans font-bold text-xl mt-2">THE AWAKENING</p>
        </div>
      </div>

      {/* Right Panel - Typography */}
      <div className="flex-1 flex flex-col justify-center gap-6 relative">
        {/* SFX Text */}
        <div className="manga-sfx absolute -top-10 right-0 font-jp text-6xl text-manga-gray font-black opacity-30 select-none">
          ゴゴゴゴ...
        </div>

        <div className="border-l-8 border-manga-crimson pl-6">
          <p className="font-sans font-bold text-manga-crimson tracking-widest mb-4">Aditya Febrian // CHAPTER 01</p>
          <h1 ref={textRef} className="text-7xl md:text-[9rem] font-display leading-[0.85] tracking-tight uppercase">
            Frontend
            <br />
            Architect
          </h1>
          <p className="mt-8 text-xl font-sans font-medium max-w-md border-2 border-manga-black p-4 shadow-manga-sm bg-manga-white">
            IT Student at UIN Antasari. Membangun fondasi digital dan struktur data yang kokoh dengan estetika visual tanpa kompromi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSect;