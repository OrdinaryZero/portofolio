import React from 'react';

const ContactSect = () => {
  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 font-jp text-[12rem] text-manga-gray opacity-10 font-black whitespace-nowrap pointer-events-none">
        ドン!! (DON!!)
      </div>

      <div className="max-w-4xl mx-auto manga-panel p-8 md:p-16 relative z-10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-manga-crimson clip-diagonal"></div>
        
        <h2 className="font-display text-6xl md:text-8xl mb-6">NEXT CHAPTER?</h2>
        <p className="font-sans text-xl font-bold mb-10 border-l-4 border-manga-crimson pl-4">
          Siap memulai arc cerita baru? Kirimkan pesan melalui kotak dialog di bawah.
        </p>

        <form className="space-y-6">
          <div className="manga-panel p-2 shadow-none border-2">
            <input type="text" placeholder="YOUR NAME // 名前" className="w-full bg-transparent p-3 font-display text-2xl outline-none placeholder:text-manga-gray" />
          </div>
          <div className="manga-panel p-2 shadow-none border-2">
            <input type="email" placeholder="YOUR EMAIL // メール" className="w-full bg-transparent p-3 font-display text-2xl outline-none placeholder:text-manga-gray" />
          </div>
          <div className="manga-panel p-2 shadow-none border-2">
            <textarea rows="4" placeholder="THE MESSAGE // メッセージ" className="w-full bg-transparent p-3 font-display text-2xl outline-none resize-none placeholder:text-manga-gray"></textarea>
          </div>
          
          <button type="button" className="manga-panel w-full bg-manga-crimson text-manga-white font-display text-4xl py-6 hover:bg-manga-black hover:shadow-manga-hover transition-all duration-300">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSect;