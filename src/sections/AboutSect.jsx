import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import myPhoto from '../assets/myPhoto.jpg'; // Pastikan fotomu ada di sini

const AboutSect = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        anime({
          targets: '.about-reveal',
          translateY: [50, 0],
          opacity: [0, 1],
          delay: anime.stagger(200),
          easing: 'easeOutExpo',
          duration: 1200
        });
      }
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative z-10 bg-manga-panel overflow-hidden border-y border-manga-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* KIRI: Foto & Spotify Widget */}
        
        <div className="md:col-span-5 flex flex-col items-start about-reveal opacity-0">
          <div className="relative aspect-[3/4] w-full max-w-sm border border-manga-border bg-manga-bg p-3 shadow-2xl">
            <div className="w-full h-full relative overflow-hidden">
              <img src={myPhoto} alt="Aditya Febrian Profile" className="w-full h-full object-cover manga-image-filter" />
              <div className="absolute inset-0 bg-gradient-to-t from-manga-bg to-transparent opacity-60"></div>
            </div>
            
            {/* Spotify Widget */}
            <div className="absolute -bottom-6 -right-6 md:-right-12 bg-manga-panel border border-manga-border p-4 shadow-xl flex items-center gap-4 z-20 min-w-[240px]">
              <div className="w-12 h-12 bg-manga-border overflow-hidden">
                <img src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=200&grayscale=1" alt="Album Cover" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-[9px] font-mono tracking-widest text-manga-accent flex items-center gap-2 mb-1">
                  NOW PLAYING 
                  <span className="flex items-end gap-[2px] h-3">
                    <span className="w-[2px] bg-manga-accent animate-[bounce_1s_infinite] h-2"></span>
                    <span className="w-[2px] bg-manga-accent animate-[bounce_1.2s_infinite] h-3"></span>
                    <span className="w-[2px] bg-manga-accent animate-[bounce_0.8s_infinite] h-1"></span>
                  </span>
                </p>
                <p className="text-sm font-bold text-manga-accent leading-tight">White Ferrari</p>
                <p className="text-xs text-manga-muted">Frank Ocean</p>
              </div>
            </div>
          </div>
        </div>

        

        {/* KANAN: Text About Me */}
        <div className="md:col-span-7 space-y-6 about-reveal opacity-0 mt-12 md:mt-0">
          <h2 className="text-4xl md:text-6xl font-light text-manga-accent tracking-tight">The Architect</h2>
          
          <div className="space-y-4 font-sans text-manga-muted leading-relaxed text-sm md:text-base">
            <p>
              Halo, saya <span className="text-manga-accent font-semibold">Aditya Febrian</span>. Seorang mahasiswa program studi Teknologi Informasi di UIN Antasari yang memiliki dedikasi tinggi dalam merakit pengalaman digital.
            </p>
            <p>
              Fokus utama saya terletak pada eksplorasi dan pengembangan web menggunakan framework seperti Laravel, rekayasa basis data dengan MySQL, hingga perancangan antarmuka menggunakan React. 
            </p>
            <p>
              Bagi saya, baris kode bukan sekadar instruksi mesin, melainkan medium untuk menceritakan fungsi melalui desain yang bersih dan arsitektur yang kokoh. Di luar pengembangan perangkat lunak konvensional, saya juga secara aktif memperluas wawasan ke ranah keamanan siber defensif.
            </p>
          </div>
        </div>

      </div>

      
    </section>
  );
};

export default AboutSect;