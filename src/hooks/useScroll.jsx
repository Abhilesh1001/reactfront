
import { useState, useEffect } from 'react';

export const useScroll = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);
  const [userTopHeight, setUserTopHeight] = useState(0);

  const handleInfiniteScrolling = () => {
    setScrollHeight(document.documentElement.scrollHeight);
    setInnerHeight(window.innerHeight);
    setUserTopHeight(document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleInfiniteScrolling);
    return () => {
      window.removeEventListener('scroll', handleInfiniteScrolling);
    };
  }, []);

  return { scrollHeight, innerHeight, userTopHeight };
};
