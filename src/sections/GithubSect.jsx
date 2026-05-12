import React from 'react';

const GithubSect = () => {
  return (
    <section id="github" className="pb-24 pt-12 px-6 md:px-12 bg-manga-panel relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
              <h2 className="text-3xl font-light text-manga-accent tracking-tighter">Developer_Logs</h2>
              <p className="text-manga-muted text-xs uppercase tracking-widest mt-1">// Contribution Grid & Stats</p>
           </div>
           <div className="flex gap-2 mt-4 md:mt-0">
              {['React', 'Laravel', 'Tailwind', 'MySQL'].map(tag => (
                <span key={tag} className="text-[9px] font-mono border border-manga-border px-2 py-1 text-manga-muted uppercase">{tag}</span>
              ))}
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* GITHUB SNAKE AREA */}
          <div className="lg:col-span-2 border border-manga-border bg-manga-bg p-6 flex flex-col items-center justify-center min-h-[300px]">
            <div className="w-full text-left font-mono text-[10px] text-manga-muted mb-4 tracking-widest">SNAKE_CONTRIBUTION.EXE</div>
            {/* Note: Snake SVG ini butuh Github Action di repo kamu untuk generate otomatis */}
            <img 
              src="https://raw.githubusercontent.com/OrdinaryZero/OrdinaryZero/output/github-contribution-grid-snake.svg" 
              alt="GitHub Snake" 
              className="w-full manga-image-filter"
              onError={(e) => { e.target.src = "https://ghchart.rshah.org/111111/OrdinaryZero"; }}
            />
          </div>
          
          {/* GITHUB STATS CARD */}
          <div className="border border-manga-border bg-manga-bg p-4 flex flex-col justify-center items-center">
            <div className="w-full text-left font-mono text-[10px] text-manga-muted mb-4 tracking-widest">CORE_METRICS</div>
            <img 
              src="https://github-readme-stats.vercel.app/api?username=OrdinaryZero&show_icons=true&theme=transparent&text_color=737373&icon_color=ffffff&hide_border=true" 
              alt="GitHub Stats" 
              className="w-full manga-image-filter" 
            />
          </div>
        </div>

        {/* TOP LANGUAGES */}
        <div className="mt-6 border border-manga-border bg-manga-bg p-4">
           <img 
             src="https://github-readme-stats.vercel.app/api/top-langs/?username=OrdinaryZero&layout=compact&theme=transparent&text_color=737373&hide_border=true" 
             alt="Top Languages" 
             className="w-full max-w-md mx-auto manga-image-filter"
           />
        </div>
      </div>
    </section>
  );
};

export default GithubSect;