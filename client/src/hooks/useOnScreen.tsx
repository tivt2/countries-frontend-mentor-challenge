import { MutableRefObject, useEffect, useRef, useState } from 'react';

export function useOnScreen<T extends HTMLElement>(
  itemRef: MutableRefObject<T | null>,
  options?: IntersectionObserverInit,
) {
  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {
    if (!itemRef.current) return;

    const observer = new IntersectionObserver((currObservers) => {
      const child = currObservers[0];
      if (child.isIntersecting) {
        setOnScreen(true);
      } else if (!child.isIntersecting) {
        setOnScreen(false);
      }
    }, options ?? {});

    observer.observe(itemRef.current);

    return () => {
      observer.disconnect();
    };
  }, [options, itemRef]);

  return {
    onScreen,
  };
}
