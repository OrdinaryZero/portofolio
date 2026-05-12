import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out ${hidden ? '-translate-y-full' : 'translate-y-0'} ${scrolled ? 'bg-manga-bg/80 backdrop-blur-md border-b border-manga-border py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="font-sans text-lg text-manga-accent tracking-widest cursor-pointer" onClick={() => scrollTo('hero')}>
          Ordinaryfeb<span className="text-manga-muted">.</span>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8 font-sans text-xs text-manga-muted uppercase tracking-widest">
            {['hero', 'archive', 'github', 'contact'].map((item) => (
              <button key={item} onClick={() => scrollTo(item)} className="hover:text-manga-accent transition-colors duration-300">
                {item}
              </button>
            ))}
          </div>

          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme} 
            className="p-2 border border-manga-border rounded-full hover:bg-manga-text hover:text-manga-bg transition-colors"
          >
            {isLightMode ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;