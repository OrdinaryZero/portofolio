import React, { useEffect, useRef, useState } from 'react';

const SectionTransition = ({ episode, title, kanji }) => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId;
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const start = window.scrollY + rect.top;
      // Menghitung total jarak scroll di dalam komponen ini
      const distance = rect.height - window.innerHeight;
      
      // Menghasilkan nilai 0 sampai 1 berdasarkan posisi scroll
      let p = (window.scrollY - start) / distance;
      p = Math.max(0, Math.min(1, p)); // Mengunci nilai agar tidak minus/lebih
      setProgress(p);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // Pengecekan awal
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // --- Perhitungan Animasi ---
  // Kanji bergerak dari kiri ke kanan saat discroll
  const kanjiTranslate = (progress * 100) - 50; 
  // Layar membelah dari tengah ke atas-bawah (0% sampai 50%)
  const clipInset = 50 - (progress * 50); 
  // Teks membesar perlahan
  const textScale = 0.8 + (progress * 0.4);

  return (
    // h-[200vh] memaksa user melakukan scroll panjang sementara elemen di dalamnya terkunci
    <div ref={containerRef} className="h-[200vh] relative z-20">
      <div className="sticky top-0 h-screen w-full bg-manga-panel flex items-center justify-center overflow-hidden border-y border-manga-border/30">
        
        {/* Parallax Huruf Kanji Raksasa di Background */}
        <div 
          className="absolute font-jp text-[40vw] font-black text-manga-bg whitespace-nowrap opacity-40 select-none"
          style={{ transform: `translateX(${kanjiTranslate}vw)` }}
        >
          {kanji} {kanji}
        </div>

        {/* Panel yang Melebar (Reveal Effect) */}
        <div 
          className="absolute inset-0 bg-manga-bg flex flex-col items-center justify-center z-10"
          style={{ clipPath: `inset(${clipInset}% 0 ${clipInset}% 0)` }}
        >
          {/* Efek Garis Tepi ala Panel Komik */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-manga-accent opacity-30"></div>
          <div className="absolute inset-x-0 bottom-0 h-[1px] bg-manga-accent opacity-30"></div>

          <p className="font-mono text-xs md:text-sm tracking-[0.5em] mb-4 text-manga-muted uppercase">
            // {episode}
          </p>
          <h2 
            className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter text-manga-accent"
            style={{ transform: `scale(${textScale})` }}
          >
            {title}
          </h2>
        </div>
        
      </div>
    </div>
  );
};

export default SectionTransition;