import { useEffect, useRef, useState } from 'react';

export const useScrollTrigger = (options = {}) => {
  const ref = useRef(null);
  const [isTriggered, setIsTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isTriggered) {
        setIsTriggered(true);
        if (options.onEnter) options.onEnter(entry.target);
        if (options.once !== false) observer.unobserve(entry.target);
      } else if (!entry.isIntersecting && isTriggered && options.triggerOnLeave) {
         // Opsional: reset jika keluar viewport (tidak disarankan untuk cinematic feel)
         // setIsTriggered(false);
      }
    }, {
      threshold: options.threshold || 0.1, // 10% elemen terlihat
      rootMargin: options.rootMargin || "0px 0px -50px 0px", // Sedikit offset bawah
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isTriggered, options]);

  return [ref, isTriggered];
};