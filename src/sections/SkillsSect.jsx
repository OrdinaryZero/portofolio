import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { useScrollTrigger } from '../hooks/useScrollTrigger';
import { skillsData } from '../utils/dummyData';

const SkillsSect = () => {
  const sectionRef = useRef(null);
  const orbitRef = useRef(null);

  const [triggerRef, isTriggered] = useScrollTrigger({ threshold: 0.3 });

  useEffect(() => {
    if (isTriggered) {
      const tl = anime.timeline({ easing: 'easeOutExpo' });

      tl
      .add({
        targets: sectionRef.current.querySelector('.section-title'),
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
      })
      // Reveal Icons Staggered
      .add({
        targets: '.skill-icon-reveal',
        opacity: [0, 1],
        scale: [0.5, 1],
        translateY: [50, 0],
        duration: 1200,
        delay: anime.stagger(100, {grid: [3, 2], from: 'center'}),
        easing: 'easeOutElastic(1, .6)'
      }, '-=600')
      // Perspective Shift Orbit (2D illusion to 3D feel)
      .add({
        targets: orbitRef.current,
        rotateX: [70, 45], // Morph perspective
        opacity: [0, 1],
        duration: 2000,
        easing: 'easeInOutQuint'
      }, '-=1000');
      
      // Floating animation continuous for orbit items
      anime({
        targets: '.orbit-item',
        translateY: () => anime.random(-15, 15),
        translateX: () => anime.random(-10, 10),
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine',
        duration: () => anime.random(3000, 5000),
        delay: anime.stagger(200)
      });
    }
  }, [isTriggered]);

  return (
    <section ref={triggerRef} id="skills" className="min-h-screen py-24 px-6 md:px-12 relative overflow-hidden perspective-container noise-overlay">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-futuristic-grid opacity-5 z-0 mask-gradient-r"></div>

      <div ref={sectionRef} className="max-w-7xl mx-auto relative z-10 transform-style-3d">
        <div className="mb-20 text-center space-y-2 opacity-0 translateY-50 section-title">
          <div className="font-mono text-cyan-glow tracking-widest text-sm">_SYSTEM // TECH_STACK_</div>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-text-soft font-sans">
            Neural Skill Orbit
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto pt-4 leading-relaxed font-light">
            Core arsenal yang saya gunakan untuk memanifestasikan visi kompleks menjadi arsitektur sistem yang efisien.
          </p>
        </div>

        {/* Orbit Illusion Container */}
        <div className="relative flex justify-center items-center min-h-[60vh] perspective-container">
            
            {/* Center Core visual */}
            <div className="absolute w-32 h-32 rounded-full glass-morphism border-2 border-accent-primary flex items-center justify-center shadow-neon-blue z-20 opacity-0 scale-50 skill-icon-reveal noise-overlay">
                <span className="font-mono text-cyan-glow text-xl tracking-tighter shadow-neon-cyan">CORE_OZ</span>
                <div className="absolute inset-0 w-full h-full bg-accent-primary blur-3xl opacity-30 rounded-full"></div>
            </div>

            {/* Orbiting Items Container - Rotated perspective */}
            <div ref={orbitRef} className="relative w-full max-w-5xl h-full flex justify-center items-center opacity-0 transform-style-3d"
                style={{ transform: 'rotateX(70deg)' }} // Initial flatter 2D feel
            >
                {/* Orbit Rings visual */}
                <div className="absolute w-[600px] h-[600px] border border-white/5 rounded-full z-0 transform-style-3d"></div>
                <div className="absolute w-[400px] h-[400px] border border-dashed border-cyan-glow/10 rounded-full z-0 transform-style-3d"></div>

                {skillsData.map((skill, index) => {
                    const angle = (index / skillsData.length) * Math.PI * 2;
                    const radius = 300; // Radius orbit
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    const Icon = skill.icon;

                    return (
                        <div key={skill.name} className="absolute orbit-item transform-style-3d z-10"
                            style={{ 
                                transform: `translate3d(${x}px, ${y}px, 0) rotateX(-45deg)`, // Counter rotate to keep upright
                            }}
                        >
                            <div className="flex flex-col items-center gap-3 p-5 glass-morphism rounded-xl border border-white/10 noise-overlay opacity-0 scale-50 skill-icon-reveal hover:border-cyan-glow/30 hover:shadow-neon-cyan transition-all cursor-pointer group"
                                style={{ boxShadow: `0 0 20px ${skill.color}20` }}
                            >
                                <Icon className="w-10 h-10 group-hover:scale-110 transition-transform" style={{ color: skill.color, filter: `drop-shadow(0 0 10px ${skill.color}80)` }} />
                                <div className="font-mono text-[10px] text-text-soft tracking-tight text-center max-w-[80px] leading-tight">{skill.name}</div>
                                
                                {/* Progress dot kustom */}
                                <div className="w-full h-1 bg-gray-800 rounded-full mt-1 overflow-hidden">
                                    <div className="h-full rounded-full" style={{ width: `${skill.level}%`, backgroundColor: skill.color }}></div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSect;