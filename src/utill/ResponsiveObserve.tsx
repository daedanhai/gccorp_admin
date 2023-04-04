import { useEffect, useContext } from 'react';
import AppContext from '@/context/AppContext';

const ResponsiveObserve = () => {
  const { mobileCheck, setMobileCheck } = useContext(AppContext);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 780) {
        setMobileCheck(true);
        console.log(mobileCheck)
      } else {
        setMobileCheck(false);
        console.log(mobileCheck)
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