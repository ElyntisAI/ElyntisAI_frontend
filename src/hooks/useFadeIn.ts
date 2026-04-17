import { useEffect, useRef } from 'react';

export const useFadeIn = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const el = ref.current;
    if (el) {
      const selectors = '.fade-up, .fade-in-left, .fade-in-right, .scale-up';
      const children = el.querySelectorAll(selectors);
      children.forEach((child) => observer.observe(child));
      
      // Also observe the element itself if it has an animation class
      const hasAnimation = selectors.split(', ').some(s => el.matches(s));
      if (hasAnimation) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
};
