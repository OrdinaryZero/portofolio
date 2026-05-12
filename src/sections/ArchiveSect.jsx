import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import TiltedCard from '../components/ui/TiltedCard';

const archiveData = [
  { title: "SiPinjam", desc: "Resource Management", span: "md:col-span-4" },
  { title: "Saintek-App", desc: "Database Utility", span: "md:col-span-8" },
  { title: "Aspirasi Web", desc: "Interactive Dashboard", span: "md:col-span-7" },
  { title: "Project Zero", desc: "Design Exploration", span: "md:col-span-5" },
];

const ArchiveSect = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        anime({
          targets: '.manga-card-wrapper',
          translateY: [100, 0],
          opacity: [0, 1],
          delay: anime.stagger(200),
          easing: 'easeOutExpo'
        });
      }
    }, { threshold: 0.1 });
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="archive" ref={sectionRef} className="pb-32 pt-12 px-6 md:px-12 bg-manga-bg relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mb-16 text-manga-accent">The Archives</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {archiveData.map((item, i) => (
            <div key={i} className={`manga-card-wrapper opacity-0 ${item.span}`}>
              <TiltedCard className="h-full">
                <div className="group bg-manga-panel border border-manga-border p-4 transition-all duration-500 h-full">
                  <div className="aspect-video bg-manga-bg mb-4 overflow-hidden relative border border-manga-border" style={{ transform: 'translateZ(30px)' }}> 
                    <img src={`https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&grayscale=1`} className="w-full h-full object-cover manga-image-filter group-hover:scale-105 transition-transform duration-700" alt="work" />
                    <div className="absolute top-2 left-2 bg-manga-accent text-manga-bg px-2 py-1 text-[10px] font-mono shadow-sm">EP_0{i+1}</div>
                  </div>
                  <div style={{ transform: 'translateZ(20px)' }}> 
                    <h3 className="text-xl text-manga-accent font-display">{item.title}</h3>
                    <p className="text-sm text-manga-muted font-sans mt-2">{item.desc}</p>
                  </div>
                </div>
              </TiltedCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchiveSect;