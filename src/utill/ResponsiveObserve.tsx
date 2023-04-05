import { useEffect, useContext } from 'react';
import AppContext from '@/context/AppContext';

const ResponsiveObserve = () => {
  const { asideisOpen, setAsideisOpen, mobileCheck, setMobileCheck } = useContext(AppContext);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 780) {
        setAsideisOpen(false);
        setMobileCheck(true);
      } else {
        setAsideisOpen(false);
        setMobileCheck(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileCheck]);

  return null;
}

export default ResponsiveObserve;