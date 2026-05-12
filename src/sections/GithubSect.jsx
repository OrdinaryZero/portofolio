import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

// Data Bahasa dengan Icon SVG Native (Bebas dari block Adblock)
const languageStats = [
  {
    name: "Laravel", role: "Framework", percent: 85,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21.414l-8.5-8.5A2 2 0 013 11.5V5a2 2 0 012-2h6.5a2 2 0 011.414.586l8.5 8.5a2 2 0 010 2.828l-6.5 6.5a2 2 0 01-2.828 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01" /></svg>
  },
  {
    name: "PHP", role: "Backend", percent: 80,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
  },
  {
    name: "React", role: "Frontend", percent: 80,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="12" rx="10" ry="4" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" /></svg>
  },
  {
    name: "MySQL", role: "Database", percent: 75,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>
  },
  {
    name: "Python", role: "Scripting", percent: 65,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 17l6-6-6-6M12 19h8" /></svg>
  },
  {
    name: "Java", role: "OOP", percent: 60,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M18 8h1a4 4 0 0 1 0 8h-1" /><path strokeLinecap="round" strokeLinejoin="round" d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 1v3M10 1v3M14 1v3" /></svg>
  }
];

const GithubSect = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        
        // 1. Animasi Kartu Muncul Satu Per Satu
        anime({
          targets: '.log-reveal',
          translateY: [50, 0],
          opacity: [0, 1],
          delay: anime.stagger(100),
          easing: 'easeOutExpo',
          duration: 1000
        });

        // 2. Animasi Garis Progres Bar
        anime({
          targets: '.skill-progress-bar',
          width: (el) => el.getAttribute('data-width') + '%',
          delay: anime.stagger(100, { start: 400 }),
          duration: 1500,
          easing: 'easeOutQuart'
        });

        // 3. Animasi Counter Anti-NaN (Menggunakan state Virtual Object)
        const counters = document.querySelectorAll('.skill-percent-text');
        counters.forEach((counter, i) => {
          const target = parseInt(counter.getAttribute('data-target'));
          let obj = { val: 0 }; // Objek virtual agar anime.js tidak membaca isi innerHTML
          
          anime({
            targets: obj,
            val: target,
            round: 1, 
            delay: 400 + (i * 100), // Sinkron dengan animasi garis
            duration: 1500,
            easing: 'easeOutQuart',
            update: function() {
              counter.innerHTML = obj.val + '%';
            }
          });
        });
        
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
  id="github" 
  ref={sectionRef} 
  className="pt-10 pb-24 px-6 md:px-12 bg-manga-panel relative z-10"
>
      <div className="max-w-7xl mx-auto mt-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* KOLOM KIRI: Individual Language Cards */}
          <div className="flex flex-col">
            
            {/* Header Kiri */}
            <div className="flex justify-between items-end mb-6 border-b border-manga-border pb-4 opacity-0 log-reveal">
              <div>
                <h3 className="font-display text-xl md:text-2xl text-manga-accent uppercase tracking-widest">Tech Arsenal</h3>
                <p className="font-mono text-[10px] text-manga-muted mt-1 uppercase">Language & Tools</p>
              </div>
              <div className="font-mono text-[10px] text-manga-muted">SYS.STATS</div>
            </div>

            {/* Grid Kartu Individu */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {languageStats.map((stat, idx) => (
                <div key={idx} className="border border-manga-border bg-manga-bg p-4 relative group hover:bg-manga-text transition-colors duration-300 opacity-0 log-reveal flex flex-col justify-between">
                  
                  {/* Top Area: Logo & Persentase */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-8 h-8 text-manga-muted group-hover:text-manga-bg transition-colors duration-300">
                      {stat.icon}
                    </div>
                    <div className="skill-percent-text font-display text-lg font-bold text-manga-accent group-hover:text-manga-bg transition-colors" data-target={stat.percent}>
                      0%
                    </div>
                  </div>

                  {/* Bottom Area: Info & Progress Bar */}
                  <div>
                    <h4 className="font-bold font-sans text-sm tracking-widest uppercase text-manga-accent group-hover:text-manga-bg transition-colors">{stat.name}</h4>
                    <p className="font-mono text-[9px] text-manga-muted uppercase tracking-widest group-hover:text-manga-bg transition-colors">{stat.role}</p>
                    
                    {/* Progress Bar Container */}
                    <div className="mt-3 h-[2px] w-full bg-manga-border/50 relative overflow-hidden group-hover:bg-manga-bg/30">
                      <div 
                        className="skill-progress-bar absolute top-0 left-0 h-full bg-manga-accent group-hover:bg-manga-bg w-0 transition-colors"
                        data-width={stat.percent}
                      ></div>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>

          {/* KOLOM KANAN: GitHub Snake / Contribution Graph (Tetap dipertahankan) */}
          <div className="border border-manga-border p-6 md:p-8 opacity-0 log-reveal flex flex-col justify-center items-center relative bg-manga-bg shadow-xl h-full min-h-[300px]">
             <div className="absolute top-0 left-0 p-4 font-mono text-[10px] text-manga-muted">CORE_METRICS</div>
             
             <div className="w-full flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity manga-image-filter">
               <img 
                  src="https://raw.githubusercontent.com/OrdinaryZero/OrdinaryZero/output/github-contribution-grid-snake.svg" 
                  alt="GitHub Contribution" 
                  className="w-full h-auto object-contain"
               />
             </div>
             
             <p className="mt-6 font-mono text-[10px] text-manga-muted uppercase tracking-widest text-center">Contribution Activity Sequence</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default GithubSect;