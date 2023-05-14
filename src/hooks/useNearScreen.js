import { useState, useEffect, useRef } from 'react';

export function useNearScreen({ distance = '100px', externalRef, once = true } = {}) {
  const [isNear, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    const observeElement = externalRef ? externalRef.current : fromRef.current
    const onChange = (entries, observer) => {
      const element = entries[0];
      if (element.isIntersecting) {
        setShow(true);
        once && observer.disconnect();
      } else {
        !once && setShow(false)
      }
    }

    if ("undefined" !== typeof IntersectionObserver) {
      const observerSettings = { rootMargin: distance }
      const observer = new IntersectionObserver(onChange, observerSettings);
      if (observeElement) {
        observer.observe(observeElement);
      }
      return () => observer.disconnect();
    }
  }, [externalRef, distance, once])

  return { isNear, fromRef }
}