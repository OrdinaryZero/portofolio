import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const LoadingIntro = ({ onComplete }) => {
  const containerRef = useRef(null);
  const charRef = useRef(null);
  const textRef = useRef(null);
  const jpTextRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden'; 

    const tl = anime.timeline({
      easing: 'easeInOutSine', // Very soft easing
      complete: () => {
        document.body.style.overflow = '';
        onComplete();
      }
    });

    tl.add({
      targets: charRef.current,
      scale: [1.1, 1],
      opacity: [0, 0.5],
      duration: 4000,
    })
    .add({
      targets: jpTextRef.current,
      opacity: [0, 0.8],
      translateY: [20, 0],
      duration: 2000,
    }, '-=3000')
    .add({
      targets: textRef.current,
      opacity: [0, 1],
      letterSpacing: ['0.5em', '0.2em'],
      duration: 2000,
    }, '-=2000')
    // Cinematic Fade out
    .add({
      targets: containerRef.current,
      opacity: 0,
      duration: 2000,
      easing: 'easeInOutQuad',
    }, '+=1500');
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] bg-manga-bg flex items-center justify-center overflow-hidden">
      {/* Manga Line Art/Character Background */}
      <div ref={charRef} className="absolute inset-0 flex items-center justify-center opacity-0 origin-center">
        <img 
          src="https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=1920&grayscale=1" 
          alt="Artistic Character" 
          className="w-full h-full object-cover mix-blend-screen opacity-40 manga-image-filter"
        />
        {/* Soft Vignette */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-manga-bg"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div ref={jpTextRef} className="font-jp text-manga-muted text-2xl md:text-4xl opacity-0 mb-6 tracking-widest" style={{ writingMode: 'vertical-rl' }}>
          静かなる世界へ
        </div>
        <h1 ref={textRef} className="font-sans text-xs md:text-sm text-manga-accent tracking-[0.2em] uppercase opacity-0">
          Entering Archives
        </h1>
      </div>
    </div>
  );
};

export default LoadingIntro;