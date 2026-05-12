import React, { useEffect, useState } from 'react';
import anime from 'animejs';

import myPhoto1 from '../../assets/foto1.jpg';
import myPhoto2 from '../../assets/foto2.jpg';
import myPhoto3 from '../../assets/foto3.jpg';



const cardsData = [
  { id: 1, src: myPhoto1, label: "VOL.01 // LAYER" },
  { id: 2, src: myPhoto2, label: "VOL.02 // ARCHIVE" },
  { id: 3, src: myPhoto3, label: "Aditya Febrian." }
];

// Konfigurasi 3 Titik Penyebaran (Slot)
// X dibesarkan jadi 100 & -100 agar sebarannya lebih lebar & kelihatan jelas
const SLOTS = [
  { x: -100, y: 30, r: -20, s: 0.9, z: 10 }, // Slot 0: Kiri Belakang
  { x: 100,  y: 30, r: 20,  s: 0.9, z: 20 }, // Slot 1: Kanan Belakang
  { x: 0,    y: 0,  r: -2,  s: 1.05, z: 30 } // Slot 2: Tengah Depan (Lebih besar)
];

const StoryboardPanels = () => {
  // Menyimpan urutan kartu. Awalnya [0, 1, 2] -> index 2 adalah kartu paling depan.
  const [slotOrder, setSlotOrder] = useState([0, 1, 2]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Animasi Awal: Membuka kartu seperti kipas/mawar
    slotOrder.forEach((cardIdx, slotIdx) => {
      const slot = SLOTS[slotIdx];
      anime({
        targets: `#card-wrapper-${cardIdx}`,
        opacity: [0, 1],
        translateX: [0, slot.x],
        translateY: [0, slot.y],
        rotate: [0, slot.r],
        scale: [0.5, slot.s],
        delay: 800 + (slotIdx * 200),
        duration: 1800,
        easing: 'easeOutElastic(1, .6)'
      });
    });
    // eslint-disable-next-line
  }, []);

  const handleShuffle = (clickedCardIdx) => {
    // Kunci animasi agar user tidak spam klik yang bikin error
    if (isAnimating) return;
    
    // Cek apakah kartu yg diklik sudah di depan (Slot ke-2)
    const currentSlotIndex = slotOrder.indexOf(clickedCardIdx);
    if (currentSlotIndex === 2) return; 

    setIsAnimating(true);

    const clickedTarget = `#card-wrapper-${clickedCardIdx}`;

    // 1. ANIMASI SHUFFLE OUT (Tarik kartu yang diklik ke atas duluan)
    anime({
      targets: clickedTarget,
      translateY: -250, // Naik tinggi ke atas
      rotate: 0,
      scale: 1.1,
      duration: 500,
      easing: 'easeOutQuint',
      complete: () => {
        
        // 2. Ubah urutan di React State agar Z-Index (posisi tumpukan) berubah
        const newOrder = slotOrder.filter(idx => idx !== clickedCardIdx);
        newOrder.push(clickedCardIdx); // Masukkan ke paling akhir (Jadi Paling Depan)
        setSlotOrder(newOrder);

        // 3. ANIMASI SHUFFLE IN (Pindahkan semua kartu ke Slot baru mereka)
        newOrder.forEach((cardIdx, slotIdx) => {
          const slot = SLOTS[slotIdx];
          
          anime({
            targets: `#card-wrapper-${cardIdx}`,
            translateX: slot.x,
            translateY: slot.y,
            rotate: slot.r,
            scale: slot.s,
            duration: 800,
            easing: 'easeOutElastic(1, .7)',
            complete: () => {
               // Buka kunci setelah kartu terakhir selesai turun
               if (slotIdx === 2) setIsAnimating(false); 
            }
          });
        });
      }
    });
  };

  return (
    // Wadah diperbesar (max-w-[280px]) agar kartu lebih kelihatan
    <div className="relative w-full max-w-[240px] md:max-w-[280px] aspect-[3/4] ml-auto mr-12 origin-bottom-right perspective-container z-20">
      
      {cardsData.map((card, index) => {
        // Cari tau kartu ini ada di slot mana sekarang untuk nentuin urutan Z-Index
        const currentSlot = slotOrder.indexOf(index);
        const zIndex = currentSlot !== -1 ? SLOTS[currentSlot].z : 0;

        return (
          <div 
            key={card.id}
            id={`card-wrapper-${index}`}
            className="absolute inset-0 w-full h-full opacity-0 will-change-transform cursor-pointer"
            style={{ zIndex: zIndex }}
            onClick={() => handleShuffle(index)}
          >
            {/* Inner Card untuk efek Hover (Hover sekarang tidak merusak Anime.js) */}
            <div className="w-full h-full bg-manga-panel border border-manga-border p-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative group origin-bottom transition-all duration-500 ease-out hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(255,255,255,0.15)]">
              
              <div className="w-full h-full relative overflow-hidden bg-manga-bg">
                {/* EFEK WARNA: Awalnya Dark Grayscale -> Hover Jadi Original Color */}
                <img 
                  src={card.src} 
                  alt={card.label} 
                  className="w-full h-full object-cover grayscale contrast-[1.2] brightness-[0.6] group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-700 ease-in-out pointer-events-none"
                />
                {/* Gradient hitam pudarnya juga ngikut ilang pas di hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-manga-panel/90 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"></div>
              </div>
              
              <div className="absolute bottom-4 left-4 z-10 transition-transform duration-300 group-hover:translate-x-2 pointer-events-none">
                <p className="text-[10px] font-mono tracking-widest uppercase text-manga-accent font-bold drop-shadow-md">
                  {card.label}
                </p>
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StoryboardPanels;