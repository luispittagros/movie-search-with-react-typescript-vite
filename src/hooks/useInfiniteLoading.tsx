import { MutableRefObject, useEffect, useRef, useState } from 'react';

const useInfiniteLoading = (
  element: MutableRefObject<HTMLUListElement | null>,
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        setIsIntersecting(entries[0].isIntersecting);
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      },
    ),
  );

  const currentObserver = useRef(observer.current);
  const currentElement = useRef(element.current?.lastElementChild);

  useEffect(() => {
    if (!element?.current?.lastElementChild) return () => {};

    if (currentElement?.current !== element.current.lastElementChild) {
      currentObserver.current.disconnect();
      currentObserver.current.observe(element.current.lastElementChild);
      currentElement.current = element.current.lastElementChild;
    }

    currentObserver.current = observer.current;
  }, [element, element.current?.lastElementChild]);

  useEffect(() => {
    setLoadMore(isIntersecting);
  }, [isIntersecting]);

  return [loadMore];
};

export default useInfiniteLoading;
