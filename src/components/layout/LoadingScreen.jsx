import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const LoadingScreen = ({ onComplete }) => {
  const counterRef = useRef(null);
  const barRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const loaderData = { value: 0 };

    // Timeline Animasi Loading
    const tl = anime.timeline({
      complete: () => {
        // Animasi keluar sinematik
        anime({
          targets: containerRef.current,
          opacity: 0,
          translateY: '-100%',
          duration: 1000,
          easing: 'easeInOutExpo',
          complete: onComplete
        });
      }
    });

    tl
    // 1. Counter text animation
    .add({
      targets: loaderData,
      value: 100,
      round: 1,
      duration: 2500,
      easing: 'easeInOutQuad',
      update: () => {
        if (counterRef.current) {
          counterRef.current.innerText = `${loaderData.value}%`;
        }
      }
    })
    // 2. Progress bar sync
    .add({
      targets: barRef.current,
      width: '100%',
      duration: 2500,
      easing: 'easeInOutQuad',
    }, 0) // Mulai bersamaan dengan counter
    // 3. Glitch effect di akhir
    .add({
      targets: '.loading-text',
      opacity: [1, 0, 1, 0.5, 1],
      duration: 500,
      easing: 'linear'
    });

  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 bg-bg-dark z-[2000] flex flex-col justify-center items-center noise-overlay">
      <div className="w-full max-w-md px-10 text-center flex flex-col items-center">
        
        <div className="absolute inset-0 opacity-10 bg-futuristic-grid z-0"></div>
        
        <h1 className="loading-text text-4xl md:text-5xl font-extrabold mb-8 text-text-soft font-sans tracking-tighter z-10 relative">
          INITIALIZING<br/>
          <span className="text-cyan-glow shadow-neon-cyan">SYSTEM_OZ</span>
        </h1>
        
        <div className="font-mono text-cyan-glow mb-2 text-xl z-10 relative" ref={counterRef}>0%</div>
        
        
        <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden relative z-10 glass-morphism">
          
          <div ref={barRef} className="absolute top-0 left-0 h-full w-0 bg-accent-primary shadow-neon-blue rounded-full"></div>
        </div>
        
        <div className="font-mono text-muted-text text-xs mt-10 tracking-widest uppercase z-10 relative">
          Loading assets & Neural networks...
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;