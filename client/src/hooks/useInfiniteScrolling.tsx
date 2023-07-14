import { useLayoutEffect, useRef, useState } from 'react';

export function useInfiniteScrolling<T extends HTMLElement>(amount: number) {
  const containerRef = useRef<T | null>(null);
  const [showingAmount, setShowingAmout] = useState(amount);
  const [lastElement, setLastElement] = useState<Element | null>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) {
      return;
    }
    console.count('mount');

    const intersection = new IntersectionObserver((intersections) => {
      const lastChild = intersections[0];
      if (!lastChild.isIntersecting) return;

      setShowingAmout((old) => old + amount);
      intersection.unobserve(lastChild.target);
    });
    if (containerRef.current.lastElementChild) {
      console.log(containerRef.current.lastElementChild);
      intersection.observe(containerRef.current.lastElementChild);
    }

    // const mutation = new MutationObserver((mutations) => {
    //   console.count('mutation');
    //   let newNode = false;
    //   for (const mutation of mutations) {
    //     if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
    //       newNode = true;
    //       break;
    //     }
    //   }
    //   if (!containerRef.current || !newNode) return;

    //   const lastChild = Array.from(containerRef.current.children).slice(-1)[0];

    //   const intersection = new IntersectionObserver((intersections) => {
    //     const lastChild = intersections[0];
    //     if (!lastChild.isIntersecting) {
    //       return;
    //     }

    //     setShowingAmout((old) => old + amount);
    //     intersection.unobserve(lastChild.target);
    //   });

    //   intersection.observe(lastChild);
    // });

    // mutation.observe(containerRef.current, {
    //   childList: true,
    // });

    return () => {
      console.count('unmount');
      // mutation.disconnect();
      intersection.disconnect();
    };
  }, [containerRef, amount]);

  return {
    containerRef: containerRef,
    showingAmount,
  };
}
