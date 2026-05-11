import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { projectsData } from '../utils/dummyData';

const ProjectsSect = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo('.project-manga-card', 
      { scale: 0.9, opacity: 0, y: 50 },
      {
        scale: 1, opacity: 1, y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%'
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-manga-black text-manga-white clip-diagonal-reverse relative">
      <div className="max-w-7xl mx-auto pt-20 pb-10">
        
        <div className="flex justify-between items-end mb-16 border-b-4 border-manga-white pb-6">
          <h2 className="font-display text-6xl md:text-8xl text-manga-white">THE ARCHIVES</h2>
          <span className="font-jp text-3xl text-manga-crimson">プロジェクト</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <div key={index} className="project-manga-card manga-panel bg-manga-white text-manga-black group cursor-pointer !border-manga-white">
              
              {/* Manga Cover Image */}
              <div className="relative h-64 overflow-hidden border-b-4 border-manga-black">
                <div className="absolute top-2 left-2 bg-manga-crimson text-manga-white font-display text-xl px-3 py-1 z-10 border-2 border-manga-black shadow-manga-sm">
                  EP. 0{index + 1}
                </div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                {/* Ink Splash Overlay on Hover */}
                <div className="absolute inset-0 bg-manga-crimson/20 opacity-0 group-hover:opacity-100 mix-blend-multiply transition-opacity duration-500"></div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="font-jp text-manga-gray text-sm mb-1">{project.jpTitle}</div>
                <h3 className="font-display text-4xl mb-3">{project.title}</h3>
                <p className="font-sans font-medium text-sm leading-relaxed mb-6 h-16 line-clamp-3">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="font-display text-lg bg-manga-black text-manga-white px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSect;