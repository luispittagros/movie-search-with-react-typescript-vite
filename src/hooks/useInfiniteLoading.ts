import { MutableRefObject, useEffect, useRef, useState } from 'react';

const useInfiniteLoading = <T extends Element>(): [
  boolean,
  MutableRefObject<T | null>,
] => {
  const element = useRef<T | null>(null);
  const [loadMore, setLoadMore] = useState(false);

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        setLoadMore(entries[0].isIntersecting);
      },
      {
        rootMargin: '300px',
        threshold: 0.1,
      },
    ),
  );

  const currentObserver = useRef(observer.current);
  const currentElement = useRef(element.current?.lastElementChild);

  useEffect(() => {
    if (!element.current?.lastElementChild) return;

    if (currentElement?.current !== element.current.lastElementChild) {
      currentObserver.current.disconnect();
      currentObserver.current.observe(element.current.lastElementChild);
      currentElement.current = element.current.lastElementChild;
    }

    currentObserver.current = observer.current;
  }, [element.current?.lastElementChild]);

  return [loadMore, element];
};

export default useInfiniteLoading;
