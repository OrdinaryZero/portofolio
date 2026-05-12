import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import TiltedCard from '../components/ui/TiltedCard';

// ===============================
// JAPANESE TERMINAL BACKGROUND
// ===============================
const JapaneseTerminalBg = () => {
  const chars =
    "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789";

  const generateText = () =>
    Array.from({ length: 1000 }, () =>
      chars[Math.floor(Math.random() * chars.length)]
    ).join('');

  return (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-[0.03] pointer-events-none select-none">
      <div
        className="w-full h-[200%] font-mono text-[10px] text-manga-accent tracking-[0.5em] leading-tight break-all"
        style={{
          writingMode: 'vertical-rl',
          textOrientation: 'upright',
        }}
      >
        {generateText()} {generateText()} {generateText()}
      </div>
    </div>
  );
};

// ===============================
// ARCHIVE DATA
// ===============================
const archiveData = [
  {
    title: "SiPinjam",
    desc: "Resource Management",
    span: "md:col-span-5",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&grayscale=1"
  },
  {
    title: "Saintek-App",
    desc: "Database Utility",
    span: "md:col-span-7",
    img: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=800&grayscale=1"
  },
  {
    title: "Aspirasi Web",
    desc: "Interactive Dashboard",
    span: "md:col-span-6",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&grayscale=1"
  },
  {
    title: "Project Zero",
    desc: "Design Exploration",
    span: "md:col-span-6",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&grayscale=1"
  },
];

// ===============================
// ARCHIVE SECTION
// ===============================
const ArchiveSect = () => {
  const sectionRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    // Timeline animation
    tlRef.current = anime.timeline({
      autoplay: false,
      duration: 3000,
      easing: 'linear',
    });

    tlRef.current.add({
      targets: '.manga-card-reveal',
      translateY: [250, 0],
      opacity: [0, 1],
      rotateX: [20, 0],
      scale: [0.9, 1],
      delay: anime.stagger(600),
      duration: 1200,
      easing: 'easeOutQuart',
    });

    // Scroll sync animation
    let rafId;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const start = window.scrollY + rect.top;
      const distance = rect.height - window.innerHeight;

      let progress = (window.scrollY - start) / distance;
      progress = Math.max(0, Math.min(1, progress));

      if (tlRef.current) {
        tlRef.current.seek(tlRef.current.duration * progress);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      id="archive"
      ref={sectionRef}
      className="h-[300vh] bg-manga-bg relative z-10"
    >
      {/* BACKGROUND */}
      <JapaneseTerminalBg />

      {/* STICKY CONTENT */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden px-6 md:px-12">

        {/* HEADER */}
        <div className="max-w-7xl mx-auto w-full mb-8 relative z-10">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-manga-accent tracking-tight">
                The Archives
              </h2>

              <p className="text-manga-muted mt-2 text-sm tracking-widest uppercase">
                Decrypted Files
              </p>
            </div>

            <div className="font-jp text-4xl text-manga-border opacity-50 hidden md:block">
              作品集
            </div>
          </div>
        </div>

        {/* PROJECT GRID */}
        <div className="max-w-7xl mx-auto w-full h-full max-h-[75vh] flex items-center relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 w-full">
            {archiveData.map((item, i) => (
              <div
                key={i}
                className={`manga-card-reveal opacity-0 ${item.span}`}
              >
                <TiltedCard className="h-full">
                  <div className="group bg-manga-panel border border-manga-border p-3 transition-all duration-500 h-full flex flex-col">

                    {/* IMAGE */}
                    <div
                      className="aspect-[16/8] bg-manga-bg mb-2 overflow-hidden relative border border-manga-border"
                      style={{ transform: 'translateZ(30px)' }}
                    >
                      <img
                        src={item.img}
                        className="w-full h-full object-cover manga-image-filter group-hover:scale-105 transition-transform duration-700"
                        alt="work"
                      />

                      <div className="absolute top-2 left-2 bg-manga-accent text-manga-bg px-2 py-1 text-[9px] font-mono shadow-sm">
                        FILE_0{i + 1}
                      </div>
                    </div>

                    {/* TEXT */}
                    <div
                      style={{ transform: 'translateZ(20px)' }}
                      className="mt-auto"
                    >
                      <h3 className="text-base md:text-lg text-manga-accent font-display leading-tight">
                        {item.title}
                      </h3>

                      <p className="text-[10px] md:text-xs text-manga-muted font-sans mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </TiltedCard>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ArchiveSect;