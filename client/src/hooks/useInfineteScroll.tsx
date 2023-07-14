import { MutableRefObject, useEffect, useRef, useState } from 'react';

export function useInfiniteScroll(
  containerRef: MutableRefObject<HTMLElement | null>,
  dependencies: any[],
  options?: IntersectionObserverInit,
) {
  const [page, setPage] = useState(1);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((currObservers) => {
      const lastChild = currObservers[0];
      if (!lastChild.isIntersecting) {
        return;
      }

      setPage((old) => old + 1);
      observer.current?.unobserve(lastChild.target);
    }, options ?? {});

    return () => {
      observer.current = null;
    };
  }, [observer, options]);

  useEffect(() => {
    const currObserver = observer.current;
    if (!currObserver || !containerRef.current) return;

    currObserver.disconnect();

    const lastChild = containerRef.current.lastElementChild;
    if (!lastChild) return;

    currObserver.observe(lastChild);

    return () => {
      currObserver.unobserve(lastChild);
    };
  }, [...dependencies, page, containerRef]);

  return {
    page,
  };
}
