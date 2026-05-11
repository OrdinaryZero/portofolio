import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const secondaryCursorRef = useRef(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event;
      positionRef.current.mouseX = clientX;
      positionRef.current.mouseY = clientY;
      
      // Update primary dot langsung
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${clientX - 4}px, ${clientY - 4}px, 0)`;
      }
    });

    return () => {};
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const { mouseX, mouseY, destinationX, destinationY } = positionRef.current;
      
      // Easing untuk secondary cursor (glow)
      positionRef.current.destinationX = destinationX + (mouseX - destinationX) * 0.1;
      positionRef.current.destinationY = destinationY + (mouseY - destinationY) * 0.1;
      
      if (secondaryCursorRef.current) {
        secondaryCursorRef.current.style.transform = `translate3d(${destinationX - 20}px, ${destinationY - 20}px, 0)`;
      }
    };
    followMouse();
    
    return () => {
      cancelAnimationFrame(positionRef.current.key);
    };
  }, []);

  return (
    <>
      
      <div ref={cursorRef} className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[1000] mix-blend-difference" />
      
      <div ref={secondaryCursorRef} className="fixed top-0 left-0 w-10 h-10 border border-cyan-glow/50 rounded-full pointer-events-none z-[999] bg-cyan-glow/10 blur-sm shadow-neon-cyan transition-transform duration-100 ease-out" />
    </>
  );
};

export default CustomCursor;