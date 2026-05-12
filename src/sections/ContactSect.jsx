import React from 'react';

const ContactSect = () => {
  return (
    <section id="contact" className="pb-32 pt-12 px-6 md:px-12 relative z-10 overflow-hidden bg-manga-bg">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-jp text-[15rem] md:text-[25rem] text-manga-muted opacity-5 select-none pointer-events-none whitespace-nowrap">
        連絡
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-manga-accent mb-4">Let's Create Together</h2>
          <p className="text-manga-muted">Punya ide menarik? Mari tuangkan dalam kode dan desain.</p>
        </div>
        
        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input type="text" placeholder="Nama / Name" className="w-full bg-transparent border-b border-manga-border py-3 px-2 outline-none focus:border-manga-accent transition-colors font-sans text-manga-text placeholder:text-manga-muted" />
            <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-manga-border py-3 px-2 outline-none focus:border-manga-accent transition-colors font-sans text-manga-text placeholder:text-manga-muted" />
          </div>
          <textarea rows="4" placeholder="Pesan / Message" className="w-full bg-transparent border-b border-manga-border py-3 px-2 outline-none focus:border-manga-accent transition-colors resize-none font-sans text-manga-text placeholder:text-manga-muted"></textarea>
          
          <div className="text-center pt-6">
            <button type="button" className="inline-block border border-manga-border px-12 py-4 hover:bg-manga-text hover:text-manga-bg transition-all duration-500 tracking-widest text-sm uppercase">
              Kirim Pesan
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSect;