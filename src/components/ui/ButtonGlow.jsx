import React from 'react';

const ButtonGlow = ({ children, icon: Icon, href = "#" }) => {
  return (
    <a 
      href={href}
      className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-300 ease-out rounded-lg overflow-hidden glass-morphism hover:border-cyan-glow/50 hover:shadow-neon-cyan"
    >
      
      <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-bg-dark via-accent-primary/20 to-bg-dark opacity-80 group-hover:opacity-100 transition-opacity"></span>
      
      
      <span className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-glow to-transparent opacity-50"></span>

      
      <span className="relative flex items-center gap-2 group-hover:text-cyan-glow transition-colors font-mono tracking-tight">
        {children}
        {Icon && <Icon className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>}
      </span>
      
      
      <span className="absolute inset-0 w-full h-full bg-cyan-glow rounded-lg blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
    </a>
  );
};

export default ButtonGlow;