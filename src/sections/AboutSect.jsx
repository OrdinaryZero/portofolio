import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AboutSect = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const panels = gsap.utils.toArray('.comic-panel');
    
    panels.forEach((panel, i) => {
      gsap.fromTo(panel, 
        { y: 100, opacity: 0, rotation: i % 2 === 0 ? -5 : 5 },
        {
          y: 0, opacity: 1, rotation: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: panel,
            start: 'top 85%',
          }
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 relative">
      <div className="absolute right-10 top-0 font-jp text-8xl text-manga-crimson opacity-10 select-none">起源</div>
      
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-6xl md:text-8xl mb-12 border-b-8 border-manga-black pb-4 inline-block">THE ORIGIN STORY</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Panel 1 */}
          <div className="comic-panel manga-panel p-8 md:col-span-2 flex flex-col justify-center">
            <h3 className="font-display text-4xl mb-4 bg-manga-black text-manga-white inline-block px-4 py-2">01. PHILOSOPHY</h3>
            <p className="text-xl font-medium leading-relaxed">
              Teknologi bukan sekadar baris kode, ia adalah kanvas. Spesialisasi saya terletak pada ekosistem <span className="text-manga-crimson font-black">Laravel & React</span>, di mana logika *backend* yang solid bertemu dengan antarmuka yang ekspresif.
            </p>
          </div>
          
          {/* Panel 2 */}
          <div className="comic-panel manga-panel p-8 flex flex-col justify-between bg-manga-black text-manga-white">
            <h3 className="font-display text-4xl text-manga-crimson">02. STATUS</h3>
            <ul className="space-y-4 font-mono mt-6 text-lg">
              <li className="border-b border-manga-gray/30 pb-2">&gt; LOCATION: Banjarbaru</li>
              <li className="border-b border-manga-gray/30 pb-2">&gt; GUILD: UIN Antasari</li>
              <li className="border-b border-manga-gray/30 pb-2">&gt; CLASS: IT Student</li>
            </ul>
          </div>

          {/* Panel 3 */}
          <div className="comic-panel manga-panel md:col-span-3 h-40 flex items-center justify-center halftone-bg group cursor-pointer hover:bg-manga-crimson transition-colors duration-500">
            <h3 className="font-display text-5xl md:text-7xl group-hover:text-manga-white transition-colors mix-blend-difference">SCROLL TO CONTINUE ▼</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSect;