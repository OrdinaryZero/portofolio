import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-12 flex justify-between items-center bg-manga-white/90 backdrop-blur-sm border-b-4 border-manga-black">
      <div className="font-display text-4xl tracking-wider text-manga-black flex items-center gap-2">
        Ordinaryfeb <span className="text-manga-crimson text-2xl">マ</span>
      </div>
      <div className="hidden md:flex items-center gap-8 font-display text-xl tracking-widest">
        {['CHAPTER 1', 'ORIGIN', 'ARCHIVES', 'CONTACT'].map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-manga-crimson hover:-translate-y-1 transition-transform relative group">
            {link}
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-manga-crimson transition-all group-hover:w-full"></span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;