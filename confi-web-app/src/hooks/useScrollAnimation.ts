import { useState, useEffect, useRef } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('Section became visible:', entry.target);
          setIsVisible(true);
          // Once triggered, we can disconnect the observer
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px' // Trigger earlier for better UX
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return { ref, isVisible };
}; 