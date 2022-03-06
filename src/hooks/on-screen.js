import { useRef, useEffect, useState } from 'react';

const useOnScreen = (options) => {
  const currentRef = useRef();
  const [visible, setVisible] = useState(false);
  const scrollCallback = (entries) => {
    const [entry] = entries;
    setVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(scrollCallback, options);
    const refCopy = { ...currentRef };
    observer.observe(refCopy.current);
    return () => {
      observer.unobserve(refCopy.current);
    };
  }, [currentRef, options]);
  return [currentRef, visible];
};

export default useOnScreen;
