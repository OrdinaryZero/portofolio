import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { useScrollTrigger } from '../hooks/useScrollTrigger';
import { BriefcaseBusiness, School, Milestone } from 'lucide-react';

const events = [
  { type: 'work', icon: BriefcaseBusiness, date: '2022 - PRESENT', title: 'Senior Neural Architect', company: 'SYNETIX_AI // TOKYO' },
  { type: 'milestone', icon: Milestone, date: '2021', title: 'OSS_CONTRIBUTOR // 500+ Stars', company: 'GITHUB // GLOBAL' },
  { type: 'work', icon: BriefcaseBusiness, date: '2020 - 2022', title: 'Fullstack Systems Engineer', company: 'CYBERDYNE_SYSTEMS // MINIMALIST' },
  { type: 'school', icon: School, date: '2016 - 2020', title: 'B.Sc. Neural Computation', company: 'QUANTUM_UNIVERSITY // CYBER_DEPT' },
];

const JourneySect = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const lineGlowRef = useRef(null);

  const [triggerRef, isTriggered] = useScrollTrigger({ threshold: 0.15 });

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
      // Reveal central line
      .add({
        targets: lineRef.current,
        height: ['0%', '100%'],
        opacity: [0, 1],
        duration: 1500,
        easing: 'easeInOutQuint'
      }, '-=600')
      // Staggered reveal events alternate sides
      .add({
        targets: '.journey-event',
        opacity: [0, 1],
        translateX: (el, i) => i % 2 === 0 ? [-100, 0] : [100, 0], // Alternate left/right
        scale: [0.8, 1],
        duration: 1200,
        delay: anime.stagger(200),
        easing: 'easeOutElastic(1, .6)'
      }, '-=1000');
    }
  }, [isTriggered]);

  // SCROLL-DRIVEN Glow Line (Active line glow saat scroll)
  useEffect(() => {
    const handleScroll = () => {
        if(!lineRef.current || !lineGlowRef.current) return;
        
        const rect = lineRef.current.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        
        // Optimization
        if(rect.top > window.innerHeight || rect.bottom < 0) return;

        // Hitung berapa persen timeline yang sudah melewati pusat viewport
        let progress = (viewportCenter - rect.top) / rect.height;
        progress = Math.max(0, Math.min(1, progress)); // Clamp 0 to 1

        lineGlowRef.current.style.height = `${progress * 100}%`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={triggerRef} id="journey" className="min-h-screen py-24 px-6 md:px-12 relative overflow-hiddenPerspective perspektif-container noise-overlay border-t border-white/5">
        
      <div ref={sectionRef} className="max-w-7xl mx-auto relative z-10 transform-style-3d pb-20">
        <div className="mb-24 text-center space-y-2 opacity-0 translateY-50 section-title max-w-7xl mx-auto">
          <div className="font-mono text-cyan-glow tracking-widest text-sm">_LOG // JOURNEY_</div>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-text-soft font-sans">
            Operational Timeline
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto pt-4 leading-relaxed font-light">
            Evolusi peningkatan skill dan penyelesaian misi operasional dari arsitek sistem.
          </p>
        </div>

        
        <div className="relative transform-style-3d min-h-[800px] flex justify-center">
            
            
            <div ref={lineRef} className="absolute top-0 bottom-0 left-[20px] md:left-1/2 md:-translate-x-1/2 w-1 md:w-[2px] bg-gray-800 opacity-0 transform-origin-top rounded-full glass-morphism overflow-hidden z-0">
                
                <div ref={lineGlowRef} className="absolute top-0 left-0 w-full h-0 bg-accent-primary shadow-neon-blue rounded-full transition-all duration-100 ease-linear z-10"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-cyan-glow/10 blur-sm opacity-50"></div>
            </div>

            
            <div className="relative w-full space-y-16 md:space-y-0 z-10 pt-10">
                {events.map((event, index) => {
                    const Icon = event.icon;
                    const isEven = index % 2 === 0;

                    return (
                        <div key={event.date} className={`journey-event opacity-0 flex flex-col md:flex-row items-center relative md:h-60 group`}
                        >
                            
                            <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full glass-morphism border-2 border-accent-primary flex items-center justify-center bg-bg-dark z-20 shadow-neon-blue noise-overlay group-hover:scale-110 transition-transform duration-300">
                                <Icon className="w-5 h-5 text-accent-secondary"/>
                            </div>

                            
                            <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-16 md:text-right md:justify-end' : 'md:pl-16 md:text-left md:justify-start' } flex items-center w-full`}>
                                <div className={`glass-morphism rounded-2xl p-6 border border-white/5 shadow-lg noise-overlay group-hover:border-cyan-glow/20 transition-all duration-500 w-full max-w-lg`}>
                                    <div className="font-mono text-xs text-accent-secondary mb-1 tracking-widest">{event.date}</div>
                                    <h3 className="text-xl font-bold tracking-tight text-white font-sans">{event.title}</h3>
                                    <p className="text-sm text-text-muted font-light mt-1 flex items-center gap-2 ${isEven ? 'md:justify-end' : ''}">
                                         {event.company}
                                    </p>
                                    
                                    
                                    <div className="absolute inset-0 bg-cyan-glow opacity-0 group-hover:opacity-[0.03] rounded-2xl blur-lg transition-opacity duration-500"></div>
                                </div>
                            </div>
                            
                            
                            <div className="hidden md:block md:w-1/2"></div>
                        </div>
                    );
                })}
                
                
                <div className="absolute -bottom-10 left-[20px] md:left-1/2 md:-translate-x-1/2 flex flex-col items-center z-10 journey-event opacity-0 translateY-50">
                    <div className="w-12 h-12 rounded-full glass-morphism border-2 border-dashed border-cyan-glow flex items-center justify-center noise-overlay shadow-neon-cyan bg-bg-dark">
                        <span className="font-mono text-xs text-cyan-glow">NOW</span>
                    </div>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
};

export default JourneySect;