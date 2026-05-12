import React from 'react';
import DynamicTitle from '../components/ui/DynamicTitle';
import StoryboardPanels from '../components/ui/StoryboardPanels';
import BlurText from '../components/ui/BlurText';
import heroCharacter from '../assets/hero-character.png'; 

const HeroSect = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative z-10 pt-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-7xl mx-auto items-center">
        
        {/* KOLOM KIRI - TEKS & INFO */}
        <div className="space-y-8 relative z-20">
          <div className="font-jp text-manga-muted text-sm tracking-widest opacity-60">
            第一章 // VOL.01
          </div>
          
          <div>
            <BlurText 
              text="Ordinary Zero" 
              className="text-5xl md:text-7xl font-semibold text-manga-accent tracking-tight" 
              delay={1500} // Muncul setelah loading screen selesai
            />
            <DynamicTitle />
          </div>

          <p className="font-sans text-manga-muted max-w-md leading-relaxed text-base pt-2">
            Building <span className="text-manga-accent">clean</span>, artistic, and interactive digital experiences with a minimalist philosophy and cinematic manga aesthetic.
          </p>

          <div className="pt-4 flex flex-col gap-6">
            <button className="w-fit group relative px-8 py-3 text-sm tracking-widest uppercase text-manga-bg bg-manga-accent overflow-hidden transition-colors">
              <span className="relative z-10">Mulai Membaca // START</span>
              <div className="absolute inset-0 bg-manga-muted transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-0"></div>
            </button>

            {/* TRAITS CAROUSEL */}
            <div className="w-full max-w-md marquee-container border-y border-manga-border/50 py-3 mt-2">
              <div className="marquee-content font-mono text-[10px] tracking-[0.2em] text-manga-muted uppercase">
                CREATIVE THINKER • HIGHLY ADAPTABLE • PROBLEM SOLVER • TECH ENTHUSIAST • CONTINUOUS LEARNER • DETAIL ORIENTED • CREATIVE THINKER • HIGHLY ADAPTABLE • PROBLEM SOLVER • 
              </div>
            </div>

            {/* SOCIAL MEDIA BUTTONS (Native SVG - 100% Anti Error) */}
            <div className="flex gap-4 justify-end"> {/* Menambahkan justify-end di sini */}
  {/* Instagram */}
  <a href="#" className="p-3 border border-manga-border hover:border-manga-accent text-manga-muted hover:text-manga-accent transition-all duration-300">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  </a>
              
              {/* Github */}
              <a href="https://github.com/OrdinaryZero" target="_blank" rel="noreferrer" className="p-3 border border-manga-border hover:border-manga-accent text-manga-muted hover:text-manga-accent transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              
              {/* Discord (Disc) */}
              <a href="#" className="p-3 border border-manga-border hover:border-manga-accent text-manga-muted hover:text-manga-accent transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="2"/></svg>
              </a>
              
              {/* Message */}
              <a href="#" className="p-3 border border-manga-border hover:border-manga-accent text-manga-muted hover:text-manga-accent transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* KOLOM KANAN - VISUAL (KARAKTER & PANELS) */}
        <div className="w-full hidden lg:flex justify-end relative aspect-square h-full">
          
          {/* 2. GAMBAR KARAKTER PNG (Posisi di belakang Storyboard) */}
          <div className="absolute inset-0 flex justify-end items-end z-0">
             <img 
               src={heroCharacter} 
               alt="Hero Character" 
               className="h-[110%] w-auto object-contain origin-bottom scale-110 manga-image-filter opacity-80 will-change-transform"
               style={{
                 filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.05)) grayscale(100%) contrast(120%) brightness(0.9)'
               }}
             />
          </div>

          {/* 3. STORYBOARD PANELS */}
          <div className="relative z-10 w-full flex justify-end items-center">
            <StoryboardPanels />
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSect;