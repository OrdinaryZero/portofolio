import React, { useRef, useState } from 'react';
import anime from 'animejs';

const TiltedCard = ({ children, className = "" }) => {
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !glareRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Hitung rotasi 3D (Max tilt 15 derajat)
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    // Hitung posisi pantulan cahaya (Glare)
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    anime({
      targets: cardRef.current,
      rotateX: rotateX,
      rotateY: rotateY,
      scale: 1.05,
      duration: 100,
      easing: 'easeOutQuad'
    });

    glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.15) 0%, transparent 60%)`;
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!cardRef.current || !glareRef.current) return;
    
    anime({
      targets: cardRef.current,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 800,
      easing: 'easeOutElastic(1, .5)'
    });
    glareRef.current.style.background = 'transparent';
  };

  return (
    <div className={`relative perspective-1000 ${className}`}>
      <div 
        ref={cardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full h-full relative transform-style-3d cursor-pointer shadow-xl transition-shadow duration-500 hover:shadow-2xl"
      >
        {/* Lapisan Pantulan Cahaya (Glare) */}
        <div 
          ref={glareRef} 
          className="absolute inset-0 z-20 pointer-events-none rounded-sm transition-opacity duration-300"
          style={{ opacity: isHovered ? 1 : 0 }}
        ></div>
        
        {/* Konten Asli */}
        <div className="w-full h-full transform-style-3d bg-manga-bg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TiltedCard;