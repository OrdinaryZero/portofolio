import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const StoryboardPanels = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const panels = containerRef.current.querySelectorAll('.story-panel');
    
    // Soft floating animation
    anime({
      targets: panels,
      translateY: () => anime.random(-15, 15),
      translateX: () => anime.random(-5, 5),
      rotate: () => anime.random(-2, 2),
      duration: 6000,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      delay: anime.stagger(500)
    });
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-md aspect-square mx-auto">
      {/* Panel 1 - Background */}
      <div className="story-panel absolute top-0 left-0 w-2/3 h-2/3 bg-manga-panel border border-manga-border p-2 shadow-2xl opacity-60">
        <div className="w-full h-full bg-manga-bg overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1544365558-35aa4afcf11f?q=80&w=600&grayscale=1" className="w-full h-full object-cover manga-image-filter opacity-50" alt="sketch 1" />
        </div>
      </div>

      {/* Panel 2 - Midground */}
      <div className="story-panel absolute bottom-10 right-0 w-3/5 h-1/2 bg-manga-panel border border-manga-border p-2 shadow-2xl z-10">
        <div className="w-full h-full bg-manga-bg overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1560961819-2ea5c21ce43f?q=80&w=600&grayscale=1" className="w-full h-full object-cover manga-image-filter" alt="sketch 2" />
        </div>
      </div>

      {/* Panel 3 - Foreground Typography */}
      <div className="story-panel absolute top-1/3 left-1/4 w-1/2 h-1/3 bg-manga-text text-manga-bg p-4 shadow-2xl z-20 flex flex-col justify-center">
        <span className="font-jp text-xs mb-1">ポートフォリオ</span>
        <span className="font-sans font-bold tracking-widest text-sm uppercase">Storyboard<br/>Sequence</span>
      </div>
    </div>
  );
};

export default StoryboardPanels;