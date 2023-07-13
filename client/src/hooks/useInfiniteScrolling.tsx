import { useLayoutEffect, useRef, useState } from 'react';

export function useInfiniteScrolling<T extends HTMLElement>(amount: number) {
  const containerRef = useRef<T | null>(null);
  const [showingAmount, setShowingAmout] = useState(amount);

  useLayoutEffect(() => {
    if (!containerRef.current) {
      return;
    }

    let intersection: IntersectionObserver;

    const mutation = new MutationObserver((mutations) => {
      let newNode = false;
      for (const mutation of mutations) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          newNode = true;
          break;
        }
      }
      if (!containerRef.current || !newNode) return;

      const lastChild = Array.from(containerRef.current.children).slice(-1)[0];

      intersection = new IntersectionObserver((intersections) => {
        const lastChild = intersections[0];
        if (!lastChild.isIntersecting) {
          return;
        }

        setShowingAmout((old) => old + amount);
        intersection.unobserve(lastChild.target);
      });

      intersection.observe(lastChild);
    });

    mutation.observe(containerRef.current, {
      childList: true,
    });

    return () => {
      mutation.disconnect();
      intersection.disconnect();
    };
  }, [containerRef, amount]);

  return {
    containerRef: containerRef,
    showingAmount,
  };
}
