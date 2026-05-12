import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import myPhoto from "../../assets/myPhoto.jpg";

const StoryboardPanels = () => {
  const cardRef = useRef(null);
  const glareRef = useRef(null);

  useEffect(() => {
    anime({
      targets: cardRef.current,
      rotateX: () => anime.random(-8, 8),
      rotateY: () => anime.random(-15, 15),
      scale: [1, 1.03],
      duration: 5000,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine'
    });
    anime({
      targets: glareRef.current,
      backgroundPositionX: ['-50%', '150%'],
      backgroundPositionY: ['-50%', '150%'],
      duration: 8000, loop: true, easing: 'linear'
    });
  }, []);

  return (
    <div className="perspective-container preserve-3d w-full max-w-sm ml-auto relative aspect-[3/4] origin-bottom-right">
      <div ref={cardRef} className="will-change-transform transform-style-3d bg-manga-panel border border-manga-border p-3 flex flex-col h-full shadow-2xl relative overflow-hidden group">
        
        <div ref={glareRef} className="absolute inset-0 z-20 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 60%)', backgroundSize: '200% 200%', opacity: 0.5 }}></div>

        {/* --- GANTI "src" DI BAWAH INI DENGAN FOTOMU NANTI --- */}
        <div className="w-full h-full relative overflow-hidden bg-manga-bg" style={{ transform: 'translateZ(10px)' }}>
          <img 
            src={myPhoto} 
            alt="My Photo" 
            className="w-[120%] h-[120%] object-cover manga-image-filter group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-manga-panel to-transparent opacity-80"></div>
        </div>
        
        {/* Teks Melayang (Parallax) */}
        <div className="absolute bottom-6 left-6 font-sans space-y-1 z-10" style={{ transform: 'translateZ(30px)' }}>
          <p className="text-[10px] font-mono tracking-widest uppercase opacity-70 text-manga-accent">PROFILE_DATA</p>
          <h3 className="text-xl font-bold tracking-tighter uppercase leading-none text-manga-accent">Ordinaryfeb</h3>
        </div>
      </div>
    </div>
  );
};

export default StoryboardPanels;