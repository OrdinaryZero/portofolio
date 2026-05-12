import React, { useEffect, useState } from 'react';
import anime from 'animejs';

const titles = ["Interactive Builder", "Web Experience Crafter", "Creative Developer"];

const DynamicTitle = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Menghilang ke atas
      anime({
        targets: '.dynamic-text-anim',
        opacity: [1, 0],
        translateY: [0, -10],
        duration: 400,
        easing: 'easeInQuad',
        complete: () => {
          setIndex((prev) => (prev + 1) % titles.length);
          // Muncul dari bawah
          anime({
            targets: '.dynamic-text-anim',
            opacity: [0, 1],
            translateY: [10, 0],
            duration: 600,
            easing: 'easeOutQuad'
          });
        }
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-xl md:text-2xl text-manga-muted font-sans mt-2 dynamic-text-anim will-change-transform">
      {titles[index]}
    </div>
  );
};

export default DynamicTitle;