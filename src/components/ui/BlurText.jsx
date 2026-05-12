import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const BlurText = ({ text, className = "" }) => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className={`${className} flex flex-wrap`}>
      {text.split('').map((char, index) => (
        <span 
          key={index} 
          className="blur-char inline-block opacity-0 filter blur-[15px] translateY-[20px] will-change-transform"
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

export default BlurText;