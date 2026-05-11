import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (scrollHeight > 0) {
        setProgress((currentScroll / scrollHeight) * 100);
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 right-0 h-full w-1 z-50 flex flex-col justify-between items-center py-10 pointer-events-none">
      <div className="font-mono text-[10px] text-muted-text rotate-90 opacity-50">START</div>
      <div className="w-[2px] h-[60vh] bg-gray-800 rounded-full relative overflow-hidden glass-morphism">
        <div 
          className="absolute top-0 left-0 w-full bg-cyan-glow shadow-neon-cyan rounded-full transition-transform duration-100 ease-linear"
          style={{ height: `${progress}%` }}
        />
      </div>
      <div className="font-mono text-[10px] text-muted-text rotate-90 opacity-50">END</div>
    </div>
  );
};

export default ScrollProgress;