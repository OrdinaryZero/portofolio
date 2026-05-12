import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

const titles = [
  "Frontend Architect",
  "Creative Developer",
  "Motion Designer",
  "Interactive Builder",
  "Web Experience Crafter"
];

const DynamicTitle = () => {
  const [index, setIndex] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      anime({
        targets: textRef.current,
        opacity: [1, 0],
        translateY: [0, 10],
        filter: ['blur(0px)', 'blur(4px)'],
        duration: 800,
        easing: 'easeInOutSine',
        complete: () => {
          setIndex((prev) => (prev + 1) % titles.length);
          anime({
            targets: textRef.current,
            opacity: [0, 1],
            translateY: [-10, 0],
            filter: ['blur(4px)', 'blur(0px)'],
            duration: 1200,
            easing: 'easeOutQuart'
          });
        }
      });
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2 
      ref={textRef} 
      className="text-3xl md:text-5xl font-light text-manga-text tracking-tight mt-2 manga-flicker"
    >
      {titles[index]}
    </h2>
  );
};

export default DynamicTitle;