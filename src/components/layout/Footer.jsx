import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-manga-panel border-t border-manga-border pt-20 pb-10 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Section */}
        <div className="md:col-span-2">
          <div className="text-3xl font-semibold text-manga-accent tracking-tighter mb-6">Aditya Febrian<span className="text-manga-muted">.</span></div>
          <p className="text-manga-muted text-sm max-w-xs leading-relaxed italic mb-6">
            "Everything is connected, from the first line of code to the final visual panel."
          </p>
          <div className="font-jp text-manga-muted text-xs opacity-50">全ては繋がっている。</div>
        </div>
        
        {/* Navigation Section */}
        <div>
          <h4 className="text-xs font-mono text-manga-accent uppercase tracking-[0.3em] mb-8 border-b border-manga-border pb-2">Quick Navigation</h4>
          <ul className="space-y-4 text-xs text-manga-muted uppercase tracking-[0.2em]">
            <li><a href="#hero" className="hover:text-manga-accent transition-colors flex items-center gap-2"><span>/</span> Home</a></li>
            <li><a href="#archive" className="hover:text-manga-accent transition-colors flex items-center gap-2"><span>/</span> Archives</a></li>
            <li><a href="#github" className="hover:text-manga-accent transition-colors flex items-center gap-2"><span>/</span> Github Logs</a></li>
            <li><a href="#contact" className="hover:text-manga-accent transition-colors flex items-center gap-2"><span>/</span> Transmission</a></li>
          </ul>
        </div>

        {/* Status Section */}
        <div>
          <h4 className="text-xs font-mono text-manga-accent uppercase tracking-[0.3em] mb-8 border-b border-manga-border pb-2">System Status</h4>
          <ul className="space-y-4 text-xs text-manga-muted tracking-widest">
            <li className="flex justify-between items-center">
              <span>STATUS</span>
              <span className="text-green-500 font-bold">OPERATIONAL</span>
            </li>
            <li className="flex justify-between items-center">
              <span>AVAILABILITY</span>
              <span className="text-manga-accent">OPEN FOR WORK</span>
            </li>
            <li className="flex justify-between items-center">
              <span>LOCATION</span>
              <span className="text-manga-accent">BANJARBARU, ID</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-manga-border pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-mono text-[9px] text-manga-muted tracking-[0.5em] uppercase">
          © 2026 Aditya Febrian // THE END OF VOLUME 01.
        </div>
        <div className="flex gap-6 font-mono text-[9px] text-manga-muted uppercase tracking-widest">
          <a href="#" className="hover:text-manga-accent transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-manga-accent transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;