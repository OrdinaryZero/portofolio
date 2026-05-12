import React, { useState, useEffect } from 'react';

const Navbar = ({ isLightMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      setHidden(currentScrollY > lastScrollY && currentScrollY > 100);
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // Default opacity-0 sangat penting di sini untuk mencegah Double Load Flash
    <nav className={`navbar-main fixed top-0 w-full z-50 py-6 transition-all duration-500 ease-out opacity-0 translate-y-[-20px] ${hidden ? '-translate-y-full' : 'translate-y-0'} ${scrolled ? 'bg-manga-bg/50 backdrop-blur-md border-b border-manga-border' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="font-display text-xl text-manga-accent font-bold tracking-widest cursor-pointer" onClick={() => scrollTo('hero')}>
          Aditya Febrian<span className="text-manga-muted">.</span>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8 font-mono text-xs text-manga-muted uppercase tracking-widest">
            {['hero', 'archive', 'github', 'contact'].map((item) => (
              <button key={item} onClick={() => scrollTo(item)} className="glitch-hover hover:text-manga-accent transition-colors duration-300" data-text={item}>
                {item}
              </button>
            ))}
          </div>

          <button onClick={toggleTheme} className="p-2 border border-manga-border rounded-full hover:bg-manga-text hover:text-manga-bg transition-colors">
            {isLightMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;