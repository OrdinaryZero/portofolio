import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export const useLenis = (onScroll) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8, // Slightly longer duration for cinematic feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    if (onScroll) lenis.on('scroll', onScroll);

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [onScroll]);

  return lenisRef.current;
};