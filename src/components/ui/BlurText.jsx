import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const BlurText = ({ text, className = "", delay = 0 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const chars = containerRef.current.querySelectorAll('.blur-char');
    
    anime({
      targets: chars,
      opacity: [0, 1],
      filter: ['blur(15px)', 'blur(0px)'], // Cinematic Focus Pull
      translateY: [20, 0],
      duration: 1200,
      delay: anime.stagger(40, { start: delay }),
      easing: 'easeOutQuart'
    });
  }, [delay]);

  return (
    <div ref={containerRef} className={className}>
      {text.split('').map((char, index) => (
        <span 
          key={index} 
          className={`blur-char inline-block opacity-0 ${char === ' ' ? 'w-3' : ''}`}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default BlurText;