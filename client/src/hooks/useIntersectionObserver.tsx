import { useLayoutEffect, useRef, useState } from 'react';

export function useIntersectionObserver<T extends HTMLElement>() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T | null>(null);

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    const options: IntersectionObserverInit = {
      rootMargin: '100px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (!entry.isIntersecting) {
          setIsVisible(false);
        }
      });
    }, options);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return {
    ref,
    isVisible,
  };
}
